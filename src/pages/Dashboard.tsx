import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Image as ImageIcon, MessageSquare, DollarSign, Users, Settings, LogOut, Upload, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { dummyPortfolio } from '../data/dummy';

const menuItems = [
  { id: 'overview', icon: <LayoutDashboard className="w-5 h-5" />, label: 'Overview' },
  { id: 'portfolio', icon: <ImageIcon className="w-5 h-5" />, label: 'Portfolio' },
  { id: 'testimonials', icon: <MessageSquare className="w-5 h-5" />, label: 'Testimonials' },
  { id: 'packages', icon: <DollarSign className="w-5 h-5" />, label: 'Packages' },
  { id: 'clients', icon: <Users className="w-5 h-5" />, label: 'Clients' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0F0F0F] flex flex-col hidden md:flex shrink-0 fixed h-full z-10">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <span className="font-serif font-bold text-xl text-white tracking-tight">SM Admin</span>
        </div>
        <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm",
                activeTab === item.id 
                  ? "bg-primary text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all w-full text-left font-medium text-sm">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all w-full text-left font-medium text-sm mt-2">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 relative min-h-screen">
        <div className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#0F0F0F]/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-xl font-bold capitalize text-white">{activeTab.replace('-', ' ')}</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20"></div>
          </div>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: "Total Revenue", val: "Rp 45.5M", inc: "+12%" },
                    { label: "Active Bookings", val: "24", inc: "+4" },
                    { label: "Portfolio Items", val: "142", inc: "+12" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-[#141414] border border-white/10">
                      <div className="text-gray-400 text-sm font-medium mb-4">{stat.label}</div>
                      <div className="flex items-end gap-4">
                        <div className="text-3xl font-bold text-white">{stat.val}</div>
                        <div className="text-emerald-400 text-sm font-bold pb-1">{stat.inc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'portfolio' && (
              <motion.div
                key="portfolio"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-white">Manage Portfolio</h3>
                  <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    <Plus className="w-4 h-4" /> Add New
                  </button>
                </div>
                
                <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 mb-8 text-center border-dashed">
                  <Upload className="w-10 h-10 mx-auto text-gray-500 mb-4" />
                  <p className="text-gray-400">Drag & drop files here, or click to upload</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {dummyPortfolio.map((item) => (
                    <div key={item.id} className="relative group rounded-xl overflow-hidden aspect-square border border-white/10">
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button className="p-2 bg-white/20 hover:bg-white/40 rounded-lg backdrop-blur-sm transition-colors text-white">Edit</button>
                        <button className="p-2 bg-red-500/80 hover:bg-red-500 rounded-lg backdrop-blur-sm transition-colors text-white">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {activeTab !== 'overview' && activeTab !== 'portfolio' && (
               <motion.div
               key="other"
               initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
               className="flex items-center justify-center h-[60vh] text-gray-500"
             >
               Module under development
             </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
