import { X } from "lucide-react";
import logo from "@/assets/logo.png";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed inset-0 bg-bordo z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botão fechar */}
        <button onClick={onClose} className="absolute top-6 right-6 text-creme">
          <X size={34} />
        </button>

        {/* Conteúdo */}
        <div className="flex h-full flex-col items-center">
          {/* Logo */}
          <div className="mt-32">
            <img src={logo} alt="Festival de Santa Felicidade" className="w-52" />
          </div>

          {/* Links */}
          <nav className="mt-24 flex flex-col items-center gap-10">
            <a
              href="#festival"
              onClick={onClose}
              className="font-aventa text-2xl uppercase tracking-[0.2em] text-creme hover:text-dourado transition-colors"
            >
              Home
            </a>

            <a
              href="#restaurantes"
              onClick={onClose}
              className="font-aventa text-2xl uppercase tracking-[0.2em] text-creme hover:text-dourado transition-colors"
            >
              Restaurantes
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
}
