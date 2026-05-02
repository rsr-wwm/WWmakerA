
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, NavLink } from 'react-router-dom';
import { getPost } from '../services/blogService';
import { BlogPost as BlogPostType } from '../types';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (id) {
      const found = getPost(id);
      if (found) setPost(found);
    }
  }, [id]);

  if (!post && id) return <div className="py-20 text-center">Loading...</div>;
  if (!post) return <Navigate to="/blog" replace />;

  // Strip HTML tags for schema articleBody
  const plainTextContent = post.content.replace(/<[^>]+>/g, '');

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "editor": post.author,
    "genre": post.category,
    "keywords": `${post.category} business digital strategy`, 
    "wordcount": plainTextContent.split(/\s+/).length,
    "publisher": {
      "@type": "Organization",
      "name": "WebWorldMaker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webworldmaker.com/logo.png"
      }
    },
    "url": window.location.href,
    "datePublished": post.date,
    "dateCreated": post.date,
    "dateModified": post.date,
    "description": post.excerpt,
    "articleBody": plainTextContent,
    "author": {
      "@type": "Person",
      "name": post.author
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={post.title}
        description={post.excerpt}
        image={post.imageUrl}
        type="article"
        schema={blogPostSchema}
      />

      {/* Progress Bar (Simple Implementation) */}
      <div className="fixed top-0 left-0 h-1 bg-indigo-600 z-50 animate-width"></div>

      <div className="relative h-[500px] w-full">
         <img 
            src={post.imageUrl || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'} 
            alt={post.title} 
            className="w-full h-full object-cover fixed-bg"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto max-w-4xl">
                <div className="flex gap-2 mb-6">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-lg">{post.category}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-sm">{post.title}</h1>
                <div className="flex items-center text-slate-200 text-sm gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">
                            {post.author.charAt(0)}
                        </div>
                        <span className="font-semibold">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-80">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>{post.date}</span>
                    </div>
                </div>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
         <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            
            {/* Sidebar Left (Navigation) */}
            <div className="hidden lg:block lg:w-1/6">
                <div className="sticky top-24">
                    <NavLink to="/blog" className="inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors font-semibold text-sm group">
                        <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> Back
                    </NavLink>
                    <div className="border-l-2 border-slate-100 pl-4 py-2">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-2">Share this</p>
                        <SocialShare url={window.location.href} title={post.title} className="flex flex-col gap-3 items-start" hideLabel={true} />
                    </div>
                </div>
            </div>

            {/* Main Article */}
            <div className="lg:w-2/3">
                {/* Mobile Back Button */}
                <NavLink to="/blog" className="lg:hidden inline-flex items-center text-slate-500 hover:text-indigo-600 mb-8 transition-colors text-sm">
                    ← Back to Blog
                </NavLink>

                <article className="prose prose-lg prose-indigo max-w-none text-slate-700 leading-relaxed">
                    <p className="lead text-xl text-slate-600 font-medium mb-8 border-l-4 border-indigo-500 pl-4 italic">
                        {post.excerpt}
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-4">Share this article</h3>
                    <SocialShare url={window.location.href} title={post.title} />
                </div>
            </div>
            
            {/* Sidebar Right (CTA) */}
            <div className="lg:w-1/4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 sticky top-24 shadow-sm">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                        🚀
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Need help with {post.category}?</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        WebWorldMaker specializes in enterprise solutions for {post.category}. Let's discuss how we can help you scale.
                    </p>
                    <NavLink to="/contact" className="block text-center bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200 transform hover:-translate-y-0.5">
                        Get a Free Audit
                    </NavLink>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default BlogPost;
