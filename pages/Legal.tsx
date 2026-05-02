
import React from 'react';
import { useLocation } from 'react-router-dom';
import { SocialShare } from '../components/SocialShare';
import { SEO } from '../components/SEO';

const Legal: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');
  
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const description = isPrivacy 
    ? 'Read our Privacy Policy to understand how we collect, use, and protect your data.'
    : 'Read our Terms of Service regarding the use of WebWorldMaker services and products.';
  const lastUpdated = 'October 24, 2023';

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <SEO 
        title={title} 
        description={description}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-10 md:p-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{title}</h1>
          <p className="text-slate-500 mb-10 text-sm">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none">
            {isPrivacy ? (
              <>
                <p>At WebWorldMaker, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                <h3>1. Information We Collect</h3>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul>
                  <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
                  <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                </ul>
                <h3>2. Use of Your Information</h3>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul>
                  <li>Create and manage your account.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                </ul>
                <h3>3. Contact Us</h3>
                <p>If you have questions or comments about this Privacy Policy, please contact us at privacy@webworldmaker.com.</p>
              </>
            ) : (
              <>
                <p>These Terms of Service ("Terms") govern your use of the WebWorldMaker website and services. By accessing or using the Service, you agree to be bound by these Terms.</p>
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing or using our Services, you confirm that you can form a binding contract with WebWorldMaker, that you accept these Terms and that you agree to comply with them.</p>
                <h3>2. Changes to Terms</h3>
                <p>We reserve the right to modify these Terms at any time. We will always post the most current version on our website. By continuing to use the Services after the changes become effective, you agree to the revised Terms.</p>
                <h3>3. Access and Use of the Services</h3>
                <p>You may use the Services only in compliance with these Terms and all applicable local, state, national, and international laws, rules and regulations.</p>
                <h3>4. Intellectual Property</h3>
                <p>The Service and its original content, features, and functionality are and will remain the exclusive property of WebWorldMaker and its licensors.</p>
              </>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
             <SocialShare url={window.location.href} title={`${title} - WebWorldMaker`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
