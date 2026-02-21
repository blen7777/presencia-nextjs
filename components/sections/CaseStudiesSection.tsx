'use client';

import { useMemo } from 'react';
import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';
import { FadeIn } from '@/components/FadeIn';

type CaseItem = {
    title: string;
    desc: string;
    tech: string;
    status: string;
    problem: string;
    solution: string;
    impact: string;
};

function TechBadge({ label }: { label: string }) {
    return (
        <span className="px-2.5 py-1 rounded-full border border-white/10 bg-black/20 text-white/55 text-xs">
            {label}
        </span>
    );
}

function CaseCard({
    item,
    problemLabel,
    solutionLabel,
    impactLabel,
}: {
    item: CaseItem;
    problemLabel: string;
    solutionLabel: string;
    impactLabel: string;
}) {
    const techTags = item.tech.split(',').map((t) => t.trim());

    return (
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="p-6">
                {/* Status badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#00B4C4]/15 text-[#00B4C4] border border-[#00B4C4]/25 mb-4">
                    {item.status}
                </span>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{item.desc}</p>

                {/* Problem → Solution → Impact */}
                <div className="mt-5 space-y-4">
                    <div>
                        <h4 className="text-sm font-semibold text-[#00B4C4]">{problemLabel}</h4>
                        <p className="mt-1 text-white/55 text-sm leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-[#00B4C4]">{solutionLabel}</h4>
                        <p className="mt-1 text-white/55 text-sm leading-relaxed">{item.solution}</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-[#00B4C4]">{impactLabel}</h4>
                        <p className="mt-1 text-white/55 text-sm leading-relaxed">{item.impact}</p>
                    </div>
                </div>

                {/* Tech stack badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                    {techTags.map((tag) => (
                        <TechBadge key={tag} label={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function CaseStudiesSection() {
    const { language } = useLanguage();
    const t = translations[language];

    const items: CaseItem[] = useMemo(
        () => [
            {
                title: t.case1_title,
                desc: t.case1_desc,
                tech: t.case1_tech,
                status: t.case1_status,
                problem: t.case1_problem,
                solution: t.case1_solution,
                impact: t.case1_impact,
            },
            {
                title: t.case2_title,
                desc: t.case2_desc,
                tech: t.case2_tech,
                status: t.case2_status,
                problem: t.case2_problem,
                solution: t.case2_solution,
                impact: t.case2_impact,
            },
        ],
        [t]
    );

    return (
        <section id="case-studies" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-bold text-center">{t.cases_title}</h2>
                    <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                        {t.cases_subtitle}
                    </p>
                </FadeIn>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
                            <CaseCard
                                item={item}
                                problemLabel={t.case_problem_label}
                                solutionLabel={t.case_solution_label}
                                impactLabel={t.case_impact_label}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
