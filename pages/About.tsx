
import React from 'react';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us - Simplifying Enterprise Tech" 
        description="We make technology simple. Learn about WebWorldMaker's mission to help businesses grow with Bulk SMS, AI, and Custom Software." 
      />
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">We Make Tech Simple</h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed">
            Technology shouldn't be a headache. We build the tools that help your business grow, without the jargon.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-24">
          <div className="bg-indigo-50 p-10 rounded-[2.5rem] relative overflow-hidden border border-indigo-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200 rounded-bl-full opacity-50"></div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              To give every business the best digital tools. We make messaging, AI, and software simple to use, so you can focus on growing your company, not fixing tech problems.
            </p>
          </div>
          <div className="bg-purple-50 p-10 rounded-[2.5rem] relative overflow-hidden border border-purple-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-bl-full opacity-50"></div>
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              A future where every business connects easily with their customers. Whether through Bulk SMS, WhatsApp, or AI Chatbots, we handle the hard work for you.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">Why Choose Us?</h2>
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">⚡</div>
                        <h3 className="font-bold text-xl mb-3">Fast & Reliable</h3>
                        <p className="text-indigo-200 text-sm leading-relaxed">We use direct connections (Tier-1 routes). This means your SMS and alerts arrive in seconds, every time.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">🛡️</div>
                        <h3 className="font-bold text-xl mb-3">Secure & Safe</h3>
                        <p className="text-indigo-200 text-sm leading-relaxed">Your data is locked tight. We use bank-grade encryption (AES-256) to keep your customer lists safe.</p>
                    </div>
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">🧠</div>
                        <h3 className="font-bold text-xl mb-3">AI First</h3>
                        <p className="text-indigo-200 text-sm leading-relaxed">We don't just use AI; we build it. Our Gemini-powered agents work 24/7 to automate your sales and support.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Journey / Timeline */}
        <div className="mb-24">
            <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">The Journey</h2>
            <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 via-purple-200 to-slate-200 rounded-full"></div>
                
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative group">
                    <div className="md:w-5/12 text-left md:text-right md:pr-10 pl-8 md:pl-0 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-indigo-900">The Start</h3>
                        <p className="text-indigo-500 font-bold mb-2">2018</p>
                        <p className="text-slate-600 text-sm leading-relaxed">We started in a small garage, building simple websites and SMS tools for local shops.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-[50%] md:-translate-x-1/2 z-10 w-10 h-10 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center shadow-lg text-indigo-600 font-bold text-xs order-1 md:order-2">1</div>
                    <div className="md:w-5/12 order-3 md:order-3"></div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative group">
                    <div className="md:w-5/12 order-3 md:order-1"></div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-[50%] md:-translate-x-1/2 z-10 w-10 h-10 bg-white border-4 border-purple-600 rounded-full flex items-center justify-center shadow-lg text-purple-600 font-bold text-xs order-1 md:order-2">2</div>
                    <div className="md:w-5/12 text-left md:pl-10 pl-8 order-2 md:order-3">
                        <h3 className="text-2xl font-bold text-purple-900">Going Global</h3>
                        <p className="text-purple-500 font-bold mb-2">2020</p>
                        <p className="text-slate-600 text-sm leading-relaxed">We launched our own Bulk SMS system. Now, clients could send messages to 150+ countries instantly.</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative group">
                    <div className="md:w-5/12 text-left md:text-right md:pr-10 pl-8 md:pl-0 order-2 md:order-1">
                        <h3 className="text-2xl font-bold text-pink-900">The AI Shift</h3>
                        <p className="text-pink-500 font-bold mb-2">2022</p>
                        <p className="text-slate-600 text-sm leading-relaxed">We added Artificial Intelligence (AI) to our tools. Our Chatbots started solving customer problems automatically.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-[50%] md:-translate-x-1/2 z-10 w-10 h-10 bg-white border-4 border-pink-600 rounded-full flex items-center justify-center shadow-lg text-pink-600 font-bold text-xs order-1 md:order-2">3</div>
                    <div className="md:w-5/12 order-3 md:order-3"></div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative group">
                    <div className="md:w-5/12 order-3 md:order-1"></div>
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-[50%] md:-translate-x-1/2 z-10 w-10 h-10 bg-white border-4 border-green-600 rounded-full flex items-center justify-center shadow-lg text-green-600 font-bold text-xs order-1 md:order-2">4</div>
                    <div className="md:w-5/12 text-left md:pl-10 pl-8 order-2 md:order-3">
                        <h3 className="text-2xl font-bold text-green-900">Complete Suite</h3>
                        <p className="text-green-600 font-bold mb-2">2024</p>
                        <p className="text-slate-600 text-sm leading-relaxed">We launched the Enterprise Suite. A single platform for Messaging, AI, and Web Apps.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* The Architects / Team */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">The Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="group text-center bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden shadow-md border-4 border-white group-hover:border-indigo-100 transition-colors">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="CEO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Alex Morgan</h3>
              <p className="text-indigo-600 font-semibold mb-2">Founder & CEO</p>
              <p className="text-slate-500 text-sm italic">"The Visionary"</p>
            </div>
            {/* Team Member 2 */}
            <div className="group text-center bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden shadow-md border-4 border-white group-hover:border-purple-100 transition-colors">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="CTO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sarah Chen</h3>
              <p className="text-purple-600 font-semibold mb-2">Head of Technology</p>
              <p className="text-slate-500 text-sm italic">"The Code Wizard"</p>
            </div>
             {/* Team Member 3 */}
             <div className="group text-center bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 overflow-hidden shadow-md border-4 border-white group-hover:border-pink-100 transition-colors">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="CMO" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Marcus Johnson</h3>
              <p className="text-pink-600 font-semibold mb-2">Head of Marketing</p>
              <p className="text-slate-500 text-sm italic">"The Storyteller"</p>
            </div>
          </div>
        </div>

        {/* Client Success Stories - Bottom Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-white/50">
              <p className="text-slate-600 italic mb-6 leading-relaxed text-lg">"WebWorldMaker changed how we talk to customers. The Bulk SMS and WhatsApp tools helped us get 300% more replies in just three months."</p>
              <div className="font-bold text-slate-900 uppercase tracking-wider text-sm">- Retail Giant Inc.</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-white/50">
              <p className="text-slate-600 italic mb-6 leading-relaxed text-lg">"Their custom software made our shipping process smooth. We started saving money within the first quarter."</p>
              <div className="font-bold text-slate-900 uppercase tracking-wider text-sm">- Global Logistics Co.</div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
            <SocialShare url={window.location.href} title="About WebWorldMaker - Our Story & Mission" className="justify-center gap-4 flex" />
        </div>
      </div>
    </div>
  );
};

export default About;
