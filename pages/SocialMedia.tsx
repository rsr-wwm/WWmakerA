
import React from 'react';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const SocialMedia: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Join the Inner Circle - Social Ecosystem" 
        description="Connect with WebWorldMaker's digital community. Unlock exclusive AI insights, beta tools, and enterprise strategies on LinkedIn, X, and Instagram."
      />
      {/* Hypnotic Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden py-24">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in-up shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            🚀 The Inner Circle
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-100 tracking-tight">
            Connect Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-lg">The Algorithm</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed font-light">
            Don't just scroll. <strong className="text-white font-bold">Evolve.</strong> Get exclusive access to AI breakthroughs, hidden strategies, and the future of enterprise tech before the masses.
          </p>
        </div>
      </div>

      {/* Platform Connection Grid */}
      <div className="container mx-auto px-4 py-20 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* LinkedIn - Professional Mastery */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <div className="w-16 h-16 bg-[#0077b5] text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
               in
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Strategy & Growth</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">Unlock high-level enterprise playbooks. We break down complex AI integrations and ROI models.</p>
            <span className="inline-flex items-center text-[#0077b5] font-bold text-sm bg-blue-50 px-4 py-2 rounded-full group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                Connect Now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>

          {/* X (Twitter) - Real-time Intel */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </div>
            <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-slate-300 group-hover:scale-110 transition-transform">
               𝕏
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Pulse</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">Instant updates on API status, flash trends, and quick-fire tech tips. Don't blink.</p>
            <span className="inline-flex items-center text-black font-bold text-sm bg-slate-100 px-4 py-2 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                Follow Feed <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>

          {/* Instagram - Visual Inspiration */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.163 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
               📸
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Culture & UI</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">See the code in action. Visualizing complex data, office vibes, and design excellence.</p>
            <span className="inline-flex items-center text-pink-600 font-bold text-sm bg-pink-50 px-4 py-2 rounded-full group-hover:bg-pink-600 group-hover:text-white transition-colors">
                See Gallery <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>

          {/* Facebook - Community */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-32 h-32 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div className="w-16 h-16 bg-[#1877F2] text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
               f
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">The Community</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">Join the developer forum. Livestreams, Q&A, and networking with other founders.</p>
            <span className="inline-flex items-center text-[#1877F2] font-bold text-sm bg-blue-50 px-4 py-2 rounded-full group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                Join Group <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </a>

        </div>
      </div>

      {/* "Why Enter" Hypnotic Value Prop */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">The "Why" Is Simple</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We don't post fluff. Our channels are intelligence streams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-indigo-900 mb-2">Alpha Access</h3>
                <p className="text-slate-600 leading-relaxed">Followers get API keys for new AI models (like Gemini 3.0 integrations) weeks before they go public.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-5xl mb-6">💡</div>
                <h3 className="text-2xl font-bold text-purple-900 mb-2">60-Second Mastery</h3>
                <p className="text-slate-600 leading-relaxed">Rapid-fire video tutorials on SEO hacks, Chatbot flows, and reducing customer churn.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-5xl mb-6">🎁</div>
                <h3 className="text-2xl font-bold text-pink-900 mb-2">Secret Grants</h3>
                <p className="text-slate-600 leading-relaxed">We drop flash credits for SMS and Email marketing tools exclusively on our social feeds.</p>
            </div>
        </div>
      </div>

      {/* Newsletter / Feed Placeholder */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Off the Grid?</h2>
                <p className="text-indigo-200 mb-10 text-lg">
                    If social media isn't your thing, get the same high-value intelligence delivered directly to your secure inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Enter your best email" 
                        className="flex-grow px-6 py-4 rounded-full border border-white/20 bg-white/10 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 transition-all"
                    />
                    <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:scale-105 transition-all shadow-indigo-500/50">
                        Join Intel
                    </button>
                </form>
                <p className="text-indigo-400 text-xs mt-4">Zero spam. Pure signal.</p>
            </div>
        </div>
      </div>

      {/* Dedicated Share Section */}
      <div className="bg-white border-t border-slate-200 py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Expand the Network</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Know a founder or CTO who needs to wake up? Share this hub.
            </p>
            <div className="flex justify-center">
                <SocialShare 
                    url={window.location.href} 
                    title="Connect with WebWorldMaker on Social Media" 
                    className="flex justify-center gap-6 mt-0 pt-0 border-0" 
                    hideLabel={true}
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
