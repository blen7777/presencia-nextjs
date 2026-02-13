'use client';

import Image from 'next/image';

function FooterNetworkBg() {
  return (
      <div className="absolute inset-0 opacity-[0.18] pointer-events-none">
        <svg viewBox="0 0 1200 500" className="w-full h-full">
          <g fill="none" stroke="white" strokeOpacity="0.10" strokeWidth="1">
            {Array.from({ length: 40 }).map((_, i) => (
                <path
                    key={i}
                    d={`M ${i * 35} 40 C ${i * 35 + 120} 140, ${i * 35 + 160} 280, ${i * 35 + 260} 420`}
                />
            ))}
          </g>
        </svg>
      </div>
  );
}

export function Footer() {
  return (
      <footer className="relative mt-10 border-t border-white/10 bg-[#050A14]">
        <FooterNetworkBg />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            {/* Brand */}
            <div className="md:col-span-1 flex items-center gap-4">
              <Image
                  src="/pd_logo_white.png"
                  alt="PD"
                  width={92}
                  height={92}
                  className="w-auto opacity-95"
              />
              <div>
                <p className="font-semibold tracking-wide">Presencia Digital</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white/90 font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-3 text-white/65 text-sm">
                <li><a className="hover:text-[#00B4C4] transition" href="#services">Services</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#case-studies">Case Studies</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#about">About</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white/90 font-semibold">Legal</h4>
              <ul className="mt-4 space-y-3 text-white/65 text-sm">
                <li><a className="hover:text-[#00B4C4] transition" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white/90 font-semibold">Contact Us</h4>
              <ul className="mt-4 space-y-3 text-white/65 text-sm">
                <li className="flex items-start gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base mt-[2px]">location_on</span>
                  <span>123 Software St,<br />Tech City, 54321</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base">call</span>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base">mail</span>
                  <span>contact@example.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 h-px bg-white/10" />

          <div className="mt-10 text-center text-white/60">
            <p>© 2026 Company. All rights reserved.</p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/60">
              <a className="hover:text-[#00B4C4] transition" href="#services">Services</a>
              <span className="opacity-40">|</span>
              <a className="hover:text-[#00B4C4] transition" href="#case-studies">Case Studies</a>
              <span className="opacity-40">|</span>
              <a className="hover:text-[#00B4C4] transition" href="#about">About</a>
              <span className="opacity-40">|</span>
              <a className="hover:text-[#00B4C4] transition" href="#contact">Contact</a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              {['facebook', 'twitter', 'linkedin', 'chat'].map((icon) => (
                  <a
                      key={icon}
                      href="#"
                      className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition"
                  >
                <span className="material-icons-outlined text-base">
                  {icon === 'facebook' && 'facebook'}
                  {icon === 'twitter' && 'travel_explore'}
                  {icon === 'linkedin' && 'work'}
                  {icon === 'chat' && 'chat'}
                </span>
                  </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  );
}
