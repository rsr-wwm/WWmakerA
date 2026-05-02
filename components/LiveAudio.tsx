import React, { useEffect, useState, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { GeminiModel } from '../types';

export const LiveAudio: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [status, setStatus] = useState("Ready to connect");
    const [volume, setVolume] = useState(0);

    // Refs for audio context and processing
    const inputContextRef = useRef<AudioContext | null>(null);
    const outputContextRef = useRef<AudioContext | null>(null);
    const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
    const processorRef = useRef<ScriptProcessorNode | null>(null);
    const sessionRef = useRef<any>(null); // To store the session object
    const nextStartTimeRef = useRef<number>(0);
    const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

    // Clean up function
    const cleanup = () => {
        if (processorRef.current) {
            processorRef.current.disconnect();
            processorRef.current.onaudioprocess = null;
        }
        if (inputSourceRef.current) {
            inputSourceRef.current.disconnect();
        }
        if (inputContextRef.current) {
            inputContextRef.current.close();
        }
        if (outputContextRef.current) {
            outputContextRef.current.close();
        }
        // Stop all playing sources
        sourcesRef.current.forEach(source => source.stop());
        sourcesRef.current.clear();
        
        sessionRef.current = null;
        setIsActive(false);
        setStatus("Disconnected");
        setVolume(0);
    };

    const startSession = async () => {
        try {
            setStatus("Connecting...");
            const apiKey = process.env.API_KEY;
            if (!apiKey) throw new Error("No API Key");

            const ai = new GoogleGenAI({ apiKey });
            
            // Audio Contexts
            inputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
            outputContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Connect to Live API
            const sessionPromise = ai.live.connect({
                model: GeminiModel.LIVE_2_5,
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: {
                        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } },
                    },
                    systemInstruction: 'You are a friendly AI assistant for WebWorldMaker.',
                },
                callbacks: {
                    onopen: () => {
                        setStatus("Connected! Speak now.");
                        setIsActive(true);
                        
                        // Setup Input Stream
                        if (!inputContextRef.current) return;
                        inputSourceRef.current = inputContextRef.current.createMediaStreamSource(stream);
                        processorRef.current = inputContextRef.current.createScriptProcessor(4096, 1, 1);
                        
                        processorRef.current.onaudioprocess = (e) => {
                            const inputData = e.inputBuffer.getChannelData(0);
                            
                            // Simple volume visualization
                            let sum = 0;
                            for (let i = 0; i < inputData.length; i++) sum += inputData[i] * inputData[i];
                            setVolume(Math.sqrt(sum / inputData.length) * 100);

                            const pcmBlob = createBlob(inputData);
                            sessionPromise.then(session => {
                                session.sendRealtimeInput({ media: pcmBlob });
                            });
                        };

                        inputSourceRef.current.connect(processorRef.current);
                        processorRef.current.connect(inputContextRef.current.destination);
                    },
                    onmessage: async (message: LiveServerMessage) => {
                         const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
                         if (base64Audio && outputContextRef.current) {
                             const ctx = outputContextRef.current;
                             // Reset time if fell behind
                             nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                             
                             const audioBuffer = await decodeAudioData(
                                 decode(base64Audio),
                                 ctx,
                                 24000,
                                 1
                             );
                             
                             const source = ctx.createBufferSource();
                             source.buffer = audioBuffer;
                             source.connect(ctx.destination);
                             source.addEventListener('ended', () => {
                                 sourcesRef.current.delete(source);
                             });
                             
                             source.start(nextStartTimeRef.current);
                             nextStartTimeRef.current += audioBuffer.duration;
                             sourcesRef.current.add(source);
                         }
                         
                         if (message.serverContent?.interrupted) {
                             sourcesRef.current.forEach(s => s.stop());
                             sourcesRef.current.clear();
                             nextStartTimeRef.current = 0;
                         }
                    },
                    onclose: () => {
                        setStatus("Session Closed");
                        cleanup();
                    },
                    onerror: (e) => {
                        console.error(e);
                        setStatus("Error occurred");
                        cleanup();
                    }
                }
            });

        } catch (error) {
            console.error(error);
            setStatus("Failed to connect");
            cleanup();
        }
    };

    // Helpers
    function createBlob(data: Float32Array): any {
        const l = data.length;
        const int16 = new Int16Array(l);
        for (let i = 0; i < l; i++) {
            int16[i] = data[i] * 32768;
        }
        // Manual Base64 encode for simple Uint8Array
        let binary = '';
        const bytes = new Uint8Array(int16.buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const b64 = btoa(binary);
        
        return {
            data: b64,
            mimeType: 'audio/pcm;rate=16000'
        };
    }

    function decode(base64: string) {
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }

    async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) {
        const dataInt16 = new Int16Array(data.buffer);
        const frameCount = dataInt16.length / numChannels;
        const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
        
        for (let channel = 0; channel < numChannels; channel++) {
            const channelData = buffer.getChannelData(channel);
            for (let i = 0; i < frameCount; i++) {
                channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
            }
        }
        return buffer;
    }

    return (
        <div className="bg-slate-900 rounded-xl p-6 text-white text-center shadow-lg border border-slate-700">
            <h3 className="text-xl font-bold mb-4 flex justify-center items-center gap-2">
                <span className="text-2xl">🎙️</span> Gemini Live Audio
            </h3>
            
            <div className="mb-6 h-16 flex items-center justify-center">
                {isActive ? (
                    <div className="flex items-end gap-1 h-10">
                        {[...Array(5)].map((_, i) => (
                            <div 
                                key={i}
                                className="w-3 bg-green-500 rounded-full transition-all duration-75"
                                style={{ 
                                    height: `${Math.max(10, Math.min(100, volume * (Math.random() + 0.5)))}%` 
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-slate-500">Microphone Off</div>
                )}
            </div>
            
            <div className="mb-4 text-sm font-mono text-indigo-300">
                Status: {status}
            </div>

            {!isActive ? (
                <button 
                    onClick={startSession}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-green-500/30"
                >
                    Start Conversation
                </button>
            ) : (
                <button 
                    onClick={cleanup}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all"
                >
                    End Session
                </button>
            )}
        </div>
    );
};
