import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/steelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e3875] text-white pt-14 pb-0 border-t-4 border-[#0b2b5a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 12-Column Responsive Grid with zero column collision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-6 lg:gap-8 pb-12 border-b border-[#18498f]">
          {/* Column 1: Same Brand Metallic Logo & Company Summary */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-3 scroll-reveal">
            <Link to="/" className="inline-block group">
              <div className="bg-white rounded-xl px-3 py-2 inline-flex items-center shadow-md border border-white/20 transition-transform duration-200 group-hover:scale-[1.02]">
                <img
                  src="/assets/logo.png"
                  alt="Mahakal Steel"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-blue-100 leading-relaxed max-w-sm">
              Mahakal Steel is one of the most reliable industrial steel stockists in Mumbai, supplying prime quality hot & cold rolled steel sheets, seamless pipes, and heavy structural beams.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sm:col-span-1 lg:col-span-2 scroll-reveal scroll-delay-100">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-cyan-400 rounded-xs"></span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <Link to="/" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/about/quality" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Quality Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Industries</span>
                </Link>
              </li>
              <li>
                <Link to="/about/mission" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Our Mission</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Certificates</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="sm:col-span-1 lg:col-span-2 scroll-reveal scroll-delay-200">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-cyan-400 rounded-xs"></span>
              <span>Our Products</span>
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/request-quote"
                  className="hover:text-white flex items-center gap-1.5 transition-colors text-cyan-300 font-semibold"
                >
                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  <span>Request a Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Materials */}
          <div className="sm:col-span-1 lg:col-span-2 scroll-reveal scroll-delay-300">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-cyan-400 rounded-xs"></span>
              <span>Our Materials</span>
            </h4>
            <ul className="space-y-2 text-xs text-blue-100">
              <li>
                <Link to="/products/steel-sheets-plates" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Hot Rolled Steel (HR)</span>
                </Link>
              </li>
              <li>
                <Link to="/products/steel-sheets-plates" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Cold Rolled Steel (CR)</span>
                </Link>
              </li>
              <li>
                <Link to="/products/steel-pipes-tubes" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Carbon Steel Seamless</span>
                </Link>
              </li>
              <li>
                <Link to="/products/stainless-steel" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Stainless Steel 304/316</span>
                </Link>
              </li>
              <li>
                <Link to="/products/mild-steel" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Galvanized Iron (GI)</span>
                </Link>
              </li>
              <li>
                <Link to="/products/structural-steel" className="hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Heavy Structural Steel</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact us */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-3 scroll-reveal scroll-delay-400">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-heading flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-cyan-400 rounded-xs"></span>
              <span>Contact us</span>
            </h4>

            <div className="space-y-1 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider text-[10px]">ADDRESS</span>
                  <span>{COMPANY_INFO.addressLine1},</span><br />
                  <span>{COMPANY_INFO.addressLine2},</span><br />
                  <span>{COMPANY_INFO.city} - {COMPANY_INFO.postalCode}, Maharashtra.</span>
                </div>
              </div>
            </div>

            <div className="pt-1 space-y-1 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider text-[10px]">PHONE NO:</span>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-cyan-300 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-1 space-y-1 text-xs text-blue-100">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider text-[10px]">EMAIL:</span>
                  <a href="mailto:sales@mahakalsteel.in" className="hover:text-cyan-300 transition-colors block">
                    sales@mahakalsteel.in
                  </a>
                  <a href="mailto:info@mahakalsteel.in" className="hover:text-cyan-300 transition-colors block">
                    info@mahakalsteel.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Credits Strip with Solid Black Background & Combined Centered Credits */}
      <div className="bg-black py-4 border-t border-slate-900 mt-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
          <span>© {new Date().getFullYear()} MAHAKAL STEEL. All rights reserved.</span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="font-medium text-slate-400">{COMPANY_INFO.developerCredit}</span>
        </div>
      </div>
    </footer>
  );
};
