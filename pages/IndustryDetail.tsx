
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getIndustries, getSolutions } from '../services/contentService';
import { IndustryItem, SolutionItem } from '../types';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState<IndustryItem | undefined>(undefined);
  const [relatedSolutions, setRelatedSolutions] = useState<SolutionItem[]>([]);

  useEffect(() => {
    const allIndustries = getIndustries();
    const found = allIndustries.find(i => i.id === id);
    setIndustry(found);

    if (found) {
        const allSolutions = getSolutions();
        // Match solutions if IDs match or simple fallback
        const related = allSolutions.filter(s => found.solutions.includes(s.id));
        setRelatedSolutions(related.length > 0 ? related : allSolutions.slice(0, 2));
    }
  }, [id]);

  if (!industry) return <Navigate to="/industries" replace />;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={industry.metaTitle}
        description={industry.metaDescription}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <NavLink to="/industries" className="inline-flex items-center text-indigo-300 hover:text-white mb-6 text-sm font-semibold transition-colors">
                        ← Back to Industries
                    </NavLink>
                    <div className="inline-block bg-indigo-800/50 backdrop-blur border border-indigo-700 text-indigo-100 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        Industry Vertical
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 flex items-center gap-4">
                        <span>{industry.icon}</span> {industry.title}
                    </h1>
                    <p className="text-xl text-indigo-100 leading-relaxed max-w-2xl">
                        {industry.description}
                    </p>
                </div>
                {/* Stats Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl min-w-[300px]">
                    <h3 className="text-xs font-bold text-indigo-200 uppercase mb-6 tracking-widest">Impact Metrics</h3>
                    <div className="space-y-6">
                        {industry.stats.map((stat, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                <span className="text-3xl font-bold text-white">{stat.value}</span>
                                <span className="text-sm text-indigo-200 font-medium">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {industry.fullDescription}
                    </p>
                    <SocialShare url={window.location.href} title={`${industry.title} Solutions`} />
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Sector Challenges Solved</h2>
                    <div className="grid gap-6">
                        {industry.challenges.map((challenge, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                                <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-1">{challenge.title}</h3>
                                    <p className="text-slate-600">{challenge.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Recommended Solutions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {relatedSolutions.map(sol => (
                            <NavLink key={sol.id} to={`/solution/${sol.id}`} className="block bg-white border border-indigo-100 p-6 rounded-xl hover:border-indigo-300 hover:shadow-lg transition-all group">
                                <h4 className="font-bold text-indigo-900 text-lg mb-2 group-hover:text-indigo-600">{sol.title}</h4>
                                <p className="text-sm text-slate-600 line-clamp-2">{sol.description}</p>
                                <span className="text-xs font-bold text-indigo-500 mt-4 inline-block uppercase tracking-wide">View Strategy →</span>
                            </NavLink>
                        ))}
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 sticky top-24">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Transform Your Business</h3>
                    <p className="text-slate-600 mb-8 text-sm">
                        Speak with a {industry.title} specialist today to audit your current infrastructure.
                    </p>
                    <button 
                        onClick={() => navigate(`/contact?service=${encodeURIComponent(industry.title)} Solutions`)}
                        className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg mb-4"
                    >
                        Request Consultation
                    </button>
                    <div className="text-center">
                        <p className="text-xs text-slate-400 mb-2">Trusted by leaders in {industry.title}</p>
                        <div className="flex justify-center gap-2 opacity-50 grayscale">
                            <span className="text-xl">🏢</span>
                            <span className="text-xl">🏦</span>
                            <span className="text-xl">🏭</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
