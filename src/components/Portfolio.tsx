import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

type Category = 'all' | 'sports' | 'social' | 'branding';

interface PortfolioItem {
  id: number;
  src: string;
  title: string;
  category: Category;
  tags: string[];
}

const ITEMS: PortfolioItem[] = [
  {
    id: 1,
    src: '/assets/images/192170.png',
    title: 'Hamdy Fathy — Egypt NT',
    category: 'sports',
    tags: ['Sports Poster', 'Egypt NT', 'Player Design'],
  },
  {
    id: 2,
    src: '/assets/images/192171.png',
    title: 'Ramy Rabia — FIFA World Cup 2026',
    category: 'sports',
    tags: ['Sports Poster', 'FIFA WC 2026', 'Player Design'],
  },
  {
    id: 3,
    src: '/assets/images/192172.png',
    title: 'Emam Ashour — The Engine',
    category: 'sports',
    tags: ['Sports Poster', 'Egypt NT', 'Player Design'],
  },
  {
    id: 4,
    src: '/assets/images/191357_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 5,
    src: '/assets/images/192123_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 6,
    src: '/assets/images/192126_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 7,
    src: '/assets/images/192127_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 8,
    src: '/assets/images/192152_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 9,
    src: '/assets/images/192155_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 10,
    src: '/assets/images/192156_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 11,
    src: '/assets/images/192157_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 12,
    src: '/assets/images/192158_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
  {
    id: 13,
    src: '/assets/images/192160_(2).png',
    title: 'Sports Design',
    category: 'sports',
    tags: ['Sports Poster', 'Player Design'],
  },
];

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All Works', value: 'all' },
  { label: 'Sports Posters', value: 'sports' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref: sectionRef, visible } = useIntersectionObserver(0.1);

  const filtered =
    activeFilter === 'all' ? ITEMS : ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextItem = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section
      id="portfolio"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 bg-brand-black-soft relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-red/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-brand-red mb-4">
            My Work
          </p>
          <h2 className="section-title">Portfolio</h2>
          <span className="red-line" />
          <p className="section-subtitle mt-6 max-w-xl mx-auto">
            A selection of projects showcasing my range across sports design, branding, and social media.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`font-montserrat font-semibold text-xs uppercase tracking-widest px-6 py-3 border transition-all duration-300 ${
                activeFilter === value
                  ? 'bg-brand-red border-brand-red text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'
                  : 'bg-transparent border-white/20 text-gray-400 hover:border-brand-red/50 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="portfolio-item relative overflow-hidden cursor-pointer bg-brand-black-card group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${i * 80}ms`,
              }}
              onClick={() => openLightbox(i)}
            >
              <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="font-montserrat text-xs text-brand-red uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-montserrat font-black text-white text-lg uppercase tracking-wider leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-brand-red flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-brand-red/20 hover:bg-brand-red flex items-center justify-center transition-all duration-300 z-10"
          >
            <X size={20} className="text-white" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
            className="absolute left-4 md:left-8 w-12 h-12 bg-white/10 hover:bg-brand-red flex items-center justify-center transition-all duration-300 z-10"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          {/* Image */}
          <div
            className="max-w-4xl w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.src}
              alt={currentItem.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <h3 className="font-montserrat font-black text-white text-xl uppercase tracking-wider">
                {currentItem.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {currentItem.tags.map((tag) => (
                  <span key={tag} className="font-montserrat text-xs text-brand-red uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
            className="absolute right-4 md:right-8 w-12 h-12 bg-white/10 hover:bg-brand-red flex items-center justify-center transition-all duration-300 z-10"
          >
            <ChevronRight size={20} className="text-white" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-montserrat text-xs text-gray-400 uppercase tracking-widest">
            {lightboxIndex! + 1} / {filtered.length}
          </div>
        </div>
      )}
    </section>
  );
}
