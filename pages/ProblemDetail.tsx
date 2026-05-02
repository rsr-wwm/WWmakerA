
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { PROBLEMS, SERVICE_CATEGORIES } from '../constants';
import { SocialShare } from '../components/SocialShare';
import { FaqAccordion } from '../components/FaqAccordion';
import { SEO } from '../components/SEO';

const ProblemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  const problem = PROBLEMS.find(p => p.id === id);

  // Group FAQs
  const groupedFaqs = problem?.faqs.reduce((acc, faq) => {
    const cat = faq.category || 'Common Questions';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {} as Record<string, typeof problem.faqs>);

  if (!problem) return <Navigate to="/problems" replace />;

  // Find related services to display as solutions
  const relatedServices = SERVICE_CATEGORIES.flatMap(cat => cat.items).filter(item => problem.relatedServices.includes(item.id));

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": problem.title,
        "description": problem.metaDescription,
        "author": { "@type": "Organization", "name": "WebWorldMaker" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": problem.faqs.map((faq) => ({
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
        title={problem.metaTitle}
        description={problem.metaDescription}
        schema={schemaData}
        type="article"
      />

      {/* Hero Header */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <NavLink to="/problems" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 text-sm font-semibold transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Challenges
          </NavLink>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
               <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-bold uppercase mb-6">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  The Challenge
               </div>
               <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">{problem.title}</h1>
               <p className="text-xl font-medium text-slate-900 mb-6">{problem.shortDescription}</p>
               <p className="text-lg text-slate-600 leading-relaxed">{problem.fullDescription}</p>
            </div>
            
            {/* Symptoms Card */}
            <div className="w-full lg:w-1/3 bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
               <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center border-b border-slate-200 pb-4">
                  <span className="text-2xl mr-3">⚠️</span> Common Symptoms
               </h3>
               <ul className="space-y-4">
                  {problem.symptoms.map((symptom, idx) => (
                     <li key={idx} className="flex items-start text-sm text-slate-700">
                        <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        {symptom}
                     </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
         <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
               <section className="mb-16">
                   <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                       <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-lg">🛠️</span>
                       How We Solve It
                   </h2>
                   <div className="prose prose-lg prose-indigo text-slate-600 leading-relaxed bg-white p-8 rounded-2xl border border-slate-100 shadow-sm mb-12">
                      <p>{problem.ourSolution}</p>
                   </div>
                   
                   {problem.roadmap && (
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">Resolution Roadmap</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                {problem.roadmap.map((step, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="text-2xl font-black text-indigo-100 mb-1 leading-none">{step.step}</div>
                                        <h4 className="font-bold text-slate-900 text-xs mb-1">{step.title}</h4>
                                        <p className="text-slate-500 text-[10px] leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {problem.useCases && (
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">Success Scenarios</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {problem.useCases.map((uc, idx) => (
                                    <div key={idx} className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 italic relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 group-hover:scale-110 transition-transform">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 14.691 16.708 12 20.017 12L20.017 12L20.017 21L14.017 21ZM4.017 21L4.017 18C4.017 14.691 6.708 12 10.017 12L10.017 12L10.017 21L4.017 21Z"/></svg>
                                        </div>
                                        <h4 className="font-bold text-indigo-900 mb-1 text-sm relative z-10">{uc.title}</h4>
                                        <p className="text-slate-700 text-xs text-opacity-80 relative z-10 leading-relaxed">"{uc.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {problem.pricing && (
                        <div className="mb-12">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">Solutions & Pricing</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {problem.pricing.map((p, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all shadow-sm">
                                        <h4 className="font-bold text-indigo-900 mb-1">{p.title}</h4>
                                        <div className="text-xl font-black text-slate-800 mb-4">{p.price}</div>
                                        <ul className="space-y-2">
                                            {p.features.map((f, i) => (
                                                <li key={i} className="flex items-center text-xs text-slate-600">
                                                    <svg className="w-3 h-3 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
               </section>

               <section className="mb-16">
                   <h3 className="text-2xl font-bold text-slate-900 mb-8">Recommended Services</h3>
                   <div className="grid md:grid-cols-2 gap-6">
                      {relatedServices.map((service) => (
                         <NavLink key={service.id} to={`/service/${service.id}`} className="group block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-bold text-indigo-900 text-lg group-hover:text-indigo-600 transition-colors">{service.title}</h4>
                                <svg className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                            <p className="text-sm text-slate-600 line-clamp-2">{service.description}</p>
                         </NavLink>
                      ))}
                   </div>
               </section>

               <section className="mb-12">
                   <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                   {groupedFaqs && Object.entries(groupedFaqs).map(([category, faqs]) => (
                    <div key={category} className="mb-8 last:mb-0">
                        <h4 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg border border-indigo-100">{category}</h4>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => {
                                const globalIdx = problem!.faqs.indexOf(faq);
                                return (
                                    <FaqAccordion 
                                        key={globalIdx}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openFaqIndex === globalIdx}
                                        onToggle={() => setOpenFaqIndex(openFaqIndex === globalIdx ? null : globalIdx)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                   ))}
               </section>
               
               <SocialShare url={window.location.href} title={`Solution for: ${problem.title}`} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
               <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl sticky top-24 overflow-hidden relative">
                  {/* Decorative bg */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Eliminate This Bottleneck</h3>
                  <p className="text-indigo-200 mb-8 relative z-10 text-sm leading-relaxed">
                     Don't let "{problem.title}" hold your business back. Our experts have solved this for hundreds of clients.
                  </p>
                  
                  <div className="space-y-4 relative z-10">
                      <button 
                        onClick={() => navigate(`/contact?service=${encodeURIComponent(problem.title)}`)} 
                        className="block w-full bg-white text-indigo-900 text-center font-bold py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg"
                      >
                         Get Expert Help
                      </button>
                      <button 
                        onClick={() => navigate('/services')}
                        className="block w-full bg-transparent border border-indigo-400 text-white text-center font-bold py-3 rounded-xl hover:bg-indigo-800 transition-colors"
                      >
                         Browse All Services
                      </button>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-indigo-800 relative z-10">
                      <div className="flex items-center justify-center gap-2 text-xs text-indigo-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                          Available for Free Consultation
                      </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProblemDetail;
