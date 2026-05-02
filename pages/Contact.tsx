
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FaqAccordion } from '../components/FaqAccordion';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    serviceInterest: 'Bulk SMS / Messaging',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const defaultOptions = [
    "Bulk SMS / Messaging",
    "Web / App Development",
    "AI Solutions",
    "Reseller Program",
    "Other"
  ];

  const contactFaqs = [
    { question: "What is your typical response time?", answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent support, please use our dedicated support line available to premium clients." },
    { question: "Do you offer custom SLAs?", answer: "Yes, for enterprise clients we offer tailored Service Level Agreements including 24/7 support availability, dedicated account managers, and guaranteed uptime." },
    { question: "Where are your offices located?", answer: "Our headquarters are in Innovation City, but we operate as a remote-first company with teams globally distributed to support all time zones." },
    { question: "Do you work with startups?", answer: "Absolutely. We have specific packages designed to help startups scale their infrastructure cost-effectively without compromising on quality." }
  ];

  // Initialize from URL params
  useEffect(() => {
    const service = searchParams.get('service');
    const fname = searchParams.get('firstName');
    const lname = searchParams.get('lastName');
    const emailParam = searchParams.get('email');
    const msgParam = searchParams.get('message');

    setFormData(prev => ({
      ...prev,
      firstName: fname || prev.firstName,
      lastName: lname || prev.lastName,
      email: emailParam || prev.email,
      serviceInterest: service || prev.serviceInterest,
      message: msgParam || prev.message
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      serviceInterest: 'Bulk SMS / Messaging',
      message: ''
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('submitting');
    setTimeout(() => {
      setNewsletterStatus('success');
      setNewsletterEmail('');
    }, 1000);
  };

  // Dynamically add the passed service to options if it's not in the default list
  const options = defaultOptions.includes(formData.serviceInterest) 
    ? defaultOptions 
    : [formData.serviceInterest, ...defaultOptions];

  // Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-white py-16">
      <SEO 
        title="Contact Us - Sales & Support"
        description="Get in touch with WebWorldMaker for inquiries about Bulk SMS, AI Solutions, or Web Development. We are ready to help you scale."
        schema={faqSchema}
      />
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Let's Talk Business</h1>
          <p className="text-slate-600">Ready to scale? Fill out the form below and we'll get back to you.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          {/* Info */}
          <div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Office</h4>
                    <p className="text-slate-600 text-sm mt-1">123 Digital Valley, Tech District<br />Innovation City, IC 54321</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm mt-1">sales@webworldmaker.com<br />support@webworldmaker.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-lg hover:scale-110">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">WhatsApp</h4>
                    <p className="text-slate-600 text-sm mt-1">Chat with us: bit.ly/wwmchat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {isSuccess ? (
              <div 
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center h-full flex flex-col justify-center items-center animate-fade-in-up" 
                role="alert"
                aria-live="polite"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button 
                  onClick={handleReset}
                  className="text-green-600 font-semibold hover:text-green-800 underline transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact Form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input 
                      id="firstName"
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input 
                      id="lastName"
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow" 
                  />
                </div>

                <div>
                  <label htmlFor="serviceInterest" className="block text-sm font-medium text-slate-700 mb-1">
                    Service Interest
                    <span className="text-xs text-slate-400 font-normal ml-2">(Auto-fills from service pages)</span>
                  </label>
                  <select 
                    id="serviceInterest"
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-600 transition-shadow"
                  >
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    rows={4} 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-shadow"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-indigo-600 text-white font-bold py-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-indigo-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Support FAQs */}
        <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {contactFaqs.map((faq, idx) => (
                    <FaqAccordion 
                        key={idx} 
                        question={faq.question} 
                        answer={faq.answer} 
                        isOpen={openFaqIndex === idx}
                        onToggle={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    />
                ))}
            </div>
        </div>

        {/* The Weekly Dose Newsletter */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden text-white shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                 <span className="inline-block bg-indigo-500/20 border border-indigo-500/50 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                    The Weekly Dose
                 </span>
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay ahead of the curve.</h2>
                 <p className="text-slate-300 text-lg">
                    Join 10,000+ digital leaders. Get the latest on AI, RCS messaging, and business automation delivered to your inbox weekly. No spam, just value.
                 </p>
              </div>
              <div className="md:w-1/2 w-full">
                 {newsletterStatus === 'success' ? (
                    <div className="bg-green-500/20 border border-green-500/50 text-green-300 p-6 rounded-xl text-center animate-fade-in-up">
                        <div className="text-3xl mb-2">🎉</div>
                        <h3 className="font-bold text-white">Welcome to the inner circle!</h3>
                        <p className="text-sm">Check your inbox for your first dose.</p>
                    </div>
                 ) : (
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input 
                           type="email" 
                           placeholder="Enter your work email" 
                           required
                           value={newsletterEmail}
                           onChange={(e) => setNewsletterEmail(e.target.value)}
                           className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        />
                        <button 
                           type="submit" 
                           disabled={newsletterStatus === 'submitting'}
                           className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 focus:ring-4 focus:ring-indigo-900 disabled:opacity-70 disabled:transform-none"
                        >
                           {newsletterStatus === 'submitting' ? 'Joining...' : 'Subscribe Free'}
                        </button>
                    </form>
                 )}
                 <p className="text-slate-500 text-xs mt-4">
                    By subscribing, you agree to our Terms & Privacy Policy. Unsubscribe anytime.
                 </p>
              </div>
           </div>
        </div>

        {/* What Happens Next */}
        <div className="max-w-4xl mx-auto border-t border-slate-200 pt-16">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                    <div className="w-16 h-16 bg-white border-2 border-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">1</div>
                    <h3 className="font-bold text-slate-900 mb-2">Initial Review</h3>
                    <p className="text-slate-600 text-sm">Our team reviews your inquiry within 24 hours to understand your basic requirements.</p>
                </div>
                <div className="text-center group">
                    <div className="w-16 h-16 bg-white border-2 border-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">2</div>
                    <h3 className="font-bold text-slate-900 mb-2">Discovery Call</h3>
                    <p className="text-slate-600 text-sm">We schedule a brief 15-min call to discuss your goals and how our solutions align.</p>
                </div>
                <div className="text-center group">
                    <div className="w-16 h-16 bg-white border-2 border-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">3</div>
                    <h3 className="font-bold text-slate-900 mb-2">Proposal & Launch</h3>
                    <p className="text-slate-600 text-sm">We provide a tailored proposal. Once approved, we begin the onboarding process immediately.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
