import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Search } from 'lucide-react';
import { getCategoryBySlug, PRODUCT_CATEGORIES } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';

export const CategoryDetailPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [searchQuery, setSearchQuery] = useState('');

  if (!categorySlug) {
    return <Navigate to="/products" replace />;
  }

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold font-heading text-[#12347E]">
          Category Not Found
        </h1>
        <p className="text-xs text-gray-600">
          The requested product category could not be located.
        </p>
        <Link
          to="/products"
          className="inline-block px-4 py-2 bg-[#12347E] text-white text-xs font-semibold rounded"
        >
          Back to All Products
        </Link>
      </div>
    );
  }

  const filteredProducts = category.products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: category.name }
        ]}
      />

      {/* 1. Large Category Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-[#E3E6ED] shadow-md bg-[#0F1E3D] text-white">
        <div className="h-64 sm:h-80 w-full relative">
          <img
            src={category.heroImage}
            alt={category.name}
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E3D] via-[#0F1E3D]/50 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1.5">
              Industrial Steel Category
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white">
              {category.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2 sm:line-clamp-none">
              {category.headline}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Category Introduction & Specifications Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Detailed Overview */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
          <h2 className="text-xl font-bold font-heading text-[#12347E]">
            Category Overview & Material Characteristics
          </h2>
          <p className="text-xs sm:text-sm text-[#383A3F] leading-relaxed">
            {category.overview}
          </p>

          <div className="pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Standard Verified Grades
              </span>
              <ul className="text-xs space-y-1.5 text-gray-700">
                {category.commonGrades.map((grade, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
                    <span>{grade}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                Available Supply Shapes
              </span>
              <ul className="text-xs space-y-1.5 text-gray-700">
                {category.standardShapes.map((shape, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
                    <span>{shape}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Quick Quote Callout */}
        <div className="lg:col-span-4 bg-[#F5F6F8] p-6 rounded-xl border border-[#E3E6ED] space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E]">
            <ShieldCheck className="w-4 h-4" />
            <span>Fast Quote Service</span>
          </div>
          <h3 className="font-heading font-bold text-base text-[#383A3F]">
            Inquire for {category.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Specify sizes, thicknesses, and delivery destination in Mumbai or Maharashtra for instant pricing.
          </p>
          <Link
            to={`/request-quote?category=${encodeURIComponent(category.slug)}`}
            className="block w-full py-2.5 text-center bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
          >
            Request a Quote for this Category
          </Link>
        </div>
      </div>

      {/* 3. Product Gallery / Grid */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold font-heading text-[#12347E]">
              Products in {category.name}
            </h2>
            <p className="text-xs text-gray-500">
              Showing {filteredProducts.length} verified products
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in this category..."
              className="w-full pl-9 pr-4 py-2 bg-white text-xs border border-gray-300 rounded-lg focus:outline-hidden focus:border-[#12347E]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* 4. Other Product Categories Switcher */}
      <div className="pt-8 border-t border-[#E3E6ED]">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">
          Explore Other Steel Categories
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug).map((other) => (
            <Link
              key={other.slug}
              to={`/products/${other.slug}`}
              className="p-3 bg-white border border-[#E3E6ED] rounded-lg text-xs font-semibold text-[#12347E] hover:border-[#12347E] hover:bg-blue-50/50 transition-colors flex items-center justify-between"
            >
              <span className="truncate">{other.name}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-1 text-gray-400" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
