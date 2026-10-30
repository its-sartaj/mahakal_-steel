import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCategory } from '../data/steelData';

interface CategoryCardProps {
  category: ProductCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group bg-white rounded-xl border border-[#E3E6ED] overflow-hidden flex flex-col hover:border-[#12347E]/50 hover:shadow-lg transition-all duration-200">
      <div className="relative aspect-16/10 overflow-hidden bg-gray-100">
        <img
          src={category.cardImage}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-300 block mb-0.5">
              Category
            </span>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
              {category.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-[#383A3F]/80 leading-relaxed mb-4">
            {category.description}
          </p>

          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-1.5">
              Key Shapes & Grades:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {category.standardShapes.slice(0, 3).map((shape, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium bg-[#F5F6F8] text-[#383A3F] px-2 py-0.5 rounded border border-gray-200"
                >
                  {shape}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <Link
            to={`/products/${category.slug}`}
            className="flex items-center justify-between text-xs font-semibold text-[#12347E] hover:text-[#0B2252] group-hover:translate-x-1 transition-all"
          >
            <span>Explore {category.name} ({category.products.length} Products)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
