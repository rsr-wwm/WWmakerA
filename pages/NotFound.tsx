
import React from 'react';
import { NavLink } from 'react-router-dom';
import { SEO } from '../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
      <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." />
      <div className="text-center">
        <div className="text-9xl font-extrabold text-indigo-100 mb-4">404</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
          The digital pathway you are looking for seems to have vanished into the cloud.
        </p>
        <div className="flex gap-4 justify-center">
            <NavLink to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg">
            Return Home
            </NavLink>
            <NavLink to="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-colors">
            Contact Support
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
