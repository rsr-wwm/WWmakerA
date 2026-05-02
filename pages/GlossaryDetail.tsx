
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { getGlossary } from '../services/contentService';
import { GlossaryItem } from '../types';
import { SEO } from '../components/SEO';
import { SocialShare } from '../components/SocialShare';

const GlossaryDetail: React.FC = () => {
  const { term } = useParams<{ term: string }>();
  const [item, setItem] = useState<GlossaryItem | undefined>(undefined);

  useEffect(() => {
    const data = getGlossary();
    // Normalize logic for finding term (replace dashes with spaces for search if needed, but safer to match processed slug)
    const found = data.find(g => g.term.toLowerCase().replace(/\s+/g, '-') === term?.toLowerCase());
    setItem(found);
  }, [term]);

  if (!item) return <div className="p-20 text-center">Loading term...</div>;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={`${item.term} - Tech Definition`} 
        description={`What is ${item.term}? Definition and explanation for ${item.term} in the context of ${item.category}.`}
      />

      <div className="bg-white border-b border-slate-200 py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
            <NavLink to="/glossary" className="text-indigo-600 font-bold text-sm mb-4 inline-block hover:underline">← Back to Glossary</NavLink>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">{item.term}</h1>
            <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">{item.category}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Definition</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
                {item.definition}
            </p>
        </div>

        <div className="text-center">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Explore More Terms</h3>
            <div className="flex flex-wrap justify-center gap-4">
                <NavLink to="/glossary/api" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">API</NavLink>
                <NavLink to="/glossary/cloud-computing" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">Cloud Computing</NavLink>
                <NavLink to="/glossary/llm" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors">LLM</NavLink>
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
            <SocialShare url={window.location.href} title={`Definition of ${item.term}`} />
        </div>
      </div>
    </div>
  );
};

export default GlossaryDetail;
