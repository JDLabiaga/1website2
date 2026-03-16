"use client";
import { useState } from 'react';
import Navbar from '../Navbar';

export default function EnrollmentPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [refNumber] = useState(Math.random().toString(36).toUpperCase().substring(2, 10));

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-40 pb-20 bg-[#FAF9F6] min-h-screen flex items-center justify-center px-6">
          <div className="max-w-xl w-full bg-white p-12 border border-slate-200 shadow-2xl text-center relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-900"></div>
            <h2 className="text-4xl font-serif italic text-slate-900 mb-4">Submission Verified</h2>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-12">
              Official Admission Registry Record Generated
            </p>
            
            <div className="bg-slate-50 border border-slate-200 p-8 mb-10">
              <p className="text-[9px] font-black uppercase text-indigo-600 mb-2 tracking-widest">Digital Docket ID</p>
              <p className="text-3xl font-mono text-slate-900">REG-PCC-{refNumber}</p>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-12 italic">
              Please preserve this reference number. A formal notification will be dispatched to your registered contact details following administrative review.
            </p>

            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-indigo-900 text-white py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-slate-800 transition-all"
            >
              Return to Institutional Index
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-48 pb-20 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-4xl mx-auto px-8">
          
          <div className="mb-16 border-l-4 border-indigo-900 pl-8">
            <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px]">Office of the Registrar</span>
            <h1 className="text-5xl font-serif text-slate-900 mt-4">
              Academic <span className="italic">Registration</span>
            </h1>
            <p className="text-slate-400 text-sm mt-2 font-light">AY 2026-2027 Student Enrollment Portal</p>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
            {/* Professional Progress Bar */}
            <div className="flex border-b border-slate-100">
              {[1, 2, 3].map((num) => (
                <div key={num} className={`flex-1 py-4 text-center text-[10px] font-bold uppercase tracking-widest transition-all ${step === num ? 'bg-indigo-950 text-white' : 'text-slate-300'}`}>
                  Phase 0{num} {num === 1 ? '— Identification' : num === 2 ? '— Placement' : '— Declaration'}
                </div>
              ))}
            </div>

            <div className="p-10 md:p-16">
              {step === 1 && (
                <div className="space-y-10 animate-in fade-in duration-700">
                  <h2 className="text-2xl font-serif italic text-slate-800">Section I: Personal Identification</h2>
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Legal Surname & Given Names</label>
                      <input type="text" className="w-full border-b-2 border-slate-100 focus:border-indigo-900 py-3 outline-none font-serif text-lg transition-all bg-transparent" placeholder="Ex: Labiaga, John Dave" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Primary Contact Protocol</label>
                      <input type="text" className="w-full border-b-2 border-slate-100 focus:border-indigo-900 py-3 outline-none font-serif text-lg transition-all bg-transparent" placeholder="+63 000 000 0000" />
                    </div>
                  </div>
                  <div className="pt-10 flex justify-end">
                    <button onClick={nextStep} className="bg-indigo-900 text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all">
                      Proceed to Placement →
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10 animate-in fade-in duration-700">
                  <h2 className="text-2xl font-serif italic text-slate-800">Section II: Program Selection</h2>
                  <div className="space-y-3">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Designated Academic Division</label>
                    <select className="w-full border-b-2 border-slate-100 focus:border-indigo-900 py-4 outline-none font-serif text-lg bg-transparent appearance-none">
                      <option>Division of Computing & Information Systems</option>
                      <option>Department of Criminological Research</option>
                      <option>Institute of Hospitality & Global Tourism</option>
                      <option>Division of Corporate & Fiscal Management</option>
                      <option>School of Pedagogy & Teacher Education</option>
                    </select>
                  </div>
                  <div className="pt-10 flex gap-6 justify-end">
                    <button onClick={prevStep} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-900">Previous</button>
                    <button onClick={nextStep} className="bg-indigo-900 text-white px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all">
                      Review Declaration →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10 animate-in fade-in duration-700">
                  <h2 className="text-2xl font-serif italic text-slate-800 text-center">Section III: Institutional Declaration</h2>
                  <div className="p-10 bg-slate-50 border-l-4 border-indigo-900">
                    <p className="text-slate-600 text-sm font-serif leading-relaxed italic">
                      "I hereby certify that the information provided herein is an accurate representation of my personal and academic records. I acknowledge the institutional policies of Passi City College and agree to adhere to the administrative protocols governing the admission process."
                    </p>
                  </div>
                  <div className="pt-10 flex gap-8 justify-center items-center">
                    <button onClick={prevStep} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-indigo-900">Amend Details</button>
                    <button 
                      onClick={() => setSubmitted(true)} 
                      className="bg-slate-900 text-white px-16 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-indigo-900 transition-all shadow-xl"
                    >
                      Formalize Submission
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <p className="text-center mt-12 text-[9px] text-slate-400 font-bold uppercase tracking-[0.4em]">
            Official Registrar Document — Passi City College
          </p>
        </div>
      </main>
    </>
  );
}