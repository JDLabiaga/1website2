import "./globals.css";
import Navbar from "./Navbar";

/**
 * INSTITUTIONAL METADATA
 * Refined for Search Engine Optimization and Academic Professionalism
 */
export const metadata = {
  title: {
    default: "Passi City College | Institutional Portal",
    template: "%s | Passi City College"
  },
  description: "The official academic gateway of Passi City College. Dedicated to excellence, character formation, and technological innovation in the heart of Panay.",
  icons: {
    icon: "/favicon.ico", // Ensure your friend has a favicon in the public folder!
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-indigo-100 selection:text-indigo-900 bg-[#FAF9F6] text-slate-900 overflow-x-hidden">
        
        {/* GLOBAL NAVIGATION */}
        <Navbar /> 

        {/* PAGE CONTENT */}
        <div className="relative flex flex-col min-h-screen">
          {children}
        </div>

        {/* FOOTER ARCHIVE 
            (Optional: You can build a formal footer component later 
            to match the new history and news pages) 
        */}
      </body>
    </html>
  );
}