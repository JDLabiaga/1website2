"use client";
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../Navbar';
import eventsData from '../data/events.json';

export default function EventsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academic', 'Athletics', 'Tradition', 'Extension'];

  // Note: Ensure your events.json categories match these labels
  const filteredEvents = filter === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === filter);

  return (
    <>
      <Navbar />
      <main className="pt-48 pb-20 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">
          
          {/* EDITORIAL HEADER */}
          <div className="border-b border-slate-200 pb-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">
                The Institutional Record
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-light text-slate-900 leading-tight">
                Campus <span className="italic">Chronicles</span>
              </h1>
            </div>

            {/* MINIMALIST TABS */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-500 ${
                    filter === cat 
                    ? 'bg-indigo-950 text-white border-indigo-950 shadow-xl' 
                    : 'text-slate-400 border-transparent hover:border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* STRUCTURED GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group flex flex-col h-full">
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 mb-8 border border-slate-200">
                  <img 
                    src={event.images && event.images[0] ? event.images[0] : '/images/placeholder.jpg'} 
                    alt={event.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-0 right-0 p-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[8px] font-black text-indigo-900 uppercase tracking-widest border border-slate-100">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="h-px w-8 bg-indigo-200"></span>
                    <p className="text-indigo-500 font-bold text-[9px] uppercase tracking-[0.3em]">{event.date}</p>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4 leading-snug group-hover:text-indigo-900 transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                    {event.description}
                  </p>
                  
                  <Link 
                    href={`/activities?category=${event.category}`}
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-900 group-hover:gap-4 transition-all gap-2"
                  >
                    View Archival Photos <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredEvents.length === 0 && (
            <div className="py-40 text-center border-t border-dashed border-slate-200 mt-20">
              <p className="text-slate-300 font-serif italic text-xl">No archival records found for this category.</p>
            </div>
          )}

          {/* FOOTER CAPTION */}
          <div className="mt-32 pt-10 border-t border-slate-100 text-center">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.5em]">
              Official Historical Registry — Passi City College
            </p>
          </div>
        </div>
      </main>
    </>
  );
}