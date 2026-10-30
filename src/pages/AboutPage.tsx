import { asset } from '../utils/assets';
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, CheckCircle2, ArrowRight, Award, Compass, Warehouse, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-12">
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* Page Header */}
      <div className="border-b border-[#E3E6ED] pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Company Overview
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          About MAHAKAL STEEL
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2 max-w-3xl leading-relaxed">
          MAHAKAL STEEL is an established industrial steel stockist and distributor operating from Sakinaka, Mumbai, dedicated to providing dependable steel materials for manufacturing, engineering, and construction projects.
        </p>
      </div>

      {/* Navigation Sub-Hub Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/about/company-profile"
          className="group p-6 bg-white rounded-xl border border-[#E3E6ED] hover:border-[#12347E] transition-all shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#12347E] group-hover:text-blue-700">
              Detailed Company Profile
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Explore our facility capabilities, storage capacity, product sourcing models, and fleet dispatch logistics.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#12347E] group-hover:underline">
            <span>Read Company Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <Link
          to="/about/quality"
          className="group p-6 bg-white rounded-xl border border-[#E3E6ED] hover:border-[#12347E] transition-all shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#12347E] group-hover:text-blue-700">
              Quality & Service Commitment
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Learn about our material test report (MTR) practices, chemical/mechanical standards, and dimensional checks.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#12347E] group-hover:underline">
            <span>Our Quality Policy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>

        <Link
          to="/about/location"
          className="group p-6 bg-white rounded-xl border border-[#E3E6ED] hover:border-[#12347E] transition-all shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#12347E] group-hover:text-blue-700">
              Business Location & Directions
            </h3>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Find directions to Gala No. 10, Bunavad Market in Sakinaka, Mumbai, complete with map coordinates and highway routes.
            </p>
          </div>
          <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#12347E] group-hover:underline">
            <span>View Map & Directions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </Link>
      </div>

      {/* Main About Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Detailed Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E3E6ED] shadow-xs space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#12347E]">
              Business Overview & Supply Focus
            </h2>
            <p className="text-xs sm:text-sm text-[#383A3F] leading-relaxed">
              MAHAKAL STEEL was established to address the critical need for prompt, transparent, and certified steel supply in Mumbai’s bustling industrial hubs. Situated in Bunavad Market, Sakinaka, our facility acts as a central conduit for raw material stock.
            </p>
            <p className="text-xs sm:text-sm text-[#383A3F] leading-relaxed">
              We focus on building lasting business relationships by prioritizing material specifications, verified mill test traceability, honest weight invoicing, and responsive delivery schedules.
            </p>

            <h3 className="text-base font-bold font-heading text-[#383A3F] pt-2">
              Our Product Supply Focus
            </h3>
            <ul className="space-y-2.5 text-xs text-[#383A3F]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>
                  <strong>Plates & Sheets:</strong> Prime Hot Rolled (HR) and Cold Rolled (CR) plates, chequered plates for floorings, and cut-to-size blanks.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>
                  <strong>Pipes & Hollow Sections:</strong> High-pressure seamless carbon steel tubes, ERW square and rectangular hollow sections (SHS/RHS), and galvanized conduit lines.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>
                  <strong>Mild Steel Commercial Sections:</strong> Equal angles, structural channels (ISMC), solid flat bars, and bright round rods.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>
                  <strong>Stainless Steel Materials:</strong> SS 304, 304L, and 316 grade sheets, mirror/hairline decorative plates, and corrosion-resistant fluid pipes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>
                  <strong>Heavy Structural Sections:</strong> Heavy I-Beams (ISMB), Universal H-Columns, and reinforced structural members.
                </span>
              </li>
            </ul>

            <h3 className="text-base font-bold font-heading text-[#383A3F] pt-2">
              Customer Service Approach
            </h3>
            <p className="text-xs sm:text-sm text-[#383A3F] leading-relaxed">
              We treat every enquiry with professional technical attention. Whether you need a single bundle of mild steel angles for a local maintenance project or multiple truckloads of heavy structural beams for a new industrial plant, our team coordinates dimensions, cuts, and documentation cleanly.
            </p>
          </div>
        </div>

        {/* Right: Operational Highlights & Photography */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
            <h3 className="text-sm font-bold font-heading text-[#12347E] uppercase tracking-wider">
              Facility & Stockyard Highlights
            </h3>
            <ul className="text-xs space-y-3 text-[#383A3F]">
              <li className="flex items-start gap-2.5">
                <Warehouse className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900">Sakinaka Stockyard:</span>
                  <span>Gala No. 10, Bunavad Market, Opp. Asha Kripa Bldg., Link Road, Sakinaka, Mumbai.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900">Direct Transport Dispatch:</span>
                  <span>Fast vehicle turnarounds throughout Mumbai, Navi Mumbai, Thane, and industrial Maharashtra.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900">Certified Sourcing:</span>
                  <span>Direct association with certified mills, ensuring chemical and mechanical compliance.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-[#E3E6ED] shadow-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#12347E] mb-3">
              Stockyard & Warehousing
            </h4>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img
                src={asset("/assets/images/hero_steel_warehouse_1793271819088.jpg")}
                alt="Mahakal Steel Material Storage & Handling"
                className="w-full h-56 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-gray-600 mt-3 leading-relaxed">
              Equipped for material handling, bundle strapping, and overhead gantry crane loading for rapid turnarounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
