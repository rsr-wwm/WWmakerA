
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const CaseStudies: React.FC = () => {
  const studies = [
    {
      id: 'fintech-growth',
      client: 'PayFast Global',
      industry: 'FinTech',
      title: 'Scaling OTP Delivery to 50M/Month',
      challenge: 'PayFast was experiencing a 15% failure rate in OTP delivery using standard routes, causing user churn during sign-up.',
      solution: 'We implemented our SecureGate 2FA infrastructure with direct carrier connections and intelligent fallback to WhatsApp.',
      results: [
        '99.99% Delivery Rate achieved',
        '30% Reduction in SMS costs via fraud blocking',
        '12% Increase in User Activation'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'retail-engagement',
      client: 'StyleHub Fashion',
      industry: 'E-commerce',
      title: 'Recovering $1.2M in Abandoned Carts',
      challenge: 'Email open rates for cart recovery dropped below 10%. Customers were ignoring reminders.',
      solution: 'Deployed an omnichannel strategy using WhatsApp Business API and RCS to send rich-media cart reminders with instant checkout buttons.',
      results: [
        '45% Recovery Rate on WhatsApp',
        '$1.2M Additional Revenue in Q4',
        '25x ROI on messaging spend'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'logistics-automation',
      client: 'SwiftCargo',
      industry: 'Logistics',
      title: 'Automating Customer Support with AI',
      challenge: 'Support team was overwhelmed with "Where is my order?" calls, leading to 45-minute wait times.',
      solution: 'Integrated a Gemini-powered Voice Bot and WhatsApp Chatbot connected directly to their tracking ERP.',
      results: [
        '80% of queries resolved without humans',
        '0 minute wait time for status checks',
        'Support staff reallocated to sales'
      ],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Case Studies & Success Stories" 
        description="See how WebWorldMaker helps businesses scale. Real results from FinTech, Retail, and Logistics clients."
      />

      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real problems. Real solutions. Real results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          {studies.map((study, idx) => (
            <div key={study.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300`}>
              <div className="lg:w-1/2 relative h-64 lg:h-auto">
                <img src={study.image} alt={study.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-900">
                    {study.industry}
                </div>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wide mb-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                    Client: {study.client}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{study.title}</h2>
                
                <div className="space-y-6 mb-8">
                    <div>
                        <h4 className="font-bold text-red-500 mb-1 flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> Challenge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-green-600 mb-1 flex items-center gap-2"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase">Key Results</h4>
                    <ul className="space-y-2">
                        {study.results.map((res, i) => (
                            <li key={i} className="flex items-center text-slate-700 font-medium">
                                <span className="text-indigo-500 mr-2">➜</span> {res}
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-indigo-900 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to be our next success story?</h2>
            <p className="text-indigo-200 mb-8">Let's analyze your current infrastructure and find opportunities for growth.</p>
            <NavLink to="/contact" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
                Schedule a Consultation
            </NavLink>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto">
            <SocialShare url={window.location.href} title="WebWorldMaker Case Studies" />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
