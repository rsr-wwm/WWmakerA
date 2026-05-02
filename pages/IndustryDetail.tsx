
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getIndustries, getSolutions } from '../services/contentService';
import { IndustryItem, SolutionItem } from '../types';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';
import { FaqAccordion } from '../components/FaqAccordion';

const IndustryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [industry, setIndustry] = useState<IndustryItem | undefined>(undefined);
  const [relatedSolutions, setRelatedSolutions] = useState<SolutionItem[]>([]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": industry.title,
        "description": industry.metaDescription,
        "provider": { "@type": "Organization", "name": "WebWorldMaker" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": industry.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={industry.metaTitle}
        description={industry.metaDescription}
        schema={schemaData}
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Overview</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {industry.fullDescription}
                    </p>
                    <SocialShare url={window.location.href} title={`${industry.title} Solutions`} />
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Sector Challenges Solved</h2>
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

                {industry.useCases && (
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Success Scenarios</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {industry.useCases.map((uc, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2 border-b border-slate-200 pb-2">{uc.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed italic">"{uc.description}"</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {industry.roadmap && (
                    <section className="mb-16 border-t border-slate-200 pt-16">
                         <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Implementation Roadmap</h2>
                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {industry.roadmap.map((step, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                    <div className="text-4xl font-black text-indigo-50 mb-2 leading-none">{step.step}</div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h4>
                                    <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                         </div>
                    </section>
                )}

                {industry.pricing && (
                    <section className="mb-16 border-t border-slate-200 pt-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Service Models & Pricing</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {industry.pricing.map((p, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-indigo-50 shadow-sm hover:border-indigo-200 transition-all">
                                    <h3 className="text-xl font-bold text-indigo-900 mb-1">{p.title}</h3>
                                    <div className="text-2xl font-black text-slate-900 mb-4">{p.price}</div>
                                    <ul className="space-y-2">
                                        {p.features.map((f, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-600">
                                                <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {industry.faqs && (
                    <section className="mb-16 border-t border-slate-200 pt-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif">Industry Questions (FAQ)</h2>
                        <div className="space-y-4">
                            {industry.faqs.map((faq, idx) => (
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
                )}

                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif">Related Solutions</h2>
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
                    <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                        Speak with a {industry.title} specialist today to audit your current infrastructure and discover ROI-driven opportunities.
                    </p>
                    <button 
                        onClick={() => navigate(`/contact?service=${encodeURIComponent(industry.title)} Solutions`)}
                        className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg mb-4 transform active:scale-95 duration-200"
                    >
                        Request Consultation
                    </button>
                    <div className="text-center pt-4 border-t border-slate-50 mt-4">
                        <p className="text-[10px] text-slate-400 mb-3 uppercase tracking-widest font-black">Trusted by Industry Leaders</p>
                        <div className="flex justify-center gap-4 opacity-40 grayscale">
                            <span className="text-2xl">🏢</span>
                            <span className="text-2xl">🏦</span>
                            <span className="text-2xl">🏭</span>
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
