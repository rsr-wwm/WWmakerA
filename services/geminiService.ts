
import { GoogleGenAI, GenerateContentResponse, Type, FunctionDeclaration, Modality, LiveServerMessage } from "@google/genai";
import { GeminiModel } from '../types';

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

// --- Helper: Get API Key directly for scripts/manual fetch if needed ---
const getApiKey = () => process.env.API_KEY;

// --- Chatbot Functionality ---

export const sendChatMessage = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "I'm having trouble connecting to my brain right now. Please check the API key.";

  try {
    const chat = ai.chats.create({
      model: GeminiModel.PRO,
      config: {
        systemInstruction: `You are the helpful AI assistant for WebWorldMaker.com. 
        Your goal is to help potential clients understand our services (SMS, Web Dev, SEO, AI, White Label Reseller) and guide them to the Contact page.
        Be professional, concise, and persuasive. 
        WebWorldMaker offers: Bulk SMS, RCS, WhatsApp Business, Web/App Development, AI Solutions, and a White Label Reseller Program.
        Keep answers under 100 words unless asked for detail.`,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "I didn't catch that.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Sorry, I encountered an error processing your request.";
  }
};

// --- Fast AI Responses (Flash Lite) ---
export const fastAiResponse = async (prompt: string): Promise<string> => {
    const ai = getClient();
    if (!ai) return "Error: No API Key";
    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.FLASH_LITE_2_5,
            contents: prompt
        });
        return response.text || "";
    } catch (e) {
        console.error(e);
        return "Error generating response.";
    }
};

// --- SEO Analysis Tool (Enhanced with Meta Tags) ---

export const analyzeSeoKeywords = async (topic: string): Promise<{ keywords: string[]; strategy: string; metaTitle: string; metaDescription: string; sources?: any[] }> => {
  const ai = getClient();
  if (!ai) throw new Error("API Key missing");

  const prompt = `Analyze current search trends and suggest SEO assets for a digital agency page focused on: "${topic}".
  1. Suggest 5-10 high traffic keywords.
  2. Provide a brief strategy.
  3. Generate a compelling Meta Title (max 60 chars).
  4. Generate a compelling Meta Description (max 160 chars).
  Return JSON format.`;

  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 5-10 high traffic keywords"
            },
            strategy: {
              type: Type.STRING,
              description: "Brief strategy description"
            },
            metaTitle: {
              type: Type.STRING,
              description: "SEO optimized meta title"
            },
            metaDescription: {
              type: Type.STRING,
              description: "SEO optimized meta description"
            }
          }
        },
        // Grounding removed to prevent authorization prompts as requested
        // tools: [{ googleSearch: {} }] 
      }
    });
    
    const text = response.text;
    const grounding = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    if (!text) throw new Error("No response from AI");
    const result = JSON.parse(text);
    return { ...result, sources: grounding };
  } catch (error) {
    console.error("SEO Tool Error:", error);
    throw error;
  }
};

// --- Website Health Scan (New Feature) ---
export const analyzeWebsiteHealth = async (urlOrContext: string): Promise<{ score: number; issues: { severity: string; issue: string; fix: string }[]; summary: string }> => {
    const ai = getClient();
    if (!ai) throw new Error("API Key missing");

    const prompt = `Act as a Senior Web Performance and Security Engineer. Analyze the following input (which may be a URL, code snippet, or description of a web stack) and provide a simulated audit report based on 2025 web standards (Core Web Vitals, CSP, Accessibility WCAG 2.2, Modern Tech Stack).
    
    Input to analyze: "${urlOrContext}"

    If the input is just a generic URL, provide a best-practice checklist and potential common pitfalls for that type of site.
    
    Return a JSON object with:
    1. A health score (0-100).
    2. A summary of the findings.
    3. A list of issues found (categorize severity as 'Critical', 'Warning', or 'Info').
    `;

    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.PRO,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        score: { type: Type.NUMBER },
                        summary: { type: Type.STRING },
                        issues: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    severity: { type: Type.STRING },
                                    issue: { type: Type.STRING },
                                    fix: { type: Type.STRING }
                                }
                            }
                        }
                    }
                }
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response");
        return JSON.parse(text);
    } catch (e) {
        console.error("Health Scan Error", e);
        throw e;
    }
}

// --- Maps Grounding ---
export const askMaps = async (query: string): Promise<{ text: string; chunks: any }> => {
    const ai = getClient();
    if (!ai) throw new Error("API Key missing");

    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.FLASH_2_5,
            contents: query,
            // Grounding removed to prevent authorization prompts as requested
            // config: {
            //     tools: [{ googleMaps: {} }],
            //     // Note: Cannot use JSON schema with Maps tool
            // }
        });
        return {
            text: response.text || "No result found.",
            chunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks
        };
    } catch (e) {
        console.error("Maps Error", e);
        throw e;
    }
}


// --- Image Generation (Pro with Size/Aspect Ratio) ---

export const generateProImage = async (
    prompt: string, 
    size: '1K' | '2K' | '4K', 
    aspectRatio: '1:1' | '3:4' | '4:3' | '9:16' | '16:9'
): Promise<string | null> => {
    const ai = getClient();
    if (!ai) return null;

    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.IMAGE_PRO,
            contents: {
                parts: [{ text: prompt }]
            },
            config: {
                imageConfig: {
                    aspectRatio: aspectRatio,
                    imageSize: size
                }
            }
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData) {
                return `data:image/png;base64,${part.inlineData.data}`;
            }
        }
        return null;
    } catch (error) {
        console.error("Image Gen Error:", error);
        return null;
    }
}

// Keep the old function for backward compatibility if needed, redirected to new logic
export const generateConceptImage = async (prompt: string, size: '1K' | '2K' | '4K' = '1K'): Promise<string | null> => {
    return generateProImage(prompt, size, '16:9');
}

// --- Video Generation (Veo) ---

export const generateVideo = async (prompt: string, aspectRatio: '16:9' | '9:16'): Promise<string | null> => {
    const ai = getClient();
    if (!ai) return null;

    // Check for Paid Key selection for Veo (handled in UI, but good to check here if possible)
    // We assume the caller checks `window.aistudio.hasSelectedApiKey()`

    try {
        let operation = await ai.models.generateVideos({
            model: GeminiModel.VEO_FAST,
            prompt: prompt,
            config: {
                numberOfVideos: 1,
                resolution: '1080p',
                aspectRatio: aspectRatio
            }
        });

        // Polling loop
        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
            operation = await ai.operations.getVideosOperation({operation: operation});
        }

        const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
        if (downloadLink) {
            // Fetch the actual bytes
            const videoRes = await fetch(`${downloadLink}&key=${getApiKey()}`);
            const blob = await videoRes.blob();
            return URL.createObjectURL(blob);
        }
        return null;

    } catch (error) {
        console.error("Video Gen Error", error);
        throw error;
    }
}

// --- Thinking Mode ---
export const askWithThinking = async (prompt: string): Promise<string> => {
    const ai = getClient();
    if (!ai) return "";
    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.THINKING_PRO,
            contents: prompt,
            config: {
                thinkingConfig: { thinkingBudget: 32768 }
            }
        });
        return response.text || "";
    } catch (e) {
        console.error(e);
        return "Thinking process failed.";
    }
}

// --- Analysis (Image/Video) ---
export const analyzeVisual = async (prompt: string, base64Data: string, mimeType: string): Promise<string> => {
    const ai = getClient();
    if (!ai) return "";
    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.PRO,
            contents: {
                parts: [
                    { inlineData: { mimeType, data: base64Data } },
                    { text: prompt }
                ]
            }
        });
        return response.text || "";
    } catch (e) {
        console.error(e);
        return "Analysis failed.";
    }
}

// --- Audio Transcription ---
export const transcribeAudio = async (base64Audio: string, mimeType: string): Promise<string> => {
     const ai = getClient();
    if (!ai) return "";
    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.FLASH,
            contents: {
                parts: [
                    { inlineData: { mimeType, data: base64Audio } },
                    { text: "Transcribe this audio." }
                ]
            }
        });
        return response.text || "";
    } catch (e) {
        console.error(e);
        return "Transcription failed.";
    }
}

// --- Text to Speech ---
export const generateSpeech = async (text: string): Promise<ArrayBuffer | null> => {
    const ai = getClient();
    if (!ai) return null;
    try {
        const response = await ai.models.generateContent({
            model: GeminiModel.TTS_2_5,
            contents: { parts: [{ text }] },
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
                }
            }
        });
        
        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (base64Audio) {
            const binaryString = atob(base64Audio);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        }
        return null;
    } catch (e) {
        console.error("TTS Error", e);
        return null;
    }
}


// --- Ad Copy Generator ---

export const generateAdCopy = async (productName: string, targetAudience: string): Promise<{ headline: string; body: string; cta: string }> => {
  const ai = getClient();
  if (!ai) throw new Error("API Key missing");

  const prompt = `Write a compelling Facebook/Instagram ad for a product called "${productName}" targeting "${targetAudience}".
  Return JSON with a catchy headline, persuasive body text (max 50 words), and a strong call to action.`;

  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING },
            body: { type: Type.STRING },
            cta: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Ad Copy Error:", error);
    throw error;
  }
};

// --- Email Subject Line Generator ---

export const generateSubjectLines = async (contentSummary: string): Promise<string[]> => {
  const ai = getClient();
  if (!ai) throw new Error("API Key missing");

  const prompt = `Generate 5 catchy, high-open-rate email subject lines for an email about: "${contentSummary}".
  Mix urgency, curiosity, and value. Return as a JSON array of strings.`;

  try {
    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text);
  } catch (error) {
    console.error("Subject Line Error:", error);
    throw error;
  }
};
