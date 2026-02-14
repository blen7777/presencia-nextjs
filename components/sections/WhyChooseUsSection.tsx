function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="mb-4">{icon}</div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function IconBadge() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9.5 12.2L11.3 14L15.5 9.8" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconGauge() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M20 13A8 8 0 1 1 4 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 13L16.5 9.5" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 13H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M20 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
function IconShieldSolid() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8.8 12.3L10.6 14.1L15.2 9.6" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 4.8L12 2.8L16 4.8" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    );
}
// IconGear (igual al diseño: doble trazo + centro con fill suave)
export function IconGear() {
    return (
        <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/90"
            aria-hidden="true"
        >
            {/* OUTLINE oscuro (debajo) */}
            <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
                stroke="#0B1324"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <circle cx="12" cy="12" r="3.5" fill="rgba(255,255,255,0.08)" />
            <circle
                cx="12"
                cy="12"
                r="3.5"
                stroke="#0B1324"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* TRAZO blanco (arriba) */}
            <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="12"
                cy="12"
                r="3.5"
                stroke="#00B4C4"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function WhyChooseUsSection() {
    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Why Work With Us</h2>
                <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                    Discover how we’ve helped businesses achieve their goals with our innovative solutions.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<IconBadge />}
                        title="Experienced Team"
                        desc="Every member of our team is a senior engineer with 10+ years of hands-on experience. No juniors learning on your project."
                    />
                    <FeatureCard
                        icon={<IconGauge />}
                        title="High Performance"
                        desc=" US-quality engineering at Latin American rates. You get dedicated senior talent at a fraction of the cost of domestic hires."
                    />
                    <FeatureCard
                        icon={<IconShieldSolid />}
                        title="Battle-Tested"
                        desc="Our engineers have built systems for Walmart's financial platform (processing millions of transactions), government-scale cloud migrations, and enterprise ERP ecosystems."
                    />
                    <FeatureCard
                        icon={<IconGear />}
                        title="Transparent Communication"
                        desc="We work on your timezone (Americas), attend daily standups, and use the tools your team already knows — Slack, Teams, Google Meet, Jira"
                    />
                </div>
            </div>
        </section>
    );
}
