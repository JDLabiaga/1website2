"use client";
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../Navbar';
import Link from 'next/link';
import eventsData from '../data/events.json';

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category');
  
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (categoryQuery) setFilter(categoryQuery);
  }, [categoryQuery]);

  const categories = ['All', 'Academic', 'Sports', 'Celebration', 'Community'];
  
  const filteredEvents = filter === 'All' 
    ? eventsData 
    : eventsData.filter(act => act.category === filter);

  const navigateImage = (direction) => {
    if (!selectedImg) return;
    const currentEvent = eventsData.find(e => e.id === selectedImg.eventId);
    const images = currentEvent.images;
    let newIndex = selectedImg.imgIndex + direction;

    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImg({
        ...selectedImg,
        imgUrl: images[newIndex],
        imgIndex: newIndex
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      
      {/* ARCHIVE HEADER */}
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 pb-12 border-b border-slate-200">
        <div>
          <Link href="/events" className="inline-flex items-center gap-3 text-indigo-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-10 hover:-translate-x-2 transition-all">
            <span>←</span> Return to Registry
          </Link>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-900 tracking-tight leading-none">
            Campus <span className="italic font-serif">Exhibition.</span>
          </h1>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-2">Ref: 2025-2026 Archive</p>
          <p className="text-sm font-serif italic text-indigo-900">Documenting the Student Experience</p>
        </div>
      </div>

      {/* REFINED CATEGORY NAVIGATION */}
      <div className="flex flex-wrap gap-12 mb-20 border-b border-slate-100 pb-8">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative pb-4 ${
              filter === cat 
                ? 'text-indigo-600' 
                : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            {cat}
            {filter === cat && (
              <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-indigo-600 animate-in slide-in-from-left-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* EXHIBITION GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredEvents.map((event) => 
          event.images.map((imgUrl, idx) => (
            <div 
              key={`${event.id}-${idx}`} 
              onClick={() => setSelectedImg({
                eventId: event.id,
                title: event.title,
                description: event.description,
                category: event.category,
                imgUrl: imgUrl,
                imgIndex: idx
              })}
              className="group cursor-crosshair"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white p-2 border border-slate-200 transition-all duration-700 group-hover:shadow-2xl">
                <img 
                  src={imgUrl} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
                />
              </div>
              <div className="mt-6">
                <p className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest mb-2">{event.category}</p>
                <h3 className="text-lg font-serif italic text-slate-900 group-hover:text-indigo-900 transition-colors">{event.title}</h3>
              </div>
            </div>
          ))
        )}
      </div>

      {/* EXHIBITION LIGHTBOX */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-[#FAF9F6] flex items-center justify-center p-0 md:p-12" onClick={() => setSelectedImg(null)}>
          <div className="w-full h-full max-w-[1400px] flex flex-col md:flex-row bg-white shadow-2xl relative animate-in fade-in duration-500" onClick={e => e.stopPropagation()}>
            
            {/* Visual Panel */}
            <div className="flex-1 bg-slate-50 relative group flex items-center justify-center p-8">
              <img src={selectedImg.imgUrl} className="max-w-full max-h-full object-contain shadow-2xl" alt={selectedImg.title} />
              
              <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => navigateImage(-1)} className="w-16 h-16 border border-slate-200 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-xl">←</button>
                <button onClick={() => navigateImage(1)} className="w-16 h-16 border border-slate-200 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-xl">→</button>
              </div>
            </div>

            {/* Information Panel */}
            <div className="w-full md:w-[450px] p-12 md:p-20 flex flex-col border-l border-slate-100">
              <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-12">Archive Entry</span>
              
              <h2 className="text-4xl font-serif text-slate-900 mb-8 leading-tight">{selectedImg.title}</h2>
              <div className="h-px w-12 bg-indigo-600 mb-10"></div>
              
              <p className="text-slate-500 font-serif italic leading-relaxed text-lg mb-auto">
                {selectedImg.description}
              </p>
              
              <div className="mt-20 space-y-4">
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Category: {selectedImg.category}</p>
                <button 
                  onClick={() => setSelectedImg(null)} 
                  className="w-full border border-slate-900 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-slate-900 hover:text-white transition-all"
                >
                  Close Exhibition
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-48 pb-20 bg-[#FAF9F6] min-h-screen">
        <Suspense fallback={<div className="text-center pt-20 font-serif italic text-slate-400 text-2xl">Accessing Archives...</div>}>
          <GalleryContent />
        </Suspense>
      </main>
    </>
  );
}