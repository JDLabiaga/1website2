"use client";
import Navbar from './Navbar';
import departments from './data/departments.json';
import newsData from './data/news.json';

export default function Home() {
  const latestNews = newsData.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white selection:bg-blue-600 selection:text-white">
        
        {/* HERO SECTION */}
        <section className="py-32 bg-slate-900 text-center px-6 relative overflow-hidden">
          {/* Subtle Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-blue-400 font-black uppercase tracking-[0.5em] text-[10px] block mb-6">
              Established 2003 • Passi City, Iloilo
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
              Passi City <span className="text-blue-500 italic">College</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
              Transforming passion into profession. Join the region's fastest-growing academic community today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/20 hover:scale-105 transition-transform">
                View Programs
              </button>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                Student Portal
              </button>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="relative z-30 -mt-12 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Students', val: '4,000+' },
              { label: 'Pass Rate', val: '92%' },
              { label: 'Faculty', val: '150+' },
              { label: 'Awards', val: '45' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-xl text-center border border-slate-50">
                <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-20 flex flex-col md:flex-row items-center gap-16">
              <img 
                src="/images/janice.jpg" 
                alt="President" 
                className="w-64 h-80 object-cover rounded-[2.5rem] shadow-2xl border-8 border-white" 
              />
              <div className="flex-1 text-center md:text-left">
                <span className="text-blue-600 font-black uppercase text-[10px] tracking-widest">Presidential Message</span>
                <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6 tracking-tight uppercase italic">
                  "A Legacy of <span className="text-blue-600">Innovation</span> and Service."
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Under the leadership of Dr. Janice Jennifer P. Palmares, PCC stands as a beacon of excellence in Western Visayas.
                </p>
                <p className="font-black text-slate-900 uppercase text-sm tracking-tighter">Dr. Janice Jennifer P. Palmares</p>
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">College President</p>
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS */}
        <section id="departments" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-16">
              Our <span className="text-blue-600">Academies.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {departments && departments.slice(0, 3).map((dept) => (
                <div key={dept.id} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-900">
                  <img src={dept.image} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition duration-700" alt={dept.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 p-8 w-full">
                    <p className="text-blue-400 font-black text-[10px] uppercase mb-2">{dept.short}</p>
                    <h3 className="text-xl font-black text-white uppercase mb-4">{dept.name}</h3>
                    <button className="bg-white/10 backdrop-blur-md text-white w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/20">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GAZETTE */}
        <section className="bg-slate-900 py-32 px-6 rounded-t-[4rem]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic mb-16">
              The <span className="text-blue-500">Gazette</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-12">
              {latestNews.map((item) => (
                <div key={item.id} className="group">
                  <div className="aspect-video rounded-3xl overflow-hidden mb-6">
                    <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={item.title} />
                  </div>
                  <h4 className="text-xl font-black text-white uppercase group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-900 pt-20 pb-10 px-6 text-white border-t border-white/5 text-center md:text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="text-2xl font-black italic">PC<span className="text-blue-600">C</span>.</h2>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              © 2026 Crafted with Passion by Dave Labiaga
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}