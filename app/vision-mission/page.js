"use client";
import Navbar from '../Navbar';

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20 bg-[#fbfcfd] min-h-screen overflow-hidden relative">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] opacity-60"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              The <span className="text-blue-600">Blueprint</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-[0.5em] mt-4 text-xs">
              Vision • Mission • Core Values
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            
            {/* VISION CARD */}
            <div className="group relative bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100 transition-all duration-700 hover:-translate-y-4">
              <div className="absolute top-10 left-10 text-blue-600/10 text-9xl font-black italic select-none">V</div>
              <div className="relative z-10">
                <span className="bg-blue-50 text-blue-600 font-black text-[10px] px-5 py-2 rounded-full uppercase tracking-widest mb-8 inline-block">
                  Future Horizon
                </span>
                <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">Vision</h2>
                <p className="text-2xl md:text-3xl text-slate-700 font-bold leading-tight tracking-tight italic">
                  "A leading institution in academic excellence and character formation."
                </p>
              </div>
              {/* Bottom Accent */}
              <div className="absolute bottom-12 right-12 w-12 h-12 border-r-4 border-b-4 border-blue-600/20 group-hover:border-blue-600 transition-colors duration-500"></div>
            </div>

            {/* MISSION CARD */}
            <div className="group relative bg-slate-900 p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/20 transition-all duration-700 hover:-translate-y-4 flex flex-col justify-center">
              <div className="absolute top-10 left-10 text-white/5 text-9xl font-black italic select-none">M</div>
              <div className="relative z-10">
                <span className="bg-blue-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest mb-8 inline-block">
                  Current Mandate
                </span>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 italic">Mission</h2>
                <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed tracking-wide">
                  "To provide quality education that is accessible to all, fostering innovation and service."
                </p>
              </div>
              <div className="mt-12 h-[2px] w-1/4 bg-blue-600 group-hover:w-full transition-all duration-1000"></div>
            </div>

          </div>

          {/* Core Values / Summary Footer */}
          <div className="mt-20 bg-white/50 backdrop-blur-md border border-white p-8 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
                {['Innovation', 'Service', 'Excellence', 'Character'].map((val) => (
                    <span key={val} className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-r border-slate-200 pr-4 last:border-0">
                        {val}
                    </span>
                ))}
            </div>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                Passi City College • Est. 2003
            </p>
          </div>

        </div>
      </main>
    </>
  );
}