"use client";
import Navbar from '../Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* EDITORIAL HEADER */}
          <div className="mb-24 pb-12 border-b border-slate-200">
            <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">
              Iloilo Provincial Registry
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-900 tracking-tight leading-none">
              Location <span className="italic font-serif">&</span> <br/>Communication.
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-stretch">
            
            {/* LEFT SIDE: REGISTRY DETAILS */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-white border border-slate-200 p-12 shadow-sm relative overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-950"></div>
                
                <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Institutional Directory</h2>
                
                <div className="space-y-12">
                  {/* Address Section */}
                  <div className="flex items-start gap-8">
                    <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-indigo-950 font-serif italic text-lg shrink-0">
                      A
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase text-indigo-600 tracking-widest mb-3">Campus Residence</p>
                      <p className="text-slate-900 font-serif leading-relaxed text-lg">
                        Passi City College<br/>
                        Brgy. Bacuranan, Passi City,<br/>
                        Iloilo, Philippines 5037
                      </p>
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="flex items-start gap-8">
                    <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-indigo-950 font-serif italic text-lg shrink-0">
                      C
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase text-indigo-600 tracking-widest mb-3">Telecommunications</p>
                      <p className="text-slate-900 font-serif text-lg">(033) 311 - 5236</p>
                    </div>
                  </div>

                  {/* Digital Section */}
                  <div className="flex items-start gap-8">
                    <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-indigo-950 font-serif italic text-lg shrink-0">
                      D
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase text-indigo-600 tracking-widest mb-3">Digital Archives</p>
                      <p className="text-slate-900 font-serif text-lg">registrar@passicitycollege.edu.ph</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA DISPATCH */}
              <div className="bg-indigo-950 p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 border border-white/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                <p className="text-indigo-300 font-bold uppercase tracking-[0.3em] text-[9px] mb-6">Social Dispatch</p>
                <p className="text-lg font-serif italic leading-relaxed mb-8 text-indigo-50 font-light">
                  "For real-time administrative updates and collegiate announcements, please refer to our verified Facebook communications."
                </p>
                <div className="h-px w-16 bg-indigo-400"></div>
              </div>
            </div>

            {/* RIGHT SIDE: CARTOGRAPHY (MAP) */}
            <div className="lg:col-span-7 h-[600px] bg-white border border-slate-200 p-3 shadow-sm relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.347594371485!2d122.65147577582524!3d11.012543354784948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9f688849b383%3A0x89299479e0a05a8b!2sPassi%20City%20College!5e0!3m2!1sen!2sph!4v1715634567890!5m2!1sen!2sph" 
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
              
              {/* Floating Map Label */}
              <div className="absolute bottom-10 left-10 right-10 bg-white p-6 border border-slate-100 shadow-xl pointer-events-none translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                 <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-indigo-600 mb-2">Cartographic Reference</p>
                 <p className="text-slate-800 font-serif text-sm">Passi City College Campus — Bacuranan District</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}