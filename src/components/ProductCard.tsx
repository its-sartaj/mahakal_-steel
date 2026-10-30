import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProductItem } from '../data/steelData';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const primaryImage = product.images[0] || '/assets/images/steel_sheets_plates_1793271793920.jpg';

  return (
    <div className="group bg-white rounded-xl border border-[#E3E6ED] overflow-hidden flex flex-col hover:border-[#12347E]/40 hover:shadow-md transition-all duration-200">
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img
          src={primaryImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 bg-[#12347E]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm backdrop-blur-xs">
          {product.categoryName}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-base text-[#12347E] group-hover:text-blue-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-[#383A3F]/80 mt-1.5 mb-3 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick specs preview */}
          {product.specifications.length > 0 && (
            <div className="space-y-1 mb-4 pt-2 border-t border-gray-100">
              {product.specifications.slice(0, 2).map((spec, i) => (
                <div key={i} className="flex items-center justify-between text-[11px]">
                  <span className="text-gray-500">{spec.label}:</span>
                  <span className="font-medium text-[#383A3F] truncate max-w-[55%] text-right font-mono">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <Link
            to={`/products/${product.categorySlug}/${product.slug}`}
            className="flex-1 text-center py-2 px-3 text-xs font-semibold text-[#12347E] bg-[#F5F6F8] hover:bg-[#12347E] hover:text-white rounded transition-colors"
          >
            View Details
          </Link>
          <Link
            to={`/request-quote?category=${encodeURIComponent(product.categorySlug)}&product=${encodeURIComponent(product.name)}`}
            className="flex-1 text-center py-2 px-3 text-xs font-semibold text-white bg-[#12347E] hover:bg-[#0B2252] rounded transition-colors"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
