import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera, Star, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyServices, dummyPackages, dummyPortfolio, dummyTestimonials, dummyFAQs, dummyTeam } from '../data/dummy';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full">
      {/* A. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Graduation background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <motion.div style={{ y: y2, opacity }} className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white mt-16">

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[60px] md:text-[84px] lg:text-[100px] font-serif leading-[0.9] tracking-tight mb-6 drop-shadow-lg"
          >
            Search <span className="text-primary italic">Memories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl font-light mb-10 text-white/90 max-w-2xl mx-auto"
          >
            Capture Your Graduation Moment Into Timeless Memories
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="px-8 py-4 bg-primary text-white rounded-full font-medium text-[11px] uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
              Book Now
            </a>
            <Link to="/portfolio" className="px-8 py-4 bg-dark/40 backdrop-blur-md text-white rounded-full font-medium text-[11px] uppercase tracking-widest hover:bg-dark/60 transition-all border border-white/20">
              Explore Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* B. TRUST SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-blue-50 p-8 rounded-2xl flex flex-col justify-between border border-blue-100"
          >
            <span className="text-[10px] font-bold uppercase text-primary tracking-widest mb-4">Experience</span>
            <div className="text-5xl font-serif text-primary mb-2">200+</div>
            <span className="text-sm font-medium text-primary/80">Projects Delivered</span>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-gray-50 p-8 rounded-2xl flex flex-col justify-between border border-gray-100"
          >
            <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-4">Rating</span>
            <div className="text-5xl font-serif text-gray-800 tracking-tighter mb-2">4.9 <span className="text-2xl text-gray-400">/ 5</span></div>
            <span className="text-sm font-medium text-gray-500">Customer Satisfaction</span>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-dark p-8 rounded-2xl flex flex-col justify-between border border-gray-800 text-white shadow-xl"
          >
            <span className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-4">Clients</span>
            <div className="text-5xl font-serif mb-2">100+</div>
            <span className="text-sm font-medium text-gray-400">Happy Graduates</span>
          </motion.div>
        </div>
      </section>

      {/* C. ABOUT SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800" alt="About us" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl m-4 pointer-events-none" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">Crafting Cinematic Memories Since 2021</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              We are a team of passionate visual storytellers specializing in graduation documentation. We believe that every graduation has its own emotional journey, and our mission is to capture those fleeting moments into elegant, timeless masterpieces.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Serving with premium styling typical of an exclusive wedding organizer, we bring that same level of high-end quality to your graduation day.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 font-medium bg-dark text-white px-8 py-4 rounded-full hover:bg-dark/90 transition-colors">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* D. SERVICES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium Services</motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto text-lg">We provide tailored documentation services to meet your specific needs for your special day.</motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dummyServices.map((srv, i) => (
              <motion.div 
                key={srv.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } } }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <img src={srv.image} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h4 className="text-2xl font-serif text-white font-bold mb-2">{srv.title}</h4>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-sm">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E. PRICE LIST SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">Investment Packages</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto text-lg">Choose the perfect package to document your milestone. No hidden fees, clear deliverables.</motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dummyPackages.map((pkg, i) => (
            <motion.div 
              key={pkg.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } } }}
              className={cn(
                "p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center group border",
                pkg.isPopular ? "bg-dark text-white border-dark" : "bg-white border-gray-100"
              )}
            >
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className={cn("text-[10px] font-bold uppercase tracking-tighter", pkg.isPopular ? "text-primary italic" : "text-primary")}>
                    {pkg.isPopular ? "Best Value" : "Standard"}
                  </span>
                  <span className={cn("h-[1px] w-8", pkg.isPopular ? "bg-white/20" : "bg-gray-200")}></span>
                </div>
                <h4 className="text-xl font-serif mb-1">{pkg.name}</h4>
                <p className={cn("text-xs", pkg.isPopular ? "text-white/40" : "text-gray-400")}>{pkg.features.slice(0, 3).join(' • ')}</p>
              </div>
              <div className="sm:text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-end">
                <div className="text-2xl font-bold">{pkg.price}</div>
                <a 
                  href="https://wa.me/628123456789" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={cn(
                    "mt-2 text-[10px] font-bold uppercase border-b transition-colors", 
                    pkg.isPopular ? "border-white group-hover:text-primary group-hover:border-primary" : "border-dark group-hover:text-primary group-hover:border-primary"
                  )}
                >
                  Book via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* F. PORTFOLIO MASONRY SECTION */}
      <section className="py-24 bg-transparent text-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-4">Latest Works</motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-gray-500 max-w-xl text-lg font-light">A glimpse into our cinematic documentation and premium photography sessions.</motion.p>
            </div>
            <Link to="/portfolio" className="inline-flex font-bold uppercase tracking-widest text-[10px] items-center gap-2 hover:text-primary transition-colors pb-2 border-b border-dark hover:border-primary">
              View Entire Portfolio
            </Link>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {dummyPortfolio.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-2xl break-inside-avoid"
              >
                <img src={item.url} alt={item.title} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center mb-3">
                    {item.type === 'video' ? (
                      <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    ) : (
                      <Camera className="w-5 h-5" />
                    )}
                  </div>
                  <h4 className="text-lg font-serif font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* G. TESTIMONIALS */}
      <section className="py-24 overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-16">Stories From Graduates</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {dummyTestimonials.map((t, i) => (
              <motion.div 
                key={t.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } } }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <div className="text-primary mb-6 flex">
                  {[...Array(t.rating)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-700 font-serif italic text-lg leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{t.univ}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* H. COUNTDOWN */}
      <section className="py-24 relative overflow-hidden bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
           <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold">Graduation Season Is Approaching. Lock Your Date Now.</motion.h2>
           <div className="flex gap-4 md:gap-8 justify-center">
              {[
                { label: "Days", val: "14" },
                { label: "Hours", val: "08" },
                { label: "Mins", val: "45" },
                { label: "Secs", val: "32" }
              ].map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-24 md:w-32 md:h-36 bg-white shadow-xl rounded-2xl flex items-center justify-center text-4xl md:text-6xl font-serif font-bold text-dark border border-gray-100 mb-4">
                    {c.val}
                  </div>
                  <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">{c.label}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* I. FAQ */}
      <section className="py-24 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-6">Frequently Asked Questions</motion.h2>
        </div>
        <div className="space-y-4">
          {dummyFAQs.map((faq, i) => (
            <motion.details 
              key={faq.id}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1 } } }}
              className="group bg-white border border-gray-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg">
                {faq.question}
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* J. TEAM */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-16">Meet The Creatives</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dummyTeam.map((member, i) => (
              <motion.div 
                key={member.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } } }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/5] bg-gray-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent flex flex-col justify-end p-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h5 className="text-white font-bold text-xl">{member.name}</h5>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* K. CTA */}
      <section className="py-32 bg-transparent text-dark text-center px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight tracking-tight">Ready To Capture Your <br/><span className="text-primary italic">Graduation Moment?</span></h2>
            <p className="text-gray-500 text-lg md:text-xl mb-12 font-light max-w-xl mx-auto">Join hundreds of happy graduates and lock your cinematic session today. Limited slots available for graduation season.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/628123456789" target="_blank" rel="noreferrer" className="px-8 py-4 bg-dark text-white rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-dark/90 transition-colors shadow-xl">
                Book Now via WhatsApp
              </a>
              <Link to="/contact" className="px-8 py-4 bg-white text-dark rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-gray-50 transition-colors border border-gray-200">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
