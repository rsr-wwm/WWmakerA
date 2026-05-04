
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_ITEMS, SERVICE_CATEGORIES, SOLUTIONS, INDUSTRIES } from '../constants';
import { FloatingShareSidebar } from './FloatingShareSidebar';
import { GlobalSearch } from './GlobalSearch';

const AnimatedNavLink = ({ to, children }: { to: string, children?: React.ReactNode }) => (
  <NavLink to={to} className="relative group py-2 px-1">
    {({ isActive }) => (
      <>
        <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-slate-600 group-hover:text-indigo-600'}`}>
          {children}
        </span>
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
      </>
    )}
  </NavLink>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Close search on route change
  useEffect(() => {
      setIsSearchOpen(false);
  }, [location]);

  // Handle ESC key for search
  useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
          if(e.key === 'Escape') setIsSearchOpen(false);
          if((e.metaKey || e.ctrlKey) && e.key === 'k') {
              e.preventDefault();
              setIsSearchOpen(prev => !prev);
          }
      };
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const topServices = SERVICE_CATEGORIES.flatMap(cat => cat.items).slice(0, 6);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900">
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-6 py-3 rounded-lg z-50 font-bold shadow-xl transition-all"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-subtle transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <NavLink to="/" className="text-2xl font-black text-slate-950 flex items-center gap-3 tracking-tighter group" aria-label="WebWorldMaker Home">
                <div className="w-11 h-11 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="hidden sm:block">WebWorldMaker</span>
              </NavLink>
            </div>

            {/* Desktop Nav - 5 Main Categories */}
            <nav className="hidden lg:flex space-x-8 items-center" aria-label="Main Navigation">
              <AnimatedNavLink to="/">Home</AnimatedNavLink>
              
              {/* Services Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-all duration-300 ${activeDropdown === 'services' ? 'text-brand-600' : 'text-slate-600 group-hover:text-brand-600'}`}>
                  Services
                  <svg className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-[800px] transition-all duration-300 ease-out ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-3 gap-8 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.id}>
                        <h4 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider border-b border-slate-100 pb-2">{cat.title}</h4>
                        <ul className="space-y-3">
                          {cat.items.map((item) => (
                            <li key={item.id}>
                              <NavLink to={`/service/${item.id}`} className="block group/item">
                                <div className="text-sm font-medium text-slate-700 group-hover/item:text-brand-600 transition-colors flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                  {item.title}
                                </div>
                                <div className="text-xs text-slate-400 line-clamp-1 group-hover/item:text-slate-500 pl-3.5 transition-colors">{item.description}</div>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 mt-2 pt-4 border-t border-slate-100 bg-indigo-50/50 -mx-8 -mb-8 p-4 rounded-b-2xl">
                        <NavLink to="/services" className="flex items-center justify-center text-sm font-bold text-indigo-700 hover:text-indigo-900 group/link">
                            Explore All Professional Services <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                        </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-all duration-300 ${activeDropdown === 'solutions' ? 'text-brand-600' : 'text-slate-600 group-hover:text-brand-600'}`}>
                  Solutions
                  <svg className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'solutions' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-[850px] transition-all duration-300 ease-out ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-12 gap-8 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    {/* Solution Packages */}
                    <div className="col-span-5">
                      <h4 className="font-bold text-slate-950 mb-4 uppercase text-[10px] tracking-widest border-b border-slate-100 pb-2">Strategic Packages</h4>
                      <div className="space-y-3">
                        {SOLUTIONS.slice(0, 5).map((sol) => (
                          <NavLink key={sol.id} to={`/solution/${sol.id}`} className="block group/sol hover:bg-slate-50 p-2 rounded-lg transition-colors">
                            <div className="text-sm font-bold text-slate-800 group-hover/sol:text-brand-600">{sol.title}</div>
                            <div className="text-[10px] text-slate-500">{sol.focus}</div>
                          </NavLink>
                        ))}
                        <NavLink to="/solutions" className="text-xs font-bold text-brand-600 hover:underline pl-2">View All Solutions →</NavLink>
                      </div>
                    </div>

                    {/* Products & Industries */}
                    <div className="col-span-4 border-l border-slate-100 pl-8">
                       <h4 className="font-bold text-slate-950 mb-4 uppercase text-[10px] tracking-widest border-b border-slate-100 pb-2">Software Products</h4>
                       <div className="space-y-3 mb-6">
                          <NavLink to="/products" className="block text-sm font-bold text-slate-800 hover:text-brand-600">Enterprise Platforms</NavLink>
                          <NavLink to="/problems" className="block text-sm font-bold text-slate-800 hover:text-brand-600">Challenges We Solve</NavLink>
                       </div>

                       <h4 className="font-bold text-slate-950 mb-4 uppercase text-[10px] tracking-widest border-b border-slate-100 pb-2">Industry Focus</h4>
                       <div className="grid grid-cols-1 gap-2">
                          {INDUSTRIES.slice(0, 4).map(ind => (
                            <NavLink key={ind.id} to={`/industry/${ind.id}`} className="text-xs text-slate-600 hover:text-brand-600 flex items-center">
                              <span className="mr-2 opacity-70 group-hover:opacity-100">{ind.icon}</span> {ind.title}
                            </NavLink>
                          ))}
                          <NavLink to="/industries" className="text-xs font-bold text-brand-600 hover:underline mt-1">Explore All Industries →</NavLink>
                       </div>
                    </div>

                    {/* Featured Callout */}
                    <div className="col-span-3 bg-slate-950 rounded-xl p-6 text-white overflow-hidden relative group/hero">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/20 rounded-full -mr-12 -mt-12 group-hover/hero:scale-125 transition-transform duration-700"></div>
                       <h5 className="text-brand-400 font-bold text-[10px] uppercase tracking-widest mb-2">Featured Strategy</h5>
                       <p className="text-sm font-bold mb-3 leading-tight text-white group-hover/hero:text-brand-200 transition-colors">E-commerce Acceleration Suite</p>
                       <p className="text-[10px] text-slate-400 mb-6">Master global markets with our unified commerce gateway.</p>
                       <NavLink to="/solution/ecommerce-acceleration" className="inline-block text-[10px] bg-brand-600 text-white px-4 py-2 rounded-lg font-black hover:bg-brand-500 transition-all uppercase tracking-tighter">Learn More</NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* Knowledge Base Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('knowledge')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-all duration-300 ${activeDropdown === 'knowledge' ? 'text-brand-600' : 'text-slate-600 group-hover:text-brand-600'}`}>
                  Knowledge Base
                  <svg className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === 'knowledge' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'knowledge' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-64 transition-all duration-300 ease-out ${activeDropdown === 'knowledge' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    <ul className="space-y-1">
                        <li><NavLink to="/blog" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"><span className="mr-3">📰</span> Latest Insights</NavLink></li>
                        <li><NavLink to="/ai-tools" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"><span className="mr-3">✨</span> AI Suite</NavLink></li>
                        <li><NavLink to="/seo-tools" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"><span className="mr-3">🔍</span> SEO Tools</NavLink></li>
                        <li><NavLink to="/system-scan" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"><span className="mr-3">🩺</span> System Scan</NavLink></li>
                        <li><NavLink to="/glossary" className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"><span className="mr-3">📖</span> Tech Glossary</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Company Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('company')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-all duration-300 ${activeDropdown === 'company' ? 'text-brand-600' : 'text-slate-600 group-hover:text-brand-600'}`}>
                  Company
                  <svg className={`w-4 h-4 ml-1.5 transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'company' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-48 transition-all duration-300 ease-out ${activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    <ul className="space-y-1">
                        <li><NavLink to="/about" className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors">About Us</NavLink></li>
                        <li><NavLink to="/partners" className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors">Partners</NavLink></li>
                        <li><NavLink to="/case-studies" className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors">Case Studies</NavLink></li>
                        <li><NavLink to="/careers" className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors">Careers</NavLink></li>
                        <li><NavLink to="/social-media" className="block px-4 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors">Social Hub</NavLink></li>
                        <li className="border-t border-slate-100 pt-2 mt-2"><NavLink to="/contact" className="block px-4 py-2 text-sm font-bold text-brand-600 hover:bg-brand-50 rounded-lg transition-colors">Contact Us</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Search Trigger */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-brand-600 transition-colors ml-4"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>

              <NavLink to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ml-2">
                Consultation
              </NavLink>
            </nav>

            {/* Mobile Menu Button & Search */}
            <div className="flex items-center gap-4 lg:hidden">
                <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-600 hover:text-brand-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button
                className="p-2 text-slate-600 hover:text-brand-600 transition-colors focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Mobile Menu"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 h-[calc(100vh-80px)] overflow-y-auto pb-20 animate-fade-in shadow-xl">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <NavLink to="/" className="text-lg font-bold py-3 border-b border-slate-50 text-slate-900" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              
              {/* Mobile Services Accordion */}
              <div className="border-b border-slate-50">
                <button 
                  onClick={() => toggleMobileSubmenu('services')}
                  className="w-full flex justify-between items-center py-3 text-lg font-bold text-slate-900 focus:outline-none"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === 'services' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === 'services' ? 'max-h-[1000px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                   <div className="pl-4 space-y-3 border-l-2 border-indigo-100 ml-2">
                      <NavLink to="/services" className="block text-sm font-black text-indigo-600" onClick={() => setIsMenuOpen(false)}>All Service Portfolios</NavLink>
                      {SERVICE_CATEGORIES.map(cat => (
                        <div key={cat.id}>
                           <div className="text-[10px] font-black text-slate-400 uppercase mb-1 mt-2 tracking-widest">{cat.title}</div>
                           {cat.items.map(item => (
                              <NavLink key={item.id} to={`/service/${item.id}`} className="block text-sm text-slate-700 py-1 font-medium" onClick={() => setIsMenuOpen(false)}>
                                {item.title}
                              </NavLink>
                           ))}
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Mobile Solutions Accordion */}
              <div className="border-b border-slate-50">
                <button 
                  onClick={() => toggleMobileSubmenu('solutions')}
                  className="w-full flex justify-between items-center py-3 text-lg font-bold text-slate-900 focus:outline-none"
                >
                  Solutions
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === 'solutions' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === 'solutions' ? 'max-h-[1000px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                   <div className="pl-4 space-y-3 border-l-2 border-indigo-100 ml-2">
                      <NavLink to="/solutions" className="block text-sm font-black text-indigo-600" onClick={() => setIsMenuOpen(false)}>Strategic Solutions</NavLink>
                      <div className="space-y-1">
                        {SOLUTIONS.map(sol => (
                          <NavLink key={sol.id} to={`/solution/${sol.id}`} className="block text-sm text-slate-700 py-1" onClick={() => setIsMenuOpen(false)}>{sol.title}</NavLink>
                        ))}
                      </div>
                      
                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1 mt-4 tracking-widest">Platforms & Challenges</div>
                      <NavLink to="/products" className="block text-sm text-slate-700 py-1" onClick={() => setIsMenuOpen(false)}>Software Products</NavLink>
                      <NavLink to="/problems" className="block text-sm text-slate-700 py-1" onClick={() => setIsMenuOpen(false)}>Success Scenarios</NavLink>

                      <div className="text-[10px] font-black text-slate-400 uppercase mb-1 mt-4 tracking-widest">Industries</div>
                      <div className="grid grid-cols-1 gap-1">
                        {INDUSTRIES.map(ind => (
                          <NavLink key={ind.id} to={`/industry/${ind.id}`} className="text-xs text-slate-600 py-1" onClick={() => setIsMenuOpen(false)}>
                            {ind.icon} {ind.title}
                          </NavLink>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

              {/* Mobile Knowledge Base */}
              <div className="border-b border-slate-50">
                <button 
                  onClick={() => toggleMobileSubmenu('knowledge')}
                  className="w-full flex justify-between items-center py-3 text-lg font-bold text-slate-900 focus:outline-none"
                >
                  Knowledge Base
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === 'knowledge' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === 'knowledge' ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                   <div className="pl-4 space-y-2 border-l-2 border-indigo-100 ml-2">
                      <NavLink to="/blog" className="block text-sm text-slate-700 py-2" onClick={() => setIsMenuOpen(false)}>📰 Latest Insights</NavLink>
                      <NavLink to="/ai-tools" className="block text-sm text-slate-700 py-2" onClick={() => setIsMenuOpen(false)}>✨ AI Tools Suite</NavLink>
                      <NavLink to="/seo-tools" className="block text-sm text-slate-700 py-2" onClick={() => setIsMenuOpen(false)}>🔍 SEO Toolkit</NavLink>
                      <NavLink to="/system-scan" className="block text-sm text-slate-700 py-2" onClick={() => setIsMenuOpen(false)}>🩺 System Health</NavLink>
                      <NavLink to="/glossary" className="block text-sm text-slate-700 py-2" onClick={() => setIsMenuOpen(false)}>📖 Tech Glossary</NavLink>
                   </div>
                </div>
              </div>

              {/* Mobile Company */}
              <div className="border-b border-slate-50">
                <button 
                  onClick={() => toggleMobileSubmenu('company')}
                  className="w-full flex justify-between items-center py-3 text-lg font-bold text-slate-900 focus:outline-none"
                >
                  Company
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === 'company' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === 'company' ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                   <div className="pl-4 space-y-2 border-l-2 border-indigo-100 ml-2">
                      <NavLink to="/about" className="block text-sm text-slate-700 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>About Our Mission</NavLink>
                      <NavLink to="/partners" className="block text-sm text-slate-700 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Partnership Program</NavLink>
                      <NavLink to="/case-studies" className="block text-sm text-slate-700 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Success Stories</NavLink>
                      <NavLink to="/careers" className="block text-sm text-slate-700 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Careers & Growth</NavLink>
                      <NavLink to="/social-media" className="block text-sm text-slate-700 py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Social Connectivity</NavLink>
                      <NavLink to="/contact" className="block text-sm font-bold text-indigo-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
                   </div>
                </div>
              </div>

              <div className="pt-6">
                <NavLink to="/contact" className="block w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform" onClick={() => setIsMenuOpen(false)}>
                    Request Consultation
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      
      {/* Floating Sidebar (Desktop Only) */}
      <FloatingShareSidebar />

      {/* Footer code remains same... */}
      <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
            <div className="space-y-8 lg:col-span-1">
              <div className="flex items-center gap-3 text-white text-2xl font-black tracking-tighter">
                 <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">W</div>
                 WebWorldMaker
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Empowering businesses with cutting-edge digital ecosystems. From high-performance AI agents to global messaging gateway infrastructure.
              </p>
              <div className="space-y-4 pt-2">
                 <div className="flex items-center text-sm group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    Chandigarh, PB, India
                 </div>
                 <div className="flex items-center text-sm group cursor-pointer text-brand-400 font-bold">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    sales@webworldmaker.com
                 </div>
                 <div className="flex items-center text-sm group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    +91-86002-80002
                 </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4">Core Portfolios</h4>
              <ul className="space-y-4 text-sm">
                {topServices.map((service) => (
                    <li key={service.id}>
                        <NavLink to={`/service/${service.id}`} className="hover:text-white transition-colors flex items-center font-medium">
                            {service.title}
                        </NavLink>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4">Industry Focus</h4>
              <ul className="space-y-4 text-sm">
                {INDUSTRIES?.slice(0, 6).map((ind) => (
                    <li key={ind.id}>
                        <NavLink to={`/industry/${ind.id}`} className="hover:text-white transition-colors flex items-center font-medium">
                            {ind.title}
                        </NavLink>
                    </li>
                ))}
                <li><NavLink to="/industries" className="text-brand-400 hover:text-brand-300 font-black mt-4 block uppercase text-[10px] tracking-widest hover:underline">View All Clusters ↗</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><NavLink to="/about" className="hover:text-white transition-colors font-medium">About Mission</NavLink></li>
                <li><NavLink to="/partners" className="hover:text-white transition-colors font-medium">Partnership Tier</NavLink></li>
                <li><NavLink to="/careers" className="hover:text-white transition-colors font-medium">Careers & Talent</NavLink></li>
                <li><NavLink to="/case-studies" className="hover:text-white transition-colors font-medium">Success Benchmarks</NavLink></li>
                <li><NavLink to="/contact" className="text-brand-400 font-bold hover:text-brand-300">24/7 Support Desk</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-widest mb-8 border-l-2 border-brand-600 pl-4">Ecosystem</h4>
              <ul className="space-y-4 text-sm">
                <li><NavLink to="/products" className="hover:text-white transition-colors font-medium">Product Matrix</NavLink></li>
                <li><NavLink to="/glossary" className="hover:text-white transition-colors font-medium">Tech Lexicon</NavLink></li>
                <li><NavLink to="/ai-tools" className="hover:text-brand-400 transition-colors text-brand-300 font-bold">✨ AI Agents Suite</NavLink></li>
                <li><NavLink to="/seo-tools" className="hover:text-white transition-colors font-medium">SEO Intelligence</NavLink></li>
                <li><NavLink to="/system-scan" className="hover:text-emerald-400 transition-colors text-emerald-500 font-bold">🩺 Diagnostic Tool</NavLink></li>
                <li><NavLink to="/sitemap" className="hover:text-white transition-colors font-medium">System Index</NavLink></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-black text-slate-600">
            <p>&copy; {new Date().getFullYear()} WebWorldMaker. Optimized for global throughput.</p>
            <div className="flex space-x-8 mt-6 md:mt-0">
               <NavLink to="/privacy" className="hover:text-white transition-colors">Data Privacy</NavLink>
               <NavLink to="/terms" className="hover:text-white transition-colors">Legal Terms</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
