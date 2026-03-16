"use client";
import Navbar from '../Navbar';

export default function Objectives() {
  const objectives = [
    {
      title: "Holistic Development",
      text: "Equip students with adequate and relevant knowledge and skills through technology-oriented education, quality instruction, research, and community extension.",
      roman: "I"
    },
    {
      title: "Cultural Heritage",
      text: "Respect human dignity, preserve local and national ideals, and safeguard cultural heritage.",
      roman: "II"
    },
    {
      title: "Community Service",
      text: "Promote love and service to the community and contribute to the acceleration of the country's economic growth and development.",
      roman: "III"
    },
    {
      title: "Spiritual Maturity",
      text: "Bring students closer to God and mold them to lead quality lives in a democratic, just, peaceful, environment-friendly, and God-loving society.",
      roman: "IV"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen">
        <div className="max-w-6xl mx-auto px-8 relative">
          
          {/* FORMAL HEADER */}
          <div className="text-center mb-32">
            <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">
              Strategic Framework
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-slate-900 tracking-tight mb-8">
              Institutional <span className="italic">Objectives</span>
            </h1>
            <div className="h-px w-24 bg-slate-300 mx-auto mb-8"></div>
            <p className="text-slate-500 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
              Passi City College commits itself to these fundamental pillars of academic and moral excellence.
            </p>
          </div>

          {/* STRUCTURED CHARTER GRID */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {objectives.map((obj, i) => (
              <div 
                key={i} 
                className="group relative flex gap-8 items-start"
              >
                {/* ROMAN NUMERAL INDICATOR */}
                <div className="flex-shrink-0">
                  <span className="text-4xl font-serif italic text-indigo-900/20 group-hover:text-indigo-900 transition-colors duration-700">
                    {obj.roman}
                  </span>
                </div>

                <div className="pt-2">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                    {obj.title}
                    <span className="h-[1px] w-8 bg-indigo-100 group-hover:w-16 transition-all duration-700"></span>
                  </h3>
                  
                  <p className="text-slate-600 font-serif font-light leading-relaxed text-lg">
                    {obj.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FORMAL ACTION AREA */}
          <div className="mt-40 pt-20 border-t border-slate-200 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] mb-12">
              Official Registry of Standards
            </p>
            <button className="px-16 py-5 border border-indigo-950 text-indigo-950 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-indigo-950 hover:text-white transition-all duration-500">
              Access Institutional Handbook
            </button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        body {
          background-color: #FAF9F6;
        }
      `}</style>
    </>
  );
}