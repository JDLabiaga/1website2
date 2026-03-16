"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Revised terminology for a more academic feel
  const primaryNav = [
    { name: 'The Institution', href: '/history' },
    { name: 'Governance', href: '/vision-mission' },
    { name: 'Academics', href: '/departments' },
    { name: 'Campus Life', href: '/events' },
    { name: 'Public Affairs', href: '/news' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white border-b border-slate-200">
        {/* Top Utility Bar - Makes it look much more professional/official */}
        <div className="hidden md:block bg-indigo-950 text-white py-2 px-8">
          <div className="max-w-7xl mx-auto flex justify-between text-[9px] font-bold tracking-[0.2em] uppercase">
            <span>Passi City, Iloilo, Philippines</span>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-indigo-300">Directory</Link>
              <Link href="/objectives" className="hover:text-indigo-300">Institutional Quality</Link>
            </div>
          </div>
        </div>

        <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-8">
          {/* Official Style Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-900 flex items-center justify-center text-white font-serif italic text-xl">P</div>
            <div className="leading-none">
              <span className="block font-serif text-lg tracking-tight text-slate-900">Passi City</span>
              <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-widest">College</span>
            </div>
          </Link>

          {/* Minimal Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {primaryNav.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-indigo-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Admissions Call to Action */}
            <Link href="/enrollment">
              <button className="border-2 border-indigo-900 text-indigo-900 px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-900 hover:text-white transition-all">
                Admissions
              </button>
            </Link>
          </div>

          {/* Side Drawer Toggle */}
          <button 
            className="flex items-center gap-2 group"
            onClick={() => setIsDrawerOpen(true)}
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-900 transition-colors">Index</span>
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-slate-900"></span>
              <span className="block w-5 h-0.5 bg-slate-900"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* FULL-SCREEN NAVIGATION INDEX */}
      <div className={`fixed inset-0 z-[110] bg-indigo-950 transition-all duration-700 ease-in-out ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col p-12 lg:p-24">
          <div className="flex justify-between items-center mb-20">
            <span className="text-indigo-300 font-serif italic text-2xl font-light">Navigation Index</span>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="text-white text-xs font-bold uppercase tracking-[0.4em] border border-white/20 px-6 py-3 hover:bg-white hover:text-indigo-950 transition-all"
            >
              Close
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <nav className="flex flex-col gap-6">
              {primaryNav.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href} 
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-5xl lg:text-7xl font-serif text-white hover:italic hover:pl-6 transition-all duration-500"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block border-l border-white/10 pl-20 pt-4">
              <p className="text-indigo-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-10">Department Units</p>
              <div className="grid gap-6">
                {['SOICT', 'SOCJ', 'SOTE', 'SOBM', 'SOHM'].map(unit => (
                  <Link 
                    key={unit} 
                    href="/departments" 
                    onClick={() => setIsDrawerOpen(false)}
                    className="text-white/40 hover:text-white text-2xl font-serif transition-colors"
                  >
                    {unit} — Division
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto flex justify-between items-end border-t border-white/10 pt-10">
            <div className="text-indigo-300/50 text-[10px] font-bold uppercase tracking-widest">
              Passi City College Official Portal
            </div>
            <Link href="/contact" className="text-white text-sm font-serif italic">Inquiries: info@pcc.edu.ph</Link>
          </div>
        </div>
      </div>
    </>
  );
}