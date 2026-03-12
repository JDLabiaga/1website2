"use client";

import Navbar from '../Navbar';

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-20 bg-white min-h-screen overflow-hidden selection:bg-blue-100">
        
        {/* ANIMATED BACKGROUND BLOBS */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        {/* LARGE HERO HEADER */}
        <header className="max-w-6xl mx-auto px-6 mb-24">
          <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 min-h-[500px] flex items-center justify-center shadow-2xl">
            <img 
              src="/images/history3.png" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" 
              alt="PCC Landscape"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900"></div>
            
            <div className="relative z-10 text-center px-6">
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic">
                Our <span className="text-blue-500">History</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto leading-relaxed border-t border-white/20 pt-8">
                The evolution of Passi City College: From a brave visionary concept to a premier institution of academic excellence.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 space-y-32">
          
          {/* CHAPTER 1: THE CONCEPTION */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-8 text-blue-600">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="font-black tracking-widest uppercase">Chapter I: The Vision (2004)</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Conceived at the Heart of Panay</h2>
            <div className="grid md:grid-cols-1 gap-10">
              <div className="prose prose-lg text-slate-600 space-y-6 max-w-none text-justify leading-loose">
                <p>
                  Convinced of the Passi City’s strategic location, which sits at the very heart of Panay, and fervently desirous to uplift the city’s economic status through its youth, a monumental vision was born on November 5, 2004. Passi City Mayor <strong>Elyzer C. Chavez</strong> and his Sangguniang Panglungsod (SP) Members recognized the urgent need for local, high-quality tertiary education.
                </p>
                <p>
                  Chairman of the Committee on Education, SP Member <strong>Basilio Ligasan Jr.</strong>, worked alongside the wisdom and linkages of <strong>Helmar E. Aguilar, Ed. D.</strong> (President Emeritus of Aklan State University and PCC Consultant). Together with the expertise of <strong>Rodolfo L. Leonor, Ph. D.</strong>, they conceived what would be known as Passi City College—a brave step in providing quality education for a better tomorrow.
                </p>
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="/images/history1.jpg" className="w-full h-[400px] object-cover" alt="Founding context" />
              </div>
            </div>
          </section>

          {/* CHAPTER 2: FEASIBILITY & FOUNDATION */}
          <section className="bg-slate-50 p-12 md:p-16 rounded-[3rem] border border-slate-100 shadow-inner">
             <div className="flex items-center gap-4 mb-8 text-blue-600">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="font-black tracking-widest uppercase text-sm">Chapter II: The Feasibility Study</span>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 text-justify">
              A specialized committee was organized to conduct a thorough feasibility study for the creation of Passi City College. This rigorous academic and administrative process was chaired by <strong>Helmar E. Aguilar, Ed. D.</strong> and co-chaired by <strong>Rodolfo L. Leonor, Ph.D.</strong>. The team was bolstered by the contributions of <strong>Dr. Defralino Ruiz</strong> (Budget Officer, ASU) and <strong>Dr. Regina Clavel</strong> (Researcher and Statistician).
            </p>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Establishment Milestone</h3>
              <p className="text-slate-600 italic">
                "On February 3, 2005, through Special Ordinance No. 2005-02, the Passi City Local Government officially established the college, a move later ratified by the Sangguniang Panlalawigan on March 28, 2005."
              </p>
            </div>
          </section>

          {/* CHAPTER 3: THE FIRST STEPS */}
          <section>
            <div className="flex items-center gap-4 mb-8 text-blue-600">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="font-black tracking-widest uppercase">Chapter III: Operations Begin (2005)</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">The Pioneer 68</h2>
            <div className="space-y-8 text-slate-600 text-lg leading-relaxed text-justify">
              <p>
                The college officially opened its doors for Academic Year 2005-2006 with two primary curricular programs: the <strong>Teacher Education Program</strong> (BEED and BSED English/Math) and the <strong>Business Education Program</strong> (BS Commerce).
              </p>
              <p>
                Classes commenced on <strong>June 20, 2005</strong>, with 68 pioneer students at the Passi Trade School Campus. This was made possible through the generosity of Director Buen Mondejar and Mr. Raul P. Palomo, who allowed the institution to use a three-classroom building for its first year and a half of operation.
              </p>
            </div>
          </section>

          {/* CHAPTER 4: EXPANSION & NEW HOME */}
          <section className="relative pb-20">
            <div className="flex items-center gap-4 mb-8 text-blue-600">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="font-black tracking-widest uppercase text-sm">Chapter IV: Growth & Permanence</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
                  <p>
                    By 2006, the introduction of <strong>BS Criminology</strong> led to a surge in enrollment, jumping from 68 to 230 students. This growth signaled that PCC was fast becoming the preferred choice for higher education in the region.
                  </p>
                  <p>
                    The turning point came in late 2006, when the college finally moved to its permanent site in <strong>Brgy. Bacuranan</strong>. This new campus paved the way for the 2007-2008 introduction of <strong>BS Information Technology</strong> and <strong>BS Hotel and Restaurant Management</strong>.
                  </p>
               </div>
               <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-2">
                <img src="/images/history3.png" className="w-full h-full object-cover" alt="Campus Growth" />
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="text-center py-20">
            <div className="inline-block p-1 bg-blue-600 rounded-full mb-8">
               <a href="/" className="block px-12 py-4 bg-white text-slate-900 rounded-full font-black hover:bg-blue-600 hover:text-white transition-all">
                  RETURN TO HOME
               </a>
            </div>
            <p className="text-slate-400 font-medium">Continuing the legacy of excellence today.</p>
          </section>

        </div>
      </main>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </>
  );
}