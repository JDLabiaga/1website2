"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Vision & Mission', href: '/vision-mission' },
    { name: 'Objectives', href: '/objectives' },
    { name: 'About PCC', href: '/history' },
    { name: 'Activities & Events', href: '/events' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const courseData = [
    { dept: "Information Technology", code: "SOICT", links: ["BS in Information Technology"] },
    { dept: "Criminal Justice", code: "SOCJ", links: ["BS in Criminology"] },
    { dept: "Teacher Education", code: "SOTE", links: ["Bachelor of Elementary Education", "Bachelor of Secondary Education"] },
    { dept: "Business Education", code: "SOBM", links: ["BS in Business Administration"] },
    { dept: "Hospitality Management", code: "SOHM", links: ["BS in Hospitality Management"] },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* MOBILE HAMBURGER ICON */}
          <button 
            className="lg:hidden text-slate-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* LOGO */}
          <Link href="/" className="font-black text-blue-700 text-2xl tracking-tighter mx-auto lg:mx-0">
            PCC
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden lg:flex items-center gap-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-all">
                {link.name}
              </Link>
            ))}

            {/* DESKTOP MEGA MENU DROPDOWN */}
            <div 
              className="relative group py-4"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-blue-600">
                COURSES <span className="text-[8px]">▼</span>
              </button>

              <div className={`absolute top-full -right-48 w-[600px] bg-white shadow-2xl rounded-3xl border border-slate-100 p-8 grid grid-cols-2 gap-8 transition-all duration-300 ${isMegaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
                {courseData.map((item) => (
                  <div key={item.code} className="space-y-2">
                    <h4 className="text-blue-600 text-[11px] border-b border-blue-50 pb-1">{item.dept}</h4>
                    <ul className="space-y-1">
                      {item.links.map(course => (
                        <li key={course}>
                          <Link href="/departments" className="text-slate-600 hover:text-blue-500 normal-case font-bold text-sm block">
                            {course}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ENROLL BUTTON (Desktop/Mobile) */}
          <Link href="/enrollment" className="hidden sm:block">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:shadow-xl transition-all">
              ENROLL NOW
            </button>
          </Link>
        </div>
      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 z-[90] bg-slate-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}>
        <div 
          className={`absolute top-0 left-0 w-[80%] max-w-sm h-full bg-white p-8 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full uppercase font-black tracking-widest text-[11px]">
            <p className="text-slate-300 mb-8 tracking-[0.3em]">Menu</p>
            
            <div className="space-y-6 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block text-slate-800 text-lg hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </Link>
              ))}

              {/* MOBILE ACCORDION FOR COURSES */}
              <div className="pt-4 border-t border-slate-100">
                <button 
                  className="flex justify-between items-center w-full text-blue-600 text-lg"
                  onClick={() => setActiveAccordion(activeAccordion === 'courses' ? null : 'courses')}
                >
                  COURSES <span>{activeAccordion === 'courses' ? '−' : '+'}</span>
                </button>
                
                {activeAccordion === 'courses' && (
                  <div className="mt-4 space-y-6 pl-4 normal-case">
                    {courseData.map((item) => (
                      <div key={item.code}>
                        <p className="text-blue-400 text-[10px] mb-2">{item.dept}</p>
                        {item.links.map(c => (
                          <Link key={c} href="/departments" className="block text-slate-600 font-bold mb-2" onClick={() => setIsMobileMenuOpen(false)}>
                            {c}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Link href="/enrollment" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl mt-8">
                ENROLL NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}