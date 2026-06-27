import logo from "@/assets/logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import { MobileSidebar } from "./Sidebar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-full">
        <div className="flex items-center justify-between bg-bordo backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2 text-creme shadow-[0_10px_40px_-10px_rgba(68,62,42,0.6)]">
          <div className="flex items-center gap-24">
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-lg sm:text-xl tracking-tight"
            >
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-dourado" />
              <div className="w-25 sm:w-40">
                <img src={logo} />
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-aventa uppercase tracking-[0.18em]">
              {[
                ["Home", "#festival"],
                ["Restaurantes", "#restaurantes"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="relative py-1 transition-colors hover:text-dourado after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-dourado after:transition-all hover:after:w-full"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <button onClick={() => setIsOpen(true)} className="md:hidden text-creme">
            <Menu size={32} />
          </button>
          <a
            href="https://instagram.com/festivaldesantafelicidade"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block
    group flex items-center gap-3
    rounded-full
    bg-white/10 backdrop-blur-md
    border border-white/20
    px-5 py-2
    text-creme
    transition-all duration-300
    hover:bg-dourado hover:text-bordo
    hover:scale-105
  "
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2.38a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26Z" />
            </svg>

            <span className="font-medium tracking-wide">@festivaldesantafelicidade</span>
          </a>
        </div>
      </div>
      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
