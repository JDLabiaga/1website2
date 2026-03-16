"use client";
import Navbar from '../Navbar';

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen relative overflow-hidden">
        
        {/* Subtle Watermark Decorative Element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[30vw] font-serif italic">PCC</h2>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          
          {/* HEADER SECTION */}
          <div className="text-center mb-32">
            <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">
              Foundational Principles
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-900 tracking-tight leading-none">
              Vision <span className="italic font-serif">&</span> Mission
            </h1>
            <div className="h-px w-24 bg-slate-300 mx-auto mt-12 mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* VISION SECTION - Updated with official text */}
            <div className="relative bg-white border border-slate-200 p-12 md:p-20 shadow-sm transition-all duration-700 hover:shadow-xl group">
              <div className="relative z-10">
                <p className="text-indigo-950 font-bold text-[10px] uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                  <span className="h-px w-8 bg-indigo-900"></span>
                  The Vision
                </p>
                <h2 className="text-3xl font-serif italic text-slate-500 mb-10">
                  Institutional Aspiration
                </h2>
                <p className="text-2xl md:text-3xl font-serif text-slate-900 leading-tight tracking-tight">
                  "Passi City College: A center of Academic Excellence for Sustainable Development and Societal Transformation."
                </p>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-slate-100 group-hover:border-indigo-200 transition-colors"></div>
            </div>

            {/* MISSION SECTION - Updated with official text */}
            <div className="relative bg-indigo-950 p-12 md:p-20 shadow-2xl transition-all duration-700 hover:-translate-y-2 group">
              <div className="relative z-10">
                <p className="text-indigo-300 font-bold text-[10px] uppercase tracking-[0.4em] mb-12 flex items-center gap-4">
                  <span className="h-px w-8 bg-indigo-400"></span>
                  The Mission
                </p>
                <h2 className="text-3xl font-serif italic text-indigo-200/50 mb-10">
                  Current Mandate
                </h2>
                <p className="text-xl md:text-2xl font-serif text-white leading-relaxed font-light">
                  "Passi City College is committed to produce globally competent graduates who are well-equipped with relevant academic and technological knowledge, skills and values which enable them to become productive citizens and collaborators for social change."
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-500 transition-all duration-1000 group-hover:w-full"></div>
            </div>

          </div>

          {/* CORE VALUES - Keeping the clean layout */}
          <div className="mt-32 border-t border-slate-200 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-wrap justify-center gap-10">
                {['Innovation', 'Service', 'Excellence', 'Character'].map((val) => (
                  <div key={val} className="text-center group">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-indigo-900 transition-colors cursor-default">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="text-right">
                <p className="text-[9px] font-bold text-indigo-900 uppercase tracking-[0.4em] italic border-b border-indigo-900/10 pb-2">
                  Passi City College Archives
                </p>
                <p className="text-[8px] text-slate-400 uppercase tracking-widest mt-2">
                  Established Anno Domini MMIII
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}