export function AboutSection() {
    return (
        <section id="about" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
                    <h2 className="text-3xl md:text-4xl font-bold">About</h2>
                    <p className="mt-4 text-white/65 max-w-3xl leading-relaxed">
                        We’re a software studio focused on building secure, scalable and clean products.
                        From discovery and UX to engineering and DevOps, we ship solutions that feel premium and perform fast.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/70">
                        {['Next.js', 'Laravel', 'Node.js', 'MySQL', 'Docker', 'AWS'].map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-black/20">
                {t}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
