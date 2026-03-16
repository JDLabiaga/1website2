"use client";
import { useParams } from 'next/navigation';
import Navbar from '../../Navbar';
import departmentsData from '../../data/departments.json';

export default function DepartmentDetail() {
  const params = useParams();
  const id = params?.id;
  const departmentsArray = Array.isArray(departmentsData) ? departmentsData : [];
  const dept = id ? departmentsArray.find(d => d.id === id) : null;

  if (!dept) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
          <div className="text-center p-10 bg-white rounded-2xl shadow-sm border border-slate-200 max-w-sm">
            <h1 className="text-xl font-bold text-slate-900 uppercase">Coming Soon</h1>
            <p className="text-slate-500 mt-2 mb-6 text-sm">Content is currently being prepared.</p>
            <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest">Back Home</a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50">
        
        {/* SIMPLE HERO */}
        <header className="bg-slate-900 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
              {dept.name}
            </h1>
            <p className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs">
              {dept.short} Department
            </p>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 -mt-10">
          <div className="grid gap-8">
            
            {/* 1. DESCRIPTION BOX */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
              <h2 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] mb-4">Overview</h2>
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                {dept.description}
              </p>
            </div>

            {/* 2. SIMPLE DEAN INFO */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8">
              <img src={dept.deanImage} className="w-32 h-32 rounded-full object-cover border-4 border-slate-100" alt={dept.dean} />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900">{dept.dean}</h3>
                <p className="text-slate-500 font-medium italic">Department Head</p>
              </div>
            </div>

            {/* 3. COURSES GRID (Simple 2-Column) */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Degree Programs</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dept.courses.map((course, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="font-bold text-slate-800">{course}</p>
                    <p className="text-[10px] text-slate-400 uppercase mt-1">4-Year Undergraduate</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. HIGHLIGHTS (Simple Card Grid) */}
            <div className="grid md:grid-cols-2 gap-8">
              {dept.highlights?.map((item, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                  <div className="p-8">
                    <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
          
          <footer className="py-20 text-center">
             <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg">
                Download Enrollment Form
             </button>
          </footer>
        </div>
      </main>
    </>
  );
}