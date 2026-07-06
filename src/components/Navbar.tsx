import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-blur ${
        scrolled
          ? 'bg-brand-black/90 border-b border-brand-black-border shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/images/ChatGPT_Image_Jul_6,_2026,_02_14_42_PM.png"
              alt="MR Creative Studio"
              className="w-12 h-12 rounded-full object-cover transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
            />
            <div className="hidden sm:block">
              <p className="font-montserrat font-black text-white text-sm uppercase tracking-widest leading-tight">
                MR Creative
              </p>
              <p className="font-montserrat text-brand-red text-xs uppercase tracking-[0.3em] leading-tight">
                Studio
              </p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`nav-link ${activeSection === href.replace('#', '') ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-xs px-6 py-3"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white hover:text-brand-red transition-colors p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mobile-menu-enter bg-brand-black-soft border-t border-brand-black-border">
          <div className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-left py-3 px-4 font-montserrat font-semibold text-sm uppercase tracking-widest transition-all duration-300 border-l-2 ${
                  activeSection === href.replace('#', '')
                    ? 'text-white border-brand-red bg-brand-red/5'
                    : 'text-gray-400 border-transparent hover:text-white hover:border-brand-red hover:bg-white/5'
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-4 btn-primary justify-center"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
