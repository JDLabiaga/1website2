"use client";
import Link from 'next/link'; // Added Link for navigation
import Navbar from '../Navbar';
import newsData from '../data/news.json';

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b-2 border-slate-200 pb-8">
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
              PCC <span className="text-blue-600">Gazette.</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Official Press Release • 2025-2026</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* MAIN NEWS FEED */}
            <div className="lg:col-span-8 space-y-10">
              {newsData.map((news) => (
                <div key={news.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row border border-slate-100">
                  <div className="md:w-80 h-64 md:h-auto overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-200">
                        {news.category}
                      </span>
                      <h2 className="text-2xl font-black text-slate-800 mt-5 mb-4 leading-[1.1] group-hover:text-blue-600 transition-colors uppercase italic tracking-tight">
                        {news.title}
                      </h2>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        {news.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{news.date}</span>
                      <Link 
                        href={`/news/${news.id}`} 
                        className="text-blue-600 font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2"
                      >
                        Read Story <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR - SPECIAL ANNOUNCEMENTS */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-colors"></div>
                
                <div className="relative z-10">
                  <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.4em]">Viral Alert</span>
                  <h3 className="text-3xl font-black mt-6 mb-6 leading-[0.9] italic uppercase tracking-tighter">College Week: Dominate or Disappear</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-10 font-medium">
                    "Ground turns into hell. Courts turn into warzones. Rivals fall. Limits die. Will you step up or get erased?"
                  </p>
                  <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Countdown to Chaos:</p>
                    <p className="text-3xl font-black tracking-tighter italic">LESS THAN 24HRS</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm">
                <h4 className="font-black uppercase tracking-widest text-[10px] mb-8 text-slate-400">PCC Bulletins</h4>
                <div className="space-y-8">
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shadow-[0_0_10px_rgba(37,99,235,0.6)]"></div>
                    <p className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors uppercase italic leading-tight">ALCOR VI & Hinampang 2026 Hosting Details</p>
                  </div>
                  <div className="flex gap-4 group cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 group-hover:bg-blue-600 transition-colors"></div>
                    <p className="text-sm font-black text-slate-800 group-hover:text-blue-600 transition-colors uppercase italic leading-tight">Extension Program: Barangay Imbang Grande</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}