
import React, { useState, useEffect } from 'react';
import { 
    getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost,
    getProducts, saveProduct, deleteProduct,
    getSolutions, saveSolution, deleteSolution,
    getRawServices, saveService, deleteService,
    getIndustries, saveIndustry, deleteIndustry,
    getGlossary, saveGlossary, deleteGlossary,
    restoreDefaults
} from '../services/contentService';
import { BlogPost, ProductItem, SolutionItem, ServiceItem, IndustryItem, GlossaryItem } from '../types';

// Helper for ID generation
const generateId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'blog' | 'products' | 'solutions' | 'services' | 'industries' | 'glossary'>('blog');
  
  // Data States
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [solutions, setSolutions] = useState<SolutionItem[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [industries, setIndustries] = useState<IndustryItem[]>([]);
  const [glossary, setGlossary] = useState<GlossaryItem[]>([]);

  // Edit States
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (isAuthenticated) loadAllData();
  }, [isAuthenticated, activeTab]);

  const loadAllData = () => {
      setPosts(getBlogPosts());
      setProducts(getProducts());
      setSolutions(getSolutions());
      setServices(getRawServices());
      setIndustries(getIndustries());
      setGlossary(getGlossary());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') setIsAuthenticated(true);
    else alert('Incorrect password');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
      setIsEditing(false);
      setFormData({});
  };

  const handleEdit = (item: any) => {
      const flatItem = { ...item };
      
      // Flatten specific arrays for textareas
      if (['products', 'solutions', 'services'].includes(activeTab)) {
          if (item.benefits) flatItem.benefits = item.benefits.join('\n');
          if (item.features) flatItem.features = item.features.map((f: any) => f.title).join('\n');
      }
      
      // Handle Industry Arrays specially (simplification for this demo)
      if (activeTab === 'industries') {
          if (item.challenges) flatItem.challenges = item.challenges.map((c: any) => c.title).join('\n');
          if (item.stats) flatItem.stats = item.stats.map((s: any) => `${s.value}:${s.label}`).join('\n');
      }

      setFormData(flatItem);
      setIsEditing(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
      if (!window.confirm('Delete this item?')) return;
      
      if (activeTab === 'blog') deleteBlogPost(id);
      if (activeTab === 'products') deleteProduct(id);
      if (activeTab === 'solutions') deleteSolution(id);
      if (activeTab === 'services') deleteService(id);
      if (activeTab === 'industries') deleteIndustry(id);
      if (activeTab === 'glossary') deleteGlossary(id);
      
      loadAllData();
  };

  const handleSave = (e: React.FormEvent) => {
      e.preventDefault();
      
      const dataToSave = { ...formData };
      
      if (activeTab === 'glossary') {
          // Glossary key is 'term'
          if (!dataToSave.term) { alert("Term is required"); return; }
          saveGlossary(dataToSave);
      } else {
          // Others use ID
          if (!dataToSave.id && dataToSave.title) dataToSave.id = generateId(dataToSave.title);
          
          if (activeTab === 'blog') {
              if (!dataToSave.date) dataToSave.date = new Date().toISOString().split('T')[0];
              if (isEditing) updateBlogPost(dataToSave);
              else createBlogPost(dataToSave);
          } else if (activeTab === 'industries') {
              // Convert simplified inputs back to complex objects
              if (typeof dataToSave.challenges === 'string') {
                  dataToSave.challenges = dataToSave.challenges.split('\n').filter((s:string) => s.trim()).map((t:string) => ({ title: t, description: 'Default description.' }));
              }
              if (typeof dataToSave.stats === 'string') {
                  dataToSave.stats = dataToSave.stats.split('\n').filter((s:string) => s.trim()).map((s:string) => {
                      const [val, lab] = s.split(':');
                      return { value: val || '', label: lab || '' };
                  });
              }
              saveIndustry(dataToSave);
          } else {
              // Standard items
              if (typeof dataToSave.benefits === 'string') {
                  dataToSave.benefits = dataToSave.benefits.split('\n').filter((s: string) => s.trim());
              }
              if (typeof dataToSave.features === 'string') {
                  dataToSave.features = dataToSave.features.split('\n').filter((s: string) => s.trim()).map((t: string) => ({
                      title: t,
                      description: 'Feature description placeholder',
                      benefit: 'Feature benefit placeholder'
                  }));
              }
              
              if (!dataToSave.metaTitle) dataToSave.metaTitle = dataToSave.title;
              if (!dataToSave.metaDescription) dataToSave.metaDescription = dataToSave.description || dataToSave.excerpt;

              if (activeTab === 'products') saveProduct(dataToSave);
              if (activeTab === 'solutions') saveSolution(dataToSave);
              if (activeTab === 'services') saveService(dataToSave);
          }
      }

      loadAllData();
      resetForm();
  };

  const handleRestore = () => {
      if(window.confirm("This will reset all content to system defaults. Any manual edits will be lost. Continue?")) {
          restoreDefaults();
      }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white p-10 rounded-2xl shadow-xl w-96 border border-slate-200">
          <div className="flex justify-center mb-6">
             <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
             </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-center text-slate-900">Web MCP</h2>
          <p className="text-center text-slate-500 mb-8 text-sm">WebWorldMaker Control Panel</p>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Access Key</label>
                <input type="password" placeholder="••••••••" className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">Authenticate</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-indigo-900 text-white sticky top-0 z-30 shadow-md">
          <div className="container mx-auto px-4 h-16 flex justify-between items-center">
              <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center font-bold">W</div>
                  <span className="font-bold text-lg tracking-tight">Web MCP <span className="text-indigo-300 font-normal text-sm">v2.5</span></span>
              </div>
              <div className="flex gap-4 items-center">
                  <button onClick={handleRestore} className="text-xs text-red-300 hover:text-white border border-red-900 bg-red-900/50 px-3 py-1 rounded transition-colors mr-2">Reset Defaults</button>
                  <span className="text-sm text-indigo-200">Administrator</span>
                  <button onClick={() => setIsAuthenticated(false)} className="bg-indigo-800 hover:bg-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold transition-colors">Logout</button>
              </div>
          </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex overflow-x-auto gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm border border-slate-200">
            {['blog', 'products', 'solutions', 'services', 'industries', 'glossary'].map((tab) => (
                <button 
                    key={tab}
                    onClick={() => { setActiveTab(tab as any); resetForm(); }}
                    className={`px-6 py-2 rounded-lg text-sm font-bold capitalize transition-colors whitespace-nowrap ${activeTab === tab ? 'bg-indigo-100 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                    {tab}
                </button>
            ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 xl:col-span-3">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 sticky top-24 max-h-[80vh] overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-bold text-slate-900 capitalize">{isEditing ? `Edit ${activeTab}` : `New ${activeTab}`}</h2>
                        {isEditing && <button onClick={resetForm} className="text-xs text-slate-500 hover:text-red-500 underline">Cancel</button>}
                    </div>
                    
                    <form onSubmit={handleSave} className="space-y-4">
                        {activeTab === 'glossary' ? (
                            <>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Term</label>
                                    <input type="text" name="term" required value={formData.term || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Definition</label>
                                    <textarea name="definition" rows={4} value={formData.definition || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"></textarea>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label>
                                    <input type="text" name="category" value={formData.category || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Title</label>
                                    <input type="text" name="title" required value={formData.title || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-sm" />
                                </div>

                                {activeTab === 'industries' && (
                                    <>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Icon</label>
                                            <input type="text" name="icon" value={formData.icon || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg" placeholder="e.g. 🏭" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                                            <textarea name="description" rows={3} value={formData.description || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Challenges (Title only)</label>
                                            <textarea name="challenges" rows={3} value={formData.challenges || ''} onChange={handleArrayInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="One per line"></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Stats (Value:Label)</label>
                                            <textarea name="stats" rows={3} value={formData.stats || ''} onChange={handleArrayInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm" placeholder="99%:Uptime"></textarea>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'blog' && (
                                    <>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Author</label><input type="text" name="author" value={formData.author || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg" /></div>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Category</label><input type="text" name="category" value={formData.category || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg" /></div>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Excerpt</label><textarea name="excerpt" rows={3} value={formData.excerpt || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg"></textarea></div>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Content (HTML)</label><textarea name="content" rows={10} value={formData.content || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs"></textarea></div>
                                    </>
                                )}

                                {['products', 'solutions', 'services'].includes(activeTab) && (
                                    <>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label><textarea name="description" rows={3} value={formData.description || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"></textarea></div>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Description</label><textarea name="fullDescription" rows={5} value={formData.fullDescription || ''} onChange={handleInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"></textarea></div>
                                        <div><label className="block text-xs font-bold text-slate-500 uppercase mb-1">Features (One per line)</label><textarea name="features" rows={4} value={formData.features || ''} onChange={handleArrayInputChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm"></textarea></div>
                                    </>
                                )}
                            </>
                        )}

                        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-200 mt-4">
                            {isEditing ? 'Update Item' : 'Create Item'}
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:col-span-8 xl:col-span-9">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 capitalize">{activeTab} List</h2>
                    <div className="space-y-4">
                        {(activeTab === 'blog' ? posts : 
                          activeTab === 'products' ? products : 
                          activeTab === 'solutions' ? solutions : 
                          activeTab === 'industries' ? industries :
                          activeTab === 'glossary' ? glossary :
                          services).map((item: any) => (
                            <div key={item.id || item.term} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-slate-100 rounded-xl hover:border-indigo-200 hover:shadow-md transition-all bg-white group">
                                <div className="mb-4 sm:mb-0">
                                    <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title || item.term}</h3>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">{item.description || item.excerpt || item.definition || 'No description'}</p>
                                </div>
                                <div className="flex gap-3 sm:ml-4">
                                    <button onClick={() => handleEdit(item)} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors">Edit</button>
                                    <button onClick={() => handleDelete(item.id || item.term)} className="px-4 py-2 bg-white border border-red-100 text-red-500 text-sm font-bold rounded-lg hover:bg-red-50 transition-colors">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
