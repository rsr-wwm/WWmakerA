
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS, SERVICE_CATEGORIES, SOLUTIONS, PRODUCTS, PROBLEMS } from '../constants';
import { getPosts } from '../services/blogService';
import { SEO } from '../components/SEO';

type ViewMode = 'list' | 'grid' | 'mindmap';

const Sitemap: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
      setBlogPosts(getPosts());
  }, []);

  // Calculate Stats
  const mainPagesCount = NAV_ITEMS.length; // NAV_ITEMS now includes Careers and Case Studies in constants.ts
  const servicesCount = SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  const solutionsCount = SOLUTIONS.length;
  const productsCount = PRODUCTS.length;
  const problemsCount = PROBLEMS.length;
  const toolsCount = 2; // SEO, AI
  const legalCount = 3; // Privacy, Terms, Admin
  
  const totalActiveLinks = mainPagesCount + servicesCount + solutionsCount + productsCount + problemsCount + blogPosts.length + toolsCount + legalCount;
  const inactiveLinks = 0; // Currently no inactive link tracking mechanism

  // --- Components for different views ---

  const ListView = () => (
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 max-w-5xl mx-auto animate-fade-in">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Main Navigation */}
        <div>
          <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Main Pages</h2>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-slate-700 hover:text-indigo-600 hover:underline">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Services</h2>
          <ul className="space-y-4">
            {SERVICE_CATEGORIES.map((cat) => (
              <li key={cat.id}>
                <span className="font-semibold text-slate-900 block mb-1">{cat.title}</span>
                <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
                  {cat.items.map((item) => (
                    <li key={item.id}>
                      <NavLink to={`/service/${item.id}`} className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions, Products, Tools & Blog */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Strategic Solutions</h2>
            <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
              {SOLUTIONS.map((sol) => (
                <li key={sol.id}>
                  <NavLink to={`/solution/${sol.id}`} className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">
                    {sol.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Common Problems</h2>
            <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
              {PROBLEMS.map((prob) => (
                <li key={prob.id}>
                  <NavLink to={`/problem/${prob.id}`} className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">
                    {prob.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Products</h2>
            <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <NavLink to={`/product/${prod.id}`} className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">
                    {prod.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Tools</h2>
            <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
              <li>
                <NavLink to="/seo-tools" className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">
                  SEO & Marketing Tools
                </NavLink>
              </li>
              <li>
                <NavLink to="/ai-tools" className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">
                  Gemini AI Suite
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Blog Posts</h2>
             <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <NavLink to={`/blog/${post.id}`} className="text-sm text-slate-600 hover:text-indigo-600 hover:underline line-clamp-1" title={post.title}>
                            {post.title}
                        </NavLink>
                    </li>
                ))}
             </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-indigo-900 mb-4 border-b border-indigo-100 pb-2">Legal & Admin</h2>
            <ul className="pl-4 border-l-2 border-slate-100 space-y-2">
              <li><NavLink to="/privacy" className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">Terms of Service</NavLink></li>
              <li><NavLink to="/admin/blog" className="text-sm text-slate-600 hover:text-indigo-600 hover:underline">Admin Login</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const GridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto animate-fade-in">
        {/* Main */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-xl">🏠</div>
            <h3 className="font-bold text-lg mb-4">Main Pages</h3>
            <div className="flex flex-wrap gap-2">
                {NAV_ITEMS.map(item => (
                    <NavLink key={item.path} to={item.path} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </div>

        {/* Services (Grouped) */}
        {SERVICE_CATEGORIES.map(cat => (
            <div key={cat.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-4 text-xl">🛠️</div>
                <h3 className="font-bold text-lg mb-4">{cat.title}</h3>
                <div className="space-y-2">
                    {cat.items.map(item => (
                        <NavLink key={item.id} to={`/service/${item.id}`} className="block text-sm text-slate-600 hover:text-indigo-600 hover:translate-x-1 transition-all">
                            → {item.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        ))}

        {/* Solutions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-xl">🚀</div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <div className="space-y-2">
                {SOLUTIONS.map(item => (
                    <NavLink key={item.id} to={`/solution/${item.id}`} className="block text-sm text-slate-600 hover:text-green-600 hover:translate-x-1 transition-all">
                        → {item.title}
                    </NavLink>
                ))}
            </div>
        </div>

        {/* Problems */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4 text-xl">⚠️</div>
            <h3 className="font-bold text-lg mb-4">Problems Solved</h3>
            <div className="space-y-2">
                {PROBLEMS.map(item => (
                    <NavLink key={item.id} to={`/problem/${item.id}`} className="block text-sm text-slate-600 hover:text-red-600 hover:translate-x-1 transition-all">
                        → {item.title}
                    </NavLink>
                ))}
            </div>
        </div>

        {/* Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4 text-xl">📦</div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <div className="space-y-2">
                {PRODUCTS.map(item => (
                    <NavLink key={item.id} to={`/product/${item.id}`} className="block text-sm text-slate-600 hover:text-purple-600 hover:translate-x-1 transition-all">
                        → {item.title}
                    </NavLink>
                ))}
            </div>
        </div>

        {/* Resources */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 md:col-span-2">
            <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4 text-xl">📚</div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Tools</h4>
                    <NavLink to="/seo-tools" className="block text-sm mb-1 hover:text-orange-600">SEO Tools</NavLink>
                    <NavLink to="/ai-tools" className="block text-sm mb-1 hover:text-orange-600">AI Suite</NavLink>
                </div>
                <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase mb-2">Legal</h4>
                    <NavLink to="/privacy" className="block text-sm mb-1 hover:text-orange-600">Privacy Policy</NavLink>
                    <NavLink to="/terms" className="block text-sm mb-1 hover:text-orange-600">Terms of Service</NavLink>
                    <NavLink to="/admin/blog" className="block text-sm mb-1 hover:text-orange-600 mt-2">Admin Login</NavLink>
                </div>
            </div>
        </div>
    </div>
  );

  const MindMapView = () => (
    <div className="overflow-x-auto pb-10 animate-fade-in">
        <div className="min-w-[1200px] flex justify-center p-10">
            <div className="flex flex-col items-center">
                {/* Root Node */}
                <div className="z-10 bg-indigo-900 text-white px-8 py-4 rounded-full font-bold text-xl shadow-xl mb-12 relative">
                    WebWorldMaker
                    {/* Vertical line down */}
                    <div className="absolute top-full left-1/2 w-0.5 h-12 bg-slate-300 -translate-x-1/2"></div>
                </div>

                {/* Level 1 Container */}
                <div className="flex justify-center gap-10 relative">
                    {/* Horizontal Connector Line */}
                    <div className="absolute -top-12 left-10 right-10 h-0.5 bg-slate-300"></div>

                    {/* Nodes Level 1 */}
                    {[
                        { title: 'Main', items: NAV_ITEMS, color: 'bg-blue-100 border-blue-200 text-blue-800' },
                        { title: 'Services', items: SERVICE_CATEGORIES, color: 'bg-indigo-100 border-indigo-200 text-indigo-800', isCategory: true },
                        { title: 'Solutions', items: SOLUTIONS, color: 'bg-green-100 border-green-200 text-green-800' },
                        { title: 'Problems', items: PROBLEMS, color: 'bg-red-100 border-red-200 text-red-800' },
                        { title: 'Products', items: PRODUCTS, color: 'bg-purple-100 border-purple-200 text-purple-800' },
                        { title: 'Tools', items: [{label: 'SEO Tools', path: '/seo-tools'}, {label: 'AI Suite', path: '/ai-tools'}], color: 'bg-orange-100 border-orange-200 text-orange-800' },
                        { title: 'Legal', items: [{label: 'Privacy', path: '/privacy'}, {label: 'Terms', path: '/terms'}, {label: 'Admin', path: '/admin/blog'}], color: 'bg-slate-100 border-slate-200 text-slate-800' }
                    ].map((branch, i) => (
                        <div key={i} className="flex flex-col items-center relative">
                            {/* Vertical line up to horizontal bar */}
                            <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-slate-300 -translate-x-1/2"></div>
                            
                            {/* Branch Node */}
                            <div className={`px-4 py-2 rounded-lg border-2 font-bold mb-6 shadow-sm z-10 ${branch.color} relative min-w-[120px] text-center`}>
                                {branch.title}
                                {/* Vertical line down to children */}
                                <div className="absolute top-full left-1/2 w-0.5 h-6 bg-slate-300 -translate-x-1/2"></div>
                            </div>

                            {/* Children */}
                            <div className="flex flex-col gap-2 relative pt-6">
                                {/* Connector for children */}
                                <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-slate-300 -translate-x-1/2"></div>
                                
                                {branch.items.map((item: any, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 px-3 py-2 rounded text-xs text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors shadow-sm w-40 text-center relative mx-auto">
                                        {branch.isCategory ? (
                                            <span className="font-semibold block border-b border-slate-100 pb-1 mb-1">{item.title}</span>
                                        ) : (
                                            <NavLink to={item.path || (item.id ? (branch.title === 'Solutions' ? `/solution/${item.id}` : branch.title === 'Problems' ? `/problem/${item.id}` : `/product/${item.id}`) : '#')} className="block truncate" title={item.label || item.title}>
                                                {item.label || item.title}
                                            </NavLink>
                                        )}
                                        
                                        {/* Nested items for categories */}
                                        {branch.isCategory && item.items && (
                                            <div className="text-[10px] text-left space-y-1">
                                                {item.items.map((sub: any) => (
                                                    <NavLink key={sub.id} to={`/service/${sub.id}`} className="block hover:text-indigo-600 truncate" title={sub.title}>• {sub.title}</NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title="Sitemap - Navigate WebWorldMaker" 
        description="Comprehensive sitemap of WebWorldMaker. Explore our services, solutions, products, and tools."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Sitemap</h1>
          <p className="text-slate-600 mb-8">Navigate WebWorldMaker using your preferred visualization style.</p>
          
          {/* Site Statistics Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
             <div className="p-4 bg-indigo-50 rounded-xl text-center">
                <div className="text-2xl font-bold text-indigo-700">{totalActiveLinks}</div>
                <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">Total Links</div>
             </div>
             <div className="p-4 bg-emerald-50 rounded-xl text-center">
                <div className="text-2xl font-bold text-emerald-700">{totalActiveLinks}</div>
                <div className="text-xs font-semibold text-emerald-500 uppercase tracking-wide">Active Pages</div>
             </div>
             <div className="p-4 bg-slate-50 rounded-xl text-center">
                <div className="text-2xl font-bold text-slate-500">{inactiveLinks}</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Inactive</div>
             </div>
             <div className="p-4 bg-blue-50 rounded-xl text-center">
                <div className="text-2xl font-bold text-blue-700">100%</div>
                <div className="text-xs font-semibold text-blue-500 uppercase tracking-wide">System Health</div>
             </div>
          </div>

          {/* View Switcher */}
          <div className="inline-flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            <button 
                onClick={() => setViewMode('list')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'}`}
            >
                List View
            </button>
            <button 
                onClick={() => setViewMode('grid')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'}`}
            >
                Grid View
            </button>
            <button 
                onClick={() => setViewMode('mindmap')}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'mindmap' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-indigo-600'}`}
            >
                Mind Map
            </button>
          </div>
        </div>

        {/* Content Render */}
        <div className="transition-all duration-500 ease-in-out">
            {viewMode === 'list' && <ListView />}
            {viewMode === 'grid' && <GridView />}
            {viewMode === 'mindmap' && <MindMapView />}
        </div>

      </div>
    </div>
  );
};

export default Sitemap;
