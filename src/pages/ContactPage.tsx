import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
  Send
} from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    contactInfo: '',
    subject: 'General Steel Enquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.contactInfo.trim()) {
      setErrorMsg('Please enter your phone number or email address.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg('Please enter your enquiry message or requirements.');
      return;
    }

    // Generate local inquiry reference
    const ref = `MS-ENQ-${Date.now().toString().slice(-6)}`;
    setReferenceId(ref);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-12">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Header */}
      <div className="border-b border-[#E3E6ED] pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          Stockyard & Sales Office
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Contact MAHAKAL STEEL
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          Get in touch with our Sakinaka sales desk for pricing, product availability, mill test certificates, or visiting directions.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-[#E3E6ED] shadow-xs">
          <div className="mb-6">
            <h2 className="text-xl font-bold font-heading text-[#12347E]">
              Send Us an Enquiry
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Fill in your contact details and steel requirements below.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-800 font-bold font-heading text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Enquiry Recorded Successfully</span>
              </div>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your enquiry has been received with reference number{' '}
                <span className="font-mono font-bold">{referenceId}</span>. Our Sakinaka sales desk will follow up at{' '}
                <strong>{formData.contactInfo}</strong> during working hours.
              </p>
              <div className="p-3 bg-white/70 rounded border border-emerald-200 text-xs text-gray-700 space-y-1">
                <div>
                  <strong>Subject:</strong> {formData.subject}
                </div>
                <div>
                  <strong>Message:</strong> {formData.message}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    company: '',
                    contactInfo: '',
                    subject: 'General Steel Enquiry',
                    message: ''
                  });
                }}
                className="px-4 py-2 bg-[#12347E] text-white text-xs font-semibold rounded hover:bg-[#0B2252]"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Sharma Engineering Works"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="e.g. +91 98200 12345 or info@company.com"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Enquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden bg-white"
                  >
                    <option value="General Steel Enquiry">General Steel Enquiry</option>
                    <option value="Product Availability & Stock">Product Availability & Stock</option>
                    <option value="Hot/Cold Rolled Plates">Hot / Cold Rolled Plates</option>
                    <option value="Seamless / ERW Pipes">Seamless / ERW Pipes</option>
                    <option value="Structural Beams & Channels">Structural Beams & Channels</option>
                    <option value="Stainless Steel 304/316">Stainless Steel 304/316</option>
                    <option value="Mill Test Certificate Request">Mill Test Certificate Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message & Specific Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your required steel grades, thicknesses, dimensions, estimated quantities, and delivery location..."
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Enquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Address, Phone, WhatsApp & Map */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E]">
              <MapPin className="w-4 h-4" />
              <span>Contact Information</span>
            </div>

            <div className="text-xs text-[#383A3F] space-y-3">
              <div>
                <span className="font-bold text-sm text-[#12347E] font-heading block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-gray-700 block">{COMPANY_INFO.addressLine1}</span>
                <span className="text-gray-700 block">{COMPANY_INFO.addressLine2}</span>
                <span className="text-gray-700 block">
                  {COMPANY_INFO.city} - {COMPANY_INFO.postalCode}, {COMPANY_INFO.state}, India.
                </span>
              </div>

              <div className="pt-2 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#12347E]" />
                  <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline font-semibold">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#12347E]" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline font-semibold">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Mahakal%20Steel,%20I%20would%20like%20to%20inquire%20about%20steel%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-emerald-600 text-white font-semibold rounded text-xs transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Directly via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Preview */}
          <div className="bg-white rounded-xl border border-[#E3E6ED] overflow-hidden shadow-xs">
            <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-bold text-[#12347E]">Sakinaka Stockyard Map</span>
              <a
                href={COMPANY_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#12347E] hover:underline flex items-center gap-1 font-medium"
              >
                <span>Open Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="h-64 w-full bg-gray-100">
              <iframe
                title="Mahakal Steel Contact Map"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
