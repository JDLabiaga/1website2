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
  const [selectedImg, setSelectedImg] = useState(null); // Stores {event, imgUrl, index}

  useEffect(() => {
    if (categoryQuery) setFilter(categoryQuery);
  }, [categoryQuery]);

  const categories = ['All', 'Academic', 'Sports', 'Celebration', 'Community'];
  
  const filteredEvents = filter === 'All' 
    ? eventsData 
    : eventsData.filter(act => act.category === filter);

  // Logic to handle Next/Previous inside the modal
  const navigateImage = (direction) => {
    if (!selectedImg) return;
    const currentEvent = eventsData.find(e => e.id === selectedImg.eventId);
    const images = currentEvent.images;
    let newIndex = selectedImg.imgIndex + direction;

    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImg({
        eventId: selectedImg.eventId,
        title: selectedImg.title,
        description: selectedImg.description,
        category: selectedImg.category,
        imgUrl: images[newIndex],
        imgIndex: newIndex
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      
      {/* HEADER & BACK BUTTON */}
      <div className="mb-12">
        <Link href="/events" className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-8 hover:-translate-x-2 transition-transform">
          <span className="text-lg">←</span> Back to Events
        </Link>
        <h1 className="text-7xl font-black text-slate-900 tracking-tighter uppercase italic">
          Campus <span className="text-blue-600">Life.</span>
        </h1>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
              filter === cat ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* PHOTO GRID (Shows every image from every event) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="group relative bg-slate-100 rounded-[2.5rem] overflow-hidden aspect-[4/5] cursor-zoom-in shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img src={imgUrl} alt={event.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-3">{event.category}</span>
                <h3 className="text-2xl font-black text-white uppercase italic leading-none">{event.title}</h3>
              </div>
            </div>
          ))
        )}
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedImg(null)}>
          <div className="max-w-6xl w-full bg-white rounded-[3rem] overflow-hidden grid md:grid-cols-3 relative animate-in fade-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            
            {/* Image Section */}
            <div className="md:col-span-2 h-[50vh] md:h-[80vh] relative bg-black">
              <img src={selectedImg.imgUrl} className="w-full h-full object-contain" alt={selectedImg.title} />
              
              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={() => navigateImage(-1)} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all font-black">←</button>
                <button onClick={() => navigateImage(1)} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all font-black">→</button>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-12 flex flex-col justify-center">
              <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-4">{selectedImg.category}</span>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic mb-6 leading-none">{selectedImg.title}</h2>
              <p className="text-slate-500 leading-relaxed font-medium mb-10">{selectedImg.description}</p>
              
              <button onClick={() => setSelectedImg(null)} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors">
                Back to Gallery
              </button>
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
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <Suspense fallback={<div className="text-center pt-20 font-black text-slate-400">Loading...</div>}>
          <GalleryContent />
        </Suspense>
      </main>
    </>
  );
}