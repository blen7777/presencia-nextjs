function TestimonialCard({
                             name,
                             role,
                             quote,
                         }: {
    name: string;
    role: string;
    quote: string;
}) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 font-semibold">
                    {name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                </div>
                <div className="flex-1">
                    <p className="text-white/70 italic leading-relaxed">“{quote}”</p>
                    <div className="mt-5">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-white/50">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function TestimonialsSection() {
    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Client Testimonials</h2>
                <p className="text-center text-white/60 mt-3 max-w-2xl mx-auto">
                    Ready to start your next project? Contact us for a free consultation.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <TestimonialCard
                        name="John Smith"
                        role="CEO, Retail Startup"
                        quote="The team delivered a fast, modern platform that transformed our operations. Highly recommended."
                    />
                    <TestimonialCard
                        name="Sarah Johnson"
                        role="CTO, E-Commerce Company"
                        quote="Exceptional service and support. They exceeded our expectations and shipped on time."
                    />

                    {/* Right arrow visual (como screenshot) */}
                    <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2">
                        <div className="h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/70">
                            <span className="material-icons-outlined">chevron_right</span>
                        </div>
                    </div>
                </div>

                {/* Dots visual */}
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
