
import React from 'react';
import { NavLink } from 'react-router-dom';
import { PROBLEMS } from '../constants';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Problems: React.FC = () => {
  // Schema for Problem List (FAQPage style or ItemList)
  const problemSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": PROBLEMS.map((problem, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": problem.title,
        "description": problem.shortDescription,
        "url": `${window.location.origin}/#/problem/${problem.id}`
      }))
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Common Business Problems We Solve" 
        description="Identify your business challenges. From low engagement to data loss, find the right solution with WebWorldMaker."
        schema={problemSchema}
      />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Challenges We Solve</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Find the right solution for your specific business pain points.
          </p>
          
          {/* Problem Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Engagement', 'Security', 'Operations', 'Sales'].map((cat) => (
              <button 
                key={cat}
                className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROBLEMS.map((problem) => (
            <div key={problem.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-lg transition-all duration-300 flex flex-col group hover:border-red-100">
              <div className="mb-4">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center text-xl mb-4 group-hover:bg-red-100 transition-colors">
                  ⚠️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-900 transition-colors">{problem.title}</h3>
                <p className="text-slate-600 text-sm line-clamp-3">{problem.shortDescription}</p>
              </div>
              
              <div className="mt-auto border-t border-slate-50 pt-4">
                <NavLink to={`/problem/${problem.id}`} className="text-indigo-600 font-bold text-sm flex items-center group-hover:text-indigo-800">
                  See The Solution 
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
           <SocialShare url={window.location.href} title="Challenges We Solve - WebWorldMaker" />
        </div>
      </div>
    </div>
  );
};

export default Problems;
