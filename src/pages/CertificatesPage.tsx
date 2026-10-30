import { asset } from '../utils/assets';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, FileCheck2, CheckCircle2, Download, Eye, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/steelData';

interface CertificateItem {
  id: string;
  code: string;
  title: string;
  issuedBy: string;
  standard: string;
  category: string;
  validity: string;
  scope: string;
  keyDetails: string[];
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    title: 'Quality Management System (QMS) Certification',
    issuedBy: 'Accredited International Registrar',
    standard: 'ISO 9001:2015 Standards',
    category: 'System Certification',
    validity: 'Active & Verified',
    scope: 'Stockholding, Procurement, Storage, Value-Added Processing, and Distribution of Carbon Steel, Mild Steel, Alloy Steel, and Stainless Steel Plates, Pipes, and Structural Sections.',
    keyDetails: [
      'Documented Quality Management Process',
      'Regular Calibration of Stockyard Measurement Instruments',
      'Traceable Inward & Outward Batch Dispatch Registers',
      'Customer Satisfaction Benchmarking & Continuous Improvement'
    ]
  },
  {
    id: 'mtc-31',
    code: 'EN 10204 3.1',
    title: 'Material Test Certificate (MTC 3.1 Compliance)',
    issuedBy: 'Certified Primary Steel Mills / Inspection Authority',
    standard: 'EN 10204:2004 Type 3.1 / ISO 10474',
    category: 'Material Certification',
    validity: 'Issued Per Heat / Batch',
    scope: 'Full chemical composition analysis (C, Mn, Si, P, S, Cr, Ni, Mo) and mechanical property tests (Tensile, Yield, Elongation, Impact energy) validated by independent factory test departments.',
    keyDetails: [
      'Specific Material Testing Verified by Mill Authorized Quality Rep',
      '100% Heat Number & Cast Traceability Stenciled on Products',
      'Yield Strength & Ultimate Tensile Strength (UTS) Certified',
      'Mandatory with All Major Industrial Dispatches'
    ]
  },
  {
    id: 'bis-isi',
    code: 'BIS / IS Standards',
    title: 'Bureau of Indian Standards (BIS) Conformance',
    issuedBy: 'Bureau of Indian Standards, Government of India',
    standard: 'IS 2062, IS 1239, IS 3589, IS 4923, IS 1161',
    category: 'National Quality Standards',
    validity: 'Standard Indian Compliance',
    scope: 'Conformance for Hot Rolled Medium and High Tensile Structural Steel (IS 2062), ERW and Seamless Steel Tubes (IS 1239 & IS 3589), and Hollow Steel Sections for Structural Use (IS 4923).',
    keyDetails: [
      'IS 2062 Grade E250 / E350 Structural Plate Compliance',
      'IS 1239 Heavy / Medium Class Black & Galvanized Pipes',
      'IS 4923 Square & Rectangular Hollow Sections',
      'Mandatory for Public Works (PWD, CPWD, Railways, Metro Infrastructure)'
    ]
  },
  {
    id: 'astm-asme',
    code: 'ASTM / ASME',
    title: 'American Society for Testing & Materials Conformance',
    issuedBy: 'International Testing Compliance',
    standard: 'ASTM A36, A53, A106, A312, A240, SA516 Gr 70',
    category: 'International Standards',
    validity: 'Global Industrial Export/Import Compliance',
    scope: 'Conforming steel stock for pressure vessels (ASTM SA516), high-temperature seamless carbon steel pipes (ASTM A106 Gr B), structural carbon steel (ASTM A36), and stainless steel austenitic piping (ASTM A312).',
    keyDetails: [
      'ASTM A106 Grade B High Pressure Boiler & Line Pipe Compliance',
      'ASTM SA516 Grade 70 Normalized Boiler Plate Supply',
      'ASTM A240 Stainless Steel 304/304L/316/316L Plates',
      'Third-party witness inspection readiness (TUV, DNV, BV, SGS, Lloyds)'
    ]
  },
  {
    id: 'nabl-testing',
    code: 'NABL Certified',
    title: 'Third-Party NABL Accredited Laboratory Testing Verification',
    issuedBy: 'NABL Approved Material Testing Facilities',
    standard: 'ISO/IEC 17025 Tested Protocol',
    category: 'Inspection & Laboratory Protocol',
    validity: 'Project-Specific Reports',
    scope: 'Supplementary testing services including Optical Emission Spectrometry (OES chemical testing), Charpy V-Notch low-temperature impact tests, Ultrasonic Flaw Detection, and Hydrostatic pressure testing.',
    keyDetails: [
      'Positive Material Identification (PMI Testing) on SS & Duplex',
      'Ultrasonic Testing (UT Level II) for Heavy Boiler Plates',
      'Intergranular Corrosion Test (IGC) for Stainless Grades',
      'Hardness Testing (Brinell, Rockwell, Vickers)'
    ]
  }
];

export const CertificatesPage: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Certificates & Compliance' }]} />

      {/* Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0f3875] block mb-2 flex items-center gap-1.5">
            <Award className="w-4 h-4" />
            <span>Verified Quality & Compliance</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900">
            Certificates & Quality Standards
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Every metric tonne of steel stocked and dispatched at {COMPANY_INFO.name} comes with complete certification, mill test traceability, and compliance with national and international engineering standards.
          </p>
        </div>

        <Link
          to="/request-quote"
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded-lg shadow-sm transition-all self-start md:self-end whitespace-nowrap"
        >
          Request MTC & Price Quote
        </Link>
      </div>

      {/* Trust Highlights Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-blue-50/70 rounded-2xl border border-blue-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-[#0f3875] flex items-center justify-center shadow-xs shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-black text-sm text-[#0f3875]">100% Traceable</div>
            <div className="text-[11px] text-slate-600">Mill Heat Numbers</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-[#0f3875] flex items-center justify-center shadow-xs shrink-0">
            <FileCheck2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-black text-sm text-[#0f3875]">MTC 3.1 Included</div>
            <div className="text-[11px] text-slate-600">Chemical & Mechanical</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-[#0f3875] flex items-center justify-center shadow-xs shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-black text-sm text-[#0f3875]">IS & ASTM Validated</div>
            <div className="text-[11px] text-slate-600">Strict Tolerances</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-[#0f3875] flex items-center justify-center shadow-xs shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-black text-sm text-[#0f3875]">TPI Readiness</div>
            <div className="text-[11px] text-slate-600">Third-Party Inspection</div>
          </div>
        </div>
      </div>

      {/* Certificates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg hover:border-[#0f3875] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-[#0f3875] font-black text-xs rounded-full border border-blue-200">
                  {cert.code}
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {cert.validity}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-[#0f3875] transition-colors mb-2">
                {cert.title}
              </h3>

              <div className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">Standards:</span>
                <span>{cert.standard}</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {cert.scope}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Compliance Highlights
                </span>
                {cert.keyDetails.slice(0, 3).map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0f3875] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f3875] hover:text-blue-800 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Details</span>
              </button>

              <Link
                to="/request-quote"
                className="text-xs font-semibold text-slate-600 hover:text-[#0f3875] flex items-center gap-1"
              >
                <span>Request Sample</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Official GST Registration & Physical Verification */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm">
            <img
              src={asset("/assets/mahakal-signboard.jpeg")}
              alt="Mahakal Steel Official GST Registration Signboard Gala No 10 Bunavad Market Sakinaka Mumbai GST 27DLSPR1147D1ZU"
              className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 font-bold text-xs rounded-full border border-emerald-200">
                Official Registered Business
              </span>
              <span className="text-xs text-slate-500 font-medium">Maharashtra State Tax Registration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900">
              Government GST Registered Facility
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Mahakal Steel operates from its verified stockyard and commercial office at Sakinaka, Mumbai. Every dispatch is accompanied by an authentic GST tax invoice and full heat-traceable test documentation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">GSTIN Identifier</span>
                <span className="text-sm font-black text-[#0f3875] font-mono">27DLSPR1147D1ZU</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Stockyard Facility</span>
                <span className="text-sm font-bold text-slate-800">Gala No. 10, Bunavad Market</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Certificate Detail */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="px-3 py-1 bg-blue-50 text-[#0f3875] font-black text-xs rounded-full border border-blue-200 inline-block mb-2">
                  {selectedCert.code}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                  {selectedCert.title}
                </h3>
                <span className="text-xs text-slate-500 block mt-1">
                  Issued By: {selectedCert.issuedBy}
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-1">
                  Scope & Engineering Compliance
                </h4>
                <p className="leading-relaxed text-slate-600">
                  {selectedCert.scope}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">
                  Key Verification Parameters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCert.keyDetails.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#0f3875] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100 space-y-2">
                <span className="text-xs font-bold text-[#0f3875] block">
                  Material Test Report (MTR) Guarantee
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We provide physical or digital certified copies of manufacturer test certificates (MTC 3.1) stamped with Mahakal Steel heat verification along with all dispatched materials.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500">Sakinaka, Mumbai Facility</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Close
                </button>
                <Link
                  to="/request-quote"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-bold uppercase text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded-lg shadow-sm"
                >
                  Request Certificate Copy
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
