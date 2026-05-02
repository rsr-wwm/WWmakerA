
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getGlossary } from '../services/contentService';
import { GlossaryItem } from '../types';
import { SEO } from '../components/SEO';
import { SocialShare } from '../components/SocialShare';

const Glossary: React.FC = () => {
  const [terms, setTerms] = useState<GlossaryItem[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const data = getGlossary().sort((a, b) => a.term.localeCompare(b.term));
    setTerms(data);
  }, []);

  const filteredTerms = terms.filter(item => 
    item.term.toLowerCase().includes(filter.toLowerCase()) || 
    item.definition.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title="Tech Glossary - Digital Definitions" 
        description="Understand the jargon. A comprehensive glossary of terms related to API, AI, Cloud, and Enterprise Messaging."
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Tech Glossary</h1>
            <p className="text-slate-600">Demystifying the language of digital transformation.</p>
        </div>

        <div className="relative mb-12">
            <input 
                type="text" 
                placeholder="Search term..." 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full p-4 pl-12 rounded-xl border border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-lg"
            />
            <svg className="w-6 h-6 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        <div className="space-y-6">
            {filteredTerms.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                        <NavLink 
                            to={`/glossary/${item.term.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-xl font-bold text-indigo-900 hover:text-indigo-600 transition-colors"
                        >
                            {item.term}
                        </NavLink>
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded uppercase tracking-wide">{item.category}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-3">{item.definition}</p>
                    <NavLink 
                        to={`/glossary/${item.term.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-sm text-indigo-500 font-bold hover:underline"
                    >
                        Read Definition →
                    </NavLink>
                </div>
            ))}
            
            {filteredTerms.length === 0 && (
                <div className="text-center py-12 text-slate-500">
                    No terms found matching "{filter}".
                </div>
            )}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
            <SocialShare url={window.location.href} title="WebWorldMaker Tech Glossary" />
        </div>
      </div>
    </div>
  );
};

export default Glossary;
