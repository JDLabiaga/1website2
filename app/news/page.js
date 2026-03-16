"use client";
import Link from 'next/link';
import Navbar from '../Navbar';
import newsData from '../data/news.json';

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-20 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* EDITORIAL HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-12 border-b border-slate-200 gap-8">
            <div className="max-w-xl">
              <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">
                The Gazette Office
              </span>
              <h1 className="text-6xl md:text-7xl font-serif text-slate-900 leading-tight">
                Institutional <span className="italic">Dispatch.</span>
              </h1>
            </div>
            <div className="text-right">
              <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Volume XXI • Issue 04</p>
              <p className="text-indigo-900 font-serif italic text-sm">Official Record of Passi City College</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* MAIN NEWS FEED */}
            <div className="lg:col-span-8 space-y-24">
              {newsData.map((news) => (
                <div key={news.id} className="group flex flex-col md:flex-row gap-10 items-start">
                  {/* Image with high-end frame */}
                  <div className="md:w-72 w-full aspect-[4/3] md:aspect-square overflow-hidden bg-white p-2 border border-slate-200">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                        {news.category}
                      </span>
                      <span className="h-1 w-1 bg-slate-200 rounded-full"></span>
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{news.date}</span>
                    </div>

                    <h2 className="text-3xl font-serif font-medium text-slate-900 mb-6 leading-tight group-hover:text-indigo-900 transition-colors">
                      {news.title}
                    </h2>
                    
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 max-w-2xl">
                      {news.excerpt}
                    </p>
                    
                    <Link 
                      href={`/news/${news.id}`} 
                      className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-950 group-hover:gap-6 transition-all"
                    >
                      Read Full Report <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR - FORMAL ANNOUNCEMENTS */}
            <div className="lg:col-span-4 space-y-12">
              
              {/* Featured Bulletin */}
              <div className="border border-indigo-900/10 bg-white p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-950"></div>
                <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.4em] block mb-8 text-center">Featured Bulletin</span>
                
                <h3 className="text-2xl font-serif italic text-slate-900 text-center mb-8 leading-snug">
                  College Foundation Week: Administrative Guidelines
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed mb-10 text-center font-light italic">
                  "Notice to all students: The upcoming academic break and collegiate ceremonies will follow the revised administrative protocol."
                </p>
                
                <div className="border-t border-slate-100 pt-8 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Time Remaining:</p>
                  <p className="text-2xl font-mono text-indigo-950 tracking-tighter">04 DAYS : 12 HRS</p>
                </div>
              </div>

              {/* Quick Links List */}
              <div className="bg-slate-50 border border-slate-200 p-10">
                <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] mb-10 text-indigo-900 border-b border-indigo-900/10 pb-4 text-center">Archive Index</h4>
                <div className="space-y-10">
                  <div className="group cursor-pointer">
                    <p className="text-[9px] text-indigo-500 font-bold uppercase mb-2">Internal Release</p>
                    <p className="text-sm font-serif text-slate-800 group-hover:text-indigo-900 transition-colors leading-snug">Hosting Protocols for ALCOR VI & Hinampang 2026</p>
                  </div>
                  <div className="group cursor-pointer">
                    <p className="text-[9px] text-slate-400 font-bold uppercase mb-2">Community Outreach</p>
                    <p className="text-sm font-serif text-slate-800 group-hover:text-indigo-900 transition-colors leading-snug">Educational Extension: Barangay Imbang Grande Portfolio</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* FOOTER DISCLAIMER */}
          <div className="mt-32 pt-10 border-t border-slate-200 text-center">
            <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.5em]">
              © 2026 Passi City College Institutional Communications Division
            </p>
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          background-color: #FAF9F6;
        }
      `}</style>
    </>
  );
}