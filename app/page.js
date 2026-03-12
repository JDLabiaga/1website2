import Navbar from './Navbar';
import departments from './data/departments.json';
import newsData from './data/news.json'; // Importing the new data we created

export default function Home() {
  // Get the 3 most recent news items for the home feed
  const latestNews = newsData.slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        
        {/* HERO SECTION - Refined for 2026 */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="/images/history3.png" 
              className="w-full h-full object-cover"
              alt="Campus Background"
            />
          </div>
          <div className="relative z-10 text-center px-6 max-w-5xl">
            <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-4 block">
              Welcome to the Home of Legends
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Passi City <span className="text-blue-500">College</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium mb-10">
              A center of academic excellence for sustainable development and societal transformation. 
              Empowering the next generation of global leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-500/20">
                Explore Programs
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all">
                Student Portal
              </button>
            </div>
          </div>
        </section>

        {/* LEADERSHIP HIGHLIGHT - Dr. Palmares */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-12">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] bg-blue-100 flex-shrink-0 overflow-hidden">
                <img src="/images/janice.jpg" alt="President" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">Office of the President</span>
                <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4">Leadership & Excellence</h2>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "Congratulations to Dr. Janice Jennifer P. Palmares on her election as President of ALCOR VI. 
                  Under her leadership, Passi City College continues to strengthen community ties and regional academic standards."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-blue-600"></div>
                  <span className="font-bold text-slate-900 uppercase text-sm tracking-widest">Dr. Janice Jennifer P. Palmares</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPARTMENTS GRID */}
        <section id="departments" className="max-w-7xl mx-auto py-24 px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">
                Academic <span className="text-blue-600">Colleges.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-lg">Specialized training for a rapidly changing world.</p>
            </div>
            <a href="/departments" className="text-blue-600 font-black uppercase tracking-widest text-xs border-b-2 border-blue-600 pb-1">View All Programs</a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {departments && departments.slice(0, 3).map((dept) => (
              <div key={dept.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="h-56 overflow-hidden">
                  <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-10">
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">{dept.short}</span>
                  <h3 className="text-xl font-black text-slate-900 mt-2 mb-4">{dept.name}</h3>
                  <button className="text-slate-400 font-black uppercase tracking-widest text-[10px] group-hover:text-blue-600 transition-colors">Learn More +</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LATEST NEWS FEED - DYNAMIC */}
        <section className="bg-slate-900 py-24 px-6 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-black tracking-tighter uppercase">The <span className="text-blue-500">Gazette</span> Feed</h2>
              <a href="/news" className="bg-white/10 hover:bg-white text-white hover:text-slate-900 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all">All News</a>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {latestNews.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="aspect-video rounded-3xl overflow-hidden mb-6">
                    <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-xl font-bold mt-2 leading-tight group-hover:text-blue-400 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-sm mt-4 line-clamp-2">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tighter">Passi City <span className="text-blue-600">College.</span></h3>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                Official institution of higher learning in the City of Passi, Iloilo. Dedicated to producing globally competent graduates.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors cursor-pointer">TW</div>
              </div>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-slate-400">Campus</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-600">
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Academic Calendar</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">College Week 2026</li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors">Scholarship Hub</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-xs mb-6 text-slate-400">Reach Us</h4>
              <p className="text-sm text-slate-500 leading-loose">
                F. Palmares Sr. St., Passi City, Iloilo<br/>
                (033) 311 5000<br/>
                info@passicitycollege.edu.ph
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
               © 2026 Passi City College • Design & Dev by John Dave Labiaga
             </p>
          </div>
        </footer>
      </main>
    </>
  );
}