function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-4 mb-4 h-px bg-white/10" />
            <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function IconCode() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            {/* Left chevron: move it a bit left (end at x=8 instead of 9) */}
            <path
                d="M8 18L2.5 12L8 6"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Right chevron: move it a bit right (start at x=16 instead of 15) */}
            <path
                d="M16 6L21.5 12L16 18"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Slash stays centered */}
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
function IconShield() {
    return (
        <svg width="62" height="62" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9.5 12.2L11.3 14L15.5 9.8" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

export function ServicesSection() {
    return (
        <section id="services" className="pt-14 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Our Services</h2>
                <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                    Cutting-edge solutions to boost your digital capabilities and business growth.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard
                        icon={<IconCode />}
                        title="Custom Development"
                        desc="Bespoke solutions to fit your business needs."
                    />
                    <ServiceCard
                        icon={<IconShield />}
                        title="Enterprise Integration"
                        desc="Seamless integration with your existing systems."
                    />
                    <ServiceCard
                        icon={<IconCloud />}
                        title="Cloud & DevOps"
                        desc="Scalable and reliable cloud infrastructure."
                    />
                </div>
            </div>
        </section>
    );
}
