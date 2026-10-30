import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Warehouse, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const CompanyProfilePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'About Us', href: '/about' },
          { label: 'Detailed Company Profile' }
        ]}
      />

      <div className="border-b border-[#E3E6ED] pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Corporate Information
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Detailed Company Profile
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl">
          An overview of MAHAKAL STEEL’s business structure, stockyard infrastructure, distribution logistics, and verified trade information.
        </p>
      </div>

      {/* Profile Overview Card */}
      <div className="bg-white rounded-xl border border-[#E3E6ED] p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl font-bold font-heading text-[#12347E] mb-4">
          Business Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#383A3F]">
          <div className="p-4 bg-[#F5F6F8] rounded-lg border border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider font-semibold block mb-1">
              Legal Business Name
            </span>
            <span className="text-sm font-bold text-[#12347E] font-heading">
              {COMPANY_INFO.name}
            </span>
          </div>

          <div className="p-4 bg-[#F5F6F8] rounded-lg border border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider font-semibold block mb-1">
              Primary Facility
            </span>
            <span className="text-sm font-bold text-[#12347E]">
              Sakinaka Stockyard, Mumbai
            </span>
          </div>

          <div className="p-4 bg-[#F5F6F8] rounded-lg border border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider font-semibold block mb-1">
              Business Model
            </span>
            <span className="text-sm font-bold text-[#383A3F]">
              Stockist & Wholesaler
            </span>
          </div>

          <div className="p-4 bg-[#F5F6F8] rounded-lg border border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider font-semibold block mb-1">
              Operating Region
            </span>
            <span className="text-sm font-bold text-[#383A3F]">
              Mumbai & Maharashtra
            </span>
          </div>
        </div>
      </div>

      {/* Operational Infrastructure Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <Warehouse className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold font-heading text-[#12347E]">
            Sakinaka Stockyard Infrastructure
          </h3>
          <p className="text-xs text-[#383A3F] leading-relaxed">
            Our stockyard situated at Gala No. 10 in Bunavad Market features heavy-duty cantilever racking for long pipes and structural sections, as well as flat stacking bays for hot-rolled and cold-rolled plates.
          </p>
          <ul className="text-xs space-y-1.5 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Heavy plate handling and shearing readiness</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Weather-protected storage for CR and SS sheets</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Verified weighing bridge procedures</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold font-heading text-[#12347E]">
            Logistics & Transport Fleet
          </h3>
          <p className="text-xs text-[#383A3F] leading-relaxed">
            Quick turnaround is central to industrial operations. We coordinate dedicated transport vehicles, flatbed trailers, and local tempo dispatches to deliver directly to client factory gates and fabrication sites.
          </p>
          <ul className="text-xs space-y-1.5 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Daily delivery routes across Mumbai & Navi Mumbai</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Long-distance transport to Pune, Nashik, & Gujarat</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Bundled and tagged lots for on-site inventory check</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold font-heading text-[#12347E]">
            Material Sourcing & Verification
          </h3>
          <p className="text-xs text-[#383A3F] leading-relaxed">
            We procure our structural steel, carbon steel pipes, and stainless materials from certified primary and secondary producers who adhere strictly to Bureau of Indian Standards (BIS) and ASTM parameters.
          </p>
          <ul className="text-xs space-y-1.5 text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Original mill test certificates (MTC) provided</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Heat number traceability on critical alloys</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#12347E]" />
              <span>Dimensional caliper & ultrasonic inspection</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Visual Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl overflow-hidden border border-[#E3E6ED]">
          <img
            src="/assets/images/structural_steel_beams_1793271796654.jpg"
            alt="Structural Steel Stock"
            className="w-full h-64 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 bg-white">
            <div className="text-xs font-bold text-[#12347E]">Heavy Structural Stock</div>
            <div className="text-[11px] text-gray-500">ISMB I-Beams, H-Columns, and heavy channels</div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-[#E3E6ED]">
          <img
            src="/assets/images/steel_pipes_tubes_1793271794975.jpg"
            alt="Steel Pipes and Tubes"
            className="w-full h-64 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-4 bg-white">
            <div className="text-xs font-bold text-[#12347E]">Precision Piping Inventory</div>
            <div className="text-[11px] text-gray-500">Seamless high pressure tubes & ERW structural hollow sections</div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 bg-[#F5F6F8] rounded-xl border border-[#E3E6ED] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold font-heading text-[#12347E]">
            Looking for specific steel grades or customized bill of quantities?
          </h4>
          <p className="text-xs text-gray-600 mt-0.5">
            Our team will review your drawings and provide an itemized quote.
          </p>
        </div>
        <Link
          to="/request-quote"
          className="px-5 py-2.5 bg-[#12347E] text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#0B2252] transition-colors whitespace-nowrap"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
};
