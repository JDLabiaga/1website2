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
        <main className="pt-40 pb-20 bg-slate-50 min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl text-center border-4 border-blue-600 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
            <h2 className="text-3xl font-black text-slate-900 uppercase italic leading-none mb-2">Application<br/><span className="text-blue-600">Received!</span></h2>
            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-8 text-pretty">Your digital admission slip has been generated.</p>
            
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border-2 border-dashed border-slate-200">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Reference Number</p>
              <p className="text-2xl font-mono font-black text-slate-900 tracking-wider">PCC-{refNumber}</p>
            </div>

            <button 
              onClick={() => window.location.href = '/'}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">PCC Admissions</span>
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic mt-2">
              Online <span className="text-blue-600">Enrollment.</span>
            </h1>
          </div>

          <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
            {/* Step Indicators */}
            <div className="flex justify-between mb-12 relative z-10">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${step >= num ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                    {num}
                  </div>
                </div>
              ))}
              <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-100 -z-10">
                <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }}></div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-2xl font-black text-slate-900 uppercase italic">Basic Details</h2>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Full Legal Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 outline-none font-bold transition-all" placeholder="Enter name..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Contact Number</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 outline-none font-bold transition-all" placeholder="+63 900 000 0000" />
                  </div>
                </div>
                <button onClick={nextStep} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest mt-4">Continue →</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-2xl font-black text-slate-900 uppercase italic">Department Selection</h2>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 ml-2">Choose your program</label>
                  <select className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-4 outline-none font-bold appearance-none transition-all">
                    <option>BS in Information Technology</option>
                    <option>BS in Criminology</option>
                    <option>BS in Hospitality Management</option>
                    <option>Business Administration</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="flex-1 border-2 border-slate-100 text-slate-400 py-5 rounded-2xl font-black uppercase">Back</button>
                  <button onClick={nextStep} className="flex-[2] bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest">Continue →</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h2 className="text-2xl font-black text-slate-900 uppercase italic text-center">Final Review</h2>
                <div className="p-6 bg-blue-50 rounded-3xl border-2 border-blue-100">
                  <p className="text-blue-900 text-sm font-medium text-center italic">
                    By clicking submit, you agree that all information provided is true and correct for PCC admission records.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="flex-1 border-2 border-slate-100 text-slate-400 py-5 rounded-2xl font-black uppercase">Back</button>
                  <button onClick={() => setSubmitted(true)} className="flex-[2] bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest">Confirm & Submit</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}