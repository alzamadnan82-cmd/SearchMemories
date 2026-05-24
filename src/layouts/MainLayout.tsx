import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-dark relative overflow-hidden">
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      
      {/* Background Blobs */}
      <div className="absolute -bottom-10 -left-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute -top-10 -right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-0"></div>
    </div>
  );
}
