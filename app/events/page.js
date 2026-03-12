"use client";
import { useState } from 'react';
import Link from 'next/link'; // Added Link
import Navbar from '../Navbar';
import eventsData from '../data/events.json';

export default function EventsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academic', 'Sports', 'Celebration', 'Community'];

  const filteredEvents = filter === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === filter);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px]">Campus Life</span>
              <h1 className="text-6xl font-black text-slate-900 tracking-tighter mt-2">
                Activities & <span className="text-blue-600">Events.</span>
              </h1>
            </div>

            {/* INTERACTIVE FILTER TABS */}
            <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto whitespace-nowrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    filter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* EVENTS MASONRY GRID */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredEvents.map((event) => (
              <div 
                key={event.id} 
                className="break-inside-avoid group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={event.images && event.images[0] ? event.images[0] : '/images/placeholder.jpg'} 
                      alt={event.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full shadow-sm">
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em]">{event.category}</span>
                  </div>
                </div>

                <div className="p-10">
                  <p className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">{event.date}</p>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors uppercase italic tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {event.description}
                  </p>
                  
                  {/* FIXED BUTTON: Now links to Gallery with category filter */}
                  <Link 
                    href={`/activities?category=${event.category}`}
                    className="block w-full py-4 text-center border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                  >
                    View Photo Gallery
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="py-40 text-center">
              <p className="text-slate-300 font-black uppercase tracking-[0.5em] text-sm">No Events to show</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}