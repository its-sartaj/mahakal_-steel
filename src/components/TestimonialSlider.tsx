import React, { useState, useEffect, useRef } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Building2,
  ShieldCheck,
  FileCheck2,
  MessageSquarePlus,
  X,
  Send,
  Layers,
  ArrowRight
} from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  industry: 'Oil & Gas' | 'Power & Boilers' | 'Marine & Offshore' | 'Structural & PEB' | 'Chemical & Process';
  rating: number;
  projectScope: string;
  date: string;
  avatarBg: string;
  initials: string;
  quote: string;
  metrics: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh K. Sharma',
    role: 'Head of Strategic Procurement',
    company: 'PetroChem Engineering & EPC Projects',
    location: 'Mumbai & Jamnagar',
    industry: 'Oil & Gas',
    rating: 5,
    projectScope: '320 MT ASTM A106 Gr. B Seamless Pipes & Forged 316L Flanges',
    date: 'February 2026',
    avatarBg: 'from-blue-700 to-indigo-900',
    initials: 'RS',
    quote:
      'Mahakal Steel is our go-to partner for critical refinery turnaround schedules. In our latest offshore expansion, we required heavy-wall seamless pipes with strict hydrostatic testing and original 3.1 Mill Test Certificates within 72 hours. Their Sakinaka facility expedited dispatch flawlessly with zero non-conformances.',
    metrics: '72hr Dispatch · 100% MTC 3.1 Approved'
  },
  {
    id: 't2',
    name: 'Arvind V. Kulkarni',
    role: 'Vice President — Plant Engineering',
    company: 'Apex Thermal & Boiler Equipments Ltd.',
    location: 'Pune & Chakan Industrial Belt',
    industry: 'Power & Boilers',
    rating: 5,
    projectScope: '180 MT ASTM SA516 Gr. 70 Boiler Quality Plates & Cold Drawn Tubes',
    date: 'January 2026',
    avatarBg: 'from-slate-700 to-blue-950',
    initials: 'AK',
    quote:
      'Boiler applications allow zero margin for metallurgical deviations. The SA516 Grade 70 plates supplied by Mahakal Steel passed ultrasonic testing (UT Level II) and Charpy V-notch impact tests on first inspection. Their transparent weighbridge slips and documentation saved us weeks on client approvals.',
    metrics: 'Zero UT Defects · 100% IBR Compliant'
  },
  {
    id: 't3',
    name: 'Capt. Vikram Singhania',
    role: 'Chief Materials Sourcing Officer',
    company: 'Technofab Marine & Offshore Yards',
    location: 'Navi Mumbai & Goa Shipyard',
    industry: 'Marine & Offshore',
    rating: 5,
    projectScope: 'Super Duplex UNS S32750 Pipes & SS 316Ti Heavy Structural Sections',
    date: 'December 2025',
    avatarBg: 'from-cyan-800 to-blue-900',
    initials: 'VS',
    quote:
      'Supplying seawater-resistant duplex alloys requires a stockist who understands rigorous marine salinity standards. Mahakal Steel delivered PMI-tested pipes with third-party Bureau Veritas verification. Deliveries arrived perfectly strapped and rust-protected right to our dry dock.',
    metrics: 'Bureau Veritas Inspected · Seawater Grade'
  },
  {
    id: 't4',
    name: 'Tariq Al-Mansoor',
    role: 'Senior Project Director',
    company: 'Gulf-Indo Heavy Fabricators & PEB Infrastructure',
    location: 'Bhiwandi Logistics Park & Ras Al Khaimah',
    industry: 'Structural & PEB',
    rating: 5,
    projectScope: '450 MT High-Tensile ISMB 400/500 Beams, MS Channels & Chequered Plates',
    date: 'November 2025',
    avatarBg: 'from-blue-800 to-slate-900',
    initials: 'TM',
    quote:
      'We fabricated a 35,000 sq. meter heavy industrial warehouse that needed high-tensile structural beams delivered in sequential erection phases. Mahakal Steel coordinated batch logistics with mill test tracings for every heat number. Never had a crane standing idle waiting for steel.',
    metrics: 'Phase-Wise Delivery · 450 MT Supplied'
  },
  {
    id: 't5',
    name: 'Dr. Sanjay Mehta',
    role: 'General Manager — Operations',
    company: 'Gujarat Specialty Chemicals & Fertilizer Corp.',
    location: 'Dahej SEZ, Gujarat',
    industry: 'Chemical & Process',
    rating: 5,
    projectScope: 'SS 304L/316L Dairy-Grade Seamless Tubes & Tri-Clamp Sanitary Fittings',
    date: 'October 2025',
    avatarBg: 'from-indigo-800 to-blue-950',
    initials: 'SM',
    quote:
      'Corrosive acid piping requires pristine interior surface smoothness and precise grain structure. Mahakal Steel provided electropolished sanitary tubes with certified Ra values and complete material test dossiers. Their team in Sakinaka knows steel specifications inside and out.',
    metrics: 'Ra < 0.4µm Certified · Dual Certified 316/316L'
  },
  {
    id: 't6',
    name: 'Pradeep Nair',
    role: 'Senior Quality Assurance Lead',
    company: 'Konkan Heavy Forgings & Machine Tools',
    location: 'Thane-Belapur Industrial Zone',
    industry: 'Structural & PEB',
    rating: 5,
    projectScope: 'Forged Carbon Steel A105 Flanges & Class 3000 Threaded Fittings',
    date: 'September 2025',
    avatarBg: 'from-slate-800 to-blue-900',
    initials: 'PN',
    quote:
      'As a QA lead who rejects substandard stock regularly, dealing with Mahakal Steel has been refreshingly seamless. Hardness numbers, dimensional tolerances as per ASME B16.5, and heat code stamping are always 100% compliant. Best stockist experience in Mumbai.',
    metrics: '100% Stamping Traceability · Zero Rejections'
  }
];

export const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Review submission modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    location: '',
    rating: 5,
    scope: '',
    feedback: ''
  });

  // Filtered testimonials
  const filteredTestimonials = selectedFilter === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.industry === selectedFilter);

  // Safety check on activeIndex when filtering
  const safeIndex = activeIndex >= filteredTestimonials.length ? 0 : activeIndex;
  const currentTestimonial = filteredTestimonials[safeIndex] || TESTIMONIALS[0];

  // Smooth continuous auto-advance every 4.5s ("dhere dhere auto change ho")
  useEffect(() => {
    if (isModalOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isModalOpen, filteredTestimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviewSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setReviewSubmitted(false);
      setFormData({
        name: '',
        company: '',
        role: '',
        location: '',
        rating: 5,
        scope: '',
        feedback: ''
      });
    }, 2500);
  };

  const categories = ['All', 'Oil & Gas', 'Power & Boilers', 'Marine & Offshore', 'Structural & PEB', 'Chemical & Process'];

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10"
      aria-label="Client Testimonials and Reviews"
    >
      {/* Header with Title and Trust Proof Summary */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-gray-200 scroll-reveal">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#12347E]" />
            <span>Verified Industrial References</span>
            <span aria-hidden="true" className="text-gray-300">·</span>
            <span>MTC 3.1 Certified Deliveries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#12347E] tracking-tight">
            Client Reviews & Project Endorsements
          </h2>
          <p className="text-xs sm:text-sm text-[#383A3F]/80 max-w-2xl mt-2 leading-relaxed">
            Leading EPC contractors, boiler engineers, and industrial plant managers rely on Mahakal Steel for certified metallurgy, exact dimensional tolerances, and punctual project supply.
          </p>
        </div>

        {/* Action Button: Share Review */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-[#12347E] bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200 shadow-xs"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#12347E]" />
            <span>Submit Client Feedback</span>
          </button>
        </div>
      </div>

      {/* Trust Metrics Bar: 4 Industrial KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-gray-200/80 shadow-xs scroll-reveal scroll-delay-100">
        <div className="space-y-1 border-r border-gray-100 pr-4 last:border-0">
          <div className="text-2xl sm:text-3xl font-black font-heading text-[#12347E] tabular-nums flex items-center gap-1.5">
            <span>4.9</span>
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            </div>
          </div>
          <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            Average B2B Rating
          </div>
          <div className="text-[10px] text-gray-400">Based on 500+ Dispatches</div>
        </div>

        <div className="space-y-1 border-r border-gray-100 pr-4 last:border-0">
          <div className="text-2xl sm:text-3xl font-black font-heading text-[#12347E] tabular-nums">
            99.4%
          </div>
          <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            On-Time Delivery
          </div>
          <div className="text-[10px] text-gray-400">Shutdown & Project Deadlines</div>
        </div>

        <div className="space-y-1 border-r border-gray-100 pr-4 last:border-0">
          <div className="text-2xl sm:text-3xl font-black font-heading text-[#12347E] tabular-nums">
            100%
          </div>
          <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            EN 10204 3.1 MTC
          </div>
          <div className="text-[10px] text-gray-400">Certified Chemical & Mech Tests</div>
        </div>

        <div className="space-y-1">
          <div className="text-2xl sm:text-3xl font-black font-heading text-[#12347E] tabular-nums">
            0%
          </div>
          <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            Tolerance Rejections
          </div>
          <div className="text-[10px] text-gray-400">Strict Dimensional Adherence</div>
        </div>
      </div>

      {/* Industry Filter Controls (Interactive Segmented Buttons) */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-gray-500 mr-2 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5 text-gray-400" />
          Filter by Sector:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedFilter(cat);
              setActiveIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              selectedFilter === cat
                ? 'bg-[#12347E] text-white shadow-xs font-semibold'
                : 'bg-white text-gray-600 hover:text-[#12347E] border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Interactive Testimonial Slider Container with Auto-Advance */}
      <div
        className="relative bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Auto-Advance Progress Bar */}
        <div key={`progress-${safeIndex}`} className="h-1 bg-gradient-to-r from-[#0f3875] via-blue-600 to-cyan-400 w-full animate-[shrinkWidth_4.5s_linear]" />

        {/* Subtle Decorative Gradient Sheen on top right */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-50/70 via-indigo-50/30 to-transparent pointer-events-none rounded-bl-full" />

        <div className="relative p-6 sm:p-10 lg:p-12">
          {/* Top Bar inside Card: Industry Badge, Verified Indicator, & Star Rating */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-[#12347E] bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                {currentTestimonial.industry}
              </span>
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified Industrial Buyer
              </span>
              <span className="text-gray-400 text-xs hidden sm:inline">·</span>
              <span className="text-gray-500 text-xs hidden sm:inline">
                {currentTestimonial.date}
              </span>
            </div>

            {/* Star Rating Display */}
            <div className="flex items-center gap-1 bg-amber-50/80 px-3 py-1 rounded-lg border border-amber-200/60">
              <div className="flex items-center">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-500"
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-amber-900 ml-1.5 tabular-nums">
                5.0 / 5.0
              </span>
            </div>
          </div>

          {/* Testimonial Quote & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            {/* Left: Quote text with quotation mark */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative">
                <Quote className="w-12 h-12 text-[#12347E]/15 absolute -top-4 -left-3 pointer-events-none" />
                <p className="relative z-10 text-base sm:text-lg lg:text-xl font-medium text-[#1E293B] leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </p>
              </div>

              {/* Supplied Material / Scope Callout */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#12347E]" />
                  <span>Procurement Specification & Delivered Scope</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#12347E]">
                  {currentTestimonial.projectScope}
                </div>
                <div className="text-[11px] text-emerald-700 font-medium">
                  ✓ {currentTestimonial.metrics}
                </div>
              </div>
            </div>

            {/* Right: Author / Client Profile Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 rounded-2xl border border-blue-100 flex flex-col justify-between space-y-5">
              <div className="flex items-center gap-4">
                {/* Initials Avatar */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${currentTestimonial.avatarBg} text-white flex items-center justify-center font-heading font-black text-xl shadow-md shrink-0`}
                >
                  {currentTestimonial.initials}
                </div>

                <div className="space-y-0.5 min-w-0">
                  <h4 className="font-heading font-black text-base text-[#12347E] truncate">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs font-semibold text-gray-600 truncate">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-xs text-gray-500 truncate flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-gray-400 shrink-0" />
                    <span>{currentTestimonial.company}</span>
                  </p>
                </div>
              </div>

              <div className="text-[11px] text-gray-500 border-t border-gray-200/80 pt-3 flex items-center justify-between">
                <span>Location: {currentTestimonial.location}</span>
                <span className="font-semibold text-[#12347E]">Repeat Buyer</span>
              </div>
            </div>
          </div>

          {/* Slider Bottom Navigation Controls & Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-6 border-t border-gray-100">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show review ${idx + 1} of ${filteredTestimonials.length}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === safeIndex
                      ? 'w-8 bg-[#12347E]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
              <span className="text-xs text-gray-400 ml-2 font-mono tabular-nums">
                {safeIndex + 1} / {filteredTestimonials.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 hidden sm:inline mr-2">
                Auto-advances every 6s · Hover to pause
              </span>

              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#12347E] text-[#12347E] hover:text-white transition-all flex items-center justify-center border border-gray-200 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next review"
                className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#12347E] text-[#12347E] hover:text-white transition-all flex items-center justify-center border border-gray-200 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Client Feedback Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {reviewSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading text-[#12347E]">
                  Thank You for Your Review!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                  Your feedback has been received. Our Quality & Client Relations team will verify your MTC order number and publish your reference.
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-1 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#12347E]">
                    Share Your Experience
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-heading text-[#12347E]">
                    Submit Client Review
                  </h3>
                  <p className="text-xs text-gray-500">
                    Help other engineering procurement teams understand your experience working with Mahakal Steel.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12347E] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. L&T Heavy Engineering"
                        className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12347E] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Procurement Manager"
                        className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12347E] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Navi Mumbai"
                        className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12347E] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Material / Product Supplied
                    </label>
                    <input
                      type="text"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      placeholder="e.g. Seamless Boiler Tubes & ASTM A105 Flanges"
                      className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12347E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 hover:scale-110 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= formData.rating
                                ? 'fill-amber-400 text-amber-500'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-gray-700 ml-2">
                        {formData.rating} of 5 Stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Feedback / Review *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.feedback}
                      onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                      placeholder="Describe material quality, dimensional adherence, dispatch timeliness, and documentation..."
                      className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#12347E] focus:outline-hidden"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-[#12347E] hover:bg-[#0B2252] rounded-lg transition-colors shadow-sm"
                    >
                      <span>Submit Review</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
