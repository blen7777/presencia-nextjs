'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type Testimonial = {
    name: string;
    role: string;
    quote: string;
    avatarSrc?: string; // opcional si luego querés foto real
};

const TESTIMONIALS: Testimonial[] = [
    {
        name: 'Client\'s review',
        role: 'CEO, Retail Startup',
        quote:
            'The team are excellent PHP and Laravel developers with sharp technical minds and fantastic attitudes. They bring deep expertise to the table and make collaboration easy and enjoyable. Their insightful technical observations during scoping help streamline projects and ensure top-quality results.',
    },
    {
        name: 'Client\'s review',
        role: 'CTO, E-Commerce Company',
        quote:
            'It was great working with José. He’s highly experienced across many areas of software development, and most importantly, he’s cooperative and proactive. He delivered on time and consistently asked the right questions to clarify requirements throughout the project.',
    },
];

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const onChange = () => setMatches(mql.matches);
        onChange();

        // Safari fallback
        if (mql.addEventListener) mql.addEventListener('change', onChange);
        else mql.addListener(onChange);

        return () => {
            if (mql.removeEventListener) mql.removeEventListener('change', onChange);
            else mql.removeListener(onChange);
        };
    }, [query]);

    return matches;
}

function chunk<T>(arr: T[], size: number) {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

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

function TestimonialCard({ name, role, quote, avatarSrc }: Testimonial) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="p-7">
                <div className="flex items-start gap-5">
                    {avatarSrc ? (
                        <div className="h-12 w-12 rounded-full overflow-hidden border border-white/15 bg-white/5 shrink-0">
                            <Image src={avatarSrc} alt={name} width={48} height={48} className="h-12 w-12 object-cover" />
                        </div>
                    ) : (
                        <InitialsAvatar name={name} />
                    )}

                    <div className="flex-1">
                        <p className="text-white/75 italic leading-relaxed">
                            “{quote}”
                        </p>

                        <div className="mt-6">
                            <p className="font-semibold text-white/90">{name}</p>
                            <p className="text-sm text-white/55">{role}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* muy sutil “shine” inferior como el diseño */}
            <div className="h-10 bg-[linear-gradient(to_top,rgba(59,130,246,0.08),transparent)] border-t border-white/5" />
        </div>
    );
}

export function TestimonialsSection() {
    const isMd = useMediaQuery('(min-width: 768px)');
    const perPage = isMd ? 2 : 1;

    const pages = useMemo(() => chunk(TESTIMONIALS, perPage), [perPage]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setPage(0); // reset al cambiar de 1 a 2 por responsive
    }, [perPage]);

    const canSlide = pages.length > 1;

    const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);
    const next = () => setPage((p) => (p + 1) % pages.length);

    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Client Testimonials</h2>
                <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                    Ready to start your next project? Contact us for a free consultation.
                </p>

                <div className="relative mt-10">
                    {/* viewport */}
                    <div className="overflow-hidden">
                        {/* track */}
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${page * 100}%)` }}
                        >
                            {pages.map((group, idx) => (
                                <div key={idx} className="min-w-full">
                                    <div className={`grid gap-6 ${isMd ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                                        {group.map((t) => (
                                            <TestimonialCard
                                                key={`${t.name}-${t.role}`}
                                                name={t.name}
                                                role={t.role}
                                                quote={t.quote}
                                                avatarSrc={t.avatarSrc}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* arrows (como screenshot) */}
                    {canSlide && (
                        <>
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous testimonials"
                                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/15 bg-white/5 items-center justify-center text-white/70 hover:text-white hover:border-white/25 transition"
                            >
                                <span className="material-icons-outlined">chevron_left</span>
                            </button>

                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next testimonials"
                                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/15 bg-white/5 items-center justify-center text-white/70 hover:text-white hover:border-white/25 transition"
                            >
                                <span className="material-icons-outlined">chevron_right</span>
                            </button>
                        </>
                    )}
                </div>

                {/* dots */}
                {canSlide && (
                    <div className="mt-8 flex items-center justify-center gap-3 opacity-90">
                        {pages.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                aria-label={`Go to testimonials page ${i + 1}`}
                                className={`h-2.5 w-2.5 rounded-full transition ${
                                    i === page ? 'bg-[#00B4C4]' : 'bg-white/20 hover:bg-white/30'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
