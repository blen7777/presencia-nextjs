function CaseCard({
                      title,
                      desc,
                  }: {
    title: string;
    desc: string;
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            {/* Image placeholder (reemplaza por Image real cuando tengas fotos) */}
            <div className="h-40 bg-[linear-gradient(135deg,rgba(0,180,196,0.20),rgba(255,255,255,0.02))] border-b border-white/10" />
            <div className="p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-white/60 text-sm leading-relaxed">{desc}</p>
                <a href="#contact" className="mt-4 inline-flex text-sm text-[#00B4C4] hover:opacity-90 transition">
                    Read More &nbsp;›
                </a>
            </div>
        </div>
    );
}

export function CaseStudiesSection() {
    return (
        <section id="case-studies" className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Case Studies</h2>
                <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                    Discover how we’ve helped businesses achieve their goals with our innovative solutions.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CaseCard
                        title="Project One"
                        desc="A custom CRM solution for financial services firm, improving client management."
                    />
                    <CaseCard
                        title="Project Two"
                        desc="Enterprise integration for a retail company, connecting inventory, sales and customer data."
                    />
                    <CaseCard
                        title="Project Three"
                        desc="Cloud infrastructure and DevOps for a tech startup, ensuring scalability and reliability."
                    />
                </div>

                {/* Carousel dots (visual only like screenshot) */}
                <div className="mt-8 flex items-center justify-center gap-3 opacity-80">
                    <span className="h-2 w-2 rounded-full bg-[#00B4C4]" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
            </div>
        </section>
    );
}
