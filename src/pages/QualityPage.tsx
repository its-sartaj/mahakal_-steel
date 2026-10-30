import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, FileText, Scale, Eye, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const QualityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'About Us', href: '/about' },
          { label: 'Quality & Service Commitment' }
        ]}
      />

      <div className="border-b border-[#E3E6ED] pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Standards & Procedures
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Quality & Service Commitment
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          At MAHAKAL STEEL, quality assurance is grounded in strict material traceability, standardized inspection protocols, and verified documentation for every dispatch.
        </p>
      </div>

      {/* Core Quality Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-base text-[#12347E]">
            Material Test Traceability
          </h3>
          <p className="text-xs text-[#383A3F]/80 leading-relaxed">
            Every dispatch of prime plates, structural beams, and seamless pipes can be accompanied by authentic mill test reports verifying heat numbers and chemistry.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-base text-[#12347E]">
            Dimensional Verification
          </h3>
          <p className="text-xs text-[#383A3F]/80 leading-relaxed">
            Vernier caliper, micrometers, and ultrasonic thickness checks are conducted to guarantee that plates, pipes, and sections comply with Indian Standard tolerances.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-base text-[#12347E]">
            Transparent Weighment
          </h3>
          <p className="text-xs text-[#383A3F]/80 leading-relaxed">
            All tonnage orders are weighed on certified computerized weighbridges with tare weight slips provided directly to customers to prevent discrepancy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-lg bg-[#12347E]/10 text-[#12347E] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-heading font-bold text-base text-[#12347E]">
            Protective Handling
          </h3>
          <p className="text-xs text-[#383A3F]/80 leading-relaxed">
            Cold rolled and stainless sheets are stored under weather protection and dispatched with PVC laser film or anti-rust oiling to prevent transit oxidation.
          </p>
        </div>
      </div>

      {/* Detailed Technical Standards Table */}
      <div className="bg-white rounded-xl border border-[#E3E6ED] p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold font-heading text-[#12347E]">
            Adherence to Industrial Testing Standards
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Our stocked materials comply with Indian and international engineering standards.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-[#F5F6F8]">
                <th className="py-3 px-4 font-bold text-[#12347E] uppercase tracking-wider">Product Category</th>
                <th className="py-3 px-4 font-bold text-[#12347E] uppercase tracking-wider">Applicable Standards</th>
                <th className="py-3 px-4 font-bold text-[#12347E] uppercase tracking-wider">Testing Parameters</th>
                <th className="py-3 px-4 font-bold text-[#12347E] uppercase tracking-wider">Verification Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3 px-4 font-semibold text-[#383A3F]">Hot Rolled Plates</td>
                <td className="py-3 px-4 text-gray-600">IS 2062 Grade E250/E350, ASTM A36</td>
                <td className="py-3 px-4 text-gray-600">Tensile, Yield, Elongation, Bend Test</td>
                <td className="py-3 px-4 font-mono text-gray-700">Mill Test Certificate (MTC)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#383A3F]">Cold Rolled Sheets</td>
                <td className="py-3 px-4 text-gray-600">IS 513 / JIS G3141 SPCC</td>
                <td className="py-3 px-4 text-gray-600">Cupping test, Surface roughness, Thickness gauge</td>
                <td className="py-3 px-4 font-mono text-gray-700">Manufacturer Quality Report</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#383A3F]">Seamless CS Pipes</td>
                <td className="py-3 px-4 text-gray-600">ASTM A106 Gr. B / API 5L / IS 1239</td>
                <td className="py-3 px-4 text-gray-600">Hydrostatic test, Flattening, Eddy current</td>
                <td className="py-3 px-4 font-mono text-gray-700">EN 10204 3.1 Certificate</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#383A3F]">Stainless Steel 304/316</td>
                <td className="py-3 px-4 text-gray-600">ASTM A240 / ASTM A312</td>
                <td className="py-3 px-4 text-gray-600">PMI (Positive Material Identification), Intergranular corrosion</td>
                <td className="py-3 px-4 font-mono text-gray-700">Spectro Analysis & Heat MTC</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-[#383A3F]">Structural Beams & Angles</td>
                <td className="py-3 px-4 text-gray-600">IS 808 / IS 2062 / IS 12778</td>
                <td className="py-3 px-4 text-gray-600">Flange thickness, Web depth, Straightness tolerance</td>
                <td className="py-3 px-4 font-mono text-gray-700">Primary Mill Batch Slip</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Visual Quality Proof */}
      <div className="bg-[#0F1E3D] text-white p-6 sm:p-8 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">
            Transparent Procurement
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading">
            Need Third-Party Inspection (TPI) Coordination?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            We facilitate witness testing and third-party inspection (TPI) by agencies such as TUV, SGS, Bureau Veritas, or RITES at stockyard before final dispatch.
          </p>
        </div>
        <Link
          to="/request-quote"
          className="px-6 py-3 bg-[#12347E] hover:bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider rounded whitespace-nowrap transition-colors"
        >
          Contact Quality Desk
        </Link>
      </div>
    </div>
  );
};
