import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Award, TrendingUp, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/steelData';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const MissionPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-12">
      <Breadcrumbs
        items={[
          { label: 'About Us', href: '/about' },
          { label: 'Our Mission & Vision' }
        ]}
      />

      {/* Hero Header */}
      <div className="border-b border-slate-200 pb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0f3875] block mb-2">
          Corporate Philosophy & Guiding Principles
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900">
          Our Mission & Vision
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-3xl leading-relaxed">
          At {COMPANY_INFO.name}, we believe steel is the backbone of nation-building. Every plate, pipe, and beam we stock and dispatch is backed by a commitment to uncompromised quality, transparent trade practices, and punctuality.
        </p>
      </div>

      {/* Mission & Vision Twin Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border-2 border-[#0f3875]/20 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
          <div className="w-14 h-14 rounded-xl bg-[#0f3875] text-white flex items-center justify-center mb-6 shadow-md">
            <Target className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0f3875]">Our Mission</span>
          <h2 className="text-2xl font-bold font-heading text-slate-900 mt-1 mb-4">
            Reliable Steel, Honest Weights, Punctual Dispatch
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            To serve as Mumbai's most trusted and responsive industrial steel stockist, empowering manufacturing units, fabricators, infrastructure contractors, and engineering works with certified raw materials, zero hidden compromises, and verified mill test traceability.
          </p>
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f3875] shrink-0" />
              <span>Prompt turnarounds with dedicated Sakinaka stockyard dispatch</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f3875] shrink-0" />
              <span>100% authentic electronic weighbridge verification</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0f3875] shrink-0" />
              <span>Certified sourcing directly from primary Indian and global mills</span>
            </li>
          </ul>
        </div>

        {/* Vision Card */}
        <div className="bg-gradient-to-br from-[#0f3875] to-[#072044] rounded-2xl text-white p-8 shadow-lg relative overflow-hidden">
          <div className="w-14 h-14 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center mb-6 shadow-md backdrop-blur-xs">
            <Eye className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">Our Vision</span>
          <h2 className="text-2xl font-bold font-heading text-white mt-1 mb-4">
            The Benchmark for Steel Supply Excellence
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed mb-6">
            To expand our footprints across Western India as the premier industrial steel solutions provider, recognized for modern storage infrastructure, ethical customer partnerships, and an unwavering standard for quality.
          </p>
          <ul className="space-y-3 text-xs text-blue-100 font-medium">
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Extensive ready-stock inventory across 500+ sizes & grades</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Long-term strategic supply relationships with engineering leaders</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Sustainable, safe, and tech-enabled stockyard logistics</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0f3875]">What Drives Us</span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 mt-1">
            Our Core Values
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every transaction, bundle loading, and customer conversation is guided by five foundational values.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-[#0f3875] transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f3875] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Integrity First</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Transparent invoicing with actual weights, standard thicknesses, and genuine manufacturer test certificates.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-[#0f3875] transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f3875] flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Uncompromised Quality</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Strict material inspection on arrival, defect rejection, and zero tolerance for degraded or non-standard lots.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-[#0f3875] transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f3875] flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Speed & Agility</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Same-day quotations, ready warehouse loading, and swift transport dispatch across the Mumbai industrial belt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-[#0f3875] transition-all">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0f3875] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-slate-900">Customer Dedication</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Tailored cut-to-size requirements, custom bundling, and responsive support for both retail and wholesale requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-slate-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900">Partner with Mahakal Steel Today</h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Experience reliable steel sourcing backed by genuine certifications and prompt delivery.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/request-quote"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded-lg shadow-sm transition-all flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/gallery"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-all"
          >
            View Stockyard Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};
