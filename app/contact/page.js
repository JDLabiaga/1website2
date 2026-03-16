"use client";
import Navbar from '../Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* EDITORIAL HEADER */}
          <div className="mb-24 pb-12 border-b border-slate-200 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">
                Iloilo Provincial Registry
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-900 tracking-tight leading-none">
                Location <span className="italic font-serif">&</span> <br/>Communication.
              </h1>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Established 2003</p>
              <p className="text-sm font-serif italic text-indigo-900">Official Institutional Portal</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: REGISTRY DETAILS */}
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-white border border-slate-200 p-12 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-indigo-950"></div>
                
                <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Institutional Directory</h2>
                
                <div className="space-y-12">
                  <div className="flex items-start gap-8">
                    <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-indigo-950 font-serif italic text-lg shrink-0">A</div>
                    <div>
                      <p className="text-[9px] font-bold uppercase text-indigo-600 tracking-widest mb-3">Campus Residence</p>
                      <p className="text-slate-900 font-serif leading-relaxed text-lg">
                        Passi City College<br/>
                        Brgy. Bacuranan, Passi City,<br/>
                        Iloilo, Philippines 5037
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-indigo-950 font-serif italic text-lg shrink-0">C</div>
                    <div>
                      <p className="text-[9px] font-bold uppercase text-indigo-600 tracking-widest mb-3">Telecommunications</p>
                      <p className="text-slate-900 font-serif text-lg">(033) 311 - 5236</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-10 h-10 border border-slate-100 flex items-center justify-center text-indigo-950 font-serif italic text-lg shrink-0">D</div>
                    <div>
                      <p className="text-[9px] font-bold uppercase text-indigo-600 tracking-widest mb-3">Digital Archives</p>
                      <p className="text-slate-900 font-serif text-lg">registrar@passicitycollege.edu.ph</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA DISPATCH */}
              <div className="bg-indigo-950 p-10 text-white shadow-2xl relative overflow-hidden group">
                <p className="text-indigo-300 font-bold uppercase tracking-[0.3em] text-[9px] mb-6">Social Dispatch</p>
                <p className="text-lg font-serif italic leading-relaxed mb-8 text-indigo-50 font-light">
                  "For real-time administrative updates and collegiate announcements, please refer to our verified Facebook communications."
                </p>
                <div className="h-px w-16 bg-indigo-400"></div>
              </div>
            </div>

            {/* RIGHT SIDE: REPLACED MAP WITH OFFICE HOURS & IMAGE HOLDER */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Institutional Image Placeholder */}
              <div className="aspect-video bg-slate-200 border border-slate-200 relative group overflow-hidden shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-400 italic">Campus Vista Placeholder</p>
                </div>
                {/* Visual frame decoration */}
                <div className="absolute inset-4 border border-white/20"></div>
              </div>

              {/* Office Hours Registry */}
              <div className="bg-white border border-slate-200 p-12">
                <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12">Standard Operating Hours</h2>
                
                <div className="space-y-6">
                  {[
                    { day: 'Monday — Friday', hours: '08:00 AM – 05:00 PM' },
                    { day: 'Saturday', hours: 'By Appointment Only' },
                    { day: 'Sunday', hours: 'Campus Closed' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-4">
                      <span className="font-serif text-slate-900">{item.day}</span>
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-slate-50 border-l-2 border-indigo-900">
                  <p className="text-xs font-serif italic text-slate-500 leading-relaxed">
                    Note: Office hours may vary during enrollment periods and institutional holidays. Please contact the Registrar for specific appointment scheduling.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}