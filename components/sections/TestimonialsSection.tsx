'use client';

import { useMemo } from 'react';
import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';
import { testimonials as testimonialsConfig } from '@/lib/testimonials.config';
import { FadeIn } from '@/components/FadeIn';

type Testimonial = {
    name: string;
    role: string;
    quote: string;
};

function InitialsAvatar({ name }: { name: string }) {
    const initials = name
        .split(' ')
        .filter(Boolean)
        .map((p) => p[0]?.toUpperCase())
        .slice(0, 2)
        .join('');

    return (
        <div className="h-12 w-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 font-semibold shrink-0">
            {initials}
        </div>
    );
}

function TestimonialCard({ name, role, quote }: Testimonial) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="p-7">
                <div className="flex items-start gap-5">
                    <InitialsAvatar name={name} />

                    <div className="flex-1">
                        <p className="text-white/75 italic leading-relaxed">
                            &ldquo;{quote}&rdquo;
                        </p>

                        <div className="mt-6">
                            <p className="font-semibold text-white/90">{name}</p>
                            <p className="text-sm text-white/55">{role}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-10 bg-[linear-gradient(to_top,rgba(59,130,246,0.08),transparent)] border-t border-white/5" />
        </div>
    );
}

export function TestimonialsSection() {
    const { language } = useLanguage();
    const t = translations[language];

    const testimonials: Testimonial[] = useMemo(
        () =>
            testimonialsConfig
                .filter((c) => c.enabled)
                .map((c) => ({
                    name: c.name[language],
                    role: c.role[language],
                    quote: c.quote[language],
                })),
        [language]
    );

    if (testimonials.length === 0) return null;

    const gridCols =
        testimonials.length === 1
            ? 'md:grid-cols-1 max-w-2xl mx-auto'
            : testimonials.length === 3
              ? 'md:grid-cols-3'
              : 'md:grid-cols-2';

    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-center">{t.testimonials_title}</h2>
                    <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                        {t.testimonials_subtitle}
                    </p>
                </FadeIn>

                <div className={`mt-10 grid grid-cols-1 ${gridCols} gap-6`}>
                    {testimonials.map((testimonial, i) => (
                        <FadeIn key={`${testimonial.name}-${testimonial.role}`} delay={i * 0.15}>
                            <TestimonialCard
                                name={testimonial.name}
                                role={testimonial.role}
                                quote={testimonial.quote}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
