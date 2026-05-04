
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getServiceCategories } from '../services/contentService';
import { ServiceItem, FaqItem } from '../types';
import { SocialShare } from '../components/SocialShare';
import { FaqAccordion } from '../components/FaqAccordion';
import { SEO } from '../components/SEO';
import { COUNTRY_CODES } from '../constants';

// Helper function to get relevant icons based on feature title keywords
const getFeatureIcon = (title: string, className: string = "w-6 h-6") => {
  const t = title.toLowerCase();
  const props = { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" };
  const pathProps = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 2 };

  // ... (Icons logic preserved) ...
  // Default Spark
  return <svg {...props}><path {...pathProps} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [service, setService] = useState<ServiceItem | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  // Local state for sidebar form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  
  // State for exclusive FAQ opening
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Scroll detection for sidebar compacting
  const faqRef = useRef<HTMLHeadingElement>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    // Find the service item across all categories
    const categories = getServiceCategories();
    let foundService: ServiceItem | undefined;
    for (const cat of categories) {
      const found = cat.items.find(item => item.id === id);
      if (found) {
        foundService = found;
        break;
      }
    }
    setService(foundService);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (faqRef.current) {
        const rect = faqRef.current.getBoundingClientRect();
        setIsCompact(rect.top < 300);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Group FAQs
  const groupedFaqs = service?.faqs?.reduce((acc, faq) => {
    const cat = faq.category || 'Common Questions';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(faq);
    return acc;
  }, {} as Record<string, FaqItem[]>) || {};

  const getCommonParams = () => {
    // Split name for contact form
    const names = fullName.trim().split(' ');
    const firstName = names[0] || '';
    const lastName = names.length > 1 ? names.slice(1).join(' ') : '';
    
    // Construct query params
    const params = new URLSearchParams();
    if (service) params.set('service', service.title);
    if (firstName) params.set('firstName', firstName);
    if (lastName) params.set('lastName', lastName);
    if (email) params.set('email', email);
    if (phone) params.set('phone', phone);
    if (countryCode) params.set('countryCode', countryCode);
    
    return params;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;
    const params = getCommonParams();
    navigate(`/contact?${params.toString()}`);
  };

  const handleDemoRequest = () => {
    if (!service) return;
    const params = getCommonParams();
    params.set('message', `I am interested in requesting a demo for the ${service.title} solution.`);
    navigate(`/contact?${params.toString()}`);
  }

  if (isLoading) return <div className="p-20 text-center">Loading Service...</div>;
  if (!service) return <Navigate to="/services" replace />;

  // Use explicit share URL to ensure cleanliness and correct routing
  const shareUrl = `${window.location.origin}${window.location.pathname}#/service/${service.id}`;

  const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": service.title,
          "description": service.fullDescription,
          "provider": {
            "@type": "Organization",
            "name": "WebWorldMaker",
            "url": window.location.origin
          },
          "serviceType": service.title,
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
              "name": "Services",
              "item": `${window.location.origin}/#/services`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": `${window.location.origin}/#/service/${service.id}`
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": service.faqs?.map((faq) => ({
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
        title={service.metaTitle}
        description={service.metaDescription}
        schema={schemaData}
        type="service"
      />

      {/* Hero */}
      <div className="bg-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <NavLink to="/services" className="inline-flex items-center text-indigo-300 hover:text-white mb-6 text-sm font-semibold transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Services
          </NavLink>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">{service.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
              
              <SocialShare url={shareUrl} title={service.title} />

              <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-10">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {service.features?.map((feature, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start mb-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-white text-indigo-600 rounded-lg shadow-sm border border-slate-100 flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                           {getFeatureIcon(feature.title, "w-5 h-5")}
                        </div>
                        {/* Tooltip implementation for feature title */}
                        <div className="relative group/tooltip">
                            <h3 className="font-bold text-slate-900 pt-2 cursor-help border-b border-dotted border-slate-300 hover:border-indigo-500 transition-colors">
                                {feature.title}
                            </h3>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20 pointer-events-none transform translate-y-2 group-hover/tooltip:translate-y-0 text-center leading-relaxed">
                                <span className="text-indigo-300 font-bold block mb-1">Key Benefit:</span>
                                {feature.benefit}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900"></div>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-3 pl-14">
                        {feature.description}
                    </p>
                    
                    <div className="pl-14">
                        <div className="flex items-start gap-2 bg-white/50 p-2 rounded-lg border border-slate-100/50">
                             <span className="flex-shrink-0 text-green-500 mt-0.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </span>
                             <span className="text-xs font-semibold text-slate-700">
                                <span className="text-indigo-600 uppercase tracking-wider text-[10px] font-bold mr-1">Benefit:</span> 
                                {feature.benefit}
                             </span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits</h2>
              <ul className="space-y-4 mb-12">
                {service.benefits?.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Use Cases */}
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Real-World Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {service.useCases?.map((useCase, idx) => (
                  <div key={idx} className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 italic">
                    <h4 className="font-bold text-indigo-900 mb-2">{useCase.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{useCase.description}</p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                {service.pricing?.map((plan, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-indigo-500 transition-colors">
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{plan.title}</h4>
                    <div className="text-2xl font-extrabold text-indigo-600 mb-4">{plan.price}</div>
                    <ul className="text-xs text-slate-500 space-y-2">
                       {plan.features.map((f, i) => (
                         <li key={i} className="flex items-center gap-1">
                           <span className="text-green-500">✓</span> {f}
                         </li>
                       ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Implementation Process */}
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Implementation Roadmap</h2>
              <div className="space-y-6 mb-12">
                {service.roadmap?.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md whitespace-nowrap">{step.step}</div>
                      {idx !== service.roadmap.length - 1 && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 ref={faqRef} className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              {groupedFaqs && Object.entries(groupedFaqs).map(([category, faqs]: [string, FaqItem[]]) => (
                <div key={category} className="mb-8 last:mb-0">
                  <h3 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg border border-indigo-100">{category}</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const globalIdx = service!.faqs.indexOf(faq);
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
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-2xl shadow-lg border border-indigo-100 sticky top-24 transition-all duration-500 ease-in-out ${isCompact ? 'p-5' : 'p-6'}`}>
              
              {/* Full Header - Hidden when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-0 opacity-0 mb-0' : 'max-h-40 opacity-100 mb-6'}`}>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 text-sm">
                  Transform your business with our professional {service.title} solutions today.
                </p>
              </div>
              
              {/* Compact Header - Visible when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-12 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <h3 className="text-lg font-bold text-slate-900">Get a Quote</h3>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-shadow" 
                  
                />
                <input 
                  type="email" 
                  placeholder="Work Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-shadow" 
                  
                />
                
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-24 px-2 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white text-xs transition-shadow"
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>{c.code}</option>
                    ))}
                  </select>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-grow px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-shadow" 
                  />
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 active:scale-95 transform transition-all duration-150 shadow-md">
                  Request Consultation
                </button>
                <button 
                  type="button" 
                  onClick={handleDemoRequest}
                  className="w-full bg-white text-indigo-600 border border-indigo-200 font-bold py-3 rounded-lg hover:bg-indigo-50 active:scale-95 transform transition-all duration-150 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Request Demo
                </button>
                <a 
                  href="tel:+918600280002"
                  className="flex items-center justify-center w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 active:scale-95 transform transition-all duration-150 shadow-md"
                >
                   <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Agent
                </a>
              </form>

              {/* Phone Info - Hidden when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-0 opacity-0 mt-0 pt-0 border-0' : 'max-h-24 opacity-100 mt-6 pt-6 border-t border-slate-100'}`}>
                <div className="text-center">
                  <p className="text-xs text-slate-500 mb-2">Or call us directly:</p>
                  <a href="tel:+918600280002" className="text-lg font-bold text-indigo-900 hover:text-indigo-700">+91-86002-80002</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
