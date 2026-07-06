import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MessageCircle, Mail, Instagram, Send, CheckCircle, ArrowRight } from 'lucide-react';

const CONTACT_LINKS = [
  {
    icon: <MessageCircle size={22} />,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/201214229595',
    color: '#25D366',
    description: 'Fastest response — usually within hours',
  },
  {
    icon: <Mail size={22} />,
    label: 'Email',
    value: 'mrvisual14@gmail.com',
    href: 'mailto:mrvisual14@gmail.com',
    color: '#dc2626',
    description: 'For detailed project briefs and quotes',
  },
  {
    icon: <Instagram size={22} />,
    label: 'Instagram',
    value: '@mr_visuals_1',
    href: 'https://www.instagram.com/mr_visuals_1',
    color: '#E1306C',
    description: 'Follow for latest work and updates',
  },
];

export default function Contact() {
  const { ref: sectionRef, visible } = useIntersectionObserver(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-32 bg-brand-black relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-red/4 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-red/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.3em] text-brand-red mb-4">
            Get In Touch
          </p>
          <h2 className="section-title">Contact Me</h2>
          <span className="red-line" />
          <p className="section-subtitle mt-6 max-w-xl mx-auto">
            Ready to start your next project? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: contact methods + info */}
          <div
            className={`space-y-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Quick contact */}
            <div className="space-y-4">
              {CONTACT_LINKS.map(({ icon, label, value, href, color, description }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-brand-black-card border border-brand-black-border p-5 hover:border-brand-red/40 transition-all duration-300 group hover:-translate-x-1"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${color}20`, color }}
                  >
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-montserrat font-black text-xs uppercase tracking-widest text-gray-500 mb-0.5">
                      {label}
                    </p>
                    <p className="font-montserrat font-semibold text-white text-sm truncate">{value}</p>
                    <p className="font-inter text-xs text-gray-500 mt-0.5">{description}</p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-gray-600 group-hover:text-brand-red group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-brand-red/8 border border-brand-red/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                <span className="font-montserrat font-black text-xs uppercase tracking-widest text-brand-red">
                  Currently Available
                </span>
              </div>
              <p className="font-inter text-gray-300 text-sm leading-relaxed">
                I'm currently accepting new projects. My typical response time is within 24 hours. Let's discuss your vision and bring it to life.
              </p>
            </div>

            {/* Banner preview */}
            <div className="overflow-hidden group">
              <img
                src="/assets/images/file_00000000175071f49b99c79c8a1b1907.png"
                alt="MR Creative Studio Banner"
                className="w-full object-cover h-48 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6 bg-brand-black-card border border-brand-red/30 p-12">
                <div className="w-20 h-20 rounded-full bg-brand-red/15 flex items-center justify-center">
                  <CheckCircle size={40} className="text-brand-red" />
                </div>
                <div>
                  <h3 className="font-montserrat font-black text-2xl text-white uppercase tracking-wider mb-3">
                    Message Sent!
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs px-6 py-3"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-brand-black-card border border-brand-black-border p-8 space-y-6">
                <h3 className="font-montserrat font-black text-xl text-white uppercase tracking-wider">
                  Send a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-montserrat text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="input-dark w-full px-4 py-3 text-sm font-inter"
                    />
                  </div>
                  <div>
                    <label className="block font-montserrat text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="input-dark w-full px-4 py-3 text-sm font-inter"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-dark w-full px-4 py-3 text-sm font-inter"
                  >
                    <option value="">Select a service...</option>
                    <option value="sports">Sports Poster</option>
                    <option value="social">Social Media Design</option>
                    <option value="branding">Branding</option>
                    <option value="video">Video Editing</option>
                    <option value="photo">Photo Manipulation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-montserrat text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="input-dark w-full px-4 py-3 text-sm font-inter resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-3">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      Send Message
                      <Send size={16} />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
