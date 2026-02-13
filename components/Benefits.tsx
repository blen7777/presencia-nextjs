'use client';

import { Trans } from './Trans';
import Image from 'next/image';

export function Benefits() {
  return (
    <section id="que-es" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-testid="benefits-section">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-display font-bold text-white">
          <Trans k="benefits_title" />
          <br />
          <Trans k="benefits_title_sub" />
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
        {/* Priority Access - Large Card */}
        <div className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-brand-cyan/30 transition-colors flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="h-12 w-12 bg-brand-blue rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,106,213,0.4)]">
              <span className="material-icons-outlined text-white">token</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">
              <Trans k="benefit1_title" />
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              <Trans k="benefit1_desc" />
            </p>
          </div>

          <div className="relative z-10 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md max-w-sm ml-auto mr-0 transform group-hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4 opacity-40">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="material-icons-outlined text-sm">public</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Public Sale</p>
                    <p className="text-[10px]">Starts in 48h</p>
                  </div>
                </div>
                <span className="material-icons-outlined text-gray-400">lock</span>
              </div>

              <div className="h-px w-full bg-white/10 mb-4"></div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center">
                    <span className="material-icons-outlined text-sm text-brand-cyan">verified_user</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white">Waitlist Access</p>
                    <p className="text-[10px] text-brand-cyan font-bold animate-pulse">Open Now</p>
                  </div>
                </div>
                <span className="material-icons-outlined text-brand-cyan">lock_open</span>
              </div>
            </div>
          </div>

          <span className="material-icons-outlined text-9xl text-white opacity-[0.02] absolute -top-4 -right-4 pointer-events-none transform -rotate-12">
            apartment
          </span>
        </div>

        {/* Rank Up Card */}
        <div className="glass-card rounded-3xl p-8 hover:border-brand-cyan/30 transition-colors bg-gradient-to-br from-brand-surface to-brand-cyan/5">
          <div className="h-10 w-10 bg-brand-accent/20 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons-outlined text-brand-accent">military_tech</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            <Trans k="benefit2_title" />
          </h4>
          <p className="text-gray-400 text-sm">
            <Trans k="benefit2_desc" />
          </p>
        </div>

        {/* Liquidity Card */}
        <div className="glass-card rounded-3xl p-8 hover:border-brand-cyan/30 transition-colors">
          <div className="h-10 w-10 bg-brand-cyan/20 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons-outlined text-brand-cyan">payments</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">
            <Trans k="benefit3_title" />
          </h4>
          <p className="text-gray-400 text-sm">
            <Trans k="benefit3_desc" />
          </p>
        </div>
      </div>
    </section>
  );
}
