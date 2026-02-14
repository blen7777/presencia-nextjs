'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ idioma (como lo tenías antes)
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');

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

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* ✅ Language Toggle (desktop) */}
              <div className="hidden md:flex items-center">
                <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <span
                    className={`text-xs font-bold mr-3 transition-colors select-none ${
                        language === 'es' ? 'text-white' : 'text-white/40'
                    }`}
                >
                  ES
                </span>

                  <label
                      htmlFor="lang-toggle"
                      className="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                        type="checkbox"
                        id="lang-toggle"
                        checked={language === 'en'}
                        onChange={toggleLanguage}
                        className="sr-only peer"
                    />
                    <div className="w-8 h-4 bg-white/10 rounded-full border border-white/10" />
                    <div
                        className={`absolute left-[2px] top-[2px] h-3 w-3 rounded-full transition-all duration-300 ease-in-out ${
                            language === 'en'
                                ? 'translate-x-full bg-[#00B4C4]'
                                : 'translate-x-0 bg-white/50'
                        }`}
                    />
                  </label>

                  <span
                      className={`text-xs font-bold ml-3 transition-colors select-none ${
                          language === 'en' ? 'text-white' : 'text-white/40'
                      }`}
                  >
                  EN
                </span>
                </div>
              </div>

              {/* CTA */}
              <a
                  href="#contact"
                  className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-lg border border-[#00B4C4]/60 text-white/90 hover:border-[#00B4C4] hover:text-white transition"
              >
                Get a Quote
              </a>

              {/* Mobile Menu Button */}
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

                  {/* ✅ Language Toggle (mobile) */}
                  <button
                      onClick={() => {
                        toggleLanguage();
                        setOpen(false);
                      }}
                      className="mt-3 px-3 py-3 rounded-lg border border-white/10 text-left text-[#00B4C4] font-bold hover:bg-white/5 transition"
                  >
                    {language === 'en' ? 'Switch to Español' : 'Switch to English'}
                  </button>
                </div>
              </div>
          )}
        </div>
      </header>
  );
}
