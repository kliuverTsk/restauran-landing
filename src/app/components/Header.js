"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { playfair } from "../../ui/fonts";
import { inter } from "../../ui/fonts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`bg-black text-white sticky top-0 z-50 w-full shadow-md px-6 py-4 flex justify-between items-center ${inter.className}`}
    >
      <a href="#/" className="hover:text-red-500 transition">
        <h1 className={`text-2xl font-bold ${playfair.className}`}>
          Bella massa
        </h1>
      </a>

      {!menuOpen && (
        <button
          className="md:hidden text-red-500 z-50"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <Menu size={28} />
        </button>
      )}

      <nav className="hidden md:flex gap-6 text-base font-medium">
        <a href="#/" className="hover:text-red-500 transition">Inicio</a>
        <a href="#popular-platos" className="hover:text-red-500 transition">Menú</a>
        <a href="#equipe" className="hover:text-red-500 transition">Equipe</a>
        <a href="#contacto" className="hover:text-red-500 transition">Contato</a>
        <a href="#localizacion" className="hover:text-red-500 transition">Onde estamos?</a>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-xl font-medium md:hidden z-40">
          {/* BOTÓN CERRAR */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white hover:text-red-500"
            aria-label="Cerrar menú"
          >
            <X size={32} />
          </button>

          <a href="#/" onClick={closeMenu} className="hover:text-red-500">Inicio</a>
          <a href="#popular-platos" onClick={closeMenu} className="hover:text-red-500">Menú</a>
          <a href="#equipe" onClick={closeMenu} className="hover:text-red-500">Equipe</a>
          <a href="#contacto" onClick={closeMenu} className="hover:text-red-500">Contato</a>
          <a href="#localizacion" onClick={closeMenu} className="hover:text-red-500">Onde estamos?</a>
        </div>
      )}
    </header>
  );
}
