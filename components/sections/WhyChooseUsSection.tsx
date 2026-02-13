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
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9.5 12.2L11.3 14L15.5 9.8" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconGauge() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M20 13A8 8 0 1 1 4 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 13L16.5 9.5" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 13H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M20 13H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
function IconShieldSolid() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M8.8 12.3L10.6 14.1L15.2 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 4.8L12 2.8L16 4.8" stroke="#00B4C4" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    );
}
function IconGear() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path
                d="M12 15.5A3.5 3.5 0 1 0 12 8.5A3.5 3.5 0 0 0 12 15.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />
            <path
                d="M19.4 15a7.9 7.9 0 0 0 .1-2l2-1.2l-2-3.4l-2.2.6a7.6 7.6 0 0 0-1.7-1L15.3 3H8.7L8 5.6c-.6.3-1.2.6-1.7 1L4.1 6L2 9.4l2 1.2a7.9 7.9 0 0 0 0 2L2 13.8L4.1 17l2.2-.6c.5.4 1.1.8 1.7 1L8.7 21h6.6l.7-2.6c.6-.3 1.2-.6 1.7-1l2.2.6l2-3.4l-2-1.2Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function WhyChooseUsSection() {
    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Why Choose Us</h2>
                <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                    Discover how we’ve helped businesses achieve their goals with our innovative solutions.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <FeatureCard
                        icon={<IconBadge />}
                        title="Experienced Team"
                        desc="Skilled developers with years of industry expertise."
                    />
                    <FeatureCard
                        icon={<IconGauge />}
                        title="High Performance"
                        desc="Optimized solutions for maximum speed and efficiency."
                    />
                    <FeatureCard
                        icon={<IconShieldSolid />}
                        title="End-to-End Security"
                        desc="Robust security measures to protect your data."
                    />
                    <FeatureCard
                        icon={<IconGear />}
                        title="Ongoing Support"
                        desc="Dedicated support and maintenance post-launch."
                    />
                </div>
            </div>
        </section>
    );
}
