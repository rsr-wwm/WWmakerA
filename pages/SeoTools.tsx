
import React, { useState } from 'react';
import { analyzeSeoKeywords, generateConceptImage, generateAdCopy, generateSubjectLines } from '../services/geminiService';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const SeoTools: React.FC = () => {
  // SEO Tool State
  const [topic, setTopic] = useState('');
  const [seoResult, setSeoResult] = useState<{ keywords: string[]; strategy: string; metaTitle: string; metaDescription: string } | null>(null);
  const [seoLoading, setSeoLoading] = useState(false);

  // Image Tool State
  const [imgPrompt, setImgPrompt] = useState('');
  const [imgResult, setImgResult] = useState<string | null>(null);
  const [imgLoading, setImgLoading] = useState(false);

  // Ad Copy State
  const [adProduct, setAdProduct] = useState('');
  const [adAudience, setAdAudience] = useState('');
  const [adResult, setAdResult] = useState<{ headline: string; body: string; cta: string } | null>(null);
  const [adLoading, setAdLoading] = useState(false);

  // Subject Line State
  const [emailTopic, setEmailTopic] = useState('');
  const [emailResult, setEmailResult] = useState<string[] | null>(null);
  const [emailLoading, setEmailLoading] = useState(false);

  const handleAnalyzeSeo = async () => {
    if (!topic) return;
    setSeoLoading(true);
    try {
      const data = await analyzeSeoKeywords(topic);
      setSeoResult(data);
    } catch (e) { console.error(e); } 
    finally { setSeoLoading(false); }
  };

  const handleGenerateImage = async () => {
    if(!imgPrompt) return;
    setImgLoading(true);
    const res = await generateConceptImage(imgPrompt, '1K');
    setImgResult(res);
    setImgLoading(false);
  }

  const handleGenerateAd = async () => {
    if (!adProduct || !adAudience) return;
    setAdLoading(true);
    try {
      const data = await generateAdCopy(adProduct, adAudience);
      setAdResult(data);
    } catch (e) { console.error(e); }
    finally { setAdLoading(false); }
  };

  const handleGenerateSubjects = async () => {
    if (!emailTopic) return;
    setEmailLoading(true);
    try {
      const data = await generateSubjectLines(emailTopic);
      setEmailResult(data);
    } catch (e) { console.error(e); }
    finally { setEmailLoading(false); }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title="Free AI Marketing & SEO Tools" 
        description="Boost your marketing with our free AI tools. SEO Keyword Analyzer, Ad Copy Generator, and Visual Concept Creator powered by Gemini."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Marketing Automation</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">AI-Powered Marketing Suite</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Leverage the power of Google Gemini models to automate your marketing tasks. 
            From SEO research to visual concepts and copywriting.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          {/* Tool 1: SEO Analyzer */}
          <div className="bg-white rounded-2xl shadow-lg shadow-indigo-100 border border-slate-100 p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-indigo-100"></div>
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-lg shadow-md">🔍</span>
              SEO Analyzer
            </h2>
            <p className="text-slate-600 mb-6 text-sm relative z-10">
              Get real-time keyword suggestions and optimized meta tags grounded in Google Search data.
            </p>
            <div className="flex gap-2 mb-6 relative z-10">
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Topic (e.g., Bulk SMS)"
                className="flex-grow px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-sm shadow-sm"
              />
              <button
                onClick={handleAnalyzeSeo}
                disabled={seoLoading}
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors disabled:opacity-50 shadow-md"
              >
                {seoLoading ? '...' : 'Analyze'}
              </button>
            </div>
            {seoResult && (
              <div className="bg-slate-50 rounded-xl p-6 animate-fade-in border border-slate-200 relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {seoResult.keywords.map((kw, i) => (
                    <span key={i} className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs text-slate-700 font-bold shadow-sm">
                      {kw}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1">Meta Title</h4>
                    <p className="text-sm font-bold text-slate-800 bg-white p-2 rounded border border-slate-100">{seoResult.metaTitle}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1">Meta Description</h4>
                    <p className="text-sm text-slate-600 bg-white p-2 rounded border border-slate-100">{seoResult.metaDescription}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-1">Strategy</h4>
                    <p className="text-slate-600 text-xs italic border-l-4 border-indigo-400 pl-3 py-1 bg-white rounded-r">{seoResult.strategy}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tool 2: Image Generator */}
          <div className="bg-white rounded-2xl shadow-lg shadow-purple-100 border border-slate-100 p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-purple-100"></div>
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg shadow-md">🎨</span>
              Visualizer
            </h2>
            <p className="text-slate-600 mb-6 text-sm relative z-10">
              Generate concept art for your campaigns using Gemini Imagen models.
            </p>
            <div className="flex gap-2 mb-6 relative z-10">
              <input
                type="text"
                value={imgPrompt}
                onChange={(e) => setImgPrompt(e.target.value)}
                placeholder="e.g. Robot holding a phone"
                className="flex-grow px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none text-sm shadow-sm"
              />
              <button
                onClick={handleGenerateImage}
                disabled={imgLoading}
                className="bg-purple-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-purple-700 transition-colors disabled:opacity-50 shadow-md"
              >
                {imgLoading ? '...' : 'Create'}
              </button>
            </div>
            {imgResult && (
              <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-md relative z-10">
                <img src={imgResult} alt="Generated Concept" className="w-full h-auto" />
              </div>
            )}
          </div>

          {/* Tool 3: Ad Copy Generator */}
          <div className="bg-white rounded-2xl shadow-lg shadow-green-100 border border-slate-100 p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-green-100"></div>
            <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center text-lg shadow-md">✍️</span>
              Copywriter
            </h2>
            <p className="text-slate-600 mb-6 text-sm relative z-10">
              Create high-conversion ads for social media instantly.
            </p>
            <div className="space-y-4 mb-6 relative z-10">
              <input
                type="text"
                value={adProduct}
                onChange={(e) => setAdProduct(e.target.value)}
                placeholder="Product Name (e.g. FastShoes)"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-sm shadow-sm"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={adAudience}
                  onChange={(e) => setAdAudience(e.target.value)}
                  placeholder="Audience (e.g. Runners)"
                  className="flex-grow px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none text-sm shadow-sm"
                />
                <button
                  onClick={handleGenerateAd}
                  disabled={adLoading}
                  className="bg-green-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-md"
                >
                  {adLoading ? '...' : 'Write'}
                </button>
              </div>
            </div>
            {adResult && (
              <div className="bg-slate-50 rounded-xl p-6 animate-fade-in border border-slate-200 relative z-10">
                <div className="mb-2 font-bold text-slate-800 text-lg">{adResult.headline}</div>
                <div className="mb-4 text-slate-600 text-sm leading-relaxed">{adResult.body}</div>
                <button className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-xs font-bold w-full text-center border border-green-200 uppercase tracking-widest">
                  {adResult.cta}
                </button>
              </div>
            )}
          </div>

          {/* Tool 4: Email Subject Line Gen */}
          <div className="bg-white rounded-2xl shadow-lg shadow-orange-100 border border-slate-100 p-8 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-orange-100"></div>
            <h2 className="text-2xl font-bold text-orange-900 mb-4 flex items-center gap-3 relative z-10">
              <span className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center text-lg shadow-md">📧</span>
              Email Optimizer
            </h2>
            <p className="text-slate-600 mb-6 text-sm relative z-10">
              Generate 5 catchy email subject lines to improve open rates.
            </p>
            <div className="flex gap-2 mb-6 relative z-10">
              <input
                type="text"
                value={emailTopic}
                onChange={(e) => setEmailTopic(e.target.value)}
                placeholder="Email Content Summary"
                className="flex-grow px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm shadow-sm"
              />
              <button
                onClick={handleGenerateSubjects}
                disabled={emailLoading}
                className="bg-orange-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-orange-700 transition-colors disabled:opacity-50 shadow-md"
              >
                {emailLoading ? '...' : 'Gen'}
              </button>
            </div>
            {emailResult && (
              <div className="bg-slate-50 rounded-xl p-6 animate-fade-in border border-slate-200 relative z-10">
                <ul className="space-y-3">
                  {emailResult.map((subject, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-start gap-3 bg-white p-2 rounded-lg border border-slate-100 shadow-sm">
                      <span className="text-orange-500 font-bold bg-orange-50 w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs">{i+1}</span>
                      <span className="font-medium">{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* SEO Learning Guide (New Section) */}
        <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">🚀 Fast Ranking Guide</h2>
                <p className="text-indigo-200 max-w-2xl mx-auto">SEO explained simply so you can rank faster.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-4">🔑</div>
                    <h3 className="font-bold text-xl mb-2">Keywords are Keys</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Imagine the internet is a giant library. Keywords are the labels on the books. If your label matches what people ask the librarian (Google), you get found. Use specific keys!
                    </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="font-bold text-xl mb-2">Speed is King</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Google hates waiting. If your site loads slow, Google leaves. Optimize images, use clean code, and fast servers to make Google happy.
                    </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-4">🗳️</div>
                    <h3 className="font-bold text-xl mb-2">Backlinks are Votes</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        Every time another website links to you, it's a "vote" of confidence. The more reputable the voter, the more Google trusts you.
                    </p>
                </div>
            </div>
        </div>
        
        {/* Share Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-xl border border-slate-200 text-center">
            <SocialShare url={window.location.href} title="Free AI Marketing Tools - WebWorldMaker" className="justify-center gap-4 flex" />
        </div>
      </div>
    </div>
  );
};

export default SeoTools;
