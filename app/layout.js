import "./globals.css";
import Navbar from "./Navbar"; // Import your Navbar component

export const metadata = {
  title: "Passi City College",
  description: "Official Website of Passi City College",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar /> {/* This puts the menu at the top of every page */}
        {children}
      </body>
    </html>
  );
}