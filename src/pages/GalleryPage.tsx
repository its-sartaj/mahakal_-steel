import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Images, ArrowRight, CheckCircle2, Eye, ShieldCheck, MapPin } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'plates' | 'pipes' | 'structural' | 'stockyard';
  categoryLabel: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Industrial Steel Pipe Stacks & Storage Yard',
    category: 'pipes',
    categoryLabel: 'Pipes & Tubes',
    image: '/assets/achievements-pipes-bg.jpg',
    description: 'Precision stacked seamless carbon steel tubes and industrial hollow sections ready for transport dispatch.'
  },
  {
    id: '2',
    title: 'Sakinaka Central Steel Stockyard & Warehouse',
    category: 'stockyard',
    categoryLabel: 'Stockyard & Facility',
    image: '/assets/images/hero_steel_warehouse_1793271819088.jpg',
    description: 'Equipped with overhead gantry cranes, heavy bundle racking, and certified weighbridge facilities.'
  },
  {
    id: '3',
    title: 'Hot Rolled & Cold Rolled Steel Plates',
    category: 'plates',
    categoryLabel: 'Plates & Sheets',
    image: '/assets/images/steel_sheets_plates_1793271793920.jpg',
    description: 'High-tensile MS plates, CR sheets, and chequered plates stacked in clean warehouse bays.'
  },
  {
    id: '4',
    title: 'Seamless Tubes & ERW Hollow Sections',
    category: 'pipes',
    categoryLabel: 'Pipes & Tubes',
    image: '/assets/images/steel_pipes_tubes_1793271794975.jpg',
    description: 'Heavy gauge seamless pipes for high-pressure boilers, piping networks, and structural frames.'
  },
  {
    id: '5',
    title: 'Mild Steel Bright Bars, Angles & Channels',
    category: 'structural',
    categoryLabel: 'Structural & Bars',
    image: '/assets/images/mild_steel_bars_1793271818875.jpg',
    description: 'Prime MS equal angles, channels (ISMC), flats, and square bars organized by dimension and specification.'
  },
  {
    id: '6',
    title: 'Stainless Steel Coils & Slit Strips',
    category: 'plates',
    categoryLabel: 'Stainless Steel',
    image: '/assets/images/stainless_steel_coils_1793271795436.jpg',
    description: 'Grade 304 & 316 stainless steel coils and mirror-finish decorative stainless sheets.'
  },
  {
    id: '7',
    title: 'Heavy Structural Steel I-Beams & Columns',
    category: 'structural',
    categoryLabel: 'Structural & Bars',
    image: '/assets/images/structural_steel_beams_1793271796654.jpg',
    description: 'Heavy ISMB girders and universal columns for commercial engineering, bridges, and shed fabrication.'
  },
  {
    id: '8',
    title: 'Precision Factory Pipes & Hydraulic Cylinders',
    category: 'pipes',
    categoryLabel: 'Pipes & Tubes',
    image: '/assets/industrial-pipes-stock.jpg',
    description: 'Close-tolerance honed tubes and structural piping stored under weather-protected covers.'
  },
  {
    id: '9',
    title: 'Official Mahakal Steel Sakinaka Facility & GST Signboard',
    category: 'stockyard',
    categoryLabel: 'Stockyard & Facility',
    image: '/assets/mahakal-signboard.jpeg',
    description: 'Official verified business board at Gala No. 10, Bunavad Market, Sakinaka, Mumbai. GSTIN: 27DLSPR1147D1ZU.'
  },
  {
    id: '10',
    title: 'Mahakal Steel 3D Metallic Brand Emblem & Identity',
    category: 'stockyard',
    categoryLabel: 'Stockyard & Facility',
    image: '/assets/mahakal-banner.jpeg',
    description: 'Official metallic insignia embodying Quality, Strength & Industrial Trust across Maharashtra.'
  }
];

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'plates' | 'pipes' | 'structural' | 'stockyard'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-10">
      <Breadcrumbs items={[{ label: 'Stockyard & Product Gallery' }]} />

      {/* Header */}
      <div className="border-b border-slate-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0f3875] block mb-2 flex items-center gap-1.5">
            <Images className="w-4 h-4" />
            <span>Mahakal Steel Visual Showcase</span>
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900">
            Stockyard & Product Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Take a visual tour through our Sakinaka stockyard, extensive steel plate and pipe inventories, heavy structural sections, and dispatch bays.
          </p>
        </div>

        <Link
          to="/request-quote"
          className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded-lg shadow-sm transition-all self-start md:self-end whitespace-nowrap"
        >
          Request Material Quote
        </Link>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pt-2 border-b border-slate-200 pb-4">
        {[
          { key: 'all', label: 'All Photos' },
          { key: 'plates', label: 'Steel Plates & Sheets' },
          { key: 'pipes', label: 'Pipes & Tubes' },
          { key: 'structural', label: 'Structural Steel & Beams' },
          { key: 'stockyard', label: 'Stockyard & Logistics' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as any)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeFilter === tab.key
                ? 'bg-[#0f3875] text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div
              className="relative h-56 overflow-hidden cursor-pointer bg-slate-100"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-xs rounded-full text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-md">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enlarge</span>
                </span>
              </div>
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0f3875]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase rounded-md shadow-xs">
                {item.categoryLabel}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 group-hover:text-[#0f3875] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#0f3875] font-semibold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Ready Stock</span>
                </span>
                <Link to="/products" className="hover:underline flex items-center gap-1">
                  <span>View Specs</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f3875] block mb-1">
                {selectedImage.categoryLabel}
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {selectedImage.description}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Mahakal Steel Stockyard, Sakinaka, Mumbai</span>
                <Link
                  to="/request-quote"
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 text-xs font-bold uppercase text-white bg-[#0f3875] hover:bg-[#0c2e63] rounded-lg shadow-sm"
                >
                  Inquire on this item
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
