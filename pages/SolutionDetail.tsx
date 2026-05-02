
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getSolutions } from '../services/contentService';
import { SolutionItem, FaqItem } from '../types';
import { SocialShare } from '../components/SocialShare';
import { FaqAccordion } from '../components/FaqAccordion';
import { SEO } from '../components/SEO';

const SolutionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [solution, setSolution] = useState<SolutionItem | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  // Local state for sidebar form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  
  // State for exclusive FAQ opening
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll detection for sidebar compacting
  const faqRef = useRef<HTMLHeadingElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const data = getSolutions();
    const found = data.find(item => item.id === id);
    setSolution(found);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (faqRef.current) {
        const rect = faqRef.current.getBoundingClientRect();
        // Collapse sidebar when FAQ section approaches top of viewport (scrolled down)
        setIsCompact(rect.top < 300);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Group FAQs
  const groupedFaqs = solution?.faqs?.reduce((acc, faq) => {
    const cat = faq.category || 'Common Questions';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {} as Record<string, FaqItem[]>) || {};

  const getCommonParams = () => {
    const names = fullName.trim().split(' ');
    const firstName = names[0] || '';
    const lastName = names.length > 1 ? names.slice(1).join(' ') : '';
    
    const params = new URLSearchParams();
    if (solution) params.set('service', solution.title); // Use solution title as service interest
    if (firstName) params.set('firstName', firstName);
    if (lastName) params.set('lastName', lastName);
    if (email) params.set('email', email);
    
    return params;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!solution) return;
    const params = getCommonParams();
    navigate(`/contact?${params.toString()}`);
  };

  const handleDemoRequest = () => {
    if (!solution) return;
    const params = getCommonParams();
    params.set('message', `I am interested in requesting a consultation or demo for the ${solution.title} solution package.`);
    navigate(`/contact?${params.toString()}`);
  }

  if (isLoading) return <div className="p-20 text-center">Loading Solution...</div>;
  if (!solution) return <Navigate to="/solutions" replace />;

  // Use explicit share URL to ensure cleanliness and correct routing
  const shareUrl = `${window.location.origin}${window.location.pathname}#/solution/${solution.id}`;

  const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": solution.title,
          "description": solution.fullDescription,
          "provider": {
            "@type": "Organization",
            "name": "WebWorldMaker",
            "url": window.location.origin
          },
          "areaServed": "Global"
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": window.location.origin
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Solutions",
              "item": `${window.location.origin}/#/solutions`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": solution.title,
              "item": shareUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": solution.faqs?.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })) || [],
        }
      ]
    };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={solution.metaTitle}
        description={solution.metaDescription}
        schema={schemaData}
        type="service"
      />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <NavLink to="/solutions" className="inline-flex items-center text-indigo-300 hover:text-white mb-6 text-sm font-semibold transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Solutions
          </NavLink>
          <div className="inline-block bg-indigo-900 text-indigo-200 text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide mb-4 border border-indigo-700">
             Strategic Focus: {solution.focus}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{solution.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl">{solution.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {solution.fullDescription}
              </p>
              
              <SocialShare url={shareUrl} title={solution.title} />

              <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-10">Core Components</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {solution.features?.map((feature, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition-colors border border-slate-100">
                    <div className="flex items-start mb-2">
                        <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs mr-3 mt-0.5">
                        ✓
                        </div>
                        <span className="text-slate-900 font-bold">{feature.title}</span>
                    </div>
                    
                    <div className="ml-9">
                        <div className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-100">
                             <span className="flex-shrink-0 text-green-500 mt-0.5">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </span>
                             <span className="text-xs font-semibold text-slate-600">
                                <span className="text-indigo-600 uppercase tracking-wider text-[10px] font-bold mr-1">Benefit:</span> 
                                {feature.benefit}
                             </span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Strategic Benefits</h2>
              <ul className="space-y-4 mb-8">
                {solution.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h2 ref={faqRef} className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              {groupedFaqs && Object.entries(groupedFaqs).map(([category, faqs]: [string, FaqItem[]]) => (
                <div key={category} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg border border-indigo-100">{category}</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const globalIdx = solution!.faqs.indexOf(faq);
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

              <div className="mt-12 pt-8 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Share this Solution</h3>
                <SocialShare url={shareUrl} title={solution.title} hideLabel={true} />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-2xl shadow-lg border border-indigo-100 sticky top-24 transition-all duration-500 ease-in-out ${isCompact ? 'p-5' : 'p-6'}`}>
              
              {/* Full Header - Hidden when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-0 opacity-0 mb-0' : 'max-h-40 opacity-100 mb-6'}`}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Implement This Strategy</h3>
                <p className="text-slate-600 text-sm">
                  Ready to deploy the {solution.title} solution in your business?
                </p>
              </div>
              
              {/* Compact Header - Visible when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-12 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <h3 className="text-lg font-bold text-slate-900">Get Started</h3>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" 
                  
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm" 
                  
                />
                <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 active:scale-95 transform transition-all duration-150">
                  Get Strategy Audit
                </button>
                <button 
                  type="button" 
                  onClick={handleDemoRequest}
                  className="w-full bg-white text-indigo-600 border border-indigo-200 font-bold py-3 rounded-lg hover:bg-indigo-50 active:scale-95 transform transition-all duration-150"
                >
                  Request Demo
                </button>
              </form>
              
              {/* Phone Info - Hidden when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-0 opacity-0 mt-0 pt-0 border-0' : 'max-h-24 opacity-100 mt-6 pt-6 border-t border-slate-100'}`}>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-2">Or call us directly:</p>
                  <a href="tel:+15551234567" className="text-lg font-bold text-indigo-900 hover:text-indigo-700">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
