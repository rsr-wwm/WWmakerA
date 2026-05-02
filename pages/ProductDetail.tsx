
import React, { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getProducts } from '../services/contentService';
import { ProductItem, FaqItem } from '../types';
import { SocialShare } from '../components/SocialShare';
import { FaqAccordion } from '../components/FaqAccordion';
import { SEO } from '../components/SEO';

// Helper for dynamic icons (reused logic for consistency)
const getFeatureIcon = (title: string, className: string = "w-6 h-6") => {
  const t = title.toLowerCase();
  const props = { className, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" };
  const pathProps = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 2 };

  if (t.includes('analytic') || t.includes('report') || t.includes('track') || t.includes('watch') || t.includes('scan') || t.includes('monitor')) 
    return <svg {...props}><path {...pathProps} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
  
  if (t.includes('message') || t.includes('sms') || t.includes('chat') || t.includes('flow') || t.includes('bot'))
    return <svg {...props}><path {...pathProps} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;

  if (t.includes('secure') || t.includes('protect') || t.includes('encrypt') || t.includes('lock'))
    return <svg {...props}><path {...pathProps} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;

  // Default Spark
  return <svg {...props}><path {...pathProps} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState<ProductItem | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<ProductItem[]>([]);
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
    const products = getProducts();
    const found = products.find(p => p.id === id);
    setProduct(found);
    
    // Find related products (simple logic: same category implied or random others)
    if (found) {
        const others = products.filter(p => p.id !== id).slice(0, 3);
        setRelatedProducts(others);
    }
    
    setIsLoading(false);
    window.scrollTo(0, 0);
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
  const groupedFaqs = product?.faqs?.reduce((acc, faq) => {
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
    if (product) params.set('service', `Product: ${product.title}`);
    if (firstName) params.set('firstName', firstName);
    if (lastName) params.set('lastName', lastName);
    if (email) params.set('email', email);
    
    return params;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;
    const params = getCommonParams();
    navigate(`/contact?${params.toString()}`);
  };

  const handleDemoRequest = () => {
    if (!product) return;
    const params = getCommonParams();
    params.set('message', `I am interested in requesting a demo or trial for ${product.title}.`);
    navigate(`/contact?${params.toString()}`);
  }

  if (isLoading) return <div className="p-20 text-center">Loading Product...</div>;
  if (!product) return <Navigate to="/products" replace />;

  const shareUrl = `${window.location.origin}${window.location.pathname}#/product/${product.id}`;

  const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          "name": product.title,
          "description": product.fullDescription,
          "brand": { "@type": "Brand", "name": "WebWorldMaker" },
          "audience": { "@type": "Audience", "audienceType": product.targetAudience },
          "offers": {
             "@type": "Offer",
             "url": shareUrl,
             "availability": "https://schema.org/InStock"
          }
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
              "name": "Products",
              "item": `${window.location.origin}/#/products`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": product.title,
              "item": shareUrl
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": product.faqs?.map((faq) => ({
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
        title={product.metaTitle}
        description={product.metaDescription}
        schema={schemaData}
        type="product"
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <NavLink to="/products" className="inline-flex items-center text-indigo-200 hover:text-white mb-8 text-sm font-semibold transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Products
          </NavLink>
          <div className="flex flex-wrap gap-3 mb-6">
             <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">{product.pricingModel}</span>
             <span className="bg-indigo-600/50 backdrop-blur-md border border-indigo-400/30 text-indigo-100 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Target: {product.targetAudience}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">{product.title}</h1>
          <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl font-light leading-relaxed">{product.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About the Platform</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-8">{product.fullDescription}</p>
              
              <SocialShare url={shareUrl} title={product.title} />
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Platform Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {product.features?.map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            {getFeatureIcon(feature.title)}
                        </div>
                        
                        {/* Tooltip Implementation for Feature Title */}
                        <div className="relative group/tooltip inline-block mb-2">
                            <h3 className="font-bold text-lg text-slate-900 cursor-help border-b border-dotted border-slate-300 hover:border-indigo-500 transition-colors inline-block">
                                {feature.title}
                            </h3>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20 pointer-events-none transform translate-y-2 group-hover/tooltip:translate-y-0 text-center leading-relaxed">
                                <span className="text-indigo-300 font-bold block mb-1">Benefit:</span>
                                {feature.benefit}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-slate-900"></div>
                            </div>
                        </div>

                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                        
                        <div className="flex items-start gap-2 bg-indigo-50 p-2 rounded-lg border border-indigo-100">
                             <span className="flex-shrink-0 text-green-500 mt-0.5">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </span>
                             <span className="text-xs font-semibold text-slate-700">
                                <span className="text-indigo-600 uppercase tracking-wider text-[10px] font-bold mr-1">Benefit:</span> 
                                {feature.benefit}
                             </span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8 mb-12 border border-indigo-100">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">Why Choose {product.title}?</h2>
                <ul className="space-y-4">
                    {product.benefits?.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5 shadow-sm">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                    </li>
                    ))}
                </ul>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                {groupedFaqs && Object.entries(groupedFaqs).map(([category, faqs]: [string, FaqItem[]]) => (
                  <div key={category} className="mb-8 last:mb-0">
                    <h3 className="text-lg font-bold text-indigo-800 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-lg border border-indigo-100">{category}</h3>
                    <div className="space-y-4">
                      {faqs.map((faq, idx) => {
                        const globalIdx = product!.faqs.indexOf(faq);
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

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Other Products</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {relatedProducts.map((p) => (
                            <NavLink key={p.id} to={`/product/${p.id}`} className="group block bg-white p-5 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-1">{p.title}</h3>
                                <p className="text-slate-500 text-sm line-clamp-2">{p.tagline}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`bg-white rounded-2xl shadow-xl border border-slate-100 sticky top-24 transition-all duration-500 ease-in-out ${isCompact ? 'p-5' : 'p-8'}`}>
              
              {/* Full Header - Hidden when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-0 opacity-0 mb-0' : 'max-h-40 opacity-100 mb-8'}`}>
                  <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Get Started</h3>
                      <p className="text-slate-500 text-sm">Join hundreds of businesses using {product.title}.</p>
                  </div>
              </div>
              
              {/* Compact Header - Visible when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-12 opacity-100 mb-4 text-center' : 'max-h-0 opacity-0'}`}>
                <h3 className="text-lg font-bold text-slate-900">Get Access</h3>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    {!isCompact && <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>}
                    <input 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all" 
                    placeholder="John Doe"
                    />
                </div>
                <div>
                    {!isCompact && <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Business Email</label>}
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm transition-all" 
                    placeholder="john@company.com"
                    />
                </div>
                
                <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-0.5">
                  Get Pricing & Access
                </button>
                
                <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase">or</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <button 
                  type="button" 
                  onClick={handleDemoRequest}
                  className="w-full bg-white text-indigo-600 border-2 border-indigo-100 font-bold py-3 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Request Live Demo
                </button>
              </form>
              
              {/* Footer Info - Hidden when compact */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isCompact ? 'max-h-0 opacity-0 mt-0' : 'max-h-20 opacity-100 mt-6'}`}>
                  <div className="text-center">
                      <p className="text-xs text-slate-400 mb-2">Secure & Private</p>
                      <div className="flex justify-center gap-2 text-slate-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
