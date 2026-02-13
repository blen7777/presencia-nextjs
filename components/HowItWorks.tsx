'use client';

import { Trans } from './Trans';

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-20 bg-brand-surface border-y border-white/5 relative overflow-hidden"
      data-testid="how-it-works-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-2">
            <Trans k="model_subtitle" />
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
            <Trans k="model_title" />
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            <Trans k="model_desc" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-2xl text-center hover:border-brand-cyan/50 transition-colors group">
            <div className="w-16 h-16 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-brand-blue text-3xl">domain</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">
              <Trans k="step1_title" />
            </h4>
            <p className="text-sm text-gray-400">
              <Trans k="step1_desc" />
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:border-brand-cyan/50 transition-colors group">
            <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-brand-cyan text-3xl">data_object</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">
              <Trans k="step2_title" />
            </h4>
            <p className="text-sm text-gray-400">
              <Trans k="step2_desc" />
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl text-center hover:border-brand-cyan/50 transition-colors group">
            <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="material-icons-outlined text-brand-accent text-3xl">trending_up</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">
              <Trans k="step3_title" />
            </h4>
            <p className="text-sm text-gray-400">
              <Trans k="step3_desc" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
