import { Instagram, Youtube, MessageCircle, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  'Sports Posters',
  'Social Media Design',
  'Branding',
  'Video Editing',
  'Photo Manipulation',
];

const SOCIALS = [
  { icon: <Instagram size={18} />, href: 'https://www.instagram.com/mr_visuals_1', label: 'Instagram' },
  { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
  { icon: <MessageCircle size={18} />, href: 'https://wa.me/201234567890', label: 'WhatsApp' },
  { icon: <Mail size={18} />, href: 'mailto:mr.creativestudio@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-black border-t border-brand-black-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/ChatGPT_Image_Jul_6,_2026,_02_14_42_PM.png"
                alt="MR Creative Studio"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-montserrat font-black text-white uppercase tracking-widest text-sm">
                  MR Creative Studio
                </p>
                <p className="font-montserrat text-brand-red text-xs uppercase tracking-[0.3em]">
                  Mohamad Reda
                </p>
              </div>
            </div>
            <p className="font-inter text-gray-500 text-sm leading-relaxed max-w-sm">
              Crafting visually powerful designs that tell stories, build brands, and leave lasting impressions. Sports posters to brand identities — all with precision.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-red hover:border-brand-red hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-montserrat font-black text-xs uppercase tracking-[0.2em] text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="font-inter text-sm text-gray-500 hover:text-brand-red transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-brand-red group-hover:w-4 transition-all duration-300" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-black text-xs uppercase tracking-[0.2em] text-white mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="font-inter text-sm text-gray-500 hover:text-brand-red transition-colors duration-300 flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 h-px bg-brand-red group-hover:w-4 transition-all duration-300" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-black-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-gray-600">
            &copy; {new Date().getFullYear()} MR Creative Studio. All rights reserved.
          </p>
          <p className="font-inter text-xs text-gray-600">
            Designed & Built with <span className="text-brand-red">passion</span> by Mohamad Reda
          </p>
        </div>
      </div>
    </footer>
  );
}
