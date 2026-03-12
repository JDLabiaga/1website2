"use client";
import { useParams } from 'next/navigation';
import Navbar from '../../Navbar';
import newsData from '../../data/news.json';
import Link from 'next/link';

export default function NewsDetail() {
  const params = useParams();
  const id = params?.id;
  
  // Safety Check: Ensure newsData exists and find the specific article
  const newsArray = Array.isArray(newsData) ? newsData : [];
  const article = id ? newsArray.find(n => n.id === id) : null;

  // Error Handling: If the ID is wrong or still loading
  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="text-center">
            <h1 className="text-xl font-black text-slate-900 uppercase tracking-widest">Story Not Found</h1>
            <Link href="/news" className="mt-6 inline-block text-blue-600 font-bold uppercase text-[10px] border-b-2 border-blue-600 pb-1">
              Return to Gazette
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pb-24">
        
        {/* TOP NAVIGATION & TITLE AREA */}
        <header className="pt-40 pb-16 px-6 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <Link href="/news" className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-10 inline-flex items-center gap-2 group">
              <span className="group-hover:-translate-x-2 transition-transform">←</span> Back to Gazette
            </Link>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-200">
                {article.category}
              </span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                {article.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-[0.85]">
              {article.title}
            </h1>
          </div>
        </header>

        {/* MAIN ARTICLE BODY */}
        <article className="max-w-4xl mx-auto px-6 -mt-12">
          
          {/* Featured Image */}
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl mb-16 h-[40vh] md:h-[60vh] border-8 border-white">
            <img 
              src={article.image} 
              className="w-full h-full object-cover" 
              alt={article.title} 
            />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* The Hook/Excerpt */}
            <p className="text-2xl md:text-3xl text-slate-800 font-bold leading-tight italic mb-12 border-l-8 border-blue-600 pl-8 tracking-tight">
              "{article.excerpt}"
            </p>
            
            {/* The Main Story Content */}
            <div className="text-lg text-slate-600 leading-[1.8] space-y-8 font-medium">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
                {article.content}
              </p>
              
              <p>
                This development continues to showcase the evolving landscape of Passi City College 
                as it transitions into a hub for "Legends" in various fields—from technology and business 
                to public safety and education.
              </p>
            </div>

            {/* AUTHOR / SOURCE FOOTER */}
            <div className="mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-3xl bg-slate-900 flex items-center justify-center text-white font-black italic text-xl shadow-xl shadow-slate-200">
                  P
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">PCC Gazette Editorial</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Institutional Press Release</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="bg-slate-50 text-slate-900 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-colors border border-slate-100">
                  Copy Link
                </button>
                <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                  Share Story
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}