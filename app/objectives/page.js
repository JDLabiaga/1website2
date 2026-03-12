"use client";
import Navbar from '../Navbar';

export default function Objectives() {
  const objectives = [
    {
      title: "Holistic Development",
      text: "Equip students with adequate and relevant knowledge and skills through technology-oriented education, quality instruction, research, and community extension.",
      icon: "🚀"
    },
    {
      title: "Cultural Heritage",
      text: "Respect human dignity, preserve local and national ideals, and safeguard cultural heritage.",
      icon: "🏛️"
    },
    {
      title: "Community Service",
      text: "Promote love and service to the community and contribute to the acceleration of the country's economic growth and development.",
      icon: "🤝"
    },
    {
      title: "Spiritual Maturity",
      text: "Bring students closer to God and mold them to lead quality lives in a democratic, just, peaceful, environment-friendly, and God-loving society.",
      icon: "🙏"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-[#f8fafc] min-h-screen overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          
          {/* Decorative Background Element */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          
          <div className="text-center mb-20">
            <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] mb-4 inline-block">
              Our Commitment
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic">
              PCC <span className="text-blue-600">Objectives</span>
            </h1>
            <p className="text-slate-500 mt-4 font-medium max-w-xl mx-auto">
              To accomplish our mission, Passi City College commits itself to the following strategic pillars of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((obj, i) => (
              <div 
                key={i} 
                className="group relative bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-200/40"
              >
                {/* Number Badge */}
                <div className="absolute top-8 right-10 text-6xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 shadow-inner">
                    {obj.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
                    {obj.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {obj.text}
                  </p>
                </div>

                {/* Interactive Bottom Border */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-blue-600 rounded-full group-hover:w-1/3 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400">
                <button className="bg-white hover:bg-transparent hover:text-white transition-all text-slate-900 font-black uppercase text-[10px] tracking-widest px-12 py-5 rounded-full">
                    Download Student Handbook
                </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}