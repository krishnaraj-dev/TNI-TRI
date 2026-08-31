'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import outcomesData from '@/content/outcomes.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import { DecisionMatrix } from '@/components/DecisionMatrix';
import {
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles,
  FileSpreadsheet,
  BarChart4,
  Network,
  ShieldAlert,
  GitPullRequest,
  CheckSquare,
  FileCheck2
} from 'lucide-react';

export function OutcomesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Diagnostic Clarity', 'Risk & Gap Analysis', 'Transformation Architecture', 'Implementation & Control'];

  const filtered = selectedCategory === 'All'
    ? outcomesData.deliverables
    : outcomesData.deliverables.filter((d) => d.category === selectedCategory);

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <Breadcrumb
        items={[{ label: 'Outcomes', href: '/outcomes' }]}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {outcomesData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {outcomesData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {outcomesData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {outcomesData.intro}
            </p>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 text-sm font-extrabold px-6 py-3 rounded-xl shadow transition-all"
            >
              <span>REQUEST ENTERPRISE DIAGNOSTIC DOSSIER</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Deliverables Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Concrete Assets
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002d62]">
                Key Deliverables & Decision Frameworks
              </h2>
            </div>

            {/* Filter Pills */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded bg-blue-100 text-[#002d62] border border-blue-200">
                      DELIVERABLE {item.id}
                    </span>
                    <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#002d62] mb-1 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-amber-700 mb-3 italic">
                    &ldquo;{item.subtitle}&rdquo;
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-mono text-[#0284c7] font-bold">
                  Artifact Status: Verified Output
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Matrix Interactive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <DecisionMatrix />
      </section>
    </div>
  );
}
