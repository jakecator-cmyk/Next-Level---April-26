/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Menu, 
  X, 
  Star, 
  Play, 
  ChevronRight, 
  Smartphone, 
  Globe, 
  Zap, 
  Users,
  Search,
  PieChart,
  Layout,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { useState, useEffect } from 'react';

const PROJECT_CARDS = [
  {
    id: 'yaspa',
    client: 'Yaspa',
    title: 'Bold web design for a fast-scaling global payments fintech',
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'penny-black',
    client: 'Penny Black Media',
    title: 'A cinematic new website for a world-class film catalogue',
    color: '#c084fc',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'restore-plc',
    client: 'Restore PLC',
    title: 'Corporate web design for a multisite investor platform',
    color: '#818cf8',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nova-motorsport',
    client: 'Nova Motorsport',
    title: 'Fast, functional website for a cutting-edge motorsport brand',
    color: '#6366f1',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800'
  }
];

const TESTIMONIALS = [
  {
    name: 'Holly Sherwood',
    company: 'SHB Real Estate',
    quote: 'We were impressed and are delighted with the outcome!',
    rating: 5
  },
  {
    name: 'Guy Newcombe',
    company: 'Archipelago',
    quote: 'Delighted to recommend Violet. They listened to us, made sure they understood what was needed and delivered.',
    rating: 5
  },
  {
    name: 'Tom Allen',
    company: 'Nova Financial Solutions',
    quote: 'A pleasure working with Violet and the team. Absolutely delighted with the delivery.',
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-light selection:bg-primary-light selection:text-primary-dark">
      <div className="layout-lines absolute inset-0 pointer-events-none opacity-20" />
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="size-10 bg-primary rounded-full group-hover:scale-110 transition-transform" />
            <span className="font-heading font-bold text-xl tracking-tight text-text-main">
              VIOLET<span className="text-primary">.</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="font-heading font-bold text-sm text-text-main hover:text-primary transition-colors">Services</a>
            <a href="#" className="font-heading font-bold text-sm text-text-main hover:text-primary transition-colors">Our Work</a>
            <a href="#" className="font-heading font-bold text-sm text-text-main hover:text-primary transition-colors">Agency</a>
            <a 
              href="#" 
              className="px-6 py-2.5 bg-primary text-white font-heading font-bold text-sm rounded-xl hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              Get in Touch
            </a>
          </nav>

          <button 
            className="md:hidden size-10 flex items-center justify-center text-text-main hover:bg-primary-light/20 rounded-xl transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              <a href="#" className="text-3xl font-heading font-bold text-text-main">Services</a>
              <a href="#" className="text-3xl font-heading font-bold text-text-main">Our Work</a>
              <a href="#" className="text-3xl font-heading font-bold text-text-main">Agency</a>
              <a href="#" className="text-3xl font-heading font-bold text-primary">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero */}
        <section className="px-6 md:px-12 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary-light/30 text-primary-dark rounded-full font-heading font-bold text-xs uppercase tracking-widest">
                <Zap size={14} className="fill-primary" />
                Creative Firepower
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl font-bold text-text-main mb-8 max-w-4xl tracking-tight leading-[1.1]"
            >
              <span className="text-gradient">Bespoke</span> web design. Hand-crafted by humans.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 leading-relaxed"
            >
              Work that works. We combine strategy, style, and soul to build digital experiences that drive growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#" className="px-8 py-4 bg-primary text-white font-heading font-bold rounded-2xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1">
                View Portfolio
              </a>
              <a href="#" className="px-8 py-4 bg-white text-text-main font-heading font-bold rounded-2xl hover:bg-bg-light border border-slate-200 transition-all">
                The Agency
              </a>
            </motion.div>

            {/* Floaties / Cursors simulation */}
            <div className="relative w-full max-w-5xl h-40 mt-12 md:block hidden">
              {[
                { name: 'PPC Team', color: 'bg-blue-500', pos: 'left-[10%] top-0' },
                { name: 'Design Team', color: 'bg-purple-500', pos: 'right-[20%] top-10' },
                { name: 'SEO Team', color: 'bg-emerald-500', pos: 'left-[30%] bottom-0' },
                { name: 'Developers', color: 'bg-indigo-500', pos: 'right-[5%] bottom-5' }
              ].map((c, i) => (
                <motion.div
                  key={c.name}
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  className={`absolute ${c.pos} flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-md ${c.color} text-white text-[10px] font-bold`}
                >
                  <div className="size-2 bg-white/20 rounded-full" />
                  {c.name}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Grid */}
        <section className="px-6 md:px-12 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-main mb-4 tracking-tight">Our Work</h2>
                <p className="text-text-muted max-w-xl text-lg">A selection of recent projects that showcase our commitment to excellence.</p>
              </div>
              <a href="#" className="group flex items-center gap-2 font-heading font-bold text-primary">
                View all projects 
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {PROJECT_CARDS.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 card-purple-hover"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex flex-col gap-2">
                        <span className="text-primary font-heading font-bold text-sm uppercase tracking-wider">{project.client}</span>
                        <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-main leading-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="size-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all text-slate-400">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-xl shadow-slate-200/50">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prompt Section */}
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-primary-dark p-8 md:p-20 text-white"
            >
              <div className="relative z-10 max-w-2xl">
                <h3 className="font-heading text-4xl md:text-6xl font-bold mb-8 leading-tight">Like what you see? There’s more where that came from.</h3>
                <button className="flex items-center gap-3 px-8 py-4 bg-accent text-primary-dark font-heading font-bold rounded-2xl hover:bg-white transition-all transform hover:-translate-y-1">
                  Request more examples
                  <ArrowUpRight size={20} />
                </button>
              </div>
              
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-96 bg-primary rounded-full blur-[120px] opacity-30" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-96 bg-accent rounded-full blur-[120px] opacity-20" />
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 md:px-12 py-20 bg-white rounded-t-[3rem] -mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-main mb-6">Rated 5 stars by 100+ happy clients</h2>
              <div className="flex items-center justify-center gap-4 text-text-muted">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="font-bold text-text-main">4.9/5 Average Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-8 bg-bg-light rounded-3xl border border-slate-100 flex flex-col justify-between hover:border-primary/20 transition-colors">
                  <div>
                    <div className="flex gap-1 text-primary mb-6">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <blockquote className="text-xl font-heading font-bold text-text-main italic leading-relaxed mb-8">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-200 pt-6">
                    <div className="size-10 bg-primary-light rounded-full" />
                    <div>
                      <div className="font-bold text-sm text-text-main">{t.name}</div>
                      <div className="text-xs text-text-muted font-heading font-bold">{t.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 pt-20 pb-10 bg-text-main text-white rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="lg:col-span-1">
                <a href="#" className="flex items-center gap-2 mb-8">
                  <div className="size-8 bg-primary rounded-full" />
                  <span className="font-heading font-bold text-2xl tracking-tight">VIOLET.</span>
                </a>
                <p className="text-slate-400 mb-8 max-w-xs">
                  A high-end creative agency specializing in bespoke digital solutions for world-class brands.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
                <ul className="flex flex-col gap-3 text-slate-400 font-medium">
                  <li><a href="#" className="hover:text-primary transition-colors">Web Design</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">SEO & Search</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">E-Commerce</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">UX/UI Design</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Development</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg mb-6">Company</h4>
                <ul className="flex flex-col gap-3 text-slate-400 font-medium">
                  <li><a href="#" className="hover:text-primary transition-colors">Our Agency</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Client Work</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Latest News</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading font-bold text-lg mb-6">Newsletter</h4>
                <p className="text-slate-400 mb-6 font-medium">Stay updated with our latest thoughts and insights.</p>
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex-grow focus:outline-none focus:border-primary transition-colors"
                  />
                  <button className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-xl transition-colors">
                    <ArrowUpRight size={20} />
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium tracking-wide">
              <p>© {new Date().getFullYear()} Violet Agency. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
