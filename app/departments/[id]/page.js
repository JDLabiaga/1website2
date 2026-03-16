"use client";
import { useParams } from 'next/navigation';
import Navbar from '../../Navbar';
import departmentsData from '../../data/departments.json';

export default function DepartmentDetail() {
  const params = useParams();
  const id = params?.id;
  const departmentsArray = Array.isArray(departmentsData) ? departmentsData : [];
  const dept = id ? departmentsArray.find(d => d.id === id) : null;

  if (!dept) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-[#FAF9F6] pt-20">
          <div className="text-center p-16 bg-white border border-slate-200 max-w-lg">
            <h1 className="text-2xl font-serif italic text-slate-900">Information Pending</h1>
            <p className="text-slate-400 mt-4 mb-8 text-sm font-light uppercase tracking-widest">
              The administrative record is currently being updated.
            </p>
            <a href="/" className="border border-indigo-900 text-indigo-900 px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-indigo-900 hover:text-white transition-all">
              Return to Index
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF9F6] text-[#1a1a1a]">
        
        {/* INSTITUTIONAL HEADER */}
        <header className="pt-48 pb-20 px-8 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[10px] block mb-6">
                  Academic Division — {dept.short}
                </span>
                <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight tracking-tight">
                  {dept.name}
                </h1>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Registry Code</p>
                <p className="text-2xl font-serif italic text-indigo-900">00{dept.id === 'soict' ? '1' : '2'}-PCC</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* LEFT COLUMN: PRIMARY CONTENT */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* SECTION 1: MANDATE/DESCRIPTION */}
              <section>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 border-b border-slate-100 pb-4">Departmental Mandate</h2>
                <p className="text-3xl font-serif font-light leading-snug text-slate-800 italic">
                  "{dept.description}"
                </p>
              </section>

              {/* SECTION 2: CURRICULUM */}
              <section>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 border-b border-slate-100 pb-4">Academic Programs</h2>
                <div className="space-y-4">
                  {dept.courses.map((course, i) => (
                    <div key={i} className="group flex justify-between items-center py-6 border-b border-slate-200 hover:pl-4 transition-all duration-500">
                      <div>
                        <p className="text-xl font-serif text-slate-900">{course}</p>
                        <p className="text-[10px] text-slate-400 uppercase mt-1 tracking-widest font-bold">Standard 4-Year Residency</p>
                      </div>
                      <span className="text-indigo-300 group-hover:text-indigo-900 transition-colors text-xs tracking-widest">PROSPECTUS →</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 3: CHRONICLE/HIGHLIGHTS */}
              <section className="space-y-12">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 border-b border-slate-100 pb-4">Division Chronicles</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  {dept.highlights?.map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100 mb-6">
                        <img src={item.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" alt={item.title} />
                      </div>
                      <h4 className="font-serif text-2xl mb-3 leading-tight">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN: ADMINISTRATIVE INFO */}
            <aside className="lg:col-span-4 space-y-12">
              <div className="bg-white border border-slate-200 p-10">
                <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-600 mb-8 text-center">Executive Leadership</h3>
                <div className="text-center">
                  <img src={dept.deanImage} className="w-40 h-52 object-cover mx-auto mb-6 grayscale" alt={dept.dean} />
                  <p className="text-lg font-serif italic text-slate-900">{dept.dean}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Dean of the Division</p>
                </div>
              </div>

              <div className="p-10 bg-indigo-950 text-white">
                <h3 className="text-[9px] font-bold uppercase tracking-[0.4em] text-indigo-300 mb-6">Admissions Office</h3>
                <p className="text-sm font-light leading-relaxed mb-8 opacity-80">
                  Prospective students are invited to submit their credentials for the upcoming academic semester. 
                </p>
                <button className="w-full py-4 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-indigo-950 transition-all">
                  Request Information
                </button>
              </div>
            </aside>

          </div>
          
          <footer className="mt-32 pt-20 border-t border-slate-200 text-center">
             <button className="bg-indigo-900 text-white px-16 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-indigo-800 transition-all shadow-2xl">
                Official Enrollment Portal
             </button>
             <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.5em] mt-8">Passi City College © 2026</p>
          </footer>
        </div>
      </main>
    </>
  );
}