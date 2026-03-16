"use client";
import Navbar from './Navbar';
import departments from './data/departments.json';
import newsData from './data/news.json';

export default function Home() {
  const latestNews = newsData.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF9F6] text-[#1a1a1a] selection:bg-indigo-100">
        
        {/* HERO - INSTITUTIONAL PROLOGUE */}
        <section className="relative pt-44 pb-24 px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-serif font-light leading-tight tracking-tight mb-8">
                Cultivating <span className="italic font-medium">Intellectual</span> <br/>
                & Professional Growth.
              </h1>
              <p className="text-slate-600 text-xl font-light leading-relaxed mb-12 border-l-2 border-indigo-600 pl-6">
                Established as a cornerstone of higher learning in Passi City, our institution remains committed to the rigorous pursuit of academic merit and ethical leadership.
              </p>
              <div className="flex items-center gap-8">
                <button className="bg-indigo-900 text-white px-12 py-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-indigo-800 transition-all">
                  Academic Prospectus
                </button>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                  Registry 2026 / 2027
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS - ANNOTATED DATA */}
        <section className="bg-white py-16 px-8 border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Total Enrollment', val: '4,020' },
              { label: 'Licensure Passing', val: '92.4%' },
              { label: 'Academic Personnel', val: '154' },
              { label: 'Research Citations', val: '45+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl font-light tracking-tighter text-indigo-900 mb-1">{stat.val}</span>
                <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GOVERNANCE - PRESIDENTIAL STATEMENT */}
        <section className="py-32 px-8 bg-[#F4F4F2]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5">
              <img 
                src="/images/janice.jpg" 
                className="w-full aspect-[4/5] object-cover grayscale brightness-110 contrast-125 border-[20px] border-white shadow-sm" 
                alt="Office of the President" 
              />
            </div>
            <div className="md:col-span-7">
              <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-widest block mb-4">Office of the President</span>
              <h2 className="text-4xl font-serif italic mb-8 tracking-tight">"Integrity is the bedrock of our pedagogy."</h2>
              <div className="prose prose-slate font-light text-lg leading-relaxed text-slate-600 mb-10">
                Under the directive of Dr. Janice Jennifer P. Palmares, the college serves as a vessel for transformative social mobility, ensuring that quality instruction remains accessible to the gifted youth of Western Visayas.
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Dr. Janice Jennifer P. Palmares, PhD</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">College Administrator & President</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACADEMIC WINGS - THE LISTING */}
        <section className="py-32 bg-white px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-slate-400 mb-16 text-center">Program Directory</h2>
            <div className="grid md:grid-cols-3 gap-0 border border-slate-100">
              {departments && departments.slice(0, 3).map((dept) => (
                <div key={dept.id} className="group p-16 border border-slate-50 hover:bg-indigo-50 transition-colors">
                  <span className="text-indigo-600 font-bold text-[9px] uppercase tracking-widest mb-4 block">Unit Code: {dept.short}</span>
                  <h3 className="text-2xl font-serif mb-8 leading-snug">{dept.name}</h3>
                  <p className="text-slate-500 text-sm font-light mb-12 line-clamp-3 leading-relaxed">{dept.desc}</p>
                  <a href={`/departments/${dept.id}`} className="text-[10px] font-bold uppercase tracking-widest border-b border-indigo-900 pb-1 hover:text-indigo-600 transition-all">Review Curriculum</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHRONICLE - INSTITUTIONAL UPDATES */}
        <section className="py-32 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline mb-20 border-b border-slate-900 pb-4">
              <h2 className="text-3xl font-serif">College Chronicle</h2>
              <span className="text-[10px] font-bold uppercase tracking-widest">Archive 2026</span>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              {latestNews.map((item) => (
                <article key={item.id} className="group cursor-pointer">
                  <div className="mb-8 overflow-hidden bg-slate-100">
                    <img src={item.image} className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                  <span className="text-indigo-600 text-[9px] font-bold uppercase tracking-widest mb-3 block">{item.category}</span>
                  <h4 className="text-xl font-serif leading-tight mb-4 group-hover:underline decoration-indigo-200">
                    {item.title}
                  </h4>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER - THE ARCHIVE FOOTER */}
        <footer className="bg-white py-24 px-8 border-t border-slate-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div>
              <h2 className="text-2xl font-serif italic mb-2 tracking-tight">Passi City College</h2>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Accredited Academic Institution</p>
            </div>
            <div className="flex gap-16">
              <div className="space-y-2">
                <p className="text-slate-900 font-bold text-[10px] uppercase tracking-widest">Administration</p>
                <p className="text-slate-400 text-xs">Bacuranan, Passi City</p>
                <p className="text-slate-400 text-xs">Iloilo, Philippines</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest mb-4">Developed by</p>
                <p className="text-slate-900 font-serif italic">Passi City College</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}