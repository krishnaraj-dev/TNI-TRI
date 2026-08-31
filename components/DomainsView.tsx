'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import domainsData from '@/content/domains.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  BarChart2,
  ShieldCheck,
  Search
} from 'lucide-react';

export function DomainsView() {
  const [selectedDomainId, setSelectedDomainId] = useState<string>('01');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDomains = domainsData.domains.filter((d) => {
    const q = searchQuery.toLowerCase();
    return (
      d.name.toLowerCase().includes(q) ||
      d.coreQuestion.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    );
  });

  const selectedDomain = domainsData.domains.find((d) => d.id === selectedDomainId) || domainsData.domains[0];

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <Breadcrumb
        items={[{ label: '10 Domains', href: '/domains' }]}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {domainsData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {domainsData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {domainsData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {domainsData.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Domain Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Capability Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#002d62]">
                Comprehensive 10-Domain Registry
              </h2>
            </div>

            {/* Live Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search domains or focus areas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Active Domain Detailed Spotlight */}
          {selectedDomain && (
            <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#07192d] to-[#002d62] text-white border border-slate-700 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-mono font-black text-sm">
                    DOMAIN {selectedDomain.id}
                  </span>
                  <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">
                    Pillar Identification: {selectedDomain.number}
                  </span>
                </div>
                <div className="bg-blue-950/80 border border-blue-800 px-4 py-2 rounded-xl text-right">
                  <span className="text-[10px] text-slate-400 font-mono block">CORE DIAGNOSTIC INQUIRY</span>
                  <span className="text-base sm:text-lg font-bold text-sky-300">
                    &ldquo;{selectedDomain.coreQuestion}&rdquo;
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                {selectedDomain.name}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8 max-w-4xl">
                {selectedDomain.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-700/80">
                {/* Focus Areas */}
                <div className="bg-slate-900/70 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>Primary Scrutiny & Focus Areas</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    {selectedDomain.keyFocusAreas.map((fa, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono font-bold mt-0.5">•</span>
                        <span>{fa}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Metrics / Evidence Indicators */}
                <div className="bg-slate-900/70 rounded-xl p-5 border border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-3">
                    <BarChart2 className="w-4 h-4 text-sky-400" />
                    <span>Key Telemetry & Diagnostic Metrics</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    {selectedDomain.diagnosticMetrics.map((km, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-400 font-mono font-bold mt-0.5">•</span>
                        <span>{km}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Domain Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDomains.map((dom) => {
              const isSelected = dom.id === selectedDomainId;
              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomainId(dom.id)}
                  className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-blue-50/70 border-[#002d62] ring-2 ring-[#002d62]/20 shadow-md'
                      : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span
                        className={`text-xs font-mono font-extrabold px-2.5 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#002d62] text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {dom.number}
                      </span>
                      <span className="text-xs font-bold text-amber-700 italic">
                        &ldquo;{dom.coreQuestion}&rdquo;
                      </span>
                    </div>

                    <h4
                      className={`text-base font-black mb-1.5 transition-colors ${
                        isSelected ? 'text-[#002d62]' : 'text-slate-900 group-hover:text-blue-900'
                      }`}
                    >
                      {dom.name}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {dom.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold">
                    <span className={isSelected ? 'text-[#002d62]' : 'text-slate-500'}>
                      {dom.keyFocusAreas.length} Focus Areas
                    </span>
                    <span
                      className={`flex items-center gap-1 ${
                        isSelected ? 'text-[#002d62]' : 'text-slate-400 group-hover:text-slate-700'
                      }`}
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-2xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white mb-1">
              Ready to assess your organisation across all 10 domains?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Complete the registration dossier to schedule your enterprise diagnostic evaluation.
            </p>
          </div>
          <Link
            href="/register"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-amber-500 hover:to-orange-600 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Initiate Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
