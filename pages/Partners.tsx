
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Partners: React.FC = () => {
  const partnerTypes = [
    {
      id: 'technology',
      icon: '💻',
      title: 'Technology Partners',
      description: 'Integrate WebWorldMaker\'s APIs (SMS, RCS, AI) into your own software platforms. Ideal for CRM, ERP, and SaaS providers.',
      benefits: ['API Sandbox Access', 'Co-marketing opportunities', 'Dedicated Integration Support']
    },
    {
      id: 'reseller',
      icon: '🏷️',
      title: 'Reseller & White Label',
      description: 'Start your own digital agency using our infrastructure. Rebrand our portal and sell to your local market.',
      benefits: ['Wholesale Pricing', 'White-label Dashboard', '100% Profit Retention']
    },
    {
      id: 'referral',
      icon: '🤝',
      title: 'Referral Partners',
      description: 'Consultants and agencies who refer clients to us. Earn recurring commissions for every deal closed.',
      benefits: ['20% Recurring Commission', 'Partner Portal', 'Sales Collateral']
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Partners - Grow With Us" 
        description="Join the WebWorldMaker Partner Ecosystem. Technology partnerships, white-label reseller programs, and referral opportunities."
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider mb-6">
            Partner Ecosystem
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Grow Faster, Together.</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
            Join hundreds of technology companies, agencies, and consultants leveraging WebWorldMaker's infrastructure to scale their business.
          </p>
          <a href="#programs" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
            View Programs
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        
        {/* Partner Programs */}
        <div id="programs" className="grid md:grid-cols-3 gap-8 mb-24">
          {partnerTypes.map((program) => (
            <div key={program.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-3xl mb-6">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{program.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed h-24">{program.description}</p>
              
              <ul className="space-y-3 mb-8">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-700 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <NavLink to={`/contact?service=Partner Program: ${program.title}`} className="block w-full text-center bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-indigo-600 transition-colors">
                Apply Now
              </NavLink>
            </div>
          ))}
        </div>

        {/* Why Partner Section */}
        <div className="bg-white rounded-3xl p-10 md:p-16 border border-slate-100 mb-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Partner With Us?</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">We provide the tools, support, and infrastructure you need to succeed.</p>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="text-center">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">Tier-1</div>
                 <div className="text-sm font-bold text-slate-900 uppercase">Infrastructure</div>
                 <p className="text-xs text-slate-500 mt-2">Direct carrier connections ensuring 99.9% uptime.</p>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
                 <div className="text-sm font-bold text-slate-900 uppercase">Priority Support</div>
                 <p className="text-xs text-slate-500 mt-2">Dedicated partner success managers.</p>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">API</div>
                 <div className="text-sm font-bold text-slate-900 uppercase">First Platform</div>
                 <p className="text-xs text-slate-500 mt-2">Documentation built for developers, by developers.</p>
               </div>
               <div className="text-center">
                 <div className="text-4xl font-bold text-indigo-600 mb-2">Global</div>
                 <div className="text-sm font-bold text-slate-900 uppercase">Reach</div>
                 <p className="text-xs text-slate-500 mt-2">Send messages to 200+ countries instantly.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Current Partners */}
        <div className="text-center mb-20">
           <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Technology Leaders</h3>
           <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
              <span className="text-2xl font-bold text-slate-600">Google Cloud</span>
              <span className="text-2xl font-bold text-slate-600">AWS Partner</span>
              <span className="text-2xl font-bold text-slate-600">Meta Business</span>
              <span className="text-2xl font-bold text-slate-600">Shopify Plus</span>
              <span className="text-2xl font-bold text-slate-600">HubSpot</span>
           </div>
        </div>

        {/* CTA */}
        <div className="bg-indigo-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-6">Ready to expand your business?</h2>
             <p className="text-indigo-200 mb-8 max-w-xl mx-auto">Whether you want to resell our services or integrate our API, we have a program for you.</p>
             <NavLink to="/contact" className="inline-block bg-white text-indigo-900 font-bold py-4 px-10 rounded-full hover:bg-indigo-50 transition-colors shadow-xl">
               Become a Partner
             </NavLink>
           </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
            <SocialShare url={window.location.href} title="WebWorldMaker Partner Program" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
