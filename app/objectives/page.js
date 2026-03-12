"use client";
import Navbar from '../Navbar';

export default function Objectives() {
  const objectives = [
    "Provide relevant and quality instruction in all curricular programs.",
    "Enhance faculty competence through advanced studies and training.",
    "Strengthen research culture and extension services.",
    "Upgrade physical facilities and technological equipment."
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-black text-slate-900 mb-12 text-center">Our <span className="text-blue-600">Objectives</span></h1>
          <div className="grid gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl flex items-start gap-6 shadow-sm border-l-8 border-blue-600">
                <span className="text-4xl font-black text-slate-200">0{i+1}</span>
                <p className="text-lg text-slate-700 font-medium">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}