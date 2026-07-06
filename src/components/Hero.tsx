import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const TITLES = [
  'Graphic Designer',
  'Video Editor',
  'Sports Poster Artist',
  'Brand Identity Expert',
];

const SERVICES_ICONS = [
  { label: 'Sports Posters', icon: '🏆' },
  { label: 'Branding', icon: '✦' },
  { label: 'Social Media', icon: '◈' },
  { label: 'Video Editing', icon: '▶' },
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!started) return;
    const target = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex, started]);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; r: number; vx: number; vy: number; alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(220, 38, 38, ${0.12 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-brand-black">
      {/* Animated grid */}
      <div className="absolute inset-0 hero-grid opacity-60" />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-red/8 blur-[100px] pointer-events-none" />

      {/* Diagonal accent */}
      <div className="diagonal-accent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Text content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 bg-brand-red/10 border border-brand-red/30 px-5 py-2.5 rounded-full"
              style={{ animation: 'fadeInUp 0.6s ease 0.2s both' }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                Available for Work
              </span>
            </div>

            {/* Name */}
            <div style={{ animation: 'fadeInUp 0.6s ease 0.4s both' }}>
              <h1 className="font-montserrat font-black text-white uppercase leading-none">
                <span className="block text-5xl md:text-6xl lg:text-7xl">Mohamad</span>
                <span className="block text-5xl md:text-6xl lg:text-7xl text-brand-red glow-red">Reda</span>
              </h1>
            </div>

            {/* Typewriter */}
            <div
              className="font-bebas text-2xl md:text-3xl text-gray-300 tracking-widest min-h-[2rem]"
              style={{ animation: 'fadeInUp 0.6s ease 0.6s both' }}
            >
              <span>{displayed}</span>
              <span className="inline-block w-0.5 h-7 bg-brand-red ml-1 animate-pulse" />
            </div>

            {/* Description */}
            <p
              className="section-subtitle max-w-lg"
              style={{ animation: 'fadeInUp 0.6s ease 0.8s both' }}
            >
              Crafting visually powerful designs that tell stories, build brands, and leave lasting impressions. From sports posters to full brand identities.
            </p>

            {/* Service tags */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: 'fadeInUp 0.6s ease 0.9s both' }}
            >
              {SERVICES_ICONS.map(({ label, icon }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 text-xs font-montserrat font-semibold uppercase tracking-wider text-gray-300 hover:border-brand-red/50 hover:text-white transition-all duration-300"
                >
                  <span className="text-brand-red">{icon}</span>
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeInUp 0.6s ease 1s both' }}
            >
              <button onClick={scrollToPortfolio} className="btn-primary group">
                View Portfolio
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                Contact Me
              </button>
            </div>

            {/* Social */}
            <div
              className="flex items-center gap-4 pt-2"
              style={{ animation: 'fadeInUp 0.6s ease 1.1s both' }}
            >
              <span className="text-xs font-montserrat text-gray-500 uppercase tracking-widest">Follow</span>
              <div className="w-8 h-px bg-gray-700" />
              <a
                href="https://www.instagram.com/mr_visuals_1"
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-xs font-semibold text-gray-400 hover:text-brand-red transition-colors tracking-widest uppercase"
              >
                @mr_visuals_1
              </a>
            </div>
          </div>

          {/* Logo / visual side */}
          <div
            className="hidden lg:flex items-center justify-center"
            style={{ animation: 'fadeIn 1s ease 0.5s both' }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-brand-red/20 scale-110 border-glow-animate" />
              <div className="absolute inset-0 rounded-full border border-brand-red/10 scale-125" />

              {/* Rotating ring */}
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-brand-red/15 animate-spin-slow" />

              {/* Logo */}
              <img
                src="/assets/images/ChatGPT_Image_Jul_6,_2026,_02_14_42_PM.png"
                alt="MR Creative Studio Logo"
                className="relative w-72 h-72 rounded-full object-cover shadow-[0_0_80px_rgba(220,38,38,0.3)]"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-red text-white font-montserrat font-black text-xs uppercase tracking-widest px-4 py-2 shadow-lg">
                Est. 2020
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-brand-red transition-colors group"
        style={{ animation: 'fadeIn 1s ease 1.5s both' }}
      >
        <span className="font-montserrat text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
