
import React, { useEffect, useRef, useState } from 'react';
import { getSolutions } from '../services/contentService';
import { SolutionItem } from '../types';
import { NavLink } from 'react-router-dom';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Solutions: React.FC = () => {
  const [solutions, setSolutions] = useState<SolutionItem[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Load data
    const data = getSolutions();
    setSolutions(data);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.solution-card');
    cards.forEach((card) => {
      observerRef.current?.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [solutions]); // Re-run when solutions loaded

  // Prepare schema for SEO
  const solutionsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": solutions.map((solution, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": solution.title,
        "description": solution.outcome,
        "url": `${window.location.origin}/#/solution/${solution.id}`
      }))
  };

  const getSolutionIcon = (id: string) => {
      const className = "w-8 h-8 text-indigo-600";
      switch(true) {
          case id.includes('customer') || id.includes('engagement'):
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
          case id.includes('digital') || id.includes('transform'):
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>;
          case id.includes('omni') || id.includes('market'):
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;
          case id.includes('ai') || id.includes('auto'):
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
          case id.includes('remote') || id.includes('infra'):
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
          case id.includes('data') || id.includes('content'):
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
          default:
              return <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Strategic Solutions - Tailored for Success" 
        description="Packaged digital solutions solving specific business problems. From Customer Engagement Overhauls to Digital Transformation."
        schema={solutionsSchema}
      />
      <style>{`
        .solution-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .solution-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Problems We Solve</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            We don't just sell services; we provide packaged solutions designed to solve specific business problems and drive measurable outcomes.
          </p>
          
          {/* Solution Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {Array.from(new Set(solutions.map(s => s.focus))).map((focus) => (
              <button 
                key={focus}
                onClick={() => {
                  // Simple scroll to first item with this focus
                  const firstMatch = solutions.find(s => s.focus === focus);
                  if (firstMatch) {
                    const element = document.getElementById(`solution-${firstMatch.id}`);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-slate-900 transition-all"
              >
                {focus}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {solutions.map((solution, idx) => (
            <div key={idx} id={`solution-${solution.id}`} className="solution-card flex flex-col md:flex-row gap-6 bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all hover:shadow-xl hover:border-indigo-100 group scroll-mt-24">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   {getSolutionIcon(solution.id)}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{solution.title}</h3>
                <div className="mb-4">
                  <span className="inline-block bg-white border border-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide shadow-sm">
                    Focus: {solution.focus}
                  </span>
                </div>
                <p className="text-slate-600 mb-6 font-medium bg-white/50 p-3 rounded-lg border border-slate-100/50">Outcome: {solution.outcome}</p>
                
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Solution Components:</h4>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feat, fIdx) => (
                    <li key={fIdx} className="relative flex items-center text-slate-600 text-sm group/item cursor-help w-fit">
                      <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="border-b border-dotted border-slate-300 hover:border-indigo-500 transition-colors">{feat.title}</span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[250px] bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-20 pointer-events-none transform translate-y-2 group-hover/item:translate-y-0 text-center leading-relaxed border border-slate-700">
                        <span className="font-bold block mb-1 text-emerald-400">Benefit:</span>
                        {feat.benefit}
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900"></div>
                      </div>
                    </li>
                  ))}
                </ul>
                <NavLink 
                  to={`/solution/${solution.id}`}
                  className="inline-flex items-center text-indigo-600 font-bold text-sm hover:text-indigo-800 transition-colors"
                >
                  View Strategy Strategy <span className="ml-1">→</span>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics / ROI */}
      <div className="bg-white py-20 border-t border-slate-100">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Average ROI Indicators</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-emerald-200 transition-colors">
                  <div className="text-5xl font-extrabold text-emerald-500 mb-2">300%</div>
                  <p className="text-slate-900 font-bold text-lg">Increase in Engagement</p>
                  <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">For Messaging Overhaul</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-blue-200 transition-colors">
                  <div className="text-5xl font-extrabold text-blue-500 mb-2">45%</div>
                  <p className="text-slate-900 font-bold text-lg">Cost Reduction</p>
                  <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">Using AI Automation</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center hover:border-purple-200 transition-colors">
                  <div className="text-5xl font-extrabold text-purple-500 mb-2">2x</div>
                  <p className="text-slate-900 font-bold text-lg">Lead Conversion</p>
                  <p className="text-xs text-slate-500 mt-2 uppercase tracking-wide">With Omnichannel Marketing</p>
               </div>
            </div>
         </div>
      </div>

      {/* Methodology Section */}
      <div className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Simple Process</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 text-center">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-sm flex-1">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🔍</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">1. We Find the Problem</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">We look at your business to find where you are losing money or time.</p>
                </div>
                
                <div className="hidden md:flex items-center text-slate-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-sm flex-1">
                    <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🏗️</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">2. We Build the Fix</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">We build the custom software or AI tool that solves that specific problem.</p>
                </div>

                <div className="hidden md:flex items-center text-slate-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-sm flex-1">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">🚀</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">3. You Grow</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">We launch the solution and you start seeing results (more sales, less work).</p>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 max-w-4xl">
               <SocialShare url={window.location.href} title="Strategic Solutions - WebWorldMaker" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
