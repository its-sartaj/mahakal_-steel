import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  FileSpreadsheet,
  CheckCircle2,
  ShieldCheck,
  Send,
  Truck,
  ArrowRight
} from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO, getAllProducts } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const paramCategory = searchParams.get('category') || '';
  const paramProduct = searchParams.get('product') || '';
  const paramRequirement = searchParams.get('requirement') || '';

  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    contactInfo: '',
    categorySlug: paramCategory,
    productName: paramProduct,
    quantity: '',
    unit: 'Metric Tonnes',
    deliveryLocation: 'Mumbai / Thane / Navi Mumbai',
    specificRequirements: paramRequirement || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [quoteReference, setQuoteReference] = useState('');

  // Update form if URL params change
  useEffect(() => {
    if (paramCategory) {
      setFormData((prev) => ({ ...prev, categorySlug: paramCategory }));
    }
    if (paramProduct) {
      setFormData((prev) => ({ ...prev, productName: paramProduct }));
    }
    if (paramRequirement) {
      setFormData((prev) => ({ ...prev, specificRequirements: paramRequirement }));
    }
  }, [paramCategory, paramProduct, paramRequirement]);

  const selectedCat = PRODUCT_CATEGORIES.find((c) => c.slug === formData.categorySlug);
  const availableProducts = selectedCat ? selectedCat.products : getAllProducts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.contactInfo.trim()) {
      setErrorMsg('Please enter your phone number or email.');
      return;
    }

    if (!formData.productName.trim()) {
      setErrorMsg('Please select or specify the steel product or grade required.');
      return;
    }

    const ref = `RFQ-MS-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-10">
      <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

      {/* Header */}
      <div className="border-b border-[#E3E6ED] pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
          B2B & Industrial Quotations
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-heading text-[#383A3F]">
          Request a Steel Supply Quote
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl leading-relaxed">
          Submit your project requirements, quantities, and delivery location. Our Sakinaka sales team will furnish competitive rates, available thickness gauges, and dispatch schedules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main Form */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-[#E3E6ED] shadow-xs">
          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl space-y-5">
              <div className="flex items-center gap-3 text-emerald-800 font-bold font-heading text-lg">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <span>Quote Request Successfully Submitted</span>
              </div>

              <div className="text-xs text-emerald-900 leading-relaxed space-y-2">
                <p>
                  Thank you, <strong>{formData.customerName}</strong>. Your quotation request has been logged under Reference ID:{' '}
                  <span className="font-mono font-bold text-sm bg-white px-2 py-0.5 rounded border border-emerald-300">
                    {quoteReference}
                  </span>.
                </p>
                <p>
                  Our commercial sales desk at Sakinaka will review your specifications and contact you at{' '}
                  <strong>{formData.contactInfo}</strong> with an itemized price sheet and dispatch timeframe.
                </p>
              </div>

              {/* Summary of submitted request */}
              <div className="bg-white p-4 rounded-lg border border-emerald-200 text-xs text-gray-700 space-y-2">
                <div className="font-bold text-[#12347E] uppercase tracking-wider text-[11px] border-b pb-1">
                  Quotation Details Summary:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-gray-500">Product:</span>{' '}
                    <span className="font-semibold">{formData.productName}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Category:</span>{' '}
                    <span className="font-semibold">
                      {selectedCat?.name || 'General Inventory'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Quantity:</span>{' '}
                    <span className="font-semibold">
                      {formData.quantity ? `${formData.quantity} ${formData.unit}` : 'Custom Lot'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">Destination:</span>{' '}
                    <span className="font-semibold">{formData.deliveryLocation}</span>
                  </div>
                </div>
                {formData.specificRequirements && (
                  <div className="pt-1">
                    <span className="text-gray-500">Notes:</span>{' '}
                    <span>{formData.specificRequirements}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      customerName: '',
                      companyName: '',
                      contactInfo: '',
                      categorySlug: '',
                      productName: '',
                      quantity: '',
                      unit: 'Metric Tonnes',
                      deliveryLocation: 'Mumbai / Thane / Navi Mumbai',
                      specificRequirements: ''
                    });
                  }}
                  className="px-5 py-2.5 bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-semibold uppercase tracking-wider rounded"
                >
                  Request Another Quote
                </button>
                <Link
                  to="/products"
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded"
                >
                  Return to Products
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMsg && (
                <div className="p-3 bg-rose-50 text-rose-700 border border-rose-200 rounded text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Pre-fill Notice if redirected from Product Page */}
              {paramProduct && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-[#12347E] flex items-center justify-between">
                  <span>
                    Inquiring for: <strong>{paramProduct}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, productName: '', categorySlug: '' }))}
                    className="text-xs text-blue-600 underline"
                  >
                    Change Product
                  </button>
                </div>
              )}

              {/* 1. Contact Information */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#12347E] mb-3">
                  1. Contact Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                      placeholder="e.g. Sunil Mehta"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Mehta Fabricators Ltd."
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number or Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      placeholder="+91 98200 XXXXX or email"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Product Specifications */}
              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#12347E] mb-3">
                  2. Material Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Steel Category
                    </label>
                    <select
                      value={formData.categorySlug}
                      onChange={(e) => {
                        const newCat = e.target.value;
                        const firstProd = PRODUCT_CATEGORIES.find((c) => c.slug === newCat)?.products[0]?.name || '';
                        setFormData({
                          ...formData,
                          categorySlug: newCat,
                          productName: firstProd
                        });
                      }}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden bg-white"
                    >
                      <option value="">-- Select Product Category --</option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat.slug} value={cat.slug}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Product Name or Grade *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      placeholder="e.g. Hot Rolled Plates 12mm IS 2062"
                      list="available-products-list"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                    />
                    <datalist id="available-products-list">
                      {availableProducts.map((p) => (
                        <option key={p.id} value={p.name} />
                      ))}
                    </datalist>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 5, 20, 100"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Unit of Measure
                    </label>
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden bg-white"
                    >
                      <option value="Metric Tonnes">Metric Tonnes (MT)</option>
                      <option value="Kilograms (kg)">Kilograms (kg)</option>
                      <option value="Pieces / Lengths">Pieces / Lengths</option>
                      <option value="Meters (m)">Meters (m)</option>
                      <option value="Square Meters">Square Meters</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Delivery Destination
                    </label>
                    <input
                      type="text"
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      placeholder="e.g. Sakinaka, Navi Mumbai, Pune"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Detailed Dimensions & Instructions */}
              <div className="pt-2 border-t border-gray-100">
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Dimensions, Cutting Instructions & Special Requests
                </label>
                <textarea
                  rows={3}
                  value={formData.specificRequirements}
                  onChange={(e) => setFormData({ ...formData, specificRequirements: e.target.value })}
                  placeholder="Mention exact thickness (mm), plate length x width, pipe schedule (Sch 40/80), test certificate requirements, or immediate dispatch needs..."
                  className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:border-[#12347E] focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request for Quotation</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Sourcing & Commercial Assistance */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-[#E3E6ED] shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E]">
              <ShieldCheck className="w-4 h-4" />
              <span>Quotation Guarantee</span>
            </div>
            <ul className="text-xs space-y-2.5 text-[#383A3F]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>Transparent per-tonne or per-piece mill basis pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>Original Mill Test Certificate (MTC) supplied with prime orders</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>Weighment verified on computerized weighing bridges</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                <span>Quick dispatch from Sakinaka stockyard across Mumbai</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0F1E3D] text-white p-6 rounded-xl shadow-xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
              Immediate Assistance
            </span>
            <h4 className="text-sm font-bold font-heading">
              Have drawings or urgent dispatch requirements?
            </h4>
            <p className="text-xs text-slate-300">
              Speak directly with our commercial desk or connect on WhatsApp for instant stock status.
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Mahakal%20Steel,%20I%20have%20an%20urgent%20steel%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center py-2 px-4 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-emerald-600 transition-colors"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
