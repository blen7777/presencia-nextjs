'use client';

import Image from 'next/image';
import { useLanguage } from './LanguageProvider';
import { translations } from '@/lib/translations';
import { FadeIn } from '@/components/FadeIn';

/**
 * Social media links config.
 * Set the `url` to your profile URL to show the icon, or leave it as '' to hide it.
 */
const socialLinks = [
  { key: 'facebook', icon: 'facebook', url: '' },
  { key: 'twitter', icon: 'travel_explore', url: '' },
  { key: 'linkedin', icon: 'work', url: '' },
  { key: 'chat', icon: 'chat', url: '' },
];

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
  const { language } = useLanguage();
  const t = translations[language];

  return (
      <footer className="relative mt-10 border-t border-white/10 bg-[#050A14]">
        <FooterNetworkBg />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
          <FadeIn>
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
              <h4 className="text-white/90 font-semibold">{t.footer_quick_links}</h4>
              <ul className="mt-4 space-y-3 text-white/65 text-sm">
                <li><a className="hover:text-[#00B4C4] transition" href="#services">{t.nav_services}</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#case-studies">{t.nav_case_studies}</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#about">{t.nav_about}</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#contact">{t.nav_contact}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white/90 font-semibold">{t.footer_legal}</h4>
              <ul className="mt-4 space-y-3 text-white/65 text-sm">
                <li><a className="hover:text-[#00B4C4] transition" href="#">{t.footer_privacy}</a></li>
                <li><a className="hover:text-[#00B4C4] transition" href="#">{t.footer_terms}</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white/90 font-semibold">{t.footer_contact_us}</h4>
              <ul className="mt-4 space-y-3 text-white/65 text-sm">
                <li className="flex items-start gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base mt-[2px]">location_on</span>
                  <span>{t.footer_address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base">call</span>
                  <span>+503 7740-4092, +503 7647-1451</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base">mail</span>
                  <span>info@presenciadigital.io</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons-outlined text-[#00B4C4] text-base">public</span>
                  <span className="text-white/50 italic text-xs">{t.footer_remote_note}</span>
                </li>
              </ul>
            </div>
          </div>
          </FadeIn>

          <div className="mt-10 h-px bg-white/10" />

          <div className="mt-10 text-center text-white/60">
            <p>{t.footer_rights}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/60">
              <a className="hover:text-[#00B4C4] transition" href="#services">{t.nav_services}</a>
              <span className="opacity-40">|</span>
              <a className="hover:text-[#00B4C4] transition" href="#case-studies">{t.nav_case_studies}</a>
              <span className="opacity-40">|</span>
              <a className="hover:text-[#00B4C4] transition" href="#about">{t.nav_about}</a>
              <span className="opacity-40">|</span>
              <a className="hover:text-[#00B4C4] transition" href="#contact">{t.nav_contact}</a>
            </div>

            {socialLinks.some((s) => s.url) && (
              <div className="mt-8 flex items-center justify-center gap-4">
                {socialLinks
                  .filter((s) => s.url)
                  .map((s) => (
                    <a
                      key={s.key}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 transition"
                    >
                      <span className="material-icons-outlined text-base">{s.icon}</span>
                    </a>
                  ))}
              </div>
            )}
          </div>
        </div>
      </footer>
  );
}
