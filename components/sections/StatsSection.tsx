export function StatsSection() {
    const stats = [
        { value: '50+', label: 'Combined Years of\nExperience' },
        { value: '4', label: 'Senior Engineers\non the Team' },
        { value: '15+', label: 'Enterprise & SMB Projects\nDelivered' },
        { value: '3', label: 'Cloud Platforms\nGCP / AWS / Azure' },
    ];

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.35)] overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((s, idx) => (
                            <div
                                key={s.value}
                                className={[
                                    'px-6 py-8 text-center',
                                    // vertical dividers on desktop
                                    idx !== 0 ? 'md:border-l md:border-white/10' : '',
                                    // row dividers on mobile
                                    idx >= 2 ? 'border-t border-white/10 md:border-t-0' : '',
                                ].join(' ')}
                            >
                                <div className="text-4xl md:text-5xl font-bold tracking-tight text-[#00B4C4]">
                                    {s.value}
                                </div>
                                <div className="mt-2 text-sm md:text-base text-white/60 leading-snug whitespace-pre-line">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* subtle inner highlight like your cards */}
                    <div className="pointer-events-none absolute inset-0" />
                </div>
            </div>
        </section>
    );
}
