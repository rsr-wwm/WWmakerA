
import React, { useEffect, useRef, useState } from 'react';
import { getServiceCategories } from '../services/contentService';
import { ServiceCategory } from '../types';
import { NavLink } from 'react-router-dom';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Services: React.FC = () => {
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Load data from service
    setCategories(getServiceCategories());
  }, []);

  useEffect(() => {
    // Define the intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerRef.current?.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% visible
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [categories]); // Re-run when categories load

  const getCategoryColor = (id: string) => {
      if (id === 'messaging') return 'border-blue-100 text-blue-900';
      if (id === 'voice') return 'border-purple-100 text-purple-900';
      if (id === 'digital') return 'border-indigo-100 text-indigo-900';
      if (id === 'ai') return 'border-pink-100 text-pink-900';
      if (id === 'dev') return 'border-orange-100 text-orange-900';
      return 'border-slate-100 text-slate-900';
  };

  const getAccentColor = (id: string) => {
      if (id === 'messaging') return 'text-blue-600';
      if (id === 'voice') return 'text-purple-600';
      if (id === 'digital') return 'text-indigo-600';
      if (id === 'ai') return 'text-pink-600';
      if (id === 'dev') return 'text-orange-600';
      return 'text-indigo-600';
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Services - AI, Bulk SMS & Web Development" 
        description="Explore our comprehensive suite of digital services including Bulk SMS, RCS, WhatsApp Business API, Custom Software Development, and AI Solutions." 
        keywords={['Bulk SMS', 'AI Development', 'Web Design', 'SEO Optimization', 'WhatsApp API', 'Custom Software']}
      />
      <style>{`
        .service-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .service-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Header */}
      <div className="bg-white shadow-sm py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-slate-600 max-w-3xl mb-8">
            A complete suite of digital tools designed to build, manage, and scale your business presence and operations.
          </p>
          
          {/* Category Navigation */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a 
                key={cat.id} 
                href={`#${cat.id}`}
                className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-600 text-sm font-semibold hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all shadow-sm"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 space-y-16">
        {categories.map((category) => (
          <div key={category.id} id={category.id} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-slate-300 flex-grow"></div>
              <h2 className={`text-3xl font-bold ${getAccentColor(category.id).replace('text', 'text')}`}>{category.title}</h2>
              <div className="h-px bg-slate-300 flex-grow"></div>
            </div>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">{category.description}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, idx) => (
                <div key={idx} className={`service-card bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-all flex flex-col ${getCategoryColor(category.id)}`}>
                  <div className="p-6 flex-grow">
                    <h3 className={`text-xl font-bold mb-3 ${getAccentColor(category.id)}`}>{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 min-h-[40px] line-clamp-3">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start text-sm text-slate-500">
                          <span className={`${getAccentColor(category.id)} mr-2 opacity-70`}>•</span>
                          {feature.title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 mt-auto">
                    <NavLink to={`/service/${service.id}`} className={`text-sm font-semibold hover:opacity-80 flex items-center justify-between group ${getAccentColor(category.id)}`}>
                      Learn More
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack Section (New) */}
      <div className="container mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Powered by Modern Tech</h2>
        <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-2xl">⚛️</div>
                <h3 className="font-bold text-indigo-900 mb-3 border-b border-indigo-100 pb-2">Frontend Speed</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>React.js (Fast Loading)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>TypeScript (Reliable)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></span>Tailwind (Mobile First)</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 text-2xl">⚙️</div>
                <h3 className="font-bold text-indigo-900 mb-3 border-b border-indigo-100 pb-2">Backend Power</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Node.js (Scalable)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>Python (AI Ready)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>SMPP v3.4 (Direct SMS)</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-2xl">☁️</div>
                <h3 className="font-bold text-indigo-900 mb-3 border-b border-indigo-100 pb-2">Cloud Security</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>MongoDB (Flexible Data)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>AWS / Google Cloud</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Redis (Instant Cache)</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 text-2xl">🧠</div>
                <h3 className="font-bold text-indigo-900 mb-3 border-b border-indigo-100 pb-2">AI Intelligence</h3>
                <ul className="text-sm text-slate-600 space-y-2">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Google Gemini Pro</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>OpenAI GPT-4</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>TensorFlow (ML)</li>
                </ul>
            </div>
        </div>
      </div>

      {/* How It Works (Simple Visual Guide) */}
      <div className="container mx-auto px-4 mt-24">
         <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How It Works (Simplified)</h2>
         <div className="flex flex-col md:flex-row justify-center gap-8 text-center max-w-5xl mx-auto">
            <div className="bg-indigo-50 p-8 rounded-2xl flex-1 relative">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="font-bold text-lg mb-2">You Have a Goal</h4>
                <p className="text-slate-600 text-sm">"I want more customers" or "I want to work faster". You tell us what you need.</p>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 text-slate-300">➜</div>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl flex-1 relative">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="font-bold text-lg mb-2">We Build the Tool</h4>
                <p className="text-slate-600 text-sm">We pick the right technology (Bots, SMS, Cloud) and build a solution just for you.</p>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 text-slate-300">➜</div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl flex-1">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="font-bold text-lg mb-2">You Grow</h4>
                <p className="text-slate-600 text-sm">Your business runs smoother, customers are happier, and you make more profit.</p>
            </div>
         </div>
      </div>

      {/* Service Delivery Process (Technical) */}
      <div className="container mx-auto px-4 mt-24">
         <h2 className="text-2xl font-bold text-center text-slate-500 uppercase tracking-widest mb-12 text-sm">Detailed Technical Process</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-80 hover:opacity-100 transition-opacity">
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">📝</div>
                <h4 className="font-bold mb-2">Requirement Analysis</h4>
                <p className="text-xs text-slate-500">Understanding your business goals.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="font-bold mb-2">Custom Development</h4>
                <p className="text-xs text-slate-500">Building tailored solutions.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-bold mb-2">Quality Assurance</h4>
                <p className="text-xs text-slate-500">Rigorous testing & security checks.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-bold mb-2">Launch & Support</h4>
                <p className="text-xs text-slate-500">Deployment and 24/7 monitoring.</p>
            </div>
         </div>
      </div>

      {/* The WebWorldMaker Advantage */}
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">The WebWorldMaker Advantage</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Integrated Ecosystem</h3>
                <p className="text-indigo-200">
                    Most agencies offer fragmented services. We offer a unified ecosystem. Your bulk SMS campaigns talk to your CRM; your AI chatbot updates your sales dashboard. We ensure data flows seamlessly across your entire business.
                </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Tier-1 Infrastructure</h3>
                <p className="text-slate-600">
                    We don't rely on cheap middlemen. We have direct connections to Tier-1 telecom operators and utilize premium cloud providers (AWS/GCP) to ensure 99.9% uptime and maximum message deliverability.
                </p>
            </div>
        </div>
      </div>

      {/* Keyword CTA */}
      <div className="container mx-auto px-4 mt-20 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Not sure what you need?</h3>
          <p className="mb-6 opacity-90">Use our AI-powered assistant to find the perfect solution package for your business goals.</p>
          <button onClick={() => document.querySelector('button[class*="animate-bounce"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))} className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Ask AI Assistant
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 max-w-4xl">
        <SocialShare url={window.location.href} title="Our Services - WebWorldMaker" />
      </div>
    </div>
  );
};

export default Services;
