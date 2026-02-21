'use client';

import { useLanguage } from '../LanguageProvider';
import { translations } from '@/lib/translations';
import { FadeIn } from '@/components/FadeIn';

function InitialsAvatar({ name }: { name: string }) {
    const initials = name
        .split(' ')
        .filter(Boolean)
        .map((p) => p[0]?.toUpperCase())
        .slice(0, 2)
        .join('');

    return (
        <div className="h-16 w-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 font-semibold text-lg shrink-0">
            {initials}
        </div>
    );
}

function TeamCard({ name, role, bio }: { name: string; role: string; bio: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-4 mb-4">
                <InitialsAvatar name={name} />
                <div>
                    <h3 className="font-semibold text-white/90">{name}</h3>
                    <p className="text-sm text-[#00B4C4]">{role}</p>
                </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{bio}</p>
        </div>
    );
}

const TECH_TAGS = ['Java', 'Spring Boot', 'Laravel', 'React', 'Next.js', 'PostgreSQL', 'MySQL', 'GCP', 'AWS'];

export function AboutSection() {
    const { language } = useLanguage();
    const t = translations[language];

    const teamMembers = [
        { name: t.team1_name, role: t.team1_role, bio: t.team1_bio },
        { name: t.team2_name, role: t.team2_role, bio: t.team2_bio },
        { name: t.team3_name, role: t.team3_role, bio: t.team3_bio },
    ];

    return (
        <section id="about" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                        <h2 className="text-3xl md:text-4xl font-bold">{t.about_title}</h2>
                        <p className="mt-4 text-white/65 leading-relaxed whitespace-pre-line">
                            {t.about_desc}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/70">
                            {TECH_TAGS.map((tech) => (
                                <span key={tech} className="px-3 py-1 rounded-full border border-white/10 bg-black/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Team Members */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, i) => (
                        <FadeIn key={member.name} delay={i * 0.15}>
                            <TeamCard
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
