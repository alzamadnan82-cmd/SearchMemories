import { motion } from 'framer-motion';
import { dummyPackages } from '../data/dummy';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-transparent text-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-[0.9]"
          >
            Investment <span className="italic text-primary">Packages</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg font-light"
          >
            Memories are priceless, but our packages are designed to be clear and valuable. Choose the one that fits your graduation dreams.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyPackages.map((pkg, i) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col transition-shadow hover:shadow-xl border group",
                pkg.isPopular ? "bg-dark text-white border-dark" : "bg-white text-dark border-gray-100 shadow-sm"
              )}
            >
              {pkg.isPopular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">Most Popular</div>}
              
              <div className="mb-8 border-b border-gray-200 pb-8 flex-col text-center">
                <h3 className={cn("text-xl font-serif font-bold mb-4", pkg.isPopular ? "text-white" : "text-dark")}>{pkg.name}</h3>
                <div className="text-4xl font-serif font-bold">{pkg.price}</div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={cn("w-5 h-5 shrink-0 mt-0.5", pkg.isPopular ? "text-white/80" : "text-primary")} />
                    <span className={cn("text-sm", pkg.isPopular ? "text-white/80" : "text-gray-500")}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/628123456789" 
                target="_blank" 
                rel="noreferrer" 
                className={cn(
                  "w-full py-3 text-[10px] text-center rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 border", 
                  pkg.isPopular ? "bg-white text-dark border-white hover:bg-gray-100" : "bg-transparent text-dark border-dark hover:bg-dark hover:text-white"
                )}
              >
                Order via WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
