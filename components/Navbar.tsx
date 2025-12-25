'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useContact } from '@/context/ContactContext';
import { useResume } from '@/context/ResumeContext';

export default function Navbar() {
  const { openContact } = useContact();
  const { openResume } = useResume();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors z-50 relative">
          Manoj K
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-secondary items-center">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          <button onClick={openResume} className="hover:text-foreground transition-colors cursor-pointer">
            Resume
          </button>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <button onClick={openContact} className="hover:text-foreground transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 -mr-2 text-secondary hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black z-40 flex flex-col items-center justify-start pt-10 space-y-8 md:hidden overflow-y-auto">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-accent transition-colors">Home</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-accent transition-colors">Projects</Link>
            <button onClick={() => { openResume(); setIsOpen(false); }} className="text-2xl font-bold hover:text-accent transition-colors">Resume</button>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-accent transition-colors">About</Link>
            <button onClick={() => { openContact(); setIsOpen(false); }} className="text-2xl font-bold hover:text-accent transition-colors">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}
