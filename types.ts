
export interface FaqItem {
  question: string;
  answer: string;
  category?: string; // 'Common Questions' | 'Technical Insights' | etc.
}

export interface ServiceItem {
  id: string; // URL slug
  title: string;
  description: string; // Short summary for cards
  fullDescription: string; // SEO-rich long description
  features: { title: string; description: string; benefit: string }[];
  benefits: string[]; // Value propositions
  useCases?: { title: string; description: string }[];
  pricing?: { title: string; price: string; features: string[] }[];
  roadmap?: { step: string; title: string; description: string }[];
  faqs: FaqItem[]; // For FAQ schema
  metaTitle: string; // SEO Title
  metaDescription: string; // SEO Meta Description
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface SolutionItem {
  id: string; // URL slug
  title: string;
  focus: string; // "Why" it's done
  outcome: string;
  description: string; // Short summary for cards
  fullDescription: string; // SEO-rich long description
  features: { title: string; benefit: string }[]; // Changed to object with benefit
  benefits: string[]; // Value propositions
  useCases?: { title: string; description: string }[];
  pricing?: { title: string; price: string; features: string[] }[];
  roadmap?: { step: string; title: string; description: string }[];
  faqs: FaqItem[]; // For FAQ schema
  metaTitle: string; // SEO Title
  metaDescription: string; // SEO Meta Description
}

export interface ProductItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: { title: string; description: string; benefit: string }[]; // Added benefit
  benefits: string[]; // Value propositions for product pages
  useCases?: { title: string; description: string }[];
  pricing?: { title: string; price: string; features: string[] }[];
  roadmap?: { step: string; title: string; description: string }[];
  pricingModel?: string; // e.g., "Subscription", "Pay-as-you-go"
  targetAudience?: string;
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
  imageUrl?: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  symptoms: string[]; // List of specific pain points/issues
  ourSolution: string; // Detailed explanation of the fix
  relatedServices: string[]; // IDs of services that solve this
  useCases?: { title: string; description: string }[];
  pricing?: { title: string; price: string; features: string[] }[]; // Added
  roadmap?: { step: string; title: string; description: string }[];
  faqs: FaqItem[];
  metaTitle: string;
  metaDescription: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  challenges: { title: string; description: string }[];
  solutions: string[]; // IDs of related solutions/services
  useCases?: { title: string; description: string }[];
  pricing?: { title: string; price: string; features: string[] }[]; // Added
  roadmap?: { step: string; title: string; description: string }[]; // Added
  stats: { value: string; label: string }[];
  faqs: FaqItem[]; // Added
  metaTitle: string;
  metaDescription: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}

export interface NavItem {
  label: string;
  path: string;
}

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface TodoItem {
  id: string;
  task: string;
  category: 'SEO' | 'Content' | 'Dev';
  isCompleted: boolean;
}

export enum GeminiModel {
  FLASH = 'gemini-3-flash-preview',
  PRO = 'gemini-3-pro-preview',
  IMAGE_PRO = 'gemini-3-pro-image-preview',
  THINKING_PRO = 'gemini-3-pro-preview', // For thinking mode
  FLASH_LITE_2_5 = 'gemini-2.5-flash-lite-latest', // Fast responses
  FLASH_2_5 = 'gemini-2.5-flash-latest', // Maps grounding
  TTS_2_5 = 'gemini-2.5-flash-preview-tts', // Speech generation
  LIVE_2_5 = 'gemini-2.5-flash-native-audio-preview-12-2025', // Live API
  VEO_FAST = 'veo-3.1-fast-generate-preview', // Video generation
}
