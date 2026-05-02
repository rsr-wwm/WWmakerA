
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getIndustries } from '../services/contentService';
import { IndustryItem } from '../types';
import { SEO } from '../components/SEO';
import { SocialShare } from '../components/SocialShare';

const Industries: React.FC = () => {
  const [industries, setIndustries] = useState<IndustryItem[]>([]);

  useEffect(() => {
    setIndustries(getIndustries());
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Industries We Serve - Vertical Solutions" 
        description="Tailored digital transformation solutions for Fintech, Healthcare, Retail, Logistics, and more."
      />

      {/* Hero */}
      <div className="bg-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Industries We Empower</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Specialized infrastructure and automation tools designed for your specific sector's compliance and operational needs.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <NavLink 
                key={ind.id} 
                to={`/industry/${ind.id}`}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                    {ind.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{ind.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow">{ind.description}</p>
              
              <div className="pt-6 border-t border-slate-50">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 block">Key Solutions</span>
                  <div className="flex flex-wrap gap-2">
                      {ind.challenges.slice(0, 2).map((c, i) => (
                          <span key={i} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded border border-slate-200">
                              {c.title}
                          </span>
                      ))}
                  </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see your industry?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Our core technologies (Messaging, AI, Cloud) are agnostic. We build custom solutions for Agriculture, Energy, Government, and more.
            </p>
            <NavLink to="/contact" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors">
                Contact for Custom Solutions
            </NavLink>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
            <SocialShare url={window.location.href} title="Industries Served - WebWorldMaker" />
        </div>
      </div>
    </div>
  );
};

export default Industries;
