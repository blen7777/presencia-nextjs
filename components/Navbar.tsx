'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <header
          className={`fixed w-full z-50 top-0 border-b transition-all duration-300 ${
              scrolled
                  ? 'bg-[#050A14]/80 backdrop-blur-md border-white/10'
                  : 'bg-transparent border-white/10'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Image
                  src="/pd_logo_white.png"
                  alt="PD"
                  width={54}
                  height={54}
                  className="h-9 w-auto opacity-95"
                  priority
              />
              <span className="hidden sm:block font-semibold tracking-wide text-white/90">
              PD Solutions
            </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
              {links.map((l, idx) => (
                  <a
                      key={l.href}
                      href={l.href}
                      className={[
                        'relative hover:text-white transition-colors',
                        idx === 0 ? 'text-white font-semibold' : '',
                      ].join(' ')}
                  >
                    {l.label}
                    {/* underline “active” like screenshot */}
                    {idx === 0 && (
                        <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-[#00B4C4] rounded-full opacity-80" />
                    )}
                  </a>
              ))}
            </nav>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-3">
              <a
                  href="#contact"
                  className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg border border-[#00B4C4]/60 text-white/90 hover:border-[#00B4C4] hover:text-white transition"
              >
                Get a Quote
              </a>

              <button
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-white/10 hover:border-white/20 transition"
                  onClick={() => setOpen((v) => !v)}
                  aria-label="Open menu"
              >
                <span className="material-icons-outlined">menu</span>
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {open && (
              <div className="md:hidden mt-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
                <div className="p-3 flex flex-col">
                  {links.map((l) => (
                      <a
                          key={l.href}
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="px-3 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition"
                      >
                        {l.label}
                      </a>
                  ))}
                  <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="mt-2 px-3 py-3 rounded-lg border border-[#00B4C4]/60 text-white/90 hover:border-[#00B4C4] hover:text-white transition text-center"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
          )}
        </div>
      </header>
  );
}
