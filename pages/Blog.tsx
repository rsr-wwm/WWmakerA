
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getBlogPosts } from '../services/contentService'; // Updated import
import { BlogPost } from '../types';
import { SEO } from '../components/SEO';
import { SocialShare } from '../components/SocialShare';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const allPosts = getBlogPosts();
    setPosts(allPosts);
    setFilteredPosts(allPosts);
    
    // Extract unique categories
    const cats = Array.from(new Set(allPosts.map(p => p.category))).sort();
    setCategories(['All', ...cats]);
  }, []);

  const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
      if (category === 'All') {
          setFilteredPosts(posts);
      } else {
          setFilteredPosts(posts.filter(p => p.category === category));
      }
  };

  // Construct Schema.org data for the Blog listing
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "WebWorldMaker Insights",
    "description": "Latest trends in AI, Messaging, and Digital Transformation.",
    "url": window.location.href,
    "publisher": {
      "@type": "Organization",
      "name": "WebWorldMaker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webworldmaker.com/logo.png" 
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.imageUrl,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `${window.location.origin}/#/blog/${post.id}`
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="News & Insights"
        description="Explore the latest trends in AI, Enterprise Messaging, and Digital Strategy. Expert articles by WebWorldMaker."
        type="website"
        schema={blogSchema}
      />

      <div className="bg-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">News & Insights</h1>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Deep dives into AI, Messaging, company events, and the future of Digital Enterprise.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
                <button 
                    key={cat} 
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-indigo-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-indigo-700 text-xs px-2 py-1 rounded font-bold shadow-sm">
                        {post.category}
                    </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
                  <span>{post.date}</span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors leading-tight">
                  <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
                </h2>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <span className="text-xs font-bold text-slate-700 flex items-center">
                      <span className="w-6 h-6 bg-slate-200 rounded-full mr-2 flex items-center justify-center text-[10px] text-slate-500">
                          {post.author.charAt(0)}
                      </span>
                      {post.author}
                  </span>
                  <NavLink to={`/blog/${post.id}`} className="text-indigo-600 text-sm font-semibold hover:text-indigo-800 flex items-center">
                    Read <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-slate-500">
                <p className="text-xl">No posts found in this category.</p>
                <button onClick={() => handleCategoryClick('All')} className="mt-4 text-indigo-600 font-bold underline">View all posts</button>
            </div>
        )}

        <div className="mt-16 max-w-4xl mx-auto">
            <SocialShare url={window.location.href} title="News & Insights - WebWorldMaker" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
