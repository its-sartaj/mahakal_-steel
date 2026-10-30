import { asset } from '../utils/assets';
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, Clock, Phone, Mail, Compass, ExternalLink, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const LocationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-10">
      <Breadcrumbs
        items={[
          { label: 'About Us', href: '/about' },
          { label: 'Business Location & Directions' }
        ]}
      />

      <div className="border-b border-[#E3E6ED] pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Stockyard & Office Address
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Business Location & Directions
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          Conveniently situated in Bunavad Market along Link Road in Sakinaka, Mumbai, our location offers excellent heavy vehicle transit access connecting Mumbai’s industrial clusters.
        </p>
      </div>

      {/* Main Location Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Address Card and Landmarks */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-[#E3E6ED] p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E]">
              <MapPin className="w-4 h-4" />
              <span>Physical Address</span>
            </div>

            <div className="text-sm text-[#383A3F] space-y-1">
              <div className="font-extrabold text-[#12347E] font-heading text-lg">
                {COMPANY_INFO.name}
              </div>
              <div className="font-semibold text-gray-900">{COMPANY_INFO.addressLine1}</div>
              <div className="text-gray-700">{COMPANY_INFO.addressLine2}</div>
              <div className="text-gray-700">
                {COMPANY_INFO.city} - {COMPANY_INFO.postalCode}, {COMPANY_INFO.state}, India.
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-[#383A3F]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#12347E]" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#12347E]" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#12347E]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Official Location Signboard */}
          <div className="bg-white rounded-xl border border-[#E3E6ED] overflow-hidden shadow-xs space-y-3 p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E]">
                <MapPin className="w-4 h-4" />
                <span>Official Facility Signboard</span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                GST Verified
              </span>
            </div>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-xs bg-slate-900">
              <img
                src={asset("/assets/mahakal-signboard.jpeg")}
                alt="Mahakal Steel Official Signboard Gala No 10 Bunavad Market Sakinaka Mumbai GST 27DLSPR1147D1ZU"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="text-xs text-gray-600 bg-slate-50 p-2.5 rounded border border-gray-100 flex items-center justify-between">
              <span className="font-semibold text-slate-800">GSTIN: 27DLSPR1147D1ZU</span>
              <span className="text-gray-500">Gala No. 10, Bunavad Market</span>
            </div>
          </div>

          {/* Key Transport Corridors */}
          <div className="bg-white rounded-xl border border-[#E3E6ED] p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold font-heading text-[#12347E] uppercase tracking-wider">
              Transit & Logistics Accessibility
            </h3>
            <ul className="text-xs space-y-3 text-[#383A3F]">
              <li className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900">Heavy Truck Movement:</span>
                  <span>Link Road allows convenient access for 16-wheel trailers, tempos, and flatbed transport trucks.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Compass className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900">Corridor Proximity:</span>
                  <span>Quick access to Western Express Highway (Andheri) and Eastern Express Highway (Ghatkopar / Vikhroli).</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-gray-900">Local Landmark:</span>
                  <span>Located in Bunavad Market, directly opposite Asha Kripa Building on Link Road.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Embedded Map */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-[#E3E6ED] overflow-hidden shadow-xs">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#12347E]">
                  Interactive Google Map
                </h3>
                <p className="text-[11px] text-gray-500">
                  Sakinaka Link Road, Mumbai 400072
                </p>
              </div>
              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#12347E] hover:underline font-semibold flex items-center gap-1"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="h-[420px] w-full bg-gray-100">
              <iframe
                title="Mahakal Steel Google Map Location"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-white border-t border-gray-200 text-xs text-gray-600 flex flex-wrap items-center justify-between gap-3">
              <span>GPS Coordinates: 19.1067° N, 72.8857° E</span>
              <span className="text-[#12347E] font-medium">Visiting hours: Mon - Sat 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
