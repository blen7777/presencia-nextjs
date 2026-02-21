'use client';

import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';
import { FadeIn } from '@/components/FadeIn';

function ServiceCard({ icon, title, desc, tags, delay }: { icon: React.ReactNode; title: string; desc: string; tags?: string; delay?: number }) {
    const tagList = tags ? tags.split('\n').filter(Boolean) : [];

    return (
        <FadeIn delay={delay}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] h-full">
                <div className="mb-4">{icon}</div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="mt-4 mb-4 h-px bg-white/10" />
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
                {tagList.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tagList.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-full border border-white/10 bg-black/20 text-white/55 text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </FadeIn>
    );
}

function IconCode() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path
                d="M8 18L2.5 12L8 6"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 6L21.5 12L16 18"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 4L10 20"
                stroke="#00B4C4"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
function IconCloud() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path
                d="M7 18h10a4 4 0 0 0 .2-8 6 6 0 0 0-11.5-1.6A4.6 4.6 0 0 0 7 18Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path
                d="M9.1 12.1l1.8 1.8 3.6-4.2"
                stroke="#00B4C4"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
function IconUsers() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M2 21v-2a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="17.5" cy="8.5" r="2.5" stroke="#00B4C4" strokeWidth="1.6" />
            <path d="M20 21v-1.5a3.5 3.5 0 0 0-2.5-3.4" stroke="#00B4C4" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
function IconGlobe() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M3 12h18" stroke="currentColor" strokeWidth="1.4" />
            <path d="M12 2.5c2.5 2.5 3.8 5.8 3.8 9.5s-1.3 7-3.8 9.5c-2.5-2.5-3.8-5.8-3.8-9.5s1.3-7 3.8-9.5Z" stroke="#00B4C4" strokeWidth="1.6" />
        </svg>
    );
}

export function ServicesSection() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="services" className="pt-14 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-center">{t.services_title}</h2>
                    <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                        {t.services_subtitle}
                    </p>
                </FadeIn>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        icon={<IconCode />}
                        title={t.svc1_title}
                        desc={t.svc1_desc}
                        tags={t.svc1_tags}
                        delay={0}
                    />
                    <ServiceCard
                        icon={<IconCloud />}
                        title={t.svc2_title}
                        desc={t.svc2_desc}
                        tags={t.svc2_tags}
                        delay={0.1}
                    />
                    <ServiceCard
                        icon={<IconUsers />}
                        title={t.svc3_title}
                        desc={t.svc3_desc}
                        tags={t.svc3_tags}
                        delay={0.2}
                    />
                    <ServiceCard
                        icon={<IconGlobe />}
                        title={t.svc4_title}
                        desc={t.svc4_desc}
                        tags={t.svc4_tags}
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
}
