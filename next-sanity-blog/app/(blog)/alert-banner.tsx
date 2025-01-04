"use client";
import Link from "next/link";
import { FaCat } from "react-icons/fa";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function AlertBanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-white/95 text-black backdrop-blur px-4">
      <div className="flex items-center justify-between h-12">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 py-2">
          <FaCat className="text-blue-500" size={24} />
          <span className="text-lg font-semibold">KITTEN BLOGS</span>
        </div>

        {/* Burger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          <Link href="/login" className="hover:text-blue-500">Login</Link>
        </nav>
      </div>

      {/* Navigation Links (Mobile) */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center space-y-4 text-sm font-medium lg:hidden mt-2 bg-white shadow-md p-4 rounded-md">
          <Link href="/" className="hover:text-blue-500" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-500" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-500" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/login" className="hover:text-blue-500" onClick={toggleMenu}>
            Login
          </Link>
        </nav>
      )}
    </div>
  );
}
