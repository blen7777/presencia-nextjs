'use client';

import { useState } from 'react';

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setDone(false);

        // ✅ Aquí luego conectamos tu server action (guardar en MySQL + enviar email)
        await new Promise((r) => setTimeout(r, 700));

        setLoading(false);
        setDone(true);
        (e.currentTarget as HTMLFormElement).reset();
    }

    return (
        <div
            id="contact"
            className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-7"
        >
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <div className="mt-4 h-px bg-white/10" />

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <input
                    className="w-full h-12 rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder="Your Name"
                    name="name"
                    required
                />
                <input
                    className="w-full h-12 rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    required
                />
                <input
                    className="w-full h-12 rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-white/20"
                    placeholder="Phone Number"
                    name="phone"
                />
                <textarea
                    className="w-full min-h-[120px] rounded-lg bg-[#0B1324]/60 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/20 resize-none"
                    placeholder="Your Message"
                    name="message"
                    required
                />

                <button
                    disabled={loading}
                    className="w-full h-12 rounded-lg bg-[#00B4C4] text-white font-semibold hover:opacity-95 transition disabled:opacity-60"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>

                {done && (
                    <p className="text-sm text-[#00B4C4] text-center pt-1">
                        Message sent! We’ll get back to you shortly.
                    </p>
                )}
            </form>
        </div>
    );
}
