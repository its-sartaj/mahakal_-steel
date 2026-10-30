/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ScrollRevealManager } from './components/ScrollRevealManager';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CompanyProfilePage } from './pages/CompanyProfilePage';
import { QualityPage } from './pages/QualityPage';
import { LocationPage } from './pages/LocationPage';
import { MissionPage } from './pages/MissionPage';
import { GalleryPage } from './pages/GalleryPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ProductsPage } from './pages/ProductsPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ContactPage } from './pages/ContactPage';
import { RequestQuotePage } from './pages/RequestQuotePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <ScrollRevealManager />
      <div className="min-h-screen flex flex-col bg-[#F5F6F8] text-[#383A3F]">
        <Navbar />
        <main className="flex-1 page-enter-smooth">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-quote" element={<RequestQuotePage />} />

            {/* Company Pages */}
            <Route path="/about/company-profile" element={<CompanyProfilePage />} />
            <Route path="/about/quality" element={<QualityPage />} />
            <Route path="/about/location" element={<LocationPage />} />
            <Route path="/about/mission" element={<MissionPage />} />

            {/* Product Category Pages */}
            <Route path="/products/:categorySlug" element={<CategoryDetailPage />} />

            {/* Individual Product Detail Pages */}
            <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />

            {/* Fallback 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        {/* Floating WhatsApp button in bottom-left corner matching reference */}
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}
