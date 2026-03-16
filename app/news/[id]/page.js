"use client";
import { useParams } from 'next/navigation';
import Navbar from '../../Navbar';
import newsData from '../../data/news.json';
import Link from 'next/link';

export default function NewsDetail() {
  const params = useParams();
  const id = params?.id;
  
  const newsArray = Array.isArray(newsData) ? newsData : [];
  const article = id ? newsArray.find(n => n.id === id) : null;

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
          <div className="text-center">
            <h1 className="text-xl font-serif italic text-slate-900">Document Not Found</h1>
            <Link href="/news" className="mt-8 inline-block text-indigo-900 font-bold uppercase text-[10px] tracking-[0.3em] border-b border-indigo-900 pb-2">
              Return to Gazette Index
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF9F6] pb-32">
        
        {/* EDITORIAL HEADER */}
        <header className="pt-48 pb-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/news" className="text-indigo-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-12 inline-block hover:text-indigo-950 transition-colors">
              [ Back to Editorial Index ]
            </Link>
            
            <div className="flex items-center justify-center gap-6 mb-10">
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                Registry: {article.date}
              </span>
              <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
              <span className="text-indigo-900 text-[10px] font-bold uppercase tracking-[0.3em]">
                Category: {article.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-light text-slate-900 tracking-tight leading-[1.1] mb-12">
              {article.title}
            </h1>
            
            <div className="h-px w-32 bg-indigo-900 mx-auto opacity-20"></div>
          </div>
        </header>

        {/* MAIN ARTICLE BODY */}
        <article className="max-w-5xl mx-auto px-8">
          
          {/* Formal Image Layout */}
          <div className="bg-white p-3 border border-slate-200 shadow-sm mb-20">
            <div className="relative aspect-[21/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src={article.image} 
                className="w-full h-full object-cover" 
                alt={article.title} 
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* The Hook/Excerpt */}
            <p className="text-2xl md:text-3xl text-slate-700 font-serif italic leading-snug mb-16 text-center border-y border-slate-100 py-10">
              {article.excerpt}
            </p>
            
            {/* The Main Story Content */}
            <div className="text-lg text-slate-800 leading-[1.9] space-y-10 font-serif font-light text-justify">
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-light first-letter:text-indigo-900 first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                {article.content}
              </p>
              
              <p>
                This development continues to showcase the evolving landscape of Passi City College 
                as it transitions into a hub for excellence in various fields—from technology and business 
                to public safety and education.
              </p>
            </div>

            {/* INSTITUTIONAL SIGNATURE */}
            <footer className="mt-32 pt-16 border-t border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-indigo-950 flex items-center justify-center text-white font-serif italic text-2xl">
                    P
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.3em]">PCC Gazette Editorial Board</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Official Institutional Publication</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button className="border border-slate-200 text-slate-900 px-8 py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                    Copy Citation
                  </button>
                  <button className="bg-indigo-900 text-white px-10 py-4 text-[9px] font-bold uppercase tracking-widest hover:bg-indigo-800 transition-all shadow-xl">
                    Dispatch Article
                  </button>
                </div>
              </div>
              <p className="text-center mt-20 text-[8px] text-slate-300 font-bold uppercase tracking-[0.5em]">Passi City College Archives — Document ID: {article.id}-026</p>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}