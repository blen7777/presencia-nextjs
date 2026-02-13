import { ContactForm } from '@/components/ContactForm';

function HeroWatermark() {
    return (
        <div className="absolute left-0 top-0 bottom-0 w-[520px] pointer-events-none opacity-[0.10] hidden lg:block">
            <svg viewBox="0 0 600 600" className="h-full w-full">
                <g fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="1.2">
                    <path d="M130 120 L260 40 L390 120 L260 200 Z" />
                    <path d="M110 250 L260 160 L410 250 L260 340 Z" />
                    <path d="M130 380 L260 300 L390 380 L260 460 Z" />
                    <path d="M80 160 L260 60 L440 160" />
                    <path d="M80 360 L260 260 L440 360" />
                </g>
            </svg>
        </div>
    );
}

export function Hero() {
    return (
        <section className="relative" id="top">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl">
                    <HeroWatermark />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10 lg:py-14">
                        {/* Left */}
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                                Building Innovative Software
                                <br />
                                Solutions for Your Business
                            </h1>

                            <p className="mt-5 text-white/70 text-lg max-w-xl leading-relaxed">
                                We deliver scalable, secure, and high-performance applications tailored to your needs.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#00B4C4] text-white font-semibold hover:opacity-95 transition shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                                >
                                    Get a Free Consultation
                                </a>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/15 text-white/90 hover:border-white/25 hover:text-white transition"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="relative z-10">
                            <ContactForm />
                        </div>
                    </div>

                    {/* Divider line like screenshot */}
                    <div className="h-px bg-white/10" />
                </div>
            </div>
        </section>
    );
}
