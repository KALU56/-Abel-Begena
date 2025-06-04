'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Training', href: '/training' },
  { name: 'Instruments', href: '/instruments' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 text-white shadow">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/habesha-border1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      {/* Header Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Image src="/Logo.png" alt="Logo" width={40} height={40} />
            <span className="font-bold text-xl">Abel Begena</span>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 text-sm font-medium`}
        >
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-yellow-300">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
