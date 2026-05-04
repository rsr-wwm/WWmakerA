
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../constants';
import { getBlogPosts } from '../services/contentService';
import { BlogPost } from '../types';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';
import { FaqAccordion } from '../components/FaqAccordion';

const HERO_VARIANTS = [
  {
    id: 1,
    tag: "🚀 We build what you imagine",
    titlePrefix: "Make your",
    titleHighlight: "Business shine online",
    description: "We don't just build sites; we craft digital spaces where people actually want to hang out. Whether you need a simple landing page or a complex store, we've got you covered.",
    ctaText: "Let's chat",
    ctaLink: "/contact",
    secondaryCtaText: "Show me how",
    secondaryCtaLink: "/solutions",
    gradient: "from-indigo-400 via-purple-400 to-pink-400",
    icon: "🏠",
    accentColor: "indigo"
  },
  {
    id: 2,
    tag: "💬 Chat like a human",
    titlePrefix: "Reach people",
    titleHighlight: "In their pockets",
    description: "Tired of emails that never get opened? Talk to your customers on WhatsApp and SMS. We help you send messages that feel like a quick text from a friend, not a robot.",
    ctaText: "Let's get talking",
    ctaLink: "/service/bulk-sms-gateway",
    secondaryCtaText: "How it works",
    secondaryCtaLink: "/products",
    gradient: "from-blue-400 via-teal-400 to-emerald-400",
    icon: "📱",
    accentColor: "emerald"
  },
  {
    id: 3,
    tag: "🤖 Your digital sidekick",
    titlePrefix: "Smart helpers",
    titleHighlight: "For your daily tasks",
    description: "Tech should be helpful, not a headache. Our AI tools handle the boring, repetitive stuff so you can get back to doing the work you actually enjoy.",
    ctaText: "Try the tools",
    ctaLink: "/ai-tools",
    secondaryCtaText: "See results",
    secondaryCtaLink: "/case-studies",
    gradient: "from-fuchsia-400 via-rose-400 to-orange-400",
    icon: "🤝",
    accentColor: "rose"
  }
];

const Home: React.FC = () => {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    setRecentPosts(getBlogPosts().slice(0, 3));
  }, []);

  // Banner Rotation Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_VARIANTS.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const currentHero = HERO_VARIANTS[heroIndex];

  const homeFaqs = [
    { question: "How quickly can we integrate your SMS API?", answer: "Our SMS API is designed for developers. With our SDKs and comprehensive documentation, most teams integrate and send their first message within 15 minutes." },
    { question: "Do you offer custom software development?", answer: "Yes, we specialize in building scalable web and mobile applications using modern stacks like React, Node.js, and Python." },
    { question: "Is your infrastructure secure?", answer: "Absolutely. We use bank-grade encryption (AES-256), follow GDPR compliance, and host on secure Tier-1 cloud providers." },
    { question: "Can I resell your services?", answer: "Yes! Our White Label Reseller program allows you to rebrand our platform and sell SMS, WhatsApp, and Voice services under your own brand." }
  ];

  const industries = [
    { icon: '💳', title: 'FinTech', desc: 'Secure OTPs & Fraud Alerts', color: 'text-blue-500 bg-blue-50' },
    { icon: '🏥', title: 'Healthcare', desc: 'Appointment Reminders & HIPPA Compliant Chat', color: 'text-teal-500 bg-teal-50' },
    { icon: '🛒', title: 'E-commerce', desc: 'Cart Recovery & Order Updates', color: 'text-purple-500 bg-purple-50' },
    { icon: '🚚', title: 'Logistics', desc: 'Real-time Delivery Tracking Updates', color: 'text-orange-500 bg-orange-50' },
    { icon: '🎓', title: 'Education', desc: 'Student Notifications & Admissions Bot', color: 'text-yellow-500 bg-yellow-50' },
    { icon: '🏘️', title: 'Real Estate', desc: 'Lead Capture & Virtual Tour Links', color: 'text-indigo-500 bg-indigo-50' }
  ];

  // Digital Dictionary Terms with Colors
  const dictionaryTerms = [
      { term: 'API', definition: 'Think of it like a waiter at a restaurant. You tell the waiter what you want, they tell the kitchen, and then they bring the food back to you. It connects two different systems easily.', color: 'bg-blue-50 border-blue-100 text-blue-900', icon: '🍽️' },
      { term: 'Cloud', definition: 'Instead of keeping files on just one computer, you keep them in a giant digital safe on the internet. You can open that safe from anywhere in the world.', color: 'bg-sky-50 border-sky-100 text-sky-900', icon: '☁️' },
      { term: 'SaaS', definition: 'Software as a Service. It means you use a program over the internet instead of installing it from a disk. It’s like Netflix, but for work tools.', color: 'bg-purple-50 border-purple-100 text-purple-900', icon: '💿' },
      { term: 'Omnichannel', definition: 'Being everywhere your customers are. Whether they want to talk on WhatsApp, Email, or SMS, you’re right there waiting for them.', color: 'bg-pink-50 border-pink-100 text-pink-900', icon: '🐙' },
      { term: 'SEO', definition: 'Search Engine Optimization. The secret sauce to making sure your website shows up first when someone searches for what you do on Google.', color: 'bg-green-50 border-green-100 text-green-900', icon: '🔎' }
  ];

  // Schema for Organization
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebWorldMaker",
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "description": "Provider of enterprise digital solutions, bulk messaging, and custom software development.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-86002-80002",
      "contactType": "sales",
      "areaServed": "Global"
    },
    "sameAs": [
      "https://www.linkedin.com/company/webworldmaker",
      "https://twitter.com/webworldmaker",
      "https://www.facebook.com/webworldmaker"
    ]
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="AI-Powered Digital Solutions & Enterprise Messaging" 
        description="Scale faster with WebWorldMaker. We build AI Agents, Bulk SMS Gateways, and High-Performance Web Apps designed for top SEO ranking and business growth."
        keywords={['AI Agents', 'Bulk SMS API', 'SEO Services', 'Web Development', 'Chatbots', 'Enterprise Messaging', 'Digital Transformation']}
        schema={orgSchema}
      />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden transition-colors duration-1000">
        {/* Abstract Background Shapes */}
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-all duration-1000 ${heroIndex === 0 ? 'bg-brand-600/20' : heroIndex === 1 ? 'bg-emerald-600/20' : 'bg-purple-600/20'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 transition-all duration-1000 ${heroIndex === 0 ? 'bg-brand-500/10' : heroIndex === 1 ? 'bg-teal-500/10' : 'bg-rose-500/10'}`}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Dynamic Content Left */}
          <div className="text-center lg:text-left" key={currentHero.id}>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
              <span className="text-slate-300 text-xs font-black uppercase tracking-widest leading-none mt-0.5">{currentHero.tag}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 animate-fade-in-up delay-100 tracking-tighter">
              {currentHero.titlePrefix} <br/>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentHero.gradient}`}>
                {currentHero.titleHighlight}
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200 font-medium leading-relaxed">
              {currentHero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in-up delay-300">
              <NavLink to={currentHero.ctaLink} className="bg-brand-600 text-white font-black py-5 px-10 rounded-2xl hover:bg-brand-500 transition-all shadow-2xl shadow-brand-600/20 transform hover:-translate-y-1 uppercase tracking-tighter text-sm">
                {currentHero.ctaText}
              </NavLink>
              <NavLink to={currentHero.secondaryCtaLink} className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-black py-5 px-10 rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tighter text-sm">
                {currentHero.secondaryCtaText}
              </NavLink>
            </div>
          </div>
          
          {/* Visual Right */}
          <div className="relative hidden lg:block animate-float">
             <div className="relative z-10 glass-card p-4 rounded-[2rem] border-white/10 bg-white/5 overflow-hidden group">
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/10 z-20">
                   <div className="text-5xl" key={currentHero.icon}>{currentHero.icon}</div>
                </div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Platform Intelligence" className="rounded-2xl w-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
             </div>
             <div className="absolute -inset-4 bg-brand-600/20 rounded-[2.5rem] blur-2xl -z-10 group-hover:bg-brand-600/40 transition-colors"></div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-12 left-1/2 lg:left-[4px] transform -translate-x-1/2 lg:translate-x-0 flex gap-3">
            {HERO_VARIANTS.map((variant, idx) => (
                <button 
                    key={variant.id}
                    onClick={() => setHeroIndex(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${heroIndex === idx ? `bg-brand-500 w-12` : 'bg-white/20 w-6 hover:bg-white/40'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
          </div>
        </div>
      </section>

      {/* Simplified "What We Do" Section */}
      <section className="section-container">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-slate-950 mb-4">Simple Solutions. Big Results.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">We strip away the complexity of technology so you can focus on growing your business with zero friction.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass-card p-10 group">
                  <div className="feature-icon-wrapper bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">💬</div>
                  <h3 className="font-bold text-2xl mb-4 text-slate-950 group-hover:text-brand-600 transition-colors">Reach Everyone</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">Don't rely on just email. We set up <strong>Bulk SMS & WhatsApp</strong> systems so your customers actually see and engage with your messages.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Bulk SMS', 'WhatsApp API', 'Voice AI'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 border border-slate-200">{tag}</span>
                    ))}
                  </div>
              </div>
              <div className="glass-card p-10 group">
                  <div className="feature-icon-wrapper bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white">🧠</div>
                  <h3 className="font-bold text-2xl mb-4 text-slate-950 group-hover:text-brand-600 transition-colors">Work Smarter</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">Hire digital workers. Our <strong>AI Chatbots</strong> handle support and sales 24/7, saving you time and dramatically reducing operational costs.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Chatbots', 'Automation', 'Gemini AI'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 border border-slate-200">{tag}</span>
                    ))}
                  </div>
              </div>
              <div className="glass-card p-10 group">
                  <div className="feature-icon-wrapper bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white">🚀</div>
                  <h3 className="font-bold text-2xl mb-4 text-slate-950 group-hover:text-brand-600 transition-colors">Rank Faster</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">Get found on Google with authority. We build <strong>High-Performance Websites</strong> optimized for SEO to climb the rankings quickly.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Web Dev', 'SEO', 'Cloud Native'].map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 border border-slate-200">{tag}</span>
                    ))}
                  </div>
              </div>
          </div>
      </section>

      {/* Social Platforms / Connect Everywhere Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-400 font-bold uppercase tracking-widest text-xs">Omnichannel Communication</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">Connect Everywhere</h2>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Reach your customers on the platforms they use daily. Our unified API infrastructure ensures your message gets delivered with 99.9% reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center">
              <div className="w-16 h-16 mx-auto bg-green-500/20 text-green-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">WhatsApp API</h3>
              <p className="text-slate-400 font-light text-sm">Green tick verification & enterprise chatbot workflows.</p>
            </div>

            {/* Telegram */}
            <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 23.991c-2.42 0-21.785-5.926-21.785-5.926 0 0-4.092-1.353 1.21-3.66 5.302-2.307 19.332-8.196 19.332-8.196s1.612-.768 1.228 1.916c-.384 2.684-2.208 15.866-2.208 15.866zM1.94 17.653s16.712 5.018 19.335 5.568c0 0-5.756-3.766-7.839-5.306-2.083-1.54-7.892-5.465-8.414-5.362-.522.102 6.014 5.378 5.768 5.706-.246.327-4.225-2.858-4.225-2.858s-2.023 1.378-4.625 2.252z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Telegram</h3>
              <p className="text-slate-400 font-light text-sm">Massive channels & secure crypto-ready bot automation.</p>
            </div>

            {/* RCS/SMS */}
            <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center">
              <div className="w-16 h-16 mx-auto bg-brand-500/20 text-brand-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">SMS & RCS</h3>
              <p className="text-slate-400 font-light text-sm">Interactive rich media messaging with 98% open rates.</p>
            </div>

            {/* Voice */}
            <div className="group bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-brand-500/50 hover:bg-white/10 transition-all duration-500 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Voice AI</h3>
              <p className="text-slate-400 font-light text-sm">Multilingual IVR and Human-like outbound Voice Assistants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Cluster Section */}
      <section className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Industry Clusters</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-950 mt-4 tracking-tighter">Strategic Deep-Dives</h2>
                <p className="text-slate-600 mt-6 text-lg font-light leading-relaxed">
                  We don't just build software. We engineer domain-specific ecosystems that solve the unique logistical and communicative friction of your industry.
                </p>
              </div>
              <NavLink to="/industries" className="group flex items-center gap-3 text-slate-950 font-black uppercase text-xs tracking-widest hover:text-brand-600 transition-colors">
                Explore Clusters
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">→</div>
              </NavLink>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((ind, i) => (
                  <NavLink key={i} to={`/industry/${ind.id}`} className="glass-card p-10 group overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                      <div className={`w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl mb-8 border border-slate-100 group-hover:-rotate-6 transition-transform relative z-10`}>
                        {ind.icon}
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-950 relative z-10">{ind.title}</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 group-hover:text-slate-600 transition-colors relative z-10">{ind.desc}</p>
                      <div className="inline-flex items-center text-xs font-black uppercase tracking-widest text-brand-600 relative z-10">
                        Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                  </NavLink>
              ))}
          </div>
      </section>

      {/* Digital Dictionary / Learn Section */}
      <section className="section-container bg-slate-100/50 border-y border-slate-200">
          <div className="text-center mb-20">
              <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Knowledge Hub</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mt-4 tracking-tighter">Digital Literacy</h2>
              <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto font-light">Demystifying the future. We translate complex tech into clear, actionable business value.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {dictionaryTerms.map((item, i) => (
                  <div key={i} className={`p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group ${item.color} flex flex-col h-full shadow-sm`}>
                      <div className="text-6xl mb-8 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                      <h3 className="text-3xl font-black mb-4 tracking-tight">{item.term}</h3>
                      <p className="opacity-80 leading-relaxed text-lg font-medium flex-grow border-t pt-6 border-current/10">{item.definition}</p>
                  </div>
              ))}
              {/* Fun Fact Card */}
              <div className="p-10 rounded-[2.5rem] bg-slate-950 text-white flex flex-col justify-center items-start text-left shadow-2xl relative overflow-hidden group h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
                  <div className="text-6xl mb-6">💡</div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight text-brand-400">Pro Tip</h3>
                  <p className="opacity-90 text-lg leading-relaxed font-light">90% of text messages are read within <strong>3 minutes</strong>. Capture attention where it's already focused.</p>
              </div>
          </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-wide">Trusted Technology Standards</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
             <span className="text-2xl font-bold text-slate-400">Google Cloud</span>
             <span className="text-2xl font-bold text-slate-400">AWS</span>
             <span className="text-2xl font-bold text-slate-400">Meta</span>
             <span className="text-2xl font-bold text-slate-400">Twilio</span>
             <span className="text-2xl font-bold text-slate-400">Stripe</span>
             <span className="text-2xl font-bold text-slate-400">Shopify</span>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section-container">
          <div className="bg-brand-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-brand-500/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
              <div className="relative z-10 grid md:grid-cols-4 gap-12 text-center">
                  <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">1M+</div>
                      <div className="text-brand-100 text-[10px] font-black uppercase tracking-widest">Messages Processed</div>
                  </div>
                  <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">500+</div>
                      <div className="text-brand-100 text-[10px] font-black uppercase tracking-widest">Global Clients</div>
                  </div>
                  <div>
                      <div className="text-5xl font-black mb-2 tracking-tighter">99.9%</div>
                      <div className="text-brand-100 text-[10px] font-black uppercase tracking-widest">Server Uptime</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                      <div className="text-4xl font-black mb-2 text-emerald-400 tracking-tighter">24/7</div>
                      <div className="text-white text-[10px] font-black uppercase tracking-widest">Expert Support</div>
                  </div>
              </div>
          </div>
      </section>

      {/* Core Services Preview */}
      <section className="section-container relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mt-4 tracking-tighter">Unified Ecosystem</h2>
            <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">Everything you need to scale, engineered for high-throughput performance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICE_CATEGORIES.slice(0, 6).map((cat) => (
              <div key={cat.id} className="glass-card p-10 flex flex-col group">
                <div className="mb-8">
                  {cat.id === 'messaging' && <div className="feature-icon-wrapper bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white">💬</div>}
                  {cat.id === 'voice' && <div className="feature-icon-wrapper bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white">🎙️</div>}
                  {cat.id === 'digital' && <div className="feature-icon-wrapper bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white">📈</div>}
                  {cat.id === 'dev' && <div className="feature-icon-wrapper bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white">💻</div>}
                  {cat.id === 'ai' && <div className="feature-icon-wrapper bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white">🤖</div>}
                  {cat.id === 'solutions' && <div className="feature-icon-wrapper bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">🚀</div>}
                </div>
                
                <h3 className="text-2xl font-black text-slate-950 mb-4 group-hover:text-brand-600 transition-colors tracking-tight">{cat.title}</h3>
                <p className="text-slate-600 text-sm mb-8 flex-grow leading-relaxed font-medium">{cat.description}</p>
                
                <ul className="space-y-4 mb-8 border-t border-slate-100 pt-6">
                  {cat.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-500 font-bold uppercase tracking-wider">
                      <svg className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      {item.title}
                    </li>
                  ))}
                </ul>
                <NavLink to="/services" className="text-brand-600 font-black text-xs uppercase tracking-widest flex items-center group-hover:gap-2 transition-all">
                  Full Capabilities <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Page FAQ */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Help Center</span>
            <h2 className="text-4xl font-black text-slate-950 mt-4 tracking-tighter">Frequently Discussed</h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => (
              <FaqAccordion 
                  key={idx} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openFaqIndex === idx}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="section-container bg-slate-100/30">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-brand-600 font-bold uppercase tracking-widest text-xs">Industry Insights</span>
                <h2 className="text-4xl font-black text-slate-950 mt-4 tracking-tighter">Latest from WebWorldMaker</h2>
              </div>
              <NavLink to="/blog" className="text-brand-600 font-black uppercase text-xs tracking-widest hover:underline">View Intelligence Hub →</NavLink>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {recentPosts.map((post) => (
                <div key={post.id} className="glass-card overflow-hidden group">
                  <div className="h-56 overflow-hidden relative">
                    <img src={post.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-brand-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">{post.category}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-black text-xl mb-4 line-clamp-2 text-slate-950 group-hover:text-brand-600 transition-colors tracking-tight">
                        <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed font-medium">{post.excerpt}</p>
                    <NavLink to={`/blog/${post.id}`} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-brand-600 transition-colors">
                      Read Report <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 bg-slate-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-600/10 blur-[120px] rounded-full scale-150"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter max-w-4xl mx-auto leading-[0.9]">Ready to engineer your digital evolution?</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
            Join 500+ global enterprises scaling high-throughput communication with our unified intelligence ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <NavLink to="/contact" className="bg-brand-600 text-white font-black py-5 px-12 rounded-2xl hover:bg-brand-500 transition-all shadow-2xl shadow-brand-600/20 transform hover:-translate-y-1 uppercase tracking-tighter text-sm">
              Initialize Integration
            </NavLink>
            <NavLink to="/products" className="bg-white/5 backdrop-blur-md border border-white/10 text-white font-black py-5 px-12 rounded-2xl hover:bg-white/10 transition-all uppercase tracking-tighter text-sm">
              Explore Product Matrix
            </NavLink>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
         <SocialShare url={window.location.href} title="WebWorldMaker - Digital Solutions" />
      </div>
    </div>
  );
};

export default Home;
