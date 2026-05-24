import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isDarkBgContext = location.pathname === '/' || location.pathname === '/portfolio' || location.pathname === '/pricing';

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-500',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6',
      (!isScrolled && isDarkBgContext) ? 'text-white' : 'text-dark'
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <span className="text-2xl font-serif tracking-tighter leading-none">SEARCH MEMORIES</span>
          <span className={cn("text-[9px] uppercase tracking-[0.3em] font-semibold mt-1", (!isScrolled && isDarkBgContext) ? "text-gray-300" : "text-gray-400")}>Cinematic Graduation</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn("relative hover:text-primary transition-colors", location.pathname === link.path && "text-primary")}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                />
              )}
            </Link>
          ))}
          <Link
            to="/dashboard"
            className={cn(
              "px-5 py-2 rounded-full transition-all hover:scale-105 active:scale-95",
              (!isScrolled && isDarkBgContext) 
                ? "bg-white text-dark hover:bg-white/90" 
                : "bg-dark text-white hover:bg-dark/90"
            )}
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 text-dark md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-medium py-2 border-b border-gray-100",
                  location.pathname === link.path && "text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noreferrer"
              className="w-full mt-4 bg-dark text-white text-center py-3 rounded-xl font-medium"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
