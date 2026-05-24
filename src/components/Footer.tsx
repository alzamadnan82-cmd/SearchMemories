import { Link } from 'react-router-dom';
import { Camera, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="h-24 bg-white border-t border-gray-100 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center z-50 text-dark overflow-hidden">
      <div className="flex gap-12 mt-4 md:mt-0">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Instagram</span>
          <span className="text-xs font-medium">@searchmemories</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">WhatsApp</span>
          <span className="text-xs font-medium">+62 812 3456 789</span>
        </div>
      </div>
      <div className="flex items-center gap-4 hidden md:flex">
        <span className="text-[10px] font-bold uppercase tracking-widest">Next Graduation Season Starts In:</span>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-dark text-white flex items-center justify-center rounded-lg font-serif">12</div>
          <div className="w-10 h-10 bg-dark text-white flex items-center justify-center rounded-lg font-serif">08</div>
          <div className="w-10 h-10 bg-dark text-white flex items-center justify-center rounded-lg font-serif">45</div>
        </div>
      </div>
    </footer>
  );
}
