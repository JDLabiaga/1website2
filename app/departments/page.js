"use client";
import { useState } from 'react';
import Navbar from '../Navbar';

const departments = [
  { 
    id: "soict",
    name: "Information & Communications Technology", 
    short: "SOICT",
    image: "/images/soict-banner.jpg", 
    desc: "Mastering software development, network systems, and the future of digital innovation.",
    courses: ["BS in Information Technology (BSIT)"]
  },
  { 
    id: "soc",
    name: "Criminal Justice Education", 
    short: "SOC",
    image: "/images/soc-banner.jpg", 
    desc: "Rigorous training in law enforcement, public safety, and the pillars of justice.",
    courses: ["BS in Criminology (BSCrim)"]
  },
  { 
    id: "sobed",
    name: "Business Education", 
    short: "SOBED",
    image: "/images/sobed-banner.jpg", 
    desc: "Developing strategic leaders in financial management and marketing excellence.",
    courses: ["BSBA in Financial Management"]
  },
  { 
    id: "sohm",
    name: "Hospitality Management", 
    short: "SOHM",
    image: "/images/sohm.jpg", 
    desc: "World-class training for the culinary, hotel, and global tourism industry.",
    courses: ["BS in Hospitality Management (BSHM)"]
  },
  { 
    id: "sote",
    name: "Teacher Education", 
    short: "SOTE",
    image: "/images/sote.jpg", 
    desc: "Nurturing the next generation of educators in Elementary and Secondary levels.",
    courses: ["Elementary Education", "Secondary English", "Secondary Math"]
  }
];

export default function DepartmentsGallery() {
  const [activeDept, setActiveDept] = useState(departments[0]);

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-24">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: THE LIST */}
          <div className="py-12">
            <header className="mb-20">
              <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 italic">Academic Catalog</p>
              <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Explore <br/> Programs.
              </h1>
            </header>

            <div className="space-y-2">
              {departments.map((dept) => (
                <div 
                  key={dept.id}
                  onMouseEnter={() => setActiveDept(dept)}
                  className={`group cursor-pointer border-b border-slate-100 py-8 transition-all ${activeDept.id === dept.id ? 'pl-6' : 'hover:pl-4'}`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${activeDept.id === dept.id ? 'text-blue-600' : 'text-slate-400'}`}>
                        {dept.short}
                      </span>
                      <h2 className={`text-3xl font-bold tracking-tight uppercase mt-1 transition-colors ${activeDept.id === dept.id ? 'text-slate-900' : 'text-slate-300 group-hover:text-slate-500'}`}>
                        {dept.name}
                      </h2>
                    </div>
                    <a 
                      href={`/departments/${dept.id}`}
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${activeDept.id === dept.id ? 'bg-blue-600 border-blue-600 text-white rotate-45' : 'border-slate-200 text-slate-300'}`}
                    >
                      ↗
                    </a>
                  </div>

                  {/* Mobile Only Preview (Hidden on Desktop) */}
                  <div className={`lg:hidden overflow-hidden transition-all duration-500 ${activeDept.id === dept.id ? 'max-h-40 mt-6' : 'max-h-0'}`}>
                     <p className="text-slate-500 text-sm leading-relaxed">{dept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: THE PREVIEW PANEL */}
          <div className="hidden lg:block sticky top-32 h-[70vh] rounded-[4rem] overflow-hidden bg-slate-100 shadow-2xl">
            {/* Background Image with Crossfade */}
            <div className="absolute inset-0">
               <img 
                key={activeDept.image}
                src={activeDept.image} 
                className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-1000"
                alt="Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>

            {/* Floating Info Card */}
            <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/10 backdrop-blur-2xl rounded-[3rem] border border-white/20 text-white">
               <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{activeDept.name}</h3>
               <p className="text-sm text-white/80 font-medium mb-6 leading-relaxed">{activeDept.desc}</p>
               <div className="flex flex-wrap gap-3">
                  {activeDept.courses.map((c, i) => (
                    <span key={i} className="bg-white/20 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
                      {c}
                    </span>
                  ))}
               </div>
            </div>
          </div>

        </div>

        <footer className="py-20 px-6 mt-20 border-t border-slate-50">
          <div className="max-w-7xl mx-auto text-center">
             <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Passi City College • Academic Registry 2026</p>
          </div>
        </footer>
      </main>
    </>
  );
}