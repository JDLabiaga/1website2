"use client";
import Navbar from '../Navbar';

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black text-slate-900 mb-12">
            Vision & <span className="text-blue-600">Mission</span>
          </h1>
          
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest mb-4">Our Vision</h2>
              <p className="text-xl text-slate-600 italic">"A leading institution in academic excellence and character formation."</p>
            </div>

            <div className="bg-blue-600 p-10 rounded-[2rem] shadow-xl text-white">
              <h2 className="text-blue-200 font-bold uppercase tracking-widest mb-4">Our Mission</h2>
              <p className="text-lg">"To provide quality education that is accessible to all, fostering innovation and service."</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}