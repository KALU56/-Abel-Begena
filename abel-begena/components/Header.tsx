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
      <div className="relative z-10 flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/Logo.png" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">Abel Begena</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium text-sm">
          {navLinks.map(link => (
            <Link key={link.name} href={link.href} className="hover:text-yellow-300">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar with Gradient Background */}
      <aside
        className={`fixed top-0 right-0 w-64 h-full z-50 text-brown-900 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{
          background: 'radial-gradient(circle at center, rgb(254, 252, 244) 40%, rgb(167, 77, 8))',
        }}
      >
        <div className="flex items-center justify-between p-4 border-b border-yellow-800">
          <span className="text-lg font-bold text-yellow-900">Menu</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg className="w-6 h-6 text-yellow-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-yellow-700"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </header>
  );
}
