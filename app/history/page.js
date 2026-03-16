"use client";
import Navbar from '../Navbar';

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-48 pb-20 bg-[#FAF9F6] min-h-screen text-slate-900 selection:bg-indigo-100 font-serif">
        
        {/* FORMAL HERO HEADER */}
        <header className="max-w-6xl mx-auto px-8 mb-32">
          <div className="relative border border-slate-200 bg-white p-2">
            <div className="relative overflow-hidden min-h-[600px] flex items-center justify-center">
              <img 
                src="/images/history3.png" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" 
                alt="PCC Historical Perspective"
              />
              <div className="relative z-10 text-center px-6 max-w-4xl">
                <span className="text-indigo-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block">
                  Institutional Archives
                </span>
                <h1 className="text-6xl md:text-8xl font-light text-slate-900 mb-10 tracking-tight leading-none">
                  The <span className="italic font-serif">Chronicles</span> of PCC
                </h1>
                <div className="h-px w-24 bg-slate-300 mx-auto mb-10"></div>
                <p className="text-xl md:text-2xl text-slate-500 font-light italic leading-relaxed">
                  A retrospective on the founding principles and evolutionary milestones of Passi City College.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-8 space-y-40">
          
          {/* CHAPTER 1: THE VISION */}
          <section className="relative">
            <div className="flex items-center gap-6 mb-12">
              <span className="text-indigo-900 font-bold text-sm tracking-widest uppercase">MCMIV — MMIV</span>
              <span className="h-px flex-grow bg-slate-200"></span>
            </div>
            
            <div className="grid gap-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-medium text-slate-900 leading-tight">I. The Intellectual Inception</h2>
                <div className="prose prose-lg text-slate-600 space-y-8 max-w-none text-justify font-light leading-relaxed first-letter:text-7xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-indigo-900">
                  <p>
                    In the final quarter of 2004, a strategic vision was articulated regarding the socioeconomic upliftment of Passi City through academic intervention. Recognizing the city's geographical centrality within the Panay region, Mayor <strong>Elyzer C. Chavez</strong> and the Sangguniang Panglungsod identified the critical necessity for a localized institution of higher learning.
                  </p>
                  <p>
                    Under the guidance of SP Member <strong>Basilio Ligasan Jr.</strong> and the academic consultation of <strong>Helmar E. Aguilar, Ed. D.</strong> and <strong>Rodolfo L. Leonor, Ph. D.</strong>, the structural framework for what would become Passi City College was formalized—establishing a beacon for regional intellectual development.
                  </p>
                </div>
              </div>
              <div className="border border-slate-200 p-2 bg-white">
                <img src="/images/history1.jpg" className="w-full h-[450px] object-cover grayscale" alt="Administrative Founding" />
              </div>
            </div>
          </section>

          {/* CHAPTER 2: LEGISLATIVE FOUNDATION */}
          <section className="border-y border-slate-200 py-24 px-4 md:px-0">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[9px] mb-6 block">Legal Mandate</span>
              <h3 className="text-3xl font-medium mb-10">Legislative Establishment</h3>
              <p className="text-lg text-slate-500 italic leading-relaxed mb-12">
                "On February 3, 2005, through Special Ordinance No. 2005-02, the Passi City Local Government officially established the college, a move later ratified by the Sangguniang Panlalawigan on March 28, 2005."
              </p>
              <div className="flex justify-center gap-12">
                <div className="text-center">
                  <p className="text-2xl font-light text-indigo-900">Feb 2005</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ordinance Date</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light text-indigo-900">Mar 2005</p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Ratification</p>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 3: OPERATIONAL INCEPTION */}
          <section>
            <div className="flex items-center gap-6 mb-12">
              <span className="text-indigo-900 font-bold text-sm tracking-widest uppercase">Phase III: Operational Inception</span>
              <span className="h-px flex-grow bg-slate-200"></span>
            </div>
            <h2 className="text-4xl font-medium text-slate-900 mb-10 leading-tight">The Pioneer Registry</h2>
            <div className="space-y-8 text-slate-600 text-lg font-light leading-relaxed text-justify">
              <p>
                Academic operations commenced for the 2005-2006 cycle, introducing specialized curricula in <strong>Teacher Education</strong> and <strong>Business Administration</strong>. 
              </p>
              <p>
                On <strong>June 20, 2005</strong>, sixty-eight (68) pioneer students were matriculated at the temporary Passi Trade School Campus. This initial phase was supported by the collaborative stewardship of Director Buen Mondejar and Mr. Raul P. Palomo, providing the necessary spatial resources for the institution's formative term.
              </p>
            </div>
          </section>

          {/* CHAPTER 4: EXPANSION */}
          <section className="pb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8 text-slate-600 font-light leading-relaxed text-justify">
                  <h2 className="text-4xl font-medium text-slate-900 font-serif leading-tight">IIII. Institutional Expansion</h2>
                  <p>
                    The 2006 academic year marked a period of rapid demographic expansion with the introduction of <strong>Criminal Justice Education</strong>. Student enrollment grew to 230, necessitating a transition to a permanent facility.
                  </p>
                  <p>
                    By late 2006, the college established its permanent headquarters in <strong>Brgy. Bacuranan</strong>, facilitating the subsequent introduction of specialized programs in <strong>Information Technology</strong> and <strong>Hospitality Management</strong>.
                  </p>
               </div>
               <div className="border border-slate-200 p-2 bg-white -rotate-1 shadow-xl">
                <img src="/images/history3.png" className="w-full h-full object-cover grayscale" alt="Campus Evolution" />
              </div>
            </div>
          </section>

          {/* FINAL SIGNATURE */}
          <section className="text-center py-32 border-t border-slate-100">
             <button onClick={() => window.location.href = '/'} className="px-16 py-5 border border-indigo-900 text-indigo-900 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-indigo-900 hover:text-white transition-all">
                Return to Institutional Index
             </button>
             <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.6em] mt-12 italic">Established MMV — Proving Excellence Since Day One</p>
          </section>

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