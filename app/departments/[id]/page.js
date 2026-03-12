"use client";
import { useParams } from 'next/navigation';
import Navbar from '../../Navbar';
import departmentsData from '../../data/departments.json';

export default function DepartmentDetail() {
  const params = useParams();
  const id = params?.id;
  
  // Safety Guard: Force departmentsData to be treated as an array
  const departmentsArray = Array.isArray(departmentsData) ? departmentsData : [];
  
  // Only search if the ID exists and we have data
  const dept = id ? departmentsArray.find(d => d.id === id) : null;

  // Error handling if data is missing
  if (!dept) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
          <div className="text-center p-12 bg-white rounded-[3rem] shadow-xl border border-slate-100 max-w-md mx-6">
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Information Pending</h1>
            <p className="text-slate-500 mt-3 mb-8 text-sm leading-relaxed">
              We are currently updating the data for this department. Please check back soon.
            </p>
            <a href="/" className="bg-blue-600 text-white px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-200">
              Return Home
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        
        {/* HERO HEADER */}
        <header className="relative h-[60vh] flex items-end pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={dept.image} 
              className="w-full h-full object-cover scale-105" 
              alt={dept.name} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>
          
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest mb-6 inline-block shadow-lg">
              Official Program
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] italic">
              {dept.name}
            </h1>
          </div>
        </header>

        {/* CONTENT GRID */}
        <section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-3 gap-20">
          
          {/* LEFT: INFO & ACHIEVEMENTS */}
          <div className="lg:col-span-2 space-y-20">
            
            <div className="border-l-4 border-blue-600 pl-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-6">Mission & Vision</h2>
              <p className="text-3xl text-slate-800 leading-tight font-bold tracking-tight italic">
                "{dept.description}"
              </p>
            </div>

            {/* DEAN LEADERSHIP CARD */}
            <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 flex flex-col md:flex-row items-center gap-10">
              <div className="w-44 h-44 rounded-[2.5rem] overflow-hidden bg-slate-200 flex-shrink-0 shadow-2xl ring-8 ring-white">
                <img 
                  src={dept.deanImage} 
                  alt={dept.dean} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-[10px]">Academic Head</span>
                <h3 className="text-3xl font-black text-slate-900 mt-2 mb-2 tracking-tighter italic uppercase">{dept.dean}</h3>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest">
                  School Administrator, {dept.short}
                </p>
              </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-10 italic">
                Academic <span className="text-blue-600 underline decoration-4 underline-offset-8">Excellence</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {dept.achievements.map((ach, i) => (
                  <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-blue-200 transition-colors">
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mb-6">
                      <span className="text-blue-600 font-black text-xs">★</span>
                    </div>
                    <p className="text-slate-700 font-black text-sm leading-relaxed uppercase tracking-tight">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">
            <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl sticky top-32">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10">Course Offerings</h3>
              <ul className="space-y-8 mb-12">
                {dept.courses.map((course, i) => (
                  <li key={i} className="group">
                    <p className="text-xl font-black tracking-tight leading-none mb-2 group-hover:text-blue-400 transition-colors italic">
                      {course}
                    </p>
                    <span className="text-[9px] text-white/40 uppercase font-black tracking-widest">CHED Accredited • 4 Years</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6">Campus Life</h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {dept.activities.map((act, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em]">
                    {act}
                  </span>
                ))}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all">
                Inquire Admission
              </button>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}