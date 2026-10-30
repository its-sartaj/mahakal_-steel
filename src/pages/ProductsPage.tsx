import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight, Layers } from 'lucide-react';
import { PRODUCT_CATEGORIES, getAllProducts } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CategoryCard } from '../components/CategoryCard';
import { ProductCard } from '../components/ProductCard';

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const allProducts = getAllProducts();

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || product.categorySlug === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-12">
      <Breadcrumbs items={[{ label: 'Products' }]} />

      {/* Header */}
      <div className="border-b border-[#E3E6ED] pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Complete Industrial Catalog
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Steel Products & Industrial Materials
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          Explore our range of hot rolled & cold rolled steel plates, high pressure seamless pipes, mild steel merchant sections, austenitic stainless steel, and heavy structural beams stocked at Sakinaka, Mumbai.
        </p>
      </div>

      {/* 1. Category Overview Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold font-heading text-[#12347E]">
            Product Categories
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Select a category to view specific product grades, dimensions, and supply options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* 2. Interactive Search & Filterable Product Catalogue */}
      <section className="space-y-6 pt-6 border-t border-[#E3E6ED]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold font-heading text-[#12347E]">
              All Products & Verified Grades
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Showing {filteredProducts.length} verified sample product specifications
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by steel grade, shape, pipe..."
              className="w-full pl-9 pr-4 py-2 bg-white text-xs border border-gray-300 rounded-lg focus:outline-hidden focus:border-[#12347E] focus:ring-1 focus:ring-[#12347E]"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Filter Controls with zero-pill compliance) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-gray-200">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-[#12347E] text-white shadow-xs'
                : 'bg-white text-[#383A3F] border border-gray-300 hover:bg-gray-100'
            }`}
          >
            All Categories ({allProducts.length})
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                selectedCategory === cat.slug
                  ? 'bg-[#12347E] text-white shadow-xs'
                  : 'bg-white text-[#383A3F] border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.name} ({cat.products.length})
            </button>
          ))}
        </div>

        {/* Filtered Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12 text-center space-y-3">
            <p className="text-sm font-semibold text-gray-700">
              No steel products match your search query: "{searchQuery}"
            </p>
            <p className="text-xs text-gray-500">
              Try adjusting your search terms or view our broad product categories above.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#12347E] text-white text-xs font-semibold rounded hover:bg-[#0B2252]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Quote Banner */}
      <div className="bg-[#12347E] text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl font-bold font-heading">
            Need customized steel cutting, shearing, or bulk tonnage pricing?
          </h3>
          <p className="text-xs text-blue-100">
            Send us your Bill of Materials (BOM) directly for quick dispatch quotes.
          </p>
        </div>
        <Link
          to="/request-quote"
          className="px-6 py-3 bg-white text-[#12347E] text-xs font-bold uppercase tracking-wider rounded hover:bg-blue-50 transition-colors whitespace-nowrap"
        >
          Request a Custom Quote
        </Link>
      </div>
    </div>
  );
};
