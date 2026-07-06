import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Trophy, Instagram, Layers, Video, ImageIcon } from 'lucide-react';

const SERVICES = [
  {
    icon: <Trophy size={32} />,
    title: 'Sports Posters',
    description:
      'Electrifying sports poster designs for players, clubs, and events. Dynamic compositions with dramatic lighting and powerful typography that capture the energy of the game.',
    features: ['Player tributes', 'Match posters', 'Club branding', 'Championship graphics'],
    tag: 'Most Popular',
  },
  {
    icon: <Instagram size={32} />,
    title: 'Social Media Design',
    description:
      'Scroll-stopping content for Instagram, Facebook, Twitter, and TikTok. Consistent templates, story designs, and campaign visuals that build your online presence.',
    features: ['Post templates', 'Story designs', 'Highlight covers', 'Campaign banners'],
    tag: null,
  },
  {
    icon: <Layers size={32} />,
    title: 'Branding',
    description:
      'Complete brand identity systems that communicate your values. From logo design to full brand guidelines — cohesive, memorable, and professional.',
    features: ['Logo design', 'Brand guidelines', 'Business cards', 'Brand strategy'],
    tag: null,
  },
  {
    icon: <Video size={32} />,
    title: 'Video Editing',
    description:
      'Professional video editing that transforms raw footage into compelling stories. Cinematic cuts, motion graphics, color grading, and dynamic transitions.',
    features: ['Highlight reels', 'Motion graphics', 'Color grading', 'Intro/outro'],
    tag: null,
  },
  {
    icon: <ImageIcon size={32} />,
    title: 'Photo Manipulation',
    description:
      'Advanced photo manipulation and compositing that creates the impossible. Seamless edits, dramatic effects, and hyper-realistic compositions.',
    features: ['Photo compositing', 'Background removal', 'Retouching', 'Special effects'],
    tag: null,
  },
];

export default function Services() {
  const { ref: sectionRef, visible } = useIntersectionObserver(0.1);

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 bg-brand-black relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-brand-red/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-brand-red mb-4">
            What I Do
          </p>
          <h2 className="section-title">Services</h2>
          <span className="red-line" />
          <p className="section-subtitle mt-6 max-w-xl mx-auto">
            Premium creative services tailored to make your brand and content stand out in a crowded world.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`relative bg-brand-black-card border border-brand-black-border p-8 group hover:border-brand-red/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(220,38,38,0.15)] ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              } transition-all duration-700`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Tag */}
              {service.tag && (
                <div className="absolute -top-3 left-8 bg-brand-red text-white font-montserrat font-bold text-xs uppercase tracking-widest px-3 py-1">
                  {service.tag}
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-wider mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 font-inter text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
