'use client';

import Link from 'next/link';
import { useContact } from '@/context/ContactContext';

export default function Navbar() {
  const { openContact } = useContact();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-card-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors">
          Manoj K.
        </Link>
        <div className="flex gap-6 text-sm font-medium text-secondary items-center">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <button onClick={openContact} className="hover:text-foreground transition-colors cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
