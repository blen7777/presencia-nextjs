function ServiceCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}

function IconCode() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M9 18L3 12L9 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 6L21 12L15 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 4L10 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconShield() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path d="M12 2L20 6V12C20 17 16.5 20.5 12 22C7.5 20.5 4 17 4 12V6L12 2Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9.5 12.2L11.3 14L15.5 9.8" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
function IconCloud() {
    return (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" className="text-white/90">
            <path
                d="M7 18H17C19.2 18 21 16.2 21 14C21 12.1 19.7 10.6 18 10.1C17.6 7.8 15.6 6 13.2 6C11.2 6 9.5 7.1 8.6 8.8C6.6 9 5 10.7 5 12.8C5 15.7 5.9 18 7 18Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
            />
            <path d="M10 15.5L11.4 16.9L14.8 13.5" stroke="#00B4C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
