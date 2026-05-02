
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { FaqAccordion } from '../components/FaqAccordion';
import { SocialShare } from '../components/SocialShare';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [activeCategory, setActiveCategory] = useState<'saas' | 'messaging' | 'ai'>('saas');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pricingFaqs = [
    { question: "Do I need a credit card to sign up?", answer: "No, you can create a free account and access the sandbox environment without a credit card. Payment is only required when you upgrade to a paid plan or purchase credits." },
    { question: "How does usage-based pricing work?", answer: "For services like SMS and AI, you purchase 'Credits'. These credits never expire. 1 Credit = $1 USD. Costs are deducted from your balance as you use the services." },
    { question: "Can I switch plans later?", answer: "Absolutely. You can upgrade or downgrade your SaaS subscription at any time. Prorated charges will be calculated automatically." },
    { question: "Do you offer volume discounts?", answer: "Yes! If you are sending more than 100,000 messages per month or need enterprise AI capacity, contact our sales team for wholesale rates." }
  ];

  const saasPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with automation.",
      price: billingCycle === 'monthly' ? 49 : 39,
      features: [
        "5,000 Contacts",
        "1 User Seat",
        "Basic SMS & Email Campaigns",
        "Standard Support",
        "1 Automated Workflow"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Growth",
      description: "For growing teams that need advanced tracking and AI tools.",
      price: billingCycle === 'monthly' ? 199 : 159,
      features: [
        "50,000 Contacts",
        "5 User Seats",
        "Omnichannel (WhatsApp + SMS)",
        "Campaign Manager Pro Access",
        "Unlimited Workflows",
        "AI Content Generator"
      ],
      cta: "Get Growth",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Full-scale infrastructure for large organizations.",
      price: "Custom",
      features: [
        "Unlimited Contacts",
        "Unlimited Seats",
        "Dedicated Account Manager",
        "SLA & 99.99% Uptime",
        "Custom API Integrations",
        "White Label Options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Pricing - Transparent & Scalable" 
        description="View pricing for WebWorldMaker services. SaaS subscriptions for software, and pay-as-you-go rates for SMS, WhatsApp, and AI usage." 
      />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Choose a plan that fits your stage of growth. No hidden fees.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Category Switcher */}
        <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm inline-flex">
                <button 
                    onClick={() => setActiveCategory('saas')}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${activeCategory === 'saas' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                    SaaS Platforms
                </button>
                <button 
                    onClick={() => setActiveCategory('messaging')}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${activeCategory === 'messaging' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                    Messaging API
                </button>
                <button 
                    onClick={() => setActiveCategory('ai')}
                    className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${activeCategory === 'ai' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                    AI Solutions
                </button>
            </div>
        </div>

        {/* --- SaaS Pricing --- */}
        {activeCategory === 'saas' && (
            <div className="animate-fade-in">
                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-4 mb-12">
                    <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
                    <button 
                        onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                        className="w-14 h-8 bg-indigo-600 rounded-full relative transition-colors focus:outline-none"
                    >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${billingCycle === 'yearly' ? 'left-7' : 'left-1'}`}></div>
                    </button>
                    <span className={`text-sm font-bold ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                        Yearly <span className="text-green-600 text-xs ml-1">(Save 20%)</span>
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {saasPlans.map((plan, idx) => (
                        <div key={idx} className={`bg-white rounded-2xl p-8 border relative flex flex-col ${plan.popular ? 'border-purple-500 shadow-xl shadow-purple-100 scale-105 z-10 ring-4 ring-purple-50' : 'border-slate-200 shadow-sm'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                            <p className="text-slate-500 text-sm mb-6 h-10">{plan.description}</p>
                            <div className="mb-8">
                                {typeof plan.price === 'number' ? (
                                    <>
                                        <span className="text-4xl font-extrabold text-slate-900">${plan.price}</span>
                                        <span className="text-slate-500">/mo</span>
                                        {billingCycle === 'yearly' && <div className="text-xs text-green-600 font-bold mt-1">Billed ${plan.price * 12} yearly</div>}
                                    </>
                                ) : (
                                    <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                )}
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start text-sm text-slate-700">
                                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <NavLink 
                                to={plan.name === 'Enterprise' ? '/contact?service=Enterprise Plan' : '/contact?service=SaaS Signup'} 
                                className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
                            >
                                {plan.cta}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* --- Messaging Pricing --- */}
        {activeCategory === 'messaging' && (
            <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
                    <div className="p-8 border-b border-slate-100 bg-slate-50">
                        <h2 className="text-2xl font-bold text-slate-900">Pay-As-You-Go Rates</h2>
                        <p className="text-slate-600">No contracts. Only pay for delivered messages.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-slate-500 uppercase bg-white border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-4">Channel</th>
                                    <th className="px-6 py-4">Direction</th>
                                    <th className="px-6 py-4">Unit Cost (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-100">
                                    <td className="px-6 py-4 font-bold text-indigo-900 flex items-center gap-2">
                                        <span className="text-xl">💬</span> SMS (USA/Canada)
                                    </td>
                                    <td className="px-6 py-4">Outbound</td>
                                    <td className="px-6 py-4 font-mono">$0.0075 / msg</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <td className="px-6 py-4 font-bold text-indigo-900 flex items-center gap-2">
                                        <span className="text-xl">💬</span> SMS (Global Average)
                                    </td>
                                    <td className="px-6 py-4">Outbound</td>
                                    <td className="px-6 py-4 font-mono">~$0.0450 / msg</td>
                                </tr>
                                <tr className="border-b border-slate-100">
                                    <td className="px-6 py-4 font-bold text-green-600 flex items-center gap-2">
                                        <span className="text-xl">📱</span> WhatsApp Business
                                    </td>
                                    <td className="px-6 py-4">Marketing Template</td>
                                    <td className="px-6 py-4 font-mono">$0.0250 / session</td>
                                </tr>
                                <tr className="border-b border-slate-100 bg-slate-50/50">
                                    <td className="px-6 py-4 font-bold text-green-600 flex items-center gap-2">
                                        <span className="text-xl">📱</span> WhatsApp Business
                                    </td>
                                    <td className="px-6 py-4">Utility/Auth</td>
                                    <td className="px-6 py-4 font-mono">$0.0150 / session</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-blue-600 flex items-center gap-2">
                                        <span className="text-xl">🤖</span> RCS Business
                                    </td>
                                    <td className="px-6 py-4">Basic Message</td>
                                    <td className="px-6 py-4 font-mono">$0.0050 / msg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="bg-indigo-900 text-white p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-xl font-bold mb-2">High Volume Sender?</h3>
                        <p className="text-indigo-200 text-sm">Get dedicated routes and wholesale pricing for {'>'}1M messages/month.</p>
                    </div>
                    <NavLink to="/contact?service=Volume Pricing" className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                        Request Quote
                    </NavLink>
                </div>
            </div>
        )}

        {/* --- AI Pricing --- */}
        {activeCategory === 'ai' && (
            <div className="max-w-4xl mx-auto animate-fade-in">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4">🎙️</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Voice AI Agents</h3>
                        <p className="text-slate-600 text-sm mb-6">For automated phone support and outbound calls.</p>
                        <div className="text-3xl font-extrabold text-slate-900 mb-1">$0.08 <span className="text-sm font-normal text-slate-500">/ minute</span></div>
                        <p className="text-xs text-slate-400 mb-6">Billed per second. Includes telephony costs.</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Human-like Neural Voice</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Instant Latency (&lt;800ms)</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Call Recording Included</li>
                        </ul>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">🤖</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Chatbot Interactions</h3>
                        <p className="text-slate-600 text-sm mb-6">For WhatsApp, Web, and SMS automation.</p>
                        <div className="text-3xl font-extrabold text-slate-900 mb-1">$0.004 <span className="text-sm font-normal text-slate-500">/ message</span></div>
                        <p className="text-xs text-slate-400 mb-6">Only counts AI-generated responses.</p>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Gemini Pro / GPT-4 Powered</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Knowledge Base Integration</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Multi-language Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        )}

        {/* Pricing FAQs */}
        <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {pricingFaqs.map((faq, idx) => (
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

        <div className="mt-16 text-center">
            <p className="text-slate-500 mb-4">Still have questions?</p>
            <NavLink to="/contact" className="text-indigo-600 font-bold hover:underline">Contact our Support Team</NavLink>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
            <SocialShare url={window.location.href} title="WebWorldMaker Pricing Plans" />
        </div>

      </div>
    </div>
  );
};

export default Pricing;
