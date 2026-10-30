import { asset } from '../utils/assets';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Layers,
  ShieldCheck,
  Users,
  Wrench,
  PackageCheck,
  Building2,
  ArrowRight,
  MapPin,
  Sparkles,
  Factory,
  FlaskConical,
  Warehouse,
  Truck,
  Flame
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, INDUSTRIES_SERVED } from '../data/steelData';
import { TestimonialSlider } from '../components/TestimonialSlider';

interface HeroSlide {
  id: number;
  image: string;
  kicker: string;
  headline: string;
  buttonText: string;
  link: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: asset(asset('/assets/images/hero_steel_warehouse_1793271819088.jpg')),
    kicker: 'Welcome To Mahakal Steel',
    headline: 'Top Steel Sheets & Plates Supplier In India',
    buttonText: 'Sheets & Plates',
    link: '/products/steel-sheets-plates'
  },
  {
    id: 2,
    image: asset(asset('/assets/images/steel_pipes_tubes_1793271794975.jpg')),
    kicker: 'Welcome To Mahakal Steel',
    headline: 'Leading Pipes & Tubes Distributor In Mumbai',
    buttonText: 'Pipes & Tubes',
    link: '/products/steel-pipes-tubes'
  },
  {
    id: 3,
    image: asset(asset('/assets/images/structural_steel_beams_1793271796654.jpg')),
    kicker: 'Welcome To Mahakal Steel',
    headline: 'Premium Structural Beams & Heavy Sections',
    buttonText: 'Structural Steel',
    link: '/products/structural-steel'
  },
  {
    id: 4,
    image: asset(asset('/assets/images/stainless_steel_coils_1793271795436.jpg')),
    kicker: 'Welcome To Mahakal Steel',
    headline: 'We Are A Leading Stainless Steel Supplier',
    buttonText: 'Stainless Steel',
    link: '/products/stainless-steel'
  }
];

export const HomePage: React.FC = () => {
  // 1. Hero Slide state with 5.5s timer and Swipe Left/Right Animation
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Auto-scrolling every 5.5 seconds (5/6 seconds requirement)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextHeroSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevHeroSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      nextHeroSlide(); // Swiped left -> next slide
    } else if (diff < -50) {
      prevHeroSlide(); // Swiped right -> prev slide
    }
    setTouchStartX(null);
  };

  // 2. Our Products mouse drag & slide handlers (no manual buttons)
  const productsTrackRef = useRef<HTMLDivElement>(null);
  const [isProductsDragging, setIsProductsDragging] = useState(false);
  const [productsStartX, setProductsStartX] = useState(0);
  const [productsScrollLeft, setProductsScrollLeft] = useState(0);

  const handleProductsMouseDown = (e: React.MouseEvent) => {
    if (!productsTrackRef.current) return;
    setIsProductsDragging(true);
    setProductsStartX(e.pageX - productsTrackRef.current.offsetLeft);
    setProductsScrollLeft(productsTrackRef.current.scrollLeft);
  };

  const handleProductsMouseLeave = () => {
    setIsProductsDragging(false);
  };

  const handleProductsMouseUp = () => {
    setIsProductsDragging(false);
  };

  const handleProductsMouseMove = (e: React.MouseEvent) => {
    if (!isProductsDragging || !productsTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - productsTrackRef.current.offsetLeft;
    const walk = (x - productsStartX) * 1.5;
    productsTrackRef.current.scrollLeft = productsScrollLeft - walk;
  };

  // Continuous gentle auto-scroll for Our Products ("dhere dhere auto scroll ho")
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  useEffect(() => {
    let animId: number;
    const track = productsTrackRef.current;
    if (!track) return;

    const scrollSpeed = 0.8;
    const step = () => {
      if (!isProductsHovered && !isProductsDragging && track) {
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) {
          track.scrollLeft = 0;
        } else {
          track.scrollLeft += scrollSpeed;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isProductsHovered, isProductsDragging]);

  // 3. Why Choose Us interactive hover state
  const [activeWhyCard, setActiveWhyCard] = useState<number>(1); // Default middle card highlighted

  // 4. Our Achievements with Clean Slide-Up & Counting Animation
  const achievementsRef = useRef<HTMLDivElement>(null);
  const [hasCounted, setHasCounted] = useState(false);
  const [achievementsInView, setAchievementsInView] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, exp: 0, deliveries: 0, team: 0 });

  const triggerCountAnimation = () => {
    setHasCounted(true);
    setAchievementsInView(true);

    const duration = 2200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        clients: Math.floor(easeOut * 500),
        exp: Math.floor(easeOut * 15),
        deliveries: Math.floor(easeOut * 1000),
        team: Math.floor(easeOut * 50)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCounts({ clients: 500, exp: 15, deliveries: 1000, team: 50 });
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          triggerCountAnimation();
        }
      },
      { threshold: 0.2 }
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  // 5. Industries We Serve mouse drag & slide handlers (no manual buttons)
  const industriesTrackRef = useRef<HTMLDivElement>(null);
  const [isIndustriesDragging, setIsIndustriesDragging] = useState(false);
  const [industriesStartX, setIndustriesStartX] = useState(0);
  const [industriesScrollLeft, setIndustriesScrollLeft] = useState(0);

  const handleIndustriesMouseDown = (e: React.MouseEvent) => {
    if (!industriesTrackRef.current) return;
    setIsIndustriesDragging(true);
    setIndustriesStartX(e.pageX - industriesTrackRef.current.offsetLeft);
    setIndustriesScrollLeft(industriesTrackRef.current.scrollLeft);
  };

  const handleIndustriesMouseLeave = () => {
    setIsIndustriesDragging(false);
  };

  const handleIndustriesMouseUp = () => {
    setIsIndustriesDragging(false);
  };

  const handleIndustriesMouseMove = (e: React.MouseEvent) => {
    if (!isIndustriesDragging || !industriesTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - industriesTrackRef.current.offsetLeft;
    const walk = (x - industriesStartX) * 1.5;
    industriesTrackRef.current.scrollLeft = industriesScrollLeft - walk;
  };

  // Continuous gentle auto-scroll for Industries We Serve ("dhere dhere auto scroll ho")
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false);
  useEffect(() => {
    let animId: number;
    const track = industriesTrackRef.current;
    if (!track) return;

    const scrollSpeed = 0.85;
    const step = () => {
      if (!isIndustriesHovered && !isIndustriesDragging && track) {
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) {
          track.scrollLeft = 0;
        } else {
          track.scrollLeft += scrollSpeed;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isIndustriesHovered, isIndustriesDragging]);

  const getIndustryImage = (index: number) => {
    const images = [
      asset('/assets/images/structural_steel_beams_1793271796654.jpg'),
      asset('/assets/images/steel_pipes_tubes_1793271794975.jpg'),
      asset('/assets/images/hero_steel_warehouse_1793271819088.jpg'),
      asset('/assets/images/steel_sheets_plates_1793271793920.jpg'),
      asset('/assets/images/mild_steel_bars_1793271818875.jpg'),
      asset('/assets/images/stainless_steel_coils_1793271795436.jpg')
    ];
    return images[index % images.length];
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-[#FAFAFA] overflow-hidden">
      {/* 1. Hero Slider with Horizontal Swipe/Slide Animation (5.5s Duration) */}
      <section
        className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] overflow-hidden bg-gray-950 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Sliding Track Container */}
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="relative w-full h-full shrink-0 overflow-hidden"
            >
              {/* Background Photography */}
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />

              {/* Floating Content Card matching reference shape (curved right side, flat left) */}
              <div className="absolute inset-y-0 left-0 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-8 pointer-events-none">
                <div className="pointer-events-auto bg-white/95 backdrop-blur-md p-6 sm:p-10 lg:p-12 max-w-lg lg:max-w-xl rounded-tr-[40px] rounded-br-[40px] shadow-2xl space-y-4 border-r-4 border-[#12347E] transform transition-all duration-500 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 animate-fade-in-up-delay-1">
                    <span className="w-2 h-2 rounded-full bg-[#12347E]" />
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#12347E]">
                      {slide.kicker}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-[#12347E] leading-tight animate-fade-in-up-delay-2">
                    {slide.headline}
                  </h1>
                  <div className="pt-2 flex items-center gap-3 animate-fade-in-up-delay-3">
                    <Link
                      to={slide.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold text-[#12347E] border-2 border-[#12347E] hover:bg-[#12347E] hover:text-white rounded transition-all shadow-xs"
                    >
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/request-quote"
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#12347E] hover:bg-[#0B2252] rounded transition-colors shadow-xs"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators with Progress Animation (Auto-slides every 5.5s with touch/swipe support) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-full">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-8 bg-[#12347E] shadow-xs' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. Company Profile Section - Exact Design from Reference Image 3 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & About Us Button */}
          <div className="lg:col-span-7 space-y-5 animate-fade-in-up">
            <div>
              <span className="text-sm font-bold text-[#12347E] block uppercase tracking-wider mb-1">
                Mahakal Steel
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-heading text-[#12347E] tracking-tight">
                COMPANY PROFILE
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#383A3F]/90 leading-relaxed">
              Mahakal Steel was established to become a cornerstone in the metal markets of Mumbai, backed by extensive experience in steel distribution and stockholding operations.
            </p>

            <p className="text-xs sm:text-sm text-[#383A3F]/90 leading-relaxed">
              Today, markets in India and abroad demand industrial steel products with certified performance, verified chemical composition, and strict dimensional tolerances. Mahakal Steel meets this challenge by maintaining an extensive inventory in Sakinaka, providing dependable material availability, and offering short lead times.
            </p>

            <p className="text-xs sm:text-sm text-[#383A3F]/90 leading-relaxed">
              We supply products as per National & International Standards like IS, ASTM, BS, ASME, ANSI, and DIN, keeping the best quality management process, skilled logistics workforce, and responsive after-sales service.
            </p>

            <div className="pt-1">
              <p className="text-xs sm:text-sm font-bold text-[#12347E]">
                Mahakal Steel is a Leading Industrial Steel Stockist & Supplier.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-block px-7 py-3 bg-[#12347E] hover:bg-[#0B2252] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm hover:scale-102"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Column: Tall Vertical Industrial Photo with Hover Zoom */}
          <div className="lg:col-span-5 animate-fade-in-up-delay-1">
            <div className="group rounded-xl overflow-hidden shadow-xl border-4 border-white bg-gray-100">
              <img
                src={asset("/assets/images/steel_pipes_tubes_1793271794975.jpg")}
                alt="Mahakal Steel Pipes & Stockyard Inventory"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Products Section: Exact Design from reference image with Mouse-Driven Sliding & Hover Animation */}
      <section className="bg-[#12347E] text-white py-16 sm:py-20 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
          <div className="text-center scroll-reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
              Our Products
            </h2>
          </div>

          {/* Compact Product Cards styled like Industries We Serve with Smooth Auto-Scroll */}
          <div
            ref={productsTrackRef}
            onMouseEnter={() => setIsProductsHovered(true)}
            onMouseLeave={() => {
              setIsProductsHovered(false);
              handleProductsMouseLeave();
            }}
            onMouseDown={handleProductsMouseDown}
            onMouseUp={handleProductsMouseUp}
            onMouseMove={handleProductsMouseMove}
            className={`flex gap-5 sm:gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing select-none scroll-reveal scroll-delay-100 ${
              isProductsDragging ? 'cursor-grabbing' : ''
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...PRODUCT_CATEGORIES, ...PRODUCT_CATEGORIES].map((cat, idx) => (
              <div
                key={`${cat.slug}-${idx}`}
                className="min-w-[210px] sm:min-w-[240px] lg:min-w-[250px] shrink-0"
              >
                <Link
                  to={`/products/${cat.slug}`}
                  draggable={false}
                  className="group relative h-[280px] sm:h-[310px] rounded-2xl overflow-hidden shadow-lg flex flex-col justify-end p-4 transition-all duration-300 block hover:-translate-y-2 hover:shadow-2xl"
                >
                  <img
                    src={cat.cardImage}
                    alt={cat.name}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Floating White Badge at the Bottom (matching Industries We Serve) */}
                  <div className="relative z-10 bg-white/95 backdrop-blur-xs py-3 px-3.5 rounded-xl text-center shadow-lg border border-gray-100 transition-all duration-300 group-hover:bg-[#0f3875] group-hover:text-white">
                    <span className="font-heading font-bold text-xs sm:text-sm text-[#0f3875] group-hover:text-white transition-colors block">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-gray-500 group-hover:text-blue-100 transition-colors block mt-0.5">
                      Explore Steel Grades →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Centered White Pill Button matching reference image 7a509a61.png */}
          <div className="text-center pt-2 scroll-reveal scroll-delay-200">
            <Link
              to="/products"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-[#12347E] hover:bg-gray-100 rounded-md font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <span>VIEW ALL PRODUCTS & SPECIFICATIONS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section with Interactive Mouse Hover Color Shift & Side Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center scroll-reveal">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#12347E]">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xl mx-auto">
            Hover over any pillar to explore our operational commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Timely Delivery */}
          <div
            onMouseEnter={() => setActiveWhyCard(0)}
            className={`rounded-xl p-8 border relative overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer scroll-reveal scroll-delay-100 ${
              activeWhyCard === 0
                ? 'bg-[#12347E] text-white border-[#12347E] shadow-2xl md:-translate-y-2 scale-102'
                : 'bg-white text-[#383A3F] border-gray-200 shadow-sm hover:border-[#12347E]/50'
            }`}
          >
            {/* Ghost Number in Corner with Glow */}
            <div
              className={`absolute top-4 right-6 text-6xl font-black font-heading select-none pointer-events-none transition-colors duration-300 ${
                activeWhyCard === 0 ? 'text-white/15' : 'text-gray-100'
              }`}
            >
              01
            </div>

            <div>
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeWhyCard === 0 ? 'bg-white/15 text-white scale-105' : 'bg-blue-50 text-[#12347E]'
                }`}
              >
                <Clock className="w-7 h-7" />
              </div>
              <h3
                className={`font-heading font-bold text-lg mb-3 transition-colors ${
                  activeWhyCard === 0 ? 'text-white' : 'text-[#12347E]'
                }`}
              >
                Timely Delivery
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                  activeWhyCard === 0 ? 'text-blue-100' : 'text-[#383A3F]/80'
                }`}
              >
                Count on Mahakal Steel for punctual delivery across Mumbai and Maharashtra, ensuring your industrial projects stay strictly on schedule with expedited dispatches.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-current/10 text-xs font-semibold flex items-center gap-1.5">
              <span>Guaranteed Transit Window</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Wide Range of Products */}
          <div
            onMouseEnter={() => setActiveWhyCard(1)}
            className={`rounded-xl p-8 border relative overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer scroll-reveal scroll-delay-200 ${
              activeWhyCard === 1
                ? 'bg-[#12347E] text-white border-[#12347E] shadow-2xl md:-translate-y-2 scale-102'
                : 'bg-white text-[#383A3F] border-gray-200 shadow-sm hover:border-[#12347E]/50'
            }`}
          >
            <div
              className={`absolute top-4 right-6 text-6xl font-black font-heading select-none pointer-events-none transition-colors duration-300 ${
                activeWhyCard === 1 ? 'text-white/15' : 'text-gray-100'
              }`}
            >
              02
            </div>

            <div>
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeWhyCard === 1 ? 'bg-white/15 text-white scale-105' : 'bg-blue-50 text-[#12347E]'
                }`}
              >
                <Layers className="w-7 h-7" />
              </div>
              <h3
                className={`font-heading font-bold text-lg mb-3 transition-colors ${
                  activeWhyCard === 1 ? 'text-white' : 'text-[#12347E]'
                }`}
              >
                Wide Range of Products
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                  activeWhyCard === 1 ? 'text-blue-100' : 'text-[#383A3F]/80'
                }`}
              >
                Explore a diverse spectrum of hot rolled, cold rolled, mild steel, and stainless steel solutions catering to all your fabrication and civil construction needs.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-current/10 text-xs font-semibold flex items-center gap-1.5">
              <span>Ready Sakinaka Inventory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Quality Assurance */}
          <div
            onMouseEnter={() => setActiveWhyCard(2)}
            className={`rounded-xl p-8 border relative overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer scroll-reveal scroll-delay-300 ${
              activeWhyCard === 2
                ? 'bg-[#12347E] text-white border-[#12347E] shadow-2xl md:-translate-y-2 scale-102'
                : 'bg-white text-[#383A3F] border-gray-200 shadow-sm hover:border-[#12347E]/50'
            }`}
          >
            <div
              className={`absolute top-4 right-6 text-6xl font-black font-heading select-none pointer-events-none transition-colors duration-300 ${
                activeWhyCard === 2 ? 'text-white/15' : 'text-gray-100'
              }`}
            >
              03
            </div>

            <div>
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeWhyCard === 2 ? 'bg-white/15 text-white scale-105' : 'bg-blue-50 text-[#12347E]'
                }`}
              >
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3
                className={`font-heading font-bold text-lg mb-3 transition-colors ${
                  activeWhyCard === 2 ? 'text-white' : 'text-[#12347E]'
                }`}
              >
                Quality Assurance
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed transition-colors ${
                  activeWhyCard === 2 ? 'text-blue-100' : 'text-[#383A3F]/80'
                }`}
              >
                Trust in the quality benchmarks set by Mahakal Steel, ensuring precision, testing verification (MTC 3.1), and chemical/mechanical compliance in every batch.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-current/10 text-xs font-semibold flex items-center gap-1.5">
              <span>Certified Test Reports</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Achievements Section: Factory Warehouse Steel Pipes Background & Slide-Up Counting Cards */}
      <section
        ref={achievementsRef}
        className="relative py-20 sm:py-28 bg-[#07132B] text-white overflow-hidden select-none"
      >
        {/* Background Image: Factory Warehouse Steel Pipes (Vecteezy 69703789) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={asset("/assets/achievements-pipes-bg.jpg")}
            alt="Mahakal Steel Factory Warehouse Industrial Pipes"
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'brightness(0.68) contrast(1.15)' }}
            onError={(e) => {
              // Direct fallback to AI Studio path if needed
              (e.target as HTMLImageElement).src = asset('/assets/industrial-pipes-stock.jpg');
            }}
          />
          {/* Deep Navy Industrial Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07132B]/90 via-[#0B2252]/82 to-[#07132B]/92" />
        </div>

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
          {/* Clean Header: Only Our Achievements title as requested */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight drop-shadow-md">
              Our Achievements
            </h2>
          </div>

          {/* 4 Cards: Sliding up from below ("niche se slide hoke") and counting dynamically */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1: Happy Clients */}
            <div
              className={`group border border-white/20 hover:border-cyan-400/80 bg-white/10 hover:bg-white/15 rounded-2xl p-8 text-center backdrop-blur-md flex flex-col items-center justify-center space-y-3 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-2 ${
                achievementsInView
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-24 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <Users className="w-10 h-10 text-cyan-300 group-hover:scale-110 transition-transform drop-shadow-sm" />
              <div className="overflow-hidden">
                <div
                  className={`text-4xl sm:text-5xl font-black font-heading text-white tabular-nums tracking-tight transform transition-transform duration-700 ease-out ${
                    achievementsInView ? 'translate-y-0' : 'translate-y-8'
                  }`}
                >
                  {counts.clients}+
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-100">
                HAPPY CLIENTS
              </div>
              <div className="text-[11px] text-blue-200/70 font-medium">
                Pan-India Industrial Trust
              </div>
            </div>

            {/* Stat 2: Years of Experience */}
            <div
              className={`group border border-white/20 hover:border-cyan-400/80 bg-white/10 hover:bg-white/15 rounded-2xl p-8 text-center backdrop-blur-md flex flex-col items-center justify-center space-y-3 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-2 ${
                achievementsInView
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-24 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '220ms' }}
            >
              <Wrench className="w-10 h-10 text-cyan-300 group-hover:scale-110 transition-transform drop-shadow-sm" />
              <div className="overflow-hidden">
                <div
                  className={`text-4xl sm:text-5xl font-black font-heading text-white tabular-nums tracking-tight transform transition-transform duration-700 ease-out ${
                    achievementsInView ? 'translate-y-0' : 'translate-y-8'
                  }`}
                >
                  {counts.exp}+
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-100">
                YEARS OF EXPERIENCE
              </div>
              <div className="text-[11px] text-blue-200/70 font-medium">
                Since Stockyard Inception
              </div>
            </div>

            {/* Stat 3: Product Deliveries (Standardized styling matching all other cards) */}
            <div
              className={`group border border-white/20 hover:border-cyan-400/80 bg-white/10 hover:bg-white/15 rounded-2xl p-8 text-center backdrop-blur-md flex flex-col items-center justify-center space-y-3 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-2 ${
                achievementsInView
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-24 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '340ms' }}
            >
              <PackageCheck className="w-10 h-10 text-cyan-300 group-hover:scale-110 transition-transform drop-shadow-sm" />
              <div className="overflow-hidden">
                <div
                  className={`text-4xl sm:text-5xl font-black font-heading text-white tabular-nums tracking-tight transform transition-transform duration-700 ease-out ${
                    achievementsInView ? 'translate-y-0' : 'translate-y-8'
                  }`}
                >
                  {counts.deliveries}+
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-100">
                PRODUCT DELIVERIES
              </div>
              <div className="text-[11px] text-blue-200/70 font-medium">
                Dispatched With MTC 3.1
              </div>
            </div>

            {/* Stat 4: Our Team & Partners */}
            <div
              className={`group border border-white/20 hover:border-cyan-400/80 bg-white/10 hover:bg-white/15 rounded-2xl p-8 text-center backdrop-blur-md flex flex-col items-center justify-center space-y-3 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform hover:-translate-y-2 ${
                achievementsInView
                  ? 'translate-y-0 opacity-100 scale-100'
                  : 'translate-y-24 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '460ms' }}
            >
              <Building2 className="w-10 h-10 text-cyan-300 group-hover:scale-110 transition-transform drop-shadow-sm" />
              <div className="overflow-hidden">
                <div
                  className={`text-4xl sm:text-5xl font-black font-heading text-white tabular-nums tracking-tight transform transition-transform duration-700 ease-out ${
                    achievementsInView ? 'translate-y-0' : 'translate-y-8'
                  }`}
                >
                  {counts.team}+
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-100">
                OUR TEAM & PARTNERS
              </div>
              <div className="text-[11px] text-blue-200/70 font-medium">
                Metallurgists & Logistics Crew
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve: Centered Title with Gentle Auto-Scroll Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 select-none">
        <div className="text-center scroll-reveal">
          <span className="text-xs font-bold uppercase tracking-wider text-[#12347E] block mb-1">
            Sector Specialization
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-[#12347E]">
            Industries We Serve
          </h2>
        </div>

        {/* Sliding Industry Cards Track with Gentle Auto-Scroll & Hover Pause */}
        <div
          ref={industriesTrackRef}
          onMouseEnter={() => setIsIndustriesHovered(true)}
          onMouseLeave={() => {
            setIsIndustriesHovered(false);
            handleIndustriesMouseLeave();
          }}
          onMouseDown={handleIndustriesMouseDown}
          onMouseUp={handleIndustriesMouseUp}
          onMouseMove={handleIndustriesMouseMove}
          className={`flex gap-6 overflow-x-auto pb-4 cursor-grab active:cursor-grabbing select-none scroll-reveal scroll-delay-100 ${
            isIndustriesDragging ? 'cursor-grabbing' : ''
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...INDUSTRIES_SERVED, ...INDUSTRIES_SERVED].map((industry, index) => (
            <div
              key={`${industry.id}-${index}`}
              className="min-w-[260px] sm:min-w-[320px] lg:min-w-[360px] shrink-0"
            >
              <Link
                to="/industries"
                draggable={false}
                className="group relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-md flex flex-col justify-end p-5 transition-all duration-300 block hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={getIndustryImage(index)}
                  alt={industry.title}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Floating White Label at the Bottom */}
                <div className="relative z-10 bg-white/95 backdrop-blur-xs py-3.5 px-4 rounded-xl text-center shadow-lg border border-gray-100 transition-all duration-300 group-hover:bg-[#12347E] group-hover:text-white">
                  <span className="font-heading font-bold text-sm text-[#12347E] group-hover:text-white transition-colors block">
                    {industry.title}
                  </span>
                  <span className="text-[11px] text-gray-500 group-hover:text-blue-100 transition-colors block mt-0.5">
                    Explore Matching Steel Grades →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center pt-2 scroll-reveal scroll-delay-200">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#12347E] hover:underline"
          >
            <span>Learn More About Industry Applications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. Client Testimonial Slider: Verified Reviews, Interactive Filters, Auto-Advance & Feedback Modal */}
      <TestimonialSlider />

      {/* 8. Location & Directions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#12347E]">
                Stockyard Location & Warehouse
              </span>
              <h2 className="text-2xl font-bold font-heading text-[#12347E]">
                Convenient Access in Sakinaka, Mumbai
              </h2>
              <p className="text-xs sm:text-sm text-[#383A3F]/80 leading-relaxed">
                Located on Link Road directly opposite Asha Kripa Building in Bunavad Market, our yard allows easy access for heavy transport trucks with quick connectivity to Western and Eastern Express corridors.
              </p>

              <div className="space-y-2 text-xs text-[#383A3F] pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#12347E] shrink-0 mt-0.5" />
                  <span className="font-medium">{COMPANY_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#12347E] shrink-0" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about/location"
                  className="px-5 py-2.5 bg-[#12347E] text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-[#0B2252] transition-colors"
                >
                  View Driving Directions
                </Link>
                <Link
                  to="/request-quote"
                  className="px-5 py-2.5 bg-gray-100 text-[#12347E] text-xs font-bold uppercase tracking-wider rounded hover:bg-gray-200 transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 h-72 sm:h-80 rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title="Mahakal Steel Location"
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
      </section>
    </div>
  );
};
