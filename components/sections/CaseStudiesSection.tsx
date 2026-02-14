'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type CaseItem = {
    title: string;
    desc: string;
    image: string; // poné tus imágenes reales en /public
    href?: string;
};

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

function getPerView() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // mobile
}

function CaseCard({
                      item,
                      innerRef,
                  }: {
    item: CaseItem;
    innerRef?: (el: HTMLDivElement | null) => void;
}) {
    return (
        <div
            ref={innerRef}
            className="snap-start flex-none rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
        >
            {/* Image */}
            <div className="relative h-44 w-full border-b border-white/10">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={false}
                />
                {/* subtle overlay like design */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.35))]" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{item.desc}</p>

                <a
                    href={item.href ?? '#contact'}
                    className="mt-4 inline-flex text-sm text-[#00B4C4] hover:opacity-90 transition"
                >
                    Read More &nbsp;›
                </a>
            </div>
        </div>
    );
}

export function CaseStudiesSection() {
    const items: CaseItem[] = useMemo(
        () => [
            {
                title: 'Project One',
                desc: 'A custom CRM solution for financial services firm, improving client management.',
                image: '/cases/case-1.jpg',
            },
            {
                title: 'Project Two',
                desc: 'Enterprise integration for a retail company, connecting inventory, sales and customer data.',
                image: '/cases/case-2.jpg',
            },
            {
                title: 'Project Three',
                desc: 'Cloud infrastructure and DevOps for a tech startup, ensuring scalability and reliability.',
                image: '/cases/case-3.jpg',
            },
            {
                title: 'Project Four',
                desc: 'Automation and reporting dashboard to improve operational visibility and decision-making.',
                image: '/cases/case-4.jpg',
            },
            {
                title: 'Project Five',
                desc: 'Secure authentication + role-based access + performance optimization for enterprise workflows.',
                image: '/cases/case-5.jpg',
            },
        ],
        []
    );

    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [perView, setPerView] = useState(3);
    const [index, setIndex] = useState(0);

    const maxIndex = Math.max(0, items.length - perView);
    const pages = maxIndex + 1; // dots

    const goTo = (i: number) => {
        const next = clamp(i, 0, maxIndex);
        setIndex(next);

        // scroll to the card at position "next"
        const el = cardRefs.current[next];
        el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    };

        const next = () => goTo(index + 1);
        const prev = () => goTo(index - 1);

        // set perView responsive
        useEffect(() => {
            const apply = () => setPerView(getPerView());
            apply();

            window.addEventListener('resize', apply);
            return () => window.removeEventListener('resize', apply);
        }, []);

        // clamp index when perView changes
        useEffect(() => {
            const clamped = clamp(index, 0, maxIndex);
            if (clamped !== index) {
                setIndex(clamped);
                // align after layout change
                requestAnimationFrame(() => {
                    const el = cardRefs.current[clamped];
                    el?.scrollIntoView({ behavior: 'auto', inline: 'start', block: 'nearest' });
                });
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [perView]);

        // update dots/index when user scrolls/swipes
        useEffect(() => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            if (!viewport || !track) return;

            let raf = 0;

            const onScroll = () => {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(() => {
                    const firstCard = cardRefs.current[0];
                    if (!firstCard) return;

                    const cardW = firstCard.getBoundingClientRect().width;
                    const gapRaw = getComputedStyle(track).columnGap || getComputedStyle(track).gap;
                    const gap = parseFloat(gapRaw) || 24;

                    const step = cardW + gap;
                    const approx = Math.round(viewport.scrollLeft / step);
                    setIndex(clamp(approx, 0, maxIndex));
                });
            };

            viewport.addEventListener('scroll', onScroll, { passive: true });
            return () => {
                cancelAnimationFrame(raf);
                viewport.removeEventListener('scroll', onScroll);
            };
        }, [maxIndex]);

        // width of each card based on perView (so it shows 3 like design)
        const cardWidthStyle =
            perView === 3
                ? 'calc((100% - 48px) / 3)' // gap-6 => 24px, two gaps => 48px
                : perView === 2
                    ? 'calc((100% - 24px) / 2)'
                    : '100%';

        return (
            <section id="case-studies" className="py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Case Studies</h2>
                    <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                        Discover how we’ve helped businesses achieve their goals with our innovative solutions.
                    </p>

                    {/* Carousel */}
                    <div className="mt-10 relative">
                        {/* optional arrows (discretos) */}
                        <button
                            type="button"
                            onClick={prev}
                            disabled={index === 0}
                            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition disabled:opacity-40"
                            aria-label="Previous"
                        >
                            <span className="material-icons-outlined text-white/80">chevron_left</span>
                        </button>

                        <button
                            type="button"
                            onClick={next}
                            disabled={index === maxIndex}
                            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition disabled:opacity-40"
                            aria-label="Next"
                        >
                            <span className="material-icons-outlined text-white/80">chevron_right</span>
                        </button>

                        {/* viewport */}
                        <div
                            ref={viewportRef}
                            className="overflow-x-auto snap-x snap-mandatory scroll-smooth"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                            }}
                        >
                            {/* hide webkit scrollbar */}
                            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

                            <div ref={trackRef} className="flex gap-6">
                                {items.map((item, i) => (
                                    <div
                                        key={item.title}
                                        style={{ width: cardWidthStyle }}
                                        className="flex-none"
                                    >
                                        <CaseCard
                                            item={item}
                                            innerRef={(el) => (cardRefs.current[i] = el)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="mt-8 flex items-center justify-center gap-3 opacity-80">
                            {Array.from({ length: pages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className={[
                                        'h-2 w-2 rounded-full transition',
                                        i === index ? 'bg-[#00B4C4]' : 'bg-white/20 hover:bg-white/30',
                                    ].join(' ')}
                                    aria-label={`Go to page ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
