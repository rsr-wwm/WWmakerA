
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Careers: React.FC = () => {
  const jobs = [
    {
      id: 'senior-frontend-dev',
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      description: 'We are looking for a React expert to lead our dashboard development team. Experience with WebSockets and Real-time data is a plus.'
    },
    {
      id: 'ai-solutions-architect',
      title: 'AI Solutions Architect',
      department: 'AI Labs',
      location: 'Innovation City',
      type: 'Full-time',
      description: 'Design custom LLM workflows for enterprise clients. Must have experience with Python, TensorFlow, and Gemini/OpenAI APIs.'
    },
    {
      id: 'sales-development-rep',
      title: 'Sales Development Rep',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth by identifying and qualifying leads for our Enterprise Messaging solutions. High commission structure.'
    }
  ];

  const careersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": jobs.map((job, index) => ({
      "@type": "JobPosting",
      "title": job.title,
      "description": job.description,
      "datePosted": "2023-10-01",
      "validThrough": "2024-12-31",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "WebWorldMaker",
        "sameAs": "https://webworldmaker.com"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": job.location === 'Remote' ? 'Remote' : 'Innovation City',
          "addressCountry": "US"
        }
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Careers & Jobs" 
        description="Join the team building the future of digital communication. View open positions at WebWorldMaker."
        schema={careersSchema}
      />

      {/* Hero */}
      <div className="bg-indigo-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-6">Build The Future With Us</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10">
            We are solving complex problems in messaging, AI, and cloud infrastructure. If you love a challenge, you belong here.
          </p>
          <a href="#positions" className="bg-white text-indigo-900 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition-colors">
            View Openings
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Culture / Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">High Impact</h3>
                <p className="text-slate-600 text-sm">Your code will be used by millions of users globally via our enterprise clients.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl mb-4">🏝️</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Remote First</h3>
                <p className="text-slate-600 text-sm">Work from anywhere. We care about output, not hours in a chair.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Continuous Learning</h3>
                <p className="text-slate-600 text-sm">Annual budget for courses, conferences, and certifications.</p>
            </div>
        </div>

        {/* Job List */}
        <div id="positions" className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Open Positions</h2>
            <div className="space-y-4">
                {jobs.map(job => (
                    <div key={job.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                            <div className="flex gap-4 text-sm text-slate-500 mt-2">
                                <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>{job.department}</span>
                                <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>{job.location}</span>
                            </div>
                            <p className="text-slate-600 mt-3 text-sm max-w-xl">{job.description}</p>
                        </div>
                        <NavLink to="/contact?service=Careers" className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">
                            Apply Now
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center bg-slate-100 rounded-2xl p-8">
            <h3 className="font-bold text-slate-900 mb-2">Don't see a fit?</h3>
            <p className="text-slate-600 mb-6">We are always looking for talent. Send your resume to careers@webworldmaker.com</p>
            <SocialShare url={window.location.href} title="Careers at WebWorldMaker" className="justify-center gap-4 flex" />
        </div>
      </div>
    </div>
  );
};

export default Careers;
