import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/steelData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white text-slate-800 shadow-sm border-b border-slate-200">
      {/* Top Contact Bar - clean professional light gray/slate */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-700">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#0f3875] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0f3875]" />
              <span className="font-semibold text-slate-900">{COMPANY_INFO.phone}</span>
            </a>
            <span className="hidden sm:inline-block text-slate-300">|</span>
            <a
              href="mailto:sales@mahakalsteel.in"
              className="hidden xs:flex items-center gap-1.5 hover:text-[#0f3875] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0f3875]" />
              <span>sales@mahakalsteel.in</span>
            </a>
            <span className="hidden md:inline-block text-slate-300">|</span>
            <a
              href="mailto:info@mahakalsteel.in"
              className="hidden md:flex items-center gap-1.5 hover:text-[#0f3875] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#0f3875]" />
              <span>info@mahakalsteel.in</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3 text-[11px] text-slate-600 font-medium">
            <span className="text-slate-700">Sakinaka, Mumbai</span>
            <span className="text-slate-400">•</span>
            <span className="text-[#0f3875] font-semibold">Prime Stockist & Distributor</span>
          </div>
        </div>
      </div>

      {/* Main Navbar with vertical hairline separators matching reference design */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-20">
          {/* Brand Logo with new metallic branding - properly scaled to fill header height */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0 py-1 mr-2 sm:mr-4 lg:mr-6 group select-none"
          >
            <img
              src="/assets/logo.png"
              alt="Mahakal Steel"
              className="h-10 xs:h-11 sm:h-13 md:h-14 lg:h-15 xl:h-16 w-auto max-w-[180px] xs:max-w-[210px] sm:max-w-[250px] md:max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop & Laptop Nav Items - placed right after logo with vertical hairline separators */}
          <nav className="hidden lg:flex items-stretch h-full text-xs xl:text-[13px] 2xl:text-sm font-semibold text-slate-700">
            <Link
              to="/"
              className={`flex items-center px-3 xl:px-4.5 2xl:px-5.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/') && location.pathname === '/'
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`flex items-center px-3 xl:px-4.5 2xl:px-5.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/about')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              About
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative flex items-stretch border-l border-slate-200"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                to="/products"
                className={`flex items-center gap-1 px-3 xl:px-4.5 2xl:px-5.5 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                  isActive('/products')
                    ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                    : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </Link>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-b-lg shadow-xl py-2 z-50">
                  <Link
                    to="/products"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-bold text-[#0f3875] hover:bg-slate-50 border-b border-slate-100"
                  >
                    All Steel Products
                  </Link>
                  {PRODUCT_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products/${cat.slug}`}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="block px-4 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0f3875] transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about/quality"
              className={`flex items-center px-3 xl:px-4.5 2xl:px-5.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/about/quality')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Quality Policy
            </Link>

            <Link
              to="/industries"
              className={`flex items-center px-3 xl:px-4.5 2xl:px-5.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/industries')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Industries
            </Link>

            <Link
              to="/about/mission"
              className={`flex items-center px-3 xl:px-4.5 2xl:px-5.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/about/mission')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Our Mission
            </Link>

            <Link
              to="/contact"
              className={`flex items-center px-3 xl:px-4.5 2xl:px-5.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/contact')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Contact
            </Link>

            <Link
              to="/gallery"
              className={`flex items-center px-2.5 xl:px-3.5 2xl:px-4.5 border-l border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/gallery')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/certificates"
              className={`flex items-center px-2.5 xl:px-3.5 2xl:px-4.5 border-l border-r border-slate-200 transition-colors hover:text-[#0f3875] hover:bg-slate-50 ${
                isActive('/certificates')
                  ? 'text-[#0f3875] font-bold border-b-4 border-b-[#0f3875] bg-slate-50'
                  : ''
              }`}
            >
              Certificates
            </Link>
          </nav>

          {/* Right Action: Quick phone & GET QUOTE button */}
          <div className="hidden lg:flex items-center ml-auto pl-4 gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-[#0f3875] bg-blue-50/70 hover:bg-blue-100/70 px-3 py-2 rounded border border-blue-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0f3875]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <Link
              to="/request-quote"
              className="px-4 xl:px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
              GET QUOTE
            </Link>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex lg:hidden items-center ml-auto gap-2 sm:gap-3">
            <Link
              to="/request-quote"
              onClick={closeMenu}
              className="px-3 py-1.5 text-xs font-bold uppercase text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded shadow-xs"
            >
              QUOTE
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#0f3875] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 max-h-[80vh] overflow-y-auto shadow-xl">
          <Link
            to="/"
            onClick={closeMenu}
            className="block py-2 text-sm font-semibold text-[#0f3875] hover:text-blue-800"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            About Us
          </Link>
          <Link
            to="/products"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            All Products
          </Link>
          <div className="pl-4 space-y-1 text-xs text-slate-500">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                onClick={closeMenu}
                className="block py-1 hover:text-[#0f3875] transition-colors"
              >
                • {cat.name}
              </Link>
            ))}
          </div>
          <Link
            to="/about/quality"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            Quality Policy
          </Link>
          <Link
            to="/industries"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            Industries We Serve
          </Link>
          <Link
            to="/about/mission"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            Our Mission
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            Contact Us
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="block py-2 text-sm text-slate-700 hover:text-[#0f3875]"
          >
            Stockyard Gallery
          </Link>
          <Link
            to="/certificates"
            onClick={closeMenu}
            className="block py-2 text-sm font-semibold text-[#0f3875] hover:text-blue-800"
          >
            Quality Certificates
          </Link>
          <div className="pt-2">
            <Link
              to="/request-quote"
              onClick={closeMenu}
              className="block w-full py-2.5 text-center text-xs font-bold uppercase text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded shadow-md"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
