'use client';

import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';

export function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="about" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                    <h2 className="text-3xl md:text-4xl font-bold">{t.about_title}</h2>
                    <p className="mt-4 text-white/65 max-w-3xl leading-relaxed">
                        {t.about_desc}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/70">
                        {['Next.js', 'Laravel', 'Node.js', 'MySQL', 'Docker', 'AWS'].map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-full border border-white/10 bg-black/20">
                {tech}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
