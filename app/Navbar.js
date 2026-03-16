"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Prevent scrolling when the full-screen menu is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDrawerOpen]);

  const primaryNav = [
    { name: 'The Institution', href: '/history' },
    { name: 'Governance', href: '/vision-mission' },
    { name: 'Academics', href: '/departments' },
    { name: 'Campus Life', href: '/events' },
    { name: 'Public Affairs', href: '/news' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-200">
        {/* Top Utility Bar */}
        <div className="hidden md:block bg-indigo-950 text-white py-2 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex justify-between text-[9px] font-bold tracking-[0.2em] uppercase">
            <span>Passi City, Iloilo, Philippines</span>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-indigo-300 transition-colors">Directory</Link>
              <Link href="/objectives" className="hover:text-indigo-300 transition-colors">Institutional Quality</Link>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-12 h-20 md:h-24">
          {/* Official Style Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-indigo-950 flex items-center justify-center text-white font-serif italic text-xl shadow-sm">P</div>
            <div className="leading-none">
              <span className="block font-serif text-lg tracking-tight text-slate-900">Passi City</span>
              <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-widest">College</span>
            </div>
          </Link>

          {/* Minimal Desktop Nav - Hidden on small screens to prevent overlap */}
          <div className="hidden xl:flex items-center gap-10">
            {primaryNav.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-indigo-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link href="/enrollment">
              <button className="border-2 border-indigo-950 text-indigo-950 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-950 hover:text-white transition-all">
                Admissions
              </button>
            </Link>
          </div>

          {/* Toggle Button */}
          <button 
            className="flex items-center gap-3 group pl-4"
            onClick={() => setIsDrawerOpen(true)}
          >
            <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-900 transition-colors">Navigation Index</span>
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-slate-950"></span>
              <span className="block w-6 h-0.5 bg-slate-950"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* FULL-SCREEN NAVIGATION INDEX */}
      <div className={`fixed inset-0 z-[150] bg-indigo-950 transition-transform duration-700 ease-in-out overflow-y-auto ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="min-h-screen flex flex-col p-8 md:p-16 lg:p-24">
          
          <div className="flex justify-between items-center mb-12 lg:mb-20">
            <span className="text-indigo-300 font-serif italic text-xl lg:text-3xl font-light">Navigation Index</span>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="text-white text-[10px] font-bold uppercase tracking-[0.4em] border border-white/20 px-8 py-4 hover:bg-white hover:text-indigo-950 transition-all"
            >
              Close
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-12 lg:mb-0">
            {/* Primary Links */}
            <nav className="flex flex-col gap-4 lg:gap-8">
              {primaryNav.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href} 
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white hover:italic hover:translate-x-4 transition-all duration-500"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/enrollment" 
                onClick={() => setIsDrawerOpen(false)}
                className="text-4xl sm:text-5xl lg:text-7xl font-serif text-indigo-400 italic hover:translate-x-4 transition-all duration-500 underline underline-offset-8 decoration-1"
              >
                Admissions
              </Link>
            </nav>

            {/* Department Shortcuts */}
            <div className="hidden lg:block border-l border-white/10 pl-24 pt-4">
              <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-12">Department Units</p>
              <div className="grid gap-8">
                {['SOICT', 'SOCJ', 'SOTE', 'SOBM', 'SOHM'].map(unit => (
                  <Link 
                    key={unit} 
                    href="/departments" 
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-white/40 hover:text-white text-3xl font-serif transition-colors group flex items-center gap-4"
                  >
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {unit} — Division
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Info inside Drawer */}
          <div className="mt-auto pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-indigo-300/50 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
              Passi City College Official Academic Portal
            </div>
            <Link href="/contact" className="text-white text-base font-serif italic hover:text-indigo-300 transition-colors">
              Inquiries: info@pcc.edu.ph
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}