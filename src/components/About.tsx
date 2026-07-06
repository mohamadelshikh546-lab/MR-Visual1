import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Award, Target, Users, Zap } from 'lucide-react';

const STATS = [
  { label: 'Projects Completed', value: 200, suffix: '+' },
  { label: 'Happy Clients', value: 80, suffix: '+' },
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Design Awards', value: 12, suffix: '' },
];

const SKILLS = [
  { name: 'Graphic Design', level: 95 },
  { name: 'Photo Manipulation', level: 92 },
  { name: 'Video Editing', level: 88 },
  { name: 'Branding', level: 85 },
  { name: 'Social Media Design', level: 90 },
];

const VALUES = [
  { icon: <Award size={20} />, title: 'Quality First', desc: 'Every pixel matters. Delivering excellence in every project.' },
  { icon: <Zap size={20} />, title: 'Fast Delivery', desc: 'On-time delivery without compromising quality.' },
  { icon: <Target size={20} />, title: 'Goal-Oriented', desc: 'Designs that achieve your business objectives.' },
  { icon: <Users size={20} />, title: 'Client-Focused', desc: 'Your vision is my blueprint. Clear communication always.' },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useIntersectionObserver(0.5);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(value / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [visible, value]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center group"
    >
      <div className="font-montserrat font-black text-5xl text-white group-hover:text-brand-red transition-colors duration-300">
        {count}{suffix}
      </div>
      <div className="font-inter text-sm text-gray-500 mt-2 uppercase tracking-widest">{label}</div>
      <div className="w-8 h-0.5 bg-brand-red mx-auto mt-3 group-hover:w-16 transition-all duration-500" />
    </div>
  );
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, visible } = useIntersectionObserver(0.3);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-montserrat font-semibold text-sm text-white uppercase tracking-wider">{name}</span>
        <span className="font-montserrat font-bold text-sm text-brand-red">{level}%</span>
      </div>
      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-red to-brand-red-light rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, visible } = useIntersectionObserver(0.1);

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 bg-brand-black-soft relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-red/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-brand-red mb-4">
            Who I Am
          </p>
          <h2 className="section-title">About Me</h2>
          <span className="red-line" />
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left: bio + values */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="space-y-5">
              <p className="font-inter text-gray-300 text-lg leading-[1.8]">
                I'm <span className="text-white font-semibold">Mohamad Reda</span>, a passionate graphic designer and video editor behind{' '}
                <span className="text-brand-red font-semibold">MR Creative Studio</span>. Based in Egypt, I specialize in high-impact visual content that resonates with audiences.
              </p>
              <p className="font-inter text-gray-400 leading-[1.8]">
                With over 5 years of experience, I've worked with athletes, clubs, brands, and content creators to deliver visuals that stand out. My work spans sports poster design, social media graphics, full brand identity systems, and dynamic video editing.
              </p>
              <p className="font-inter text-gray-400 leading-[1.8]">
                Every project is an opportunity to push creative boundaries. I believe great design isn't just about aesthetics — it's about telling a story that connects, inspires, and converts.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-brand-black-card border border-brand-black-border p-5 hover:border-brand-red/40 transition-all duration-300 group"
                >
                  <div className="text-brand-red mb-3 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <h4 className="font-montserrat font-bold text-sm text-white uppercase tracking-wider mb-1">
                    {title}
                  </h4>
                  <p className="font-inter text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: skills */}
          <div
            className={`space-y-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div>
              <h3 className="font-montserrat font-black text-white text-2xl uppercase tracking-widest mb-8">
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {SKILLS.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 100} />
                ))}
              </div>
            </div>

            {/* Software badges */}
            <div>
              <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Tools I Use
              </p>
              <div className="flex flex-wrap gap-2">
                {['Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Lightroom', 'Canva'].map((tool) => (
                  <span
                    key={tool}
                    className="font-montserrat text-xs font-semibold uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 hover:border-brand-red/50 hover:text-white transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-brand-black-border transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {STATS.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
