import { motion } from 'framer-motion';
import { Camera, Play } from 'lucide-react';
import { useState } from 'react';
import { dummyPortfolio } from '../data/dummy';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredPortfolio = filter === 'all' 
    ? dummyPortfolio 
    : dummyPortfolio.filter(item => item.type === filter);

  return (
    <div className="pt-40 pb-24 min-h-screen bg-transparent text-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-[0.9]"
          >
            Our <span className="italic text-primary">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg font-light"
          >
            Browse through our premium collection of cinematic videos and elegant photography from recent graduations.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'photo', 'video'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all border ${
                filter === type ? 'bg-dark text-white border-dark' : 'bg-transparent text-gray-500 border-gray-200 hover:border-dark hover:text-dark'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer bg-dark"
            >
              <img src={item.url} alt={item.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none"></div>
              
              <div className="absolute top-6 left-6 z-20">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold rounded-full tracking-widest">{item.type}</span>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-white font-serif text-2xl mb-1">{item.title}</h3>
                <p className="text-white/60 text-xs">Graduation Session</p>
              </div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-dark transition-colors">
                  {item.type === 'video' ? <Play className="w-6 h-6 ml-1" /> : <Camera className="w-6 h-6" />}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
