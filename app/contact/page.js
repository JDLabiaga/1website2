"use client";
import Navbar from '../Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px]">Passi City, Iloilo</span>
            <h1 className="text-7xl font-black text-slate-900 tracking-tighter uppercase italic mt-2">
              Contact <span className="text-blue-600">& Location.</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE: CONTACT INFO */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 uppercase italic mb-8">Connect with us</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-100">
                      📍
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Our Campus</p>
                      <p className="text-slate-900 font-bold leading-relaxed">
                        Passi City College<br/>
                        Brgy. Bacuranan, Passi City,<br/>
                        Iloilo, Philippines
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-100">
                      📞
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Phone Number</p>
                      <p className="text-slate-900 font-bold">(033) 311 - 5236</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-100">
                      ✉️
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Email Support</p>
                      <p className="text-slate-900 font-bold">registrar@passicitycollege.edu.ph</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PCC VIBE BOX */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
                <p className="text-blue-400 font-black uppercase tracking-widest text-[10px] mb-4">Official Facebook</p>
                <p className="text-sm font-bold leading-relaxed mb-4">
                  Follow the official Passi City College page for the latest announcements on enrollment and school activities.
                </p>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* RIGHT SIDE: CORRECT PASSI CITY MAP */}
            <div className="h-[500px] lg:h-full min-h-[500px] bg-slate-200 rounded-[3rem] overflow-hidden relative border border-slate-100 shadow-2xl group">
              {/* Updated Iframe for Passi City College */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4800778731115!2d122.6517616!3d11.1073145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af907498c8973b%3A0x6b1897304122d2f7!2sPassi%20City%20College!5e0!3m2!1sen!2sph!4v1709600000000!5m2!1sen!2sph" 
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl pointer-events-none transition-all">
                 <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Campus Landmark</p>
                 <p className="text-slate-900 font-bold text-xs uppercase">Located in the quiet area of Brgy. Bacuranan, perfect for focused learning.</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}