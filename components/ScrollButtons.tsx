'use client';

import { Trans } from '@/components/Trans';

export default function ScrollButtons() {
    return (
        <button
            type="button"
    onClick={() => {
        const nameInput = document.querySelector<HTMLInputElement>('input[placeholder="Your Name"]');
        nameInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => nameInput?.focus(), 350);
    }}
    className="flex items-center space-x-2 bg-white text-brand-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
    >
    <span className="material-icons-outlined text-brand-blue">touch_app</span>
    <span>
    <Trans k="hero_cta_secondary" />
        </span>
        </button>
);
}
