
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

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <NavLink to="/" className="text-2xl font-extrabold text-indigo-900 flex items-center gap-2 tracking-tight group" aria-label="WebWorldMaker Home">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-slate-800">WebWorldMaker</span>
              </NavLink>
            </div>

            {/* Desktop Nav - Categorized Style */}
            <nav className="hidden lg:flex space-x-6 items-center" aria-label="Main Navigation">
              <AnimatedNavLink to="/">Home</AnimatedNavLink>
              
              {/* Company Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('company')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-colors duration-300 ${activeDropdown === 'company' ? 'text-indigo-600' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                  Company
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'company' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-48 transition-all duration-300 ease-out ${activeDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    <ul className="space-y-2">
                        <li><NavLink to="/about" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">About Us</NavLink></li>
                        <li><NavLink to="/partners" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Partners</NavLink></li>
                        <li><NavLink to="/case-studies" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Case Studies</NavLink></li>
                        <li><NavLink to="/careers" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Careers</NavLink></li>
                        <li><NavLink to="/social-media" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">Social Hub</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Industries Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('industries')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-colors duration-300 ${activeDropdown === 'industries' ? 'text-indigo-600' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                  Industries
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'industries' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-56 transition-all duration-300 ease-out ${activeDropdown === 'industries' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    <ul className="space-y-1">
                        {INDUSTRIES?.map(ind => (
                            <li key={ind.id}>
                                <NavLink to={`/industry/${ind.id}`} className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                                    <span className="mr-2 text-base">{ind.icon}</span> {ind.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-colors duration-300 ${activeDropdown === 'services' ? 'text-indigo-600' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                  Services
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-[800px] transition-all duration-300 ease-out ${activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 grid grid-cols-3 gap-8 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    {SERVICE_CATEGORIES.map((cat) => (
                      <div key={cat.id}>
                        <h4 className="font-bold text-indigo-900 mb-3 uppercase text-xs tracking-wider border-b border-slate-100 pb-2">{cat.title}</h4>
                        <ul className="space-y-3">
                          {cat.items.map((item) => (
                            <li key={item.id}>
                              <NavLink to={`/service/${item.id}`} className="block group/item">
                                <div className="text-sm font-medium text-slate-700 group-hover/item:text-indigo-600 transition-colors flex items-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                  {item.title}
                                </div>
                                <div className="text-xs text-slate-400 line-clamp-1 group-hover/item:text-slate-500 pl-3.5 transition-colors">{item.description}</div>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('solutions')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-colors duration-300 ${activeDropdown === 'solutions' ? 'text-indigo-600' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                  Solutions
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'solutions' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-[600px] transition-all duration-300 ease-out ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    {SOLUTIONS.map((sol) => (
                      <NavLink key={sol.id} to={`/solution/${sol.id}`} className="group/sol p-4 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100">
                        <div className="font-bold text-slate-800 group-hover/sol:text-indigo-600 mb-1">{sol.title}</div>
                        <div className="text-xs text-slate-500">{sol.focus}</div>
                      </NavLink>
                    ))}
                    <div className="col-span-2 mt-2 pt-4 border-t border-slate-100 bg-indigo-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                        <NavLink to="/solutions" className="flex items-center justify-center text-sm font-bold text-indigo-700 hover:text-indigo-900 group/link">
                            View All Strategies <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                        </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatedNavLink to="/pricing">Pricing</AnimatedNavLink>
              
              {/* Tools Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('tools')} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`relative py-2 px-1 flex items-center text-sm font-bold transition-colors duration-300 ${activeDropdown === 'tools' ? 'text-indigo-600' : 'text-slate-600 group-hover:text-indigo-600'}`}>
                  Tools
                  <svg className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${activeDropdown === 'tools' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full transform transition-transform duration-300 ease-out origin-left ${activeDropdown === 'tools' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </button>
                <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-6 w-48 transition-all duration-300 ease-out ${activeDropdown === 'tools' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} z-50`}>
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-4 relative before:absolute before:-top-2 before:left-1/2 before:-ml-2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white">
                    <ul className="space-y-2">
                        <li><NavLink to="/ai-tools" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"><span className="mr-2">✨</span> AI Suite</NavLink></li>
                        <li><NavLink to="/seo-tools" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"><span className="mr-2">🔍</span> SEO Tools</NavLink></li>
                        <li><NavLink to="/system-scan" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"><span className="mr-2">🩺</span> System Scan</NavLink></li>
                        <li className="border-t border-slate-100 pt-2 mt-2"><NavLink to="/glossary" className="block px-4 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"><span className="mr-2">📖</span> Tech Glossary</NavLink></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Search Trigger */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-indigo-600 transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>

              <NavLink to="/contact" className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ml-2">
                Get Started
              </NavLink>
            </nav>

            {/* Mobile Menu Button & Search */}
            <div className="flex items-center gap-4 lg:hidden">
                <button onClick={() => setIsSearchOpen(true)} className="p-2 text-slate-600 hover:text-indigo-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button
                className="p-2 text-slate-600 hover:text-indigo-600 transition-colors focus:outline-none"
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
              <NavLink to="/" className="text-lg font-medium py-3 border-b border-slate-50 text-slate-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              
              {/* Mobile Services Accordion */}
              <div className="border-b border-slate-50">
                <button 
                  onClick={() => toggleMobileSubmenu('services')}
                  className="w-full flex justify-between items-center py-3 text-lg font-medium text-slate-700 hover:text-indigo-600 focus:outline-none"
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === 'services' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === 'services' ? 'max-h-[1000px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                   <div className="pl-4 space-y-3 border-l-2 border-slate-100 ml-2">
                      <NavLink to="/services" className="block text-sm font-bold text-indigo-600" onClick={() => setIsMenuOpen(false)}>All Services</NavLink>
                      {SERVICE_CATEGORIES.map(cat => (
                        <div key={cat.id}>
                           <div className="text-xs font-bold text-slate-400 uppercase mb-1 mt-2">{cat.title}</div>
                           {cat.items.map(item => (
                              <NavLink key={item.id} to={`/service/${item.id}`} className="block text-sm text-slate-600 py-1 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                                {item.title}
                              </NavLink>
                           ))}
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Mobile Industries */}
              <div className="border-b border-slate-50">
                <button 
                  onClick={() => toggleMobileSubmenu('industries')}
                  className="w-full flex justify-between items-center py-3 text-lg font-medium text-slate-700 hover:text-indigo-600 focus:outline-none"
                >
                  Industries
                  <svg className={`w-4 h-4 transition-transform duration-300 ${mobileSubmenu === 'industries' ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenu === 'industries' ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                   <div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-2">
                      <NavLink to="/industries" className="block text-sm font-bold text-indigo-600 mb-2" onClick={() => setIsMenuOpen(false)}>All Industries</NavLink>
                      {INDUSTRIES?.map(ind => (
                          <NavLink key={ind.id} to={`/industry/${ind.id}`} className="block text-sm text-slate-600 py-1 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>
                            {ind.title}
                          </NavLink>
                      ))}
                   </div>
                </div>
              </div>

              <NavLink to="/products" className="text-lg font-medium py-3 border-b border-slate-50 text-slate-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Products</NavLink>
              <NavLink to="/pricing" className="text-lg font-medium py-3 border-b border-slate-50 text-slate-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Pricing</NavLink>
              <NavLink to="/problems" className="text-lg font-medium py-3 border-b border-slate-50 text-slate-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Problems</NavLink>
              <NavLink to="/blog" className="text-lg font-medium py-3 border-b border-slate-50 text-slate-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
              <NavLink to="/about" className="text-lg font-medium py-3 border-b border-slate-50 text-slate-700 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              
              <div className="pt-4 pb-2">
                 <div className="text-xs font-bold text-slate-400 uppercase mb-2">Tools & Resources</div>
                 <div className="grid grid-cols-2 gap-2">
                    <NavLink to="/seo-tools" className="text-center p-3 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>SEO Tools</NavLink>
                    <NavLink to="/ai-tools" className="text-center p-3 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>AI Tools</NavLink>
                    <NavLink to="/system-scan" className="text-center p-3 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>System Scan</NavLink>
                    <NavLink to="/glossary" className="text-center p-3 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Glossary</NavLink>
                 </div>
              </div>

              <NavLink to="/contact" className="bg-emerald-600 text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </NavLink>
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
      <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-white text-2xl font-bold">
                 <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">W</div>
                 WebWorldMaker
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering businesses with cutting-edge digital solutions. From enterprise messaging to AI-driven automation.
              </p>
              <div className="space-y-3 pt-2">
                 <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    123 Tech District, Innovation City
                 </div>
                 <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    sales@webworldmaker.com
                 </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Services</h4>
              <ul className="space-y-3 text-sm">
                {topServices.map((service) => (
                    <li key={service.id}>
                        <NavLink to={`/service/${service.id}`} className="hover:text-indigo-400 transition-colors flex items-center">
                            <span className="w-1 h-1 bg-indigo-50 rounded-full mr-2"></span>
                            {service.title}
                        </NavLink>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Industries</h4>
              <ul className="space-y-3 text-sm">
                {INDUSTRIES?.slice(0, 6).map((ind) => (
                    <li key={ind.id}>
                        <NavLink to={`/industry/${ind.id}`} className="hover:text-indigo-400 transition-colors flex items-center">
                            <span className="w-1 h-1 bg-purple-50 rounded-full mr-2"></span>
                            {ind.title}
                        </NavLink>
                    </li>
                ))}
                <li><NavLink to="/industries" className="text-indigo-400 hover:text-indigo-300 font-semibold mt-2 block">View All →</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><NavLink to="/about" className="hover:text-indigo-400 transition-colors">About Us</NavLink></li>
                <li><NavLink to="/partners" className="hover:text-indigo-400 transition-colors">Partners</NavLink></li>
                <li><NavLink to="/careers" className="hover:text-indigo-400 transition-colors">Careers & Jobs</NavLink></li>
                <li><NavLink to="/case-studies" className="hover:text-indigo-400 transition-colors">Case Studies</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-indigo-400 transition-colors">Contact Support</NavLink></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 border-b border-slate-700 pb-2 inline-block">Discover</h4>
              <ul className="space-y-3 text-sm">
                <li><NavLink to="/products" className="hover:text-indigo-400 transition-colors">Our Products</NavLink></li>
                <li><NavLink to="/glossary" className="hover:text-indigo-400 transition-colors">Tech Glossary</NavLink></li>
                <li><NavLink to="/ai-tools" className="hover:text-indigo-400 transition-colors text-indigo-300">✨ AI Tools Suite</NavLink></li>
                <li><NavLink to="/seo-tools" className="hover:text-indigo-400 transition-colors">SEO Tools</NavLink></li>
                <li><NavLink to="/system-scan" className="hover:text-indigo-400 transition-colors text-emerald-400">🩺 System Scan</NavLink></li>
                <li><NavLink to="/sitemap" className="hover:text-indigo-400 transition-colors">Sitemap</NavLink></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} WebWorldMaker. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <NavLink to="/privacy" className="hover:text-white transition-colors">Privacy Policy</NavLink>
               <NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
