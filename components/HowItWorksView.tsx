'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import howItWorksData from '@/content/how-it-works.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Workflow
} from 'lucide-react';

export function HowItWorksView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Foundation', 'Diagnosis', 'Strategy', 'Mobilization', 'Execution', 'Evolution'];

  const filteredLifecycle = selectedCategory === 'All'
    ? howItWorksData.lifecycle
    : howItWorksData.lifecycle.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <Breadcrumb
        items={[{ label: 'How It Works', href: '/how-it-works' }]}
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {howItWorksData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {howItWorksData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {howItWorksData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {howItWorksData.description}
            </p>
          </div>
        </div>
      </section>

      {/* 13 Lifecycle Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Systematic Progression
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002d62]">
                The 13-Stage Transformation Lifecycle
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-white text-[#002d62] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Lifecycle Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLifecycle.map((item) => (
              <div
                key={item.step}
                className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded bg-[#002d62] text-white">
                      Stage {item.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200/80 text-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#002d62] mb-1 group-hover:text-blue-900 transition-colors">
                    {item.name}
                  </h3>

                  <div className="text-xs font-bold text-amber-700 mb-3 italic">
                    &ldquo;{item.tagline}&rdquo;
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Lifecycle Sequence</span>
                  <span className="text-[#0284c7] font-mono">0{item.step} / 13</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Operating Principle (7 Questions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Operational Governance
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-white mt-1 mb-2">
              {howItWorksData.operatingPrinciple.title}
            </h2>
            <div className="text-xs sm:text-sm font-mono text-sky-300 mb-3">
              {howItWorksData.operatingPrinciple.subtitle}
            </div>
            <p className="text-slate-300 text-sm">
              {howItWorksData.operatingPrinciple.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {howItWorksData.operatingPrinciple.questions.map((q) => (
              <div
                key={q.id}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="text-amber-400 font-mono text-xs font-bold mb-1">
                    Question 0{q.id}
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-white mb-2">
                    &ldquo;{q.question}&rdquo;
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm text-slate-300 font-medium">
              Every TNI²TRI transformation initiative answers all seven questions with verified evidence before execution.
            </span>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 px-5 py-2.5 rounded-lg transition-all flex-shrink-0"
            >
              <span>Start Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
