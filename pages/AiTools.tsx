
import React, { useState, useRef } from 'react';
import { 
    generateProImage, 
    generateVideo, 
    askMaps, 
    analyzeSeoKeywords, 
    analyzeVisual, 
    askWithThinking, 
    fastAiResponse,
    transcribeAudio, 
    generateSpeech
} from '../services/geminiService';
import { LiveAudio } from '../components/LiveAudio';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const AiTools: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'create' | 'analyze' | 'grounding' | 'voice' | 'think' | 'learn'>('create');

    // State for Video/Image
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16' | '1:1'>('16:9');
    const [imgSize, setImgSize] = useState<'1K' | '2K' | '4K'>('1K');
    const [mediaResult, setMediaResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // State for Analysis
    const [analysisPrompt, setAnalysisPrompt] = useState('');
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [fileData, setFileData] = useState<{data: string, mime: string} | null>(null);
    const [analysisResult, setAnalysisResult] = useState('');

    // State for Grounding
    const [groundingQuery, setGroundingQuery] = useState('');
    const [groundingResult, setGroundingResult] = useState<{text: string, chunks?: any} | null>(null);
    const [groundingMode, setGroundingMode] = useState<'maps' | 'search'>('search');

    // State for Thinking
    const [thinkPrompt, setThinkPrompt] = useState('');
    const [thinkResult, setThinkResult] = useState('');

    // State for TTS
    const [ttsText, setTtsText] = useState('');

    // -- Handlers --

    const handleGenerate = async (type: 'image' | 'video') => {
        if (!prompt) return;
        setLoading(true);
        setError('');
        setMediaResult(null);

        try {
            if (type === 'image') {
                const ar = aspectRatio === '9:16' ? '9:16' : aspectRatio === '1:1' ? '1:1' : '16:9';
                const res = await generateProImage(prompt, imgSize, ar);
                setMediaResult(res);
            } else {
                if (window.aistudio && await window.aistudio.hasSelectedApiKey()) {
                     const ar = aspectRatio === '9:16' ? '9:16' : '16:9';
                     const res = await generateVideo(prompt, ar);
                     setMediaResult(res);
                } else if (window.aistudio) {
                     await window.aistudio.openSelectKey();
                     setError("Please select a paid API key for Video Generation.");
                } else {
                     const ar = aspectRatio === '9:16' ? '9:16' : '16:9';
                     const res = await generateVideo(prompt, ar);
                     setMediaResult(res);
                }
            }
        } catch (e) {
            setError("Generation failed. Check API limits.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (evt) => {
                const result = evt.target?.result as string;
                setFilePreview(result);
                const base64 = result.split(',')[1];
                setFileData({ data: base64, mime: file.type });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAnalysis = async () => {
        if (!fileData) return;
        setLoading(true);
        let res = "";
        if (fileData.mime.startsWith('audio')) {
            res = await transcribeAudio(fileData.data, fileData.mime);
        } else {
            res = await analyzeVisual(analysisPrompt || "Describe this.", fileData.data, fileData.mime);
        }
        setAnalysisResult(res);
        setLoading(false);
    };

    const handleGrounding = async () => {
        if (!groundingQuery) return;
        setLoading(true);
        if (groundingMode === 'maps') {
            try {
                const res = await askMaps(groundingQuery);
                setGroundingResult(res);
            } catch { setError("Maps query failed"); }
        } else {
            try {
                const res = await analyzeSeoKeywords(groundingQuery);
                setGroundingResult({ 
                    text: `Strategy: ${res.strategy}\n\nKeywords: ${res.keywords.join(', ')}`, 
                    chunks: res.sources 
                });
            } catch { setError("Search query failed"); }
        }
        setLoading(false);
    };

    const handleThinking = async () => {
        if (!thinkPrompt) return;
        setLoading(true);
        const res = await askWithThinking(thinkPrompt);
        setThinkResult(res);
        setLoading(false);
    };
    
    const handleTTS = async () => {
        if (!ttsText) return;
        setLoading(true);
        const buffer = await generateSpeech(ttsText);
        if (buffer) {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const src = ctx.createBufferSource();
            const audioB = ctx.createBuffer(1, buffer.byteLength / 2, 24000);
            const channelData = audioB.getChannelData(0);
            const dataView = new DataView(buffer);
            for(let i=0; i < buffer.byteLength / 2; i++) {
                 channelData[i] = dataView.getInt16(i * 2, true) / 32768;
            }
            src.buffer = audioB;
            src.connect(ctx.destination);
            src.start();
        }
        setLoading(false);
    }

    // AI Tips Content
    const aiTips = [
        {
            title: "Talk Like a Human",
            icon: "🗣️",
            desc: "Don't speak code. Talk to Gemini like a smart friend. Instead of 'Execute Order 66', try 'Can you help me plan a surprise party?'"
        },
        {
            title: "Give It a Role",
            icon: "🎭",
            desc: "Tell the AI who to be. 'Act as a strict teacher' or 'Act as a funny comedian'. It changes the whole vibe!"
        },
        {
            title: "Step-by-Step",
            icon: "👣",
            desc: "If you have a big problem, ask the AI to 'Think step by step'. It makes fewer mistakes, just like showing your work in math class."
        },
        {
            title: "Show, Don't Just Tell",
            icon: "👀",
            desc: "Upload a picture! Gemini has eyes. Show it a picture of your fridge ingredients and ask for a recipe."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-12">
            <SEO 
                title="Gemini AI Suite - Create, Analyze & Innovate" 
                description="Experiment with Google Gemini models. Create images/videos, analyze visuals, use map grounding, and learn AI tricks."
                keywords={['AI Tools', 'Gemini AI', 'Image Generation', 'Video Generation', 'AI Analysis', 'Business AI']}
            />
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">Gemini AI Suite</h1>
                    <p className="text-slate-600 text-lg">Your playground for the future. Create, Think, and Learn.</p>
                </div>

                {/* Business Value Section (New) */}
                <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-2xl border border-violet-100 shadow-lg">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">Why Use AI for Business?</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-3xl mb-2">⚡</div>
                            <h3 className="font-bold text-violet-900">Speed</h3>
                            <p className="text-sm text-slate-600">Create content in seconds, not hours. Faster content means faster indexing by Google.</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">📈</div>
                            <h3 className="font-bold text-violet-900">SEO Ranking</h3>
                            <p className="text-sm text-slate-600">Use "Grounding" to get real-time keywords and data to make your content authoritative.</p>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">💰</div>
                            <h3 className="font-bold text-violet-900">Cost Efficient</h3>
                            <p className="text-sm text-slate-600">Automate expensive tasks like image creation and data analysis.</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {[
                        { id: 'create', label: '🎨 Create', desc: 'Images & Video' },
                        { id: 'analyze', label: '👁️ Analyze', desc: 'Vision & Audio' },
                        { id: 'grounding', label: '🌍 Maps', desc: 'Real World Data' },
                        { id: 'voice', label: '🎙️ Voice', desc: 'Live & TTS' },
                        { id: 'think', label: '🧠 Think', desc: 'Deep Logic' },
                        { id: 'learn', label: '🎓 Guide', desc: 'Tips & Tricks' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-5 py-3 rounded-2xl transition-all duration-300 border-2 ${
                                activeTab === tab.id
                                    ? 'bg-white border-violet-500 text-violet-700 shadow-xl shadow-violet-100 scale-105'
                                    : 'bg-white border-transparent text-slate-500 hover:bg-violet-50'
                            }`}
                        >
                            <div className="font-bold text-sm">{tab.label}</div>
                            <div className="text-[10px] uppercase tracking-wider opacity-70">{tab.desc}</div>
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-100 min-h-[600px] relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-violet-50 to-fuchsia-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>

                    {/* --- CREATE TAB --- */}
                    {activeTab === 'create' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-slate-900">Generative Magic Studio</h2>
                                <p className="text-slate-500">Manifest your imagination into stunning 4K reality.</p>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">What do you want to see?</label>
                                        <textarea
                                            className="w-full p-4 rounded-2xl border-2 border-slate-100 focus:border-violet-500 focus:ring-0 outline-none text-slate-700 bg-slate-50 transition-all h-32 resize-none"
                                            placeholder="A futuristic city made of candy..."
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                        ></textarea>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Shape</label>
                                            <div className="flex gap-2">
                                                {['16:9', '9:16', '1:1'].map((ar) => (
                                                    <button 
                                                        key={ar}
                                                        onClick={() => setAspectRatio(ar as any)}
                                                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${aspectRatio === ar ? 'bg-violet-600 text-white' : 'bg-white text-slate-500'}`}
                                                    >
                                                        {ar}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Quality</label>
                                            <div className="flex gap-2">
                                                {['1K', '2K', '4K'].map((sz) => (
                                                    <button 
                                                        key={sz}
                                                        onClick={() => setImgSize(sz as any)}
                                                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${imgSize === sz ? 'bg-fuchsia-600 text-white' : 'bg-white text-slate-500'}`}
                                                    >
                                                        {sz}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        <button 
                                            onClick={() => handleGenerate('image')}
                                            disabled={loading}
                                            className="flex-1 bg-violet-600 text-white font-bold py-4 rounded-xl hover:bg-violet-700 disabled:opacity-50 transition-transform active:scale-95 shadow-lg shadow-violet-200"
                                        >
                                            {loading ? 'Painting...' : 'Create Image 🎨'}
                                        </button>
                                        <button 
                                            onClick={() => handleGenerate('video')}
                                            disabled={loading}
                                            className="flex-1 bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 disabled:opacity-50 transition-transform active:scale-95 shadow-lg"
                                        >
                                            {loading ? 'Filming...' : 'Create Video 🎥'}
                                        </button>
                                    </div>
                                    {error && <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg text-center">{error}</p>}
                                </div>

                                <div className="bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-200 min-h-[300px] relative group">
                                    {mediaResult ? (
                                        mediaResult.startsWith('blob') ? (
                                            <video src={mediaResult} controls autoPlay className="w-full h-full object-contain bg-black" />
                                        ) : (
                                            <img src={mediaResult} alt="Generated" className="w-full h-full object-contain" />
                                        )
                                    ) : (
                                        <div className="text-slate-400 text-center p-6">
                                            <div className="text-6xl mb-4 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">🦄</div>
                                            <p className="font-bold">Your masterpiece awaits</p>
                                            <p className="text-sm opacity-70">Enter a prompt to start</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- ANALYZE TAB --- */}
                    {activeTab === 'analyze' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-slate-900">Multimodal Eye</h2>
                                <p className="text-slate-500">Gemini can see, hear, and understand files instantaneously.</p>
                            </div>

                            <div className="border-4 border-dashed border-violet-100 rounded-3xl p-10 text-center hover:bg-violet-50/50 transition-colors cursor-pointer" onClick={() => document.getElementById('fileUpload')?.click()}>
                                <input 
                                    type="file" 
                                    accept="image/*,video/*,audio/*"
                                    onChange={handleFileUpload}
                                    className="hidden" 
                                    id="fileUpload"
                                />
                                <div className="w-20 h-20 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-sm">
                                    📁
                                </div>
                                <p className="font-bold text-lg text-violet-900">Click to upload anything</p>
                                <p className="text-slate-500">Images, Videos, or Audio files</p>
                            </div>

                            {filePreview && (
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/3 bg-black rounded-xl overflow-hidden shadow-lg">
                                         {fileData?.mime.startsWith('image') && <img src={filePreview} className="w-full h-full object-contain" />}
                                         {fileData?.mime.startsWith('video') && <video src={filePreview} controls className="w-full h-full object-contain" />}
                                         {fileData?.mime.startsWith('audio') && <div className="h-40 flex items-center justify-center text-white text-6xl">🎵<audio src={filePreview} className="hidden" ref={(e) => { e?.play(); }} /></div>}
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                         <div className="flex gap-2 mb-4">
                                            <input 
                                                type="text" 
                                                placeholder="Ask Gemini about this file..." 
                                                value={analysisPrompt}
                                                onChange={(e) => setAnalysisPrompt(e.target.value)}
                                                className="flex-grow p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 outline-none"
                                            />
                                            <button 
                                                onClick={handleAnalysis}
                                                disabled={loading}
                                                className="bg-violet-600 text-white px-6 rounded-xl font-bold hover:bg-violet-700 transition-colors"
                                            >
                                                {loading ? '...' : 'Ask'}
                                            </button>
                                         </div>
                                         <div className="flex-grow bg-white p-6 rounded-xl border border-slate-200 text-slate-700 text-sm whitespace-pre-wrap leading-relaxed shadow-inner">
                                             {analysisResult || <span className="text-slate-400 italic">Analysis result will appear here...</span>}
                                         </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* --- GROUNDING TAB --- */}
                    {activeTab === 'grounding' && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-slate-900">Real-World Knowledge</h2>
                                <p className="text-slate-500">Connect AI to Google Maps and Search for live data.</p>
                            </div>

                            <div className="bg-slate-50 p-2 rounded-full inline-flex mx-auto border border-slate-200 relative left-1/2 -translate-x-1/2 mb-4">
                                <button 
                                    onClick={() => setGroundingMode('search')}
                                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${groundingMode === 'search' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:text-blue-600'}`}
                                >
                                    Google Search
                                </button>
                                <button 
                                    onClick={() => setGroundingMode('maps')}
                                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${groundingMode === 'maps' ? 'bg-green-600 text-white shadow-md' : 'text-slate-500 hover:text-green-600'}`}
                                >
                                    Google Maps
                                </button>
                            </div>

                            <div className="flex gap-2 max-w-2xl mx-auto">
                                <input 
                                    type="text" 
                                    placeholder={groundingMode === 'maps' ? "Best pizza in New York..." : "Stock price of Google..."}
                                    value={groundingQuery}
                                    onChange={(e) => setGroundingQuery(e.target.value)}
                                    className="flex-1 p-4 border-2 border-slate-200 rounded-2xl focus:border-slate-400 outline-none text-lg"
                                />
                                <button 
                                    onClick={handleGrounding}
                                    disabled={loading}
                                    className="bg-slate-900 text-white px-8 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                                >
                                    Go
                                </button>
                            </div>

                            {groundingResult && (
                                <div className="mt-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
                                    <div className="prose prose-slate max-w-none mb-6">
                                        <p className="whitespace-pre-wrap text-lg leading-relaxed">{groundingResult.text}</p>
                                    </div>
                                    
                                    {groundingResult.chunks && (
                                        <div className="pt-6 border-t border-slate-100">
                                            <h4 className="font-bold text-xs uppercase text-slate-400 mb-4 tracking-widest">Verified Sources</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {groundingResult.chunks.map((chunk: any, i: number) => (
                                                    <a 
                                                        key={i} 
                                                        href={chunk.web?.uri || chunk.maps?.uri} 
                                                        target="_blank" 
                                                        rel="noreferrer"
                                                        className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:bg-white hover:shadow-md transition-all hover:text-blue-600"
                                                    >
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        {chunk.web?.title || chunk.maps?.title || "Source Link"}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* --- VOICE TAB --- */}
                    {activeTab === 'voice' && (
                        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in">
                            <div className="bg-gradient-to-br from-slate-900 to-violet-900 rounded-3xl p-8 text-white shadow-2xl">
                                <h2 className="text-2xl font-bold mb-2">Live Conversation</h2>
                                <p className="text-violet-200 mb-8 text-sm">Experience the ultra-low latency Gemini Live API. Speak naturally.</p>
                                <LiveAudio />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Text-to-Speech Engine</h2>
                                <p className="text-slate-600 mb-6 text-sm">Convert written content into lifelike human speech using the 'Kore' voice model.</p>
                                <textarea 
                                    value={ttsText}
                                    onChange={(e) => setTtsText(e.target.value)}
                                    placeholder="Type something for the AI to say..."
                                    className="w-full p-6 border-2 border-slate-100 rounded-2xl mb-4 h-40 focus:border-violet-500 outline-none resize-none text-lg bg-slate-50"
                                />
                                <button 
                                    onClick={handleTTS}
                                    disabled={loading}
                                    className="bg-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-violet-700 transition-all shadow-lg shadow-violet-200 flex items-center justify-center gap-2"
                                >
                                    <span>🔊</span> {loading ? 'Generating...' : 'Generate Speech'}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* --- THINKING TAB --- */}
                    {activeTab === 'think' && (
                        <div className="space-y-8 animate-fade-in">
                             <div className="text-center">
                                <h2 className="text-3xl font-bold text-slate-900">Deep Reasoning</h2>
                                <p className="text-slate-500">Gemini 3 Pro thinking mode for complex math, logic, and coding.</p>
                             </div>
                             
                             <div className="max-w-3xl mx-auto">
                                 <textarea 
                                     value={thinkPrompt}
                                     onChange={(e) => setThinkPrompt(e.target.value)}
                                     placeholder="e.g. Calculate the trajectory of a rocket considering wind resistance..."
                                     className="w-full p-6 border-2 border-slate-200 rounded-2xl h-40 focus:border-fuchsia-500 outline-none text-lg shadow-sm resize-none"
                                 />
                                 <button 
                                     onClick={handleThinking}
                                     disabled={loading}
                                     className="w-full mt-4 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-black transition-transform active:scale-95"
                                 >
                                     {loading ? 'Thinking Deeply...' : 'Solve Problem 🧠'}
                                 </button>
                             </div>

                             {thinkResult && (
                                 <div className="bg-slate-900 text-indigo-50 p-8 rounded-2xl font-mono text-sm leading-relaxed whitespace-pre-wrap shadow-2xl border-l-4 border-fuchsia-500">
                                     {thinkResult}
                                 </div>
                             )}
                        </div>
                    )}

                    {/* --- LEARN TAB (NEW) --- */}
                    {activeTab === 'learn' && (
                        <div className="animate-fade-in">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-slate-900">🎓 AI Academy</h2>
                                <p className="text-slate-500">Learn how to talk to robots (Prompt Engineering 101)</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {aiTips.map((tip, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-violet-200 transition-colors">
                                        <div className="text-4xl mb-4">{tip.icon}</div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-2">{tip.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{tip.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-violet-900 text-white p-8 rounded-3xl shadow-xl">
                                <h3 className="text-xl font-bold mb-4 border-b border-violet-700 pb-4">Pro Cheat Sheet</h3>
                                <div className="space-y-4 font-mono text-sm text-violet-200">
                                    <p><strong className="text-white">Format:</strong> "Return the answer as a [JSON list / Table / Poem]"</p>
                                    <p><strong className="text-white">Tone:</strong> "Write in a [Professional / Funny / Pirate] style"</p>
                                    <p><strong className="text-white">Constraint:</strong> "Keep it under 50 words" or "Use simple English"</p>
                                    <p><strong className="text-white">Context:</strong> "I am a 10 year old student" or "I am a senior engineer"</p>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {/* Social Share */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
                        <SocialShare url={window.location.href} title="Gemini AI Suite Tools - WebWorldMaker" />
                    </div>
                </div>

                {/* Additional SEO Content for Tool Page */}
                <div className="max-w-4xl mx-auto mt-20 text-slate-700 space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Why use AI Tools for Business?</h2>
                        <p className="leading-relaxed">
                            Artificial Intelligence isn't just for tech companies. Tools like <strong>Gemini Pro</strong> and <strong>Imagen</strong> allow small businesses to generate professional marketing assets, analyze complex data spreadsheets, and automate customer interactions without hiring expensive agencies. 
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">What is Grounding?</h3>
                            <p className="text-sm">
                                "Grounding" connects the AI to real-time data sources like Google Maps or Google Search. This prevents "hallucinations" (made-up facts) and ensures the AI gives you up-to-date stock prices, news, or restaurant locations.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Generative Video</h3>
                            <p className="text-sm">
                                Models like <strong>Veo</strong> can create short video clips from simple text prompts. This is perfect for social media ads (Reels/TikTok) where you need constant fresh visual content but don't have a film crew.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiTools;
