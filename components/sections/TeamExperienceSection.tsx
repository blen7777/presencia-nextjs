'use client';

import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';
import { FadeIn } from '@/components/FadeIn';

function ExperienceCard({ name, desc, delay }: { name: string; desc: string; delay?: number }) {
    return (
        <FadeIn delay={delay}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] h-full">
                <h3 className="text-base font-semibold text-white/90">{name}</h3>
                <p className="mt-2 text-white/55 text-sm leading-relaxed">{desc}</p>
            </div>
        </FadeIn>
    );
}

export function TeamExperienceSection() {
    const { language } = useLanguage();
    const t = translations[language];

    const experiences = [
        { name: t.exp1_name, desc: t.exp1_desc },
        { name: t.exp2_name, desc: t.exp2_desc },
        { name: t.exp3_name, desc: t.exp3_desc },
        { name: t.exp4_name, desc: t.exp4_desc },
        { name: t.exp5_name, desc: t.exp5_desc },
        { name: t.exp6_name, desc: t.exp6_desc },
    ];

    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-center">{t.experience_title}</h2>
                    <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                        {t.experience_subtitle}
                    </p>
                </FadeIn>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={exp.name} name={exp.name} desc={exp.desc} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
