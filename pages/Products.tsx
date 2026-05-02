
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getProducts } from '../services/contentService';
import { ProductItem } from '../types';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    // Load data
    const data = getProducts();
    setProducts(data);
  }, []);

  // Prepare Schema
  const productsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": product.title,
        "description": product.description,
        "url": `${window.location.origin}/#/product/${product.id}`
      }))
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
       <SEO 
         title="Products & Platforms - White Label & SaaS" 
         description="Explore our ready-to-use platforms including White Label Reseller programs, Campaign Manager Pro, and VoiceBot Studio."
         schema={productsSchema}
       />
       
       <div className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowerment Hub</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto mb-8">
            White Label Platforms & Reseller Programs. Start your own digital agency with our infrastructure.
          </p>
          
          {/* Product Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {['White Label', 'AI Tools', 'APIs', 'SaaS'].map((cat) => (
              <button 
                key={cat}
                className="px-5 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-indigo-900 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Product Platforms</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col overflow-hidden group">
              <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              <div className="p-8 flex-grow">
                <div className="mb-4">
                  <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">{product.pricingModel}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{product.title}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-4">{product.tagline}</p>
                <p className="text-slate-600 mb-6 line-clamp-3">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-500">
                             <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                             {feat.title}
                        </div>
                    ))}
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                 <NavLink to={`/product/${product.id}`} className="block w-full text-center bg-white border border-slate-300 text-slate-700 font-bold py-3 rounded-lg hover:bg-indigo-600 hover:text-white hover:border-transparent transition-all">
                    View Details
                 </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Our Platforms vs Building Your Own?</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden max-w-4xl mx-auto">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 font-bold">Feature</th>
                                <th className="px-6 py-4 font-bold text-indigo-600">WebWorldMaker White Label</th>
                                <th className="px-6 py-4 font-bold text-slate-400">Building from Scratch</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="px-6 py-4 font-medium text-slate-900">Time to Market</td>
                                <td className="px-6 py-4 text-green-600 font-bold">24 - 48 Hours</td>
                                <td className="px-6 py-4 text-slate-500">6 - 12 Months</td>
                            </tr>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <td className="px-6 py-4 font-medium text-slate-900">Initial Investment</td>
                                <td className="px-6 py-4 text-green-600 font-bold">Low (Setup Fee)</td>
                                <td className="px-6 py-4 text-slate-500">High ($50k+ Development)</td>
                            </tr>
                            <tr className="bg-white border-b border-slate-100">
                                <td className="px-6 py-4 font-medium text-slate-900">Maintenance</td>
                                <td className="px-6 py-4 text-green-600 font-bold">Included 24/7</td>
                                <td className="px-6 py-4 text-slate-500">Self-Managed (Expensive)</td>
                            </tr>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <td className="px-6 py-4 font-medium text-slate-900">Carrier Connections</td>
                                <td className="px-6 py-4 text-green-600 font-bold">Pre-integrated Tier-1 Routes</td>
                                <td className="px-6 py-4 text-slate-500">Negotiate Individually</td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-6 py-4 font-medium text-slate-900">Infrastructure</td>
                                <td className="px-6 py-4 text-green-600 font-bold">Enterprise Cloud (AWS)</td>
                                <td className="px-6 py-4 text-slate-500">Your Own Servers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Security & Infrastructure Section */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Enterprise-Grade Infrastructure</h2>
            <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-2xl">🔒</div>
                        <h3 className="font-bold text-lg mb-2">Data Encryption</h3>
                        <p className="text-slate-400 text-sm">All data at rest and in transit is encrypted using AES-256 standards. We prioritize your privacy.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-2xl">⚡</div>
                        <h3 className="font-bold text-lg mb-2">99.9% Uptime</h3>
                        <p className="text-slate-400 text-sm">Hosted on redundant AWS & GCP clusters to ensure your services never go offline during critical campaigns.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-2xl">📜</div>
                        <h3 className="font-bold text-lg mb-2">Compliance</h3>
                        <p className="text-slate-400 text-sm">Fully compliant with GDPR, CCPA, and telecom regulations like TCPA for messaging.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Reseller Highlight */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Partner with Us</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Not looking for a product? Join our partner ecosystem. We offer referral bonuses and technical partnerships for system integrators.
              </p>
              <NavLink to="/contact" className="self-start bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors">
                Contact Partnership Team
              </NavLink>
            </div>
             <div className="bg-slate-100 min-h-[300px] relative">
               <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" alt="Strategic Partnership" className="absolute inset-0 w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 bg-indigo-900/10"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
             <SocialShare url={window.location.href} title="Products & Platforms - WebWorldMaker" />
        </div>
      </div>
    </div>
  );
};

export default Products;
