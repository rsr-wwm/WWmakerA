
import React, { useState } from 'react';
import { analyzeWebsiteHealth } from '../services/geminiService';
import { SEO } from '../components/SEO';
import { SocialShare } from '../components/SocialShare';

const SystemScan: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<{ score: number; issues: { severity: string; issue: string; fix: string }[]; summary: string } | null>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    setLoading(true);
    setReport(null);
    try {
        const data = await analyzeWebsiteHealth(input);
        setReport(data);
    } catch (err) {
        console.error(err);
    } finally {
        setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
      if (score >= 90) return 'text-green-500 border-green-500';
      if (score >= 70) return 'text-yellow-500 border-yellow-500';
      return 'text-red-500 border-red-500';
  };

  const getSeverityBadge = (severity: string) => {
      switch(severity.toLowerCase()) {
          case 'critical': return <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold uppercase">Critical</span>;
          case 'warning': return <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold uppercase">Warning</span>;
          default: return <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold uppercase">Info</span>;
      }
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
        <SEO 
            title="System & Web Health Scanner" 
            description="Analyze your website or tech stack for performance, security, and SEO issues using our AI-powered audit tool."
        />
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
                <div className="inline-block bg-indigo-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">AI Audit Tool</div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">System Health Scan</h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Identify vulnerabilities, performance bottlenecks, and SEO gaps in your web portal or infrastructure instantly using Gemini Pro analysis.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-slate-100">
                <form onSubmit={handleScan} className="relative">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Target URL or Stack Description</label>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="e.g., https://example.com or 'React app with Node.js backend using older Express'"
                            className="flex-grow p-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 outline-none text-lg transition-all"
                        />
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg disabled:opacity-70 whitespace-nowrap"
                        >
                            {loading ? 'Scanning...' : 'Run Diagnostics'}
                        </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">
                        *Our AI simulates an audit based on provided context and best practices (2025 Standards).
                    </p>
                </form>
            </div>

            {loading && (
                <div className="text-center py-20">
                    <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-6"></div>
                    <h3 className="text-xl font-bold text-slate-700">Analyzing System Architecture...</h3>
                    <p className="text-slate-500">Checking Core Web Vitals, Security Headers, and Code Integrity.</p>
                </div>
            )}

            {report && (
                <div className="animate-fade-in space-y-8">
                    {/* Score Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row items-center gap-8">
                        <div className={`w-32 h-32 rounded-full border-8 flex items-center justify-center text-4xl font-extrabold ${getScoreColor(report.score)}`}>
                            {report.score}
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Audit Summary</h2>
                            <p className="text-slate-600 leading-relaxed">{report.summary}</p>
                        </div>
                    </div>

                    {/* Issues List */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="bg-slate-50 px-8 py-4 border-b border-slate-200">
                            <h3 className="font-bold text-slate-700">Detected Issues & Fixes</h3>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {report.issues.map((item, idx) => (
                                <div key={idx} className="p-6 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        {getSeverityBadge(item.severity)}
                                        <h4 className="font-bold text-slate-900">{item.issue}</h4>
                                    </div>
                                    <div className="pl-0 md:pl-14">
                                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-sm text-indigo-900">
                                            <span className="font-bold mr-2">🔧 Recommendation:</span>
                                            {item.fix}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="text-center pt-8">
                        <SocialShare url={window.location.href} title="System Health Scan - WebWorldMaker" />
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default SystemScan;
