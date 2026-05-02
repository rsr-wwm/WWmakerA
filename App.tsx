
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Industries from './pages/Industries'; // New
import IndustryDetail from './pages/IndustryDetail'; // New
import Glossary from './pages/Glossary'; // New
import GlossaryDetail from './pages/GlossaryDetail'; // New
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Problems from './pages/Problems';
import ProblemDetail from './pages/ProblemDetail';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing'; // Import Pricing
import SeoTools from './pages/SeoTools';
import AiTools from './pages/AiTools';
import SystemScan from './pages/SystemScan'; // Import SystemScan
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminBlog from './pages/AdminBlog';
import Sitemap from './pages/Sitemap';
import SocialMedia from './pages/SocialMedia';
import Legal from './pages/Legal';
import Careers from './pages/Careers';
import CaseStudies from './pages/CaseStudies';
import Partners from './pages/Partners';
import NotFound from './pages/NotFound'; // Import NotFound
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Activate Scroll Restoration */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solution/:id" element={<SolutionDetail />} />
          <Route path="/industries" element={<Industries />} /> {/* New Route */}
          <Route path="/industry/:id" element={<IndustryDetail />} /> {/* New Route */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/pricing" element={<Pricing />} /> 
          <Route path="/problems" element={<Problems />} />
          <Route path="/problem/:id" element={<ProblemDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seo-tools" element={<SeoTools />} />
          <Route path="/ai-tools" element={<AiTools />} />
          <Route path="/system-scan" element={<SystemScan />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy" element={<Legal />} />
          <Route path="/terms" element={<Legal />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/glossary" element={<Glossary />} /> {/* New Route */}
          <Route path="/glossary/:term" element={<GlossaryDetail />} /> {/* New Route */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all 404 */}
        </Routes>
        <ChatBot />
      </Layout>
    </Router>
  );
};

export default App;
