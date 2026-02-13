'use client';

import { useState } from 'react';
import { Trans } from './Trans';

const faqs = [
  { id: 'faq1', q: 'faq1_q' as const, a: 'faq1_a' as const },
  { id: 'faq2', q: 'faq2_q' as const, a: 'faq2_a' as const },
  { id: 'faq3', q: 'faq3_q' as const, a: 'faq3_a' as const },
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 bg-black/30" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center mb-12">
          <Trans k="faq_title" />
        </h2>
        <div className="space-y-4">
          {faqs.map(({ id, q, a }) => (
            <div key={id} className="glass-card rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(id)}
                data-testid={`faq-button-${id}`}
              >
                <span className="font-medium text-lg">
                  <Trans k={q} />
                </span>
                <span
                  className={`material-icons-outlined text-brand-cyan transition-transform duration-300 ${
                    openFaq === id ? 'rotate-45' : ''
                  }`}
                >
                  {openFaq === id ? 'remove' : 'add'}
                </span>
              </button>
              {openFaq === id && (
                <div
                  className="px-6 pb-4 text-gray-400 text-sm border-t border-white/5 pt-4"
                  data-testid={`faq-answer-${id}`}
                >
                  <Trans k={a} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
