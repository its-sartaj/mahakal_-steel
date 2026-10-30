import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-16 h-16 mx-auto rounded-full bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
        <FileQuestion className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#12347E]">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          The steel page or category you requested could not be located. It may have moved or been renamed.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#12347E] text-white text-xs font-semibold rounded hover:bg-[#0B2252] transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-800 text-xs font-semibold rounded hover:bg-gray-200 transition-colors"
        >
          <span>Browse Steel Products</span>
        </Link>
      </div>
    </div>
  );
};
