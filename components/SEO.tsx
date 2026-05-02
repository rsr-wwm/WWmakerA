import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  keywords?: string[];
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image, type = 'website', keywords, schema }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | WebWorldMaker`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Update Keywords
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector("meta[name='keywords']");
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords.join(', '));
    }

    // 4. Update Canonical URL
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", window.location.href);

    // 5. Update Open Graph Tags
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:type', type);
    setMetaTag('og:url', window.location.href);
    if (image) setMetaTag('og:image', image);

    // 6. Update Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image', false);
    setMetaTag('twitter:title', title, false);
    setMetaTag('twitter:description', description, false);
    if (image) setMetaTag('twitter:image', image, false);

    // 7. Inject JSON-LD Schema
    if (schema) {
      const scriptId = 'json-ld-structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.text = JSON.stringify(schema);
    }

    return () => {
      // Cleanup: We generally don't remove meta tags as the next page will overwrite them,
      // but we can clear the schema script to prevent stale data.
      const script = document.getElementById('json-ld-structured-data');
      if (script) {
        script.textContent = ''; 
      }
    };
  }, [title, description, image, type, keywords, schema]);

  return null;
};
