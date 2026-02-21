'use client';

import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';
import { FadeIn } from '@/components/FadeIn';

export function StatsSection() {
    const { language } = useLanguage();
    const t = translations[language];

    const stats = [
        { value: t.stat1_value, label: t.stat1_label },
        { value: t.stat2_value, label: t.stat2_label },
        { value: t.stat3_value, label: t.stat3_label },
        { value: t.stat4_value, label: t.stat4_label },
    ];

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.35)] overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((s, idx) => (
                            <div
                                key={idx}
                                className={[
                                    'px-6 py-8 text-center',
                                    idx !== 0 ? 'md:border-l md:border-white/10' : '',
                                    idx >= 2 ? 'border-t border-white/10 md:border-t-0' : '',
                                ].join(' ')}
                            >
                                <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#00B4C4]">
                                    {s.value}
                                </div>
                                <div className="mt-2 text-sm md:text-base text-white/60 leading-snug whitespace-pre-line">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pointer-events-none absolute inset-0" />
                </div>
                </FadeIn>
            </div>
        </section>
    );
}
