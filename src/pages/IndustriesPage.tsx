import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, FlaskConical, Warehouse, Truck, Flame, ArrowRight } from 'lucide-react';
import { INDUSTRIES_SERVED, PRODUCT_CATEGORIES } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const IndustriesPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Factory': return <Factory className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'Warehouse': return <Warehouse className="w-6 h-6" />;
      case 'Truck': return <Truck className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      default: return <Factory className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-12">
      <Breadcrumbs items={[{ label: 'Industries We Serve' }]} />

      {/* Header */}
      <div className="border-b border-[#E3E6ED] pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Market Sectors & Application Engineering
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Industries We Serve
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          From infrastructure and skyscraper construction to high-purity pharmaceutical piping, MAHAKAL STEEL delivers certified structural sections, pipes, and specialty alloy sheets to meet demanding industry requirements.
        </p>
      </div>

      {/* Industries Detailed List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRIES_SERVED.map((industry) => (
          <div
            key={industry.id}
            className="bg-white rounded-xl border border-[#E3E6ED] p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-[#12347E]/50 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#12347E]/10 text-[#12347E] flex items-center justify-center shrink-0">
                  {getIcon(industry.iconName)}
                </div>
                <h2 className="text-lg sm:text-xl font-bold font-heading text-[#12347E]">
                  {industry.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-[#383A3F]/85 leading-relaxed">
                {industry.description}
              </p>

              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2">
                  Key Products Stocked For This Industry:
                </span>
                <div className="flex flex-wrap gap-2">
                  {industry.keyProducts.map((prod, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-[#F5F6F8] text-[#383A3F] px-2.5 py-1 rounded border border-gray-200"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
              <Link
                to="/products"
                className="text-xs font-semibold text-[#12347E] hover:underline flex items-center gap-1"
              >
                <span>View Matching Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={`/request-quote?requirement=${encodeURIComponent(`Material for ${industry.title}`)}`}
                className="px-3.5 py-1.5 bg-[#12347E] text-white text-xs font-semibold rounded hover:bg-[#0B2252] transition-colors"
              >
                Get Industry Quote
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sector Sourcing Banner */}
      <div className="bg-[#0F1E3D] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
            Dedicated Sourcing Coordination
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Need customized structural sections or scheduled batch deliveries?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            We work with industrial procurement managers to schedule deliveries matching phased construction milestones or factory machining cycles.
          </p>
        </div>

        <Link
          to="/request-quote"
          className="px-6 py-3.5 bg-white text-[#12347E] text-xs font-bold uppercase tracking-wider rounded hover:bg-slate-100 transition-colors whitespace-nowrap shadow-sm"
        >
          Discuss Supply Schedule
        </Link>
      </div>
    </div>
  );
};
