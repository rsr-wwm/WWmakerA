
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
        .delay-400 { animation-delay: 0.4s; }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden transition-colors duration-1000">
        {/* Abstract Background Shapes */}
        <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 transition-colors duration-1000 ${heroIndex === 0 ? 'bg-indigo-600/20' : heroIndex === 1 ? 'bg-blue-600/20' : 'bg-fuchsia-600/20'}`}></div>
        <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 transition-colors duration-1000 ${heroIndex === 0 ? 'bg-purple-600/20' : heroIndex === 1 ? 'bg-teal-600/20' : 'bg-orange-600/20'}`}></div>
        {/* Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950/50 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Dynamic Content Left */}
          <div className="text-center lg:text-left" key={currentHero.id}>
            <div className={`inline-block border rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-fade-in-up shadow-[0_0_15px_rgba(255,255,255,0.1)] bg-white/5 border-white/20 text-${currentHero.accentColor}-300`}>
              {currentHero.tag}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
              {currentHero.titlePrefix} <br/>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentHero.gradient}`}>
                {currentHero.titleHighlight}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-200 font-light leading-relaxed">
              {currentHero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300">
              <NavLink to={currentHero.ctaLink} className={`bg-${currentHero.accentColor}-600 text-white font-bold py-4 px-8 rounded-full hover:bg-${currentHero.accentColor}-700 transition-all shadow-lg hover:shadow-${currentHero.accentColor}-500/50 transform hover:-translate-y-1 border border-transparent`}>
                {currentHero.ctaText}
              </NavLink>
              <NavLink to={currentHero.secondaryCtaLink} className="bg-transparent border border-slate-600 text-white font-bold py-4 px-8 rounded-full hover:bg-slate-800 transition-all hover:border-slate-500">
                {currentHero.secondaryCtaText}
              </NavLink>
            </div>
          </div>
          
          {/* Visual Right */}
          <div className="relative hidden lg:block animate-float">
             <div className="relative z-10 bg-gradient-to-tr from-slate-800 to-slate-900 p-6 rounded-3xl border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                   <div className="text-4xl" key={currentHero.icon}>{currentHero.icon}</div>
                </div>
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Dashboard Analytics UI" className="rounded-xl shadow-inner w-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                <div className="mt-4 flex gap-4">
                   <div className="h-2 bg-slate-700 rounded w-1/3"></div>
                   <div className="h-2 bg-slate-700 rounded w-1/4"></div>
                </div>
                <div className="mt-2 h-2 bg-slate-700 rounded w-1/2"></div>
             </div>
             {/* Decorative Elements behind */}
             <div className={`absolute top-10 right-10 w-full h-full border-2 rounded-3xl -z-10 transform translate-x-4 translate-y-4 transition-colors duration-1000 border-${currentHero.accentColor}-500/30`}></div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
            {HERO_VARIANTS.map((variant, idx) => (
                <button 
                    key={variant.id}
                    onClick={() => setHeroIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${heroIndex === idx ? `bg-${currentHero.accentColor}-500 w-8` : 'bg-slate-600 hover:bg-slate-500'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
          </div>
        </div>
      </section>

      {/* Simplified "What We Do" Section */}
      <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Solutions. Big Results.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-12">We strip away the complexity of technology so you can focus on growing your business.</p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">💬</div>
                      <h3 className="font-bold text-xl mb-3 text-blue-900">Reach Everyone</h3>
                      <p className="text-slate-600 mb-4">Don't rely on just email. We set up <strong>Bulk SMS & WhatsApp</strong> systems so your customers actually see your messages.</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-blue-600 border border-blue-100">Bulk SMS</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-blue-600 border border-blue-100">WhatsApp API</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-blue-600 border border-blue-100">Voice AI</span>
                      </div>
                  </div>
                  <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">🧠</div>
                      <h3 className="font-bold text-xl mb-3 text-purple-900">Work Smarter (AI)</h3>
                      <p className="text-slate-600 mb-4">Hire digital workers. Our <strong>AI Chatbots</strong> handle support and sales 24/7, saving you time and money.</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-purple-600 border border-purple-100">Chatbots</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-purple-600 border border-purple-100">Automation</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-purple-600 border border-purple-100">Gemini AI</span>
                      </div>
                  </div>
                  <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-4xl mb-6 mx-auto">🚀</div>
                      <h3 className="font-bold text-xl mb-3 text-orange-900">Rank Faster</h3>
                      <p className="text-slate-600 mb-4">Get found on Google. We build <strong>High-Speed Websites</strong> optimized for SEO so you climb the rankings quickly.</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-orange-600 border border-orange-100">Web Dev</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-orange-600 border border-orange-100">SEO</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded-md text-orange-600 border border-orange-100">Cloud</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Social Platforms / Connect Everywhere Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Omnichannel Communication</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Connect Everywhere</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Reach your customers on the platforms they use daily. Our unified API infrastructure ensures your message gets delivered.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp API</h3>
              <p className="text-sm text-slate-600">Green tick verification & automated chatbots.</p>
            </div>

            {/* Telegram */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 23.991c-2.42 0-21.785-5.926-21.785-5.926 0 0-4.092-1.353 1.21-3.66 5.302-2.307 19.332-8.196 19.332-8.196s1.612-.768 1.228 1.916c-.384 2.684-2.208 15.866-2.208 15.866zM1.94 17.653s16.712 5.018 19.335 5.568c0 0-5.756-3.766-7.839-5.306-2.083-1.54-7.892-5.465-8.414-5.362-.522.102 6.014 5.378 5.768 5.706-.246.327-4.225-2.858-4.225-2.858s-2.023 1.378-4.625 2.252z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Telegram</h3>
              <p className="text-sm text-slate-600">Unlimited channels & custom bot automation.</p>
            </div>

            {/* RCS/SMS */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">SMS & RCS</h3>
              <p className="text-sm text-slate-600">Rich media messaging with 98% open rates.</p>
            </div>

            {/* Voice */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Voice AI</h3>
              <p className="text-sm text-slate-600">IVR, Broadcasting, and Human-like Voice Bots.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Industries We Serve</h2>
            <p className="text-slate-600 mt-2">Tailored solutions for every sector.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className={`text-4xl mb-4 w-12 h-12 mx-auto rounded-full flex items-center justify-center ${ind.color ? ind.color : 'text-slate-600 bg-slate-50'}`}>
                    {ind.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{ind.title}</h3>
                <p className="text-xs text-slate-500">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Dictionary / Learn Section */}
      <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Knowledge Hub</span>
                  <h2 className="text-4xl font-bold text-slate-900 mt-2">Tech Terms Translated</h2>
                  <p className="text-slate-600 mt-4 text-lg">Confused by jargon? Here is what we mean in plain English.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {dictionaryTerms.map((item, i) => (
                      <div key={i} className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${item.color} flex flex-col h-full`}>
                          <div className="text-5xl mb-6">{item.icon}</div>
                          <h3 className="text-2xl font-bold mb-4">{item.term}</h3>
                          <p className="opacity-80 leading-relaxed font-medium flex-grow">{item.definition}</p>
                      </div>
                  ))}
                  {/* Fun Fact Card */}
                  <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col justify-center items-center text-center shadow-2xl transform rotate-1 hover:rotate-0 transition-transform h-full">
                      <div className="text-5xl mb-4">💡</div>
                      <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                      <p className="opacity-80">90% of text messages are read within 3 minutes. That's faster than any email!</p>
                  </div>
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

      {/* Impact Stats */}
      <section className="py-16 bg-indigo-900 border-y border-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-indigo-800">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-sm text-indigo-200 uppercase tracking-wide">Client Retention</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">500M+</div>
              <div className="text-sm text-indigo-200 uppercase tracking-wide">Messages Sent</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">200+</div>
              <div className="text-sm text-indigo-200 uppercase tracking-wide">Global Countries</div>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-sm text-indigo-200 uppercase tracking-wide">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-slate-50 relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Our Expertise</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">Comprehensive Solutions</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Everything you need to scale, all in one place.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.slice(0, 6).map((cat) => (
              <div key={cat.id} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 flex flex-col group">
                <div className="mb-6">
                  {cat.id === 'messaging' && <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl">💬</div>}
                  {cat.id === 'voice' && <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl">🎙️</div>}
                  {cat.id === 'digital' && <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-2xl">📈</div>}
                  {cat.id === 'dev' && <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-2xl">💻</div>}
                  {cat.id === 'ai' && <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl">🤖</div>}
                  {cat.id === 'solutions' && <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl">🚀</div>}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{cat.description}</p>
                
                <ul className="space-y-3 mb-6 border-t border-slate-50 pt-4">
                  {cat.items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {item.title}
                    </li>
                  ))}
                </ul>
                <NavLink to="/services" className="text-indigo-600 font-bold text-sm flex items-center group-hover:underline">
                  View All Features <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Page FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
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
      </section>

      {/* Latest Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="text-indigo-600 font-bold uppercase text-sm">Our Blog</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">Latest Insights</h2>
              </div>
              <NavLink to="/blog" className="text-indigo-600 font-bold hover:underline">View All</NavLink>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={post.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-indigo-500 font-bold uppercase mb-2">{post.category}</div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                        <NavLink to={`/blog/${post.id}`} className="hover:text-indigo-600">{post.title}</NavLink>
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Transform Your Business?</h2>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied clients who have scaled their operations with WebWorldMaker's integrated digital ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <NavLink to="/contact" className="bg-emerald-600 text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-1">
              Contact Us Today
            </NavLink>
            <NavLink to="/products" className="bg-transparent border-2 border-indigo-400 text-white font-bold py-4 px-10 rounded-full hover:bg-indigo-800 transition-colors">
              Become a Reseller
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
