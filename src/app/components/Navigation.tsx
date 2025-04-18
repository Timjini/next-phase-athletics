// components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gradient-to-t from-[#09131D] to-[#00215f] text-white px-6 md:px-24 py-4 flex items-center justify-between relative z-50 glassMorphicNAvigation">
      {/* App name */}
      <div className="text-xl font-bold"><Link href="/" className="hover:text-gray-300 transition">NextPhase</Link></div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="hover:text-gray-300 transition">Camp</Link>
        <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
        <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
      </div>

      {/* Burger icon */}
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-8 text-2xl z-40">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
