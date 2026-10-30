import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Layers,
  Truck,
  PhoneCall
} from 'lucide-react';
import { getProductBySlug, getCategoryBySlug, getRelatedProducts, COMPANY_INFO } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductCard } from '../components/ProductCard';

export const ProductDetailPage: React.FC = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string; productSlug: string }>();

  if (!categorySlug || !productSlug) {
    return <Navigate to="/products" replace />;
  }

  const category = getCategoryBySlug(categorySlug);
  const product = getProductBySlug(categorySlug, productSlug);

  if (!product || !category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-2xl font-bold font-heading text-[#12347E]">
          Product Not Found
        </h1>
        <p className="text-xs text-gray-600">
          The requested steel product could not be located in our catalog.
        </p>
        <Link
          to="/products"
          className="inline-block px-4 py-2 bg-[#12347E] text-white text-xs font-semibold rounded"
        >
          Return to All Products
        </Link>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState<string>(product.images[0] || '');
  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-10">
      {/* Breadcrumbs: Home > Products > Category > Product */}
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: category.name, href: `/products/${category.slug}` },
          { label: product.name }
        ]}
      />

      {/* Back to Category Navigation */}
      <div>
        <Link
          to={`/products/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#12347E] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {category.name}</span>
        </Link>
      </div>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Product Image Gallery with Thumbnails */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-[#E3E6ED] bg-gray-100 aspect-4/3 shadow-sm">
            <img
              src={activeImage || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#12347E] text-white text-xs font-semibold px-3 py-1 rounded shadow-xs">
              {product.categoryName}
            </div>
          </div>

          {/* Thumbnail Selector */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3">
              {product.images.map((img, index) => {
                const isSelected = (activeImage || product.images[0]) === img;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative rounded-lg overflow-hidden border-2 w-20 h-16 bg-gray-100 transition-all ${
                      isSelected
                        ? 'border-[#12347E] ring-2 ring-[#12347E]/20'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                );
              })}
            </div>
          )}

          {/* Quick Dispatch & Stockyard Notice */}
          <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E3E6ED] space-y-2 text-xs text-[#383A3F]">
            <div className="flex items-center gap-2 font-bold text-[#12347E]">
              <Truck className="w-4 h-4" />
              <span>Available from Sakinaka Stockyard</span>
            </div>
            <p className="text-gray-600">
              Gala No. 10, Bunavad Market, Opp. Asha Kripa Bldg., Link Road, Sakinaka, Mumbai - 400072.
            </p>
          </div>
        </div>

        {/* Right Column: Product Information, Specs & Actions */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
              Verified Stock Material
            </span>
            <h1 className="text-2xl sm:text-3xl font-black font-heading text-[#12347E]">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">
              {product.tagline}
            </p>
          </div>

          <div className="prose prose-sm max-w-none text-[#383A3F] text-xs sm:text-sm leading-relaxed">
            <p>{product.fullDescription}</p>
          </div>

          {/* Verified Technical Specifications Table */}
          <div className="border border-[#E3E6ED] rounded-xl overflow-hidden bg-white shadow-xs">
            <div className="bg-[#F5F6F8] px-4 py-3 border-b border-[#E3E6ED] flex items-center justify-between">
              <span className="text-xs font-bold font-heading text-[#12347E] uppercase tracking-wider">
                Technical Specifications & Standards
              </span>
              <span className="text-[11px] text-gray-500 font-mono">IS / ASTM Standard</span>
            </div>
            <div className="divide-y divide-gray-100 text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex py-2.5 px-4 items-center justify-between">
                  <span className="text-gray-600 font-medium">{spec.label}</span>
                  <span className="text-[#383A3F] font-semibold text-right font-mono">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Action Button: Pre-filled Quote */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Link
              to={`/request-quote?category=${encodeURIComponent(product.categorySlug)}&product=${encodeURIComponent(product.name)}`}
              className="flex-1 text-center py-3.5 px-6 bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md"
            >
              Request a Quote for this Product
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Mahakal%20Steel,%20I%20am%20inquiring%20about%20${encodeURIComponent(product.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-3.5 px-6 bg-[#25D366] hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-xs"
            >
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Applications & Features Two-Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E3E6ED]">
        {/* Applications */}
        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
          <h3 className="text-base font-bold font-heading text-[#12347E]">
            Common Applications & Uses
          </h3>
          <ul className="space-y-2 text-xs text-[#383A3F]">
            {product.applications.map((app, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features & Advantages */}
        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
          <h3 className="text-base font-bold font-heading text-[#12347E]">
            Material Advantages & Supply Standards
          </h3>
          <ul className="space-y-2 text-xs text-[#383A3F]">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="pt-8 border-t border-[#E3E6ED] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold font-heading text-[#12347E]">
                Related Steel Products
              </h2>
              <p className="text-xs text-gray-500">
                Frequently ordered alongside {product.name}
              </p>
            </div>
            <Link
              to="/products"
              className="text-xs font-semibold text-[#12347E] hover:underline flex items-center gap-1"
            >
              <span>All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
