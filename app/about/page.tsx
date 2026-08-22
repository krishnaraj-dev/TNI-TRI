import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import aboutData from '@/content/about.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ThreeLayerDiagram } from '@/components/ThreeLayerDiagram';
import { BreadcrumbSchema, ItemListSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import {
  ArrowRight,
  AlertOctagon,
  CheckCircle2,
  Cpu,
  Layers,
  Compass,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About TNI²TRI 2026 — Intelligence-to-Transformation System',
  description:
    'Discover the three interconnected layers of TNI²TRI 2026: TNIIIRBI (Industrial Intelligence) → TNITRI (Readiness Intelligence) → TNI²TRI (Transformation Implementation).',
  path: '/about',
  keywords: [
    'About TNI2TRI',
    '3 Layer Transformation Architecture',
    'TNIIIRBI',
    'TNITRI',
    'TNI2TRI System',
    'Tamil Nadu Industrial Transformation Model',
  ],
});

export default function AboutPage() {
  const layerItems = [
    {
      name: 'Layer 1: TNIIIRBI (Industrial Intelligence)',
      description: 'Answers "What is happening?" by capturing macro, sector, and capability benchmarks.',
      url: '/about#tniiirbi',
    },
    {
      name: 'Layer 2: TNITRI (Readiness Intelligence)',
      description: 'Answers "Where do you stand?" through multi-dimensional diagnostic evaluation.',
      url: '/about#tnitri',
    },
    {
      name: 'Layer 3: TNI²TRI (Transformation Implementation)',
      description: 'Answers "What to do next?" through structured execution, gate reviews, and iterative governance.',
      url: '/about#tni2tri',
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <BreadcrumbSchema
        items={[{ name: 'About TNI²TRI', item: '/about' }]}
      />
      <ItemListSchema
        name="TNI²TRI 3-Layer Sequential Architecture"
        description="The foundational three layers connecting macro intelligence, enterprise readiness, and structured execution"
        items={layerItems}
      />
      <Breadcrumb
        items={[{ label: 'About TNI²TRI', href: '/about' }]}
        pageNumber="PAGE 02 — ABOUT TNI²TRI"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {aboutData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-4">
              {aboutData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-6">
              {aboutData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {aboutData.intro}
            </p>

            <div className="p-4 rounded-xl bg-blue-950/80 border border-blue-800 text-xs sm:text-sm font-mono text-amber-300">
              <strong className="text-white block sm:inline mr-2">{aboutData.systemConnection.headline}</strong>
              {aboutData.systemConnection.chain}
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Purpose & Mandate
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-3">
              {aboutData.purpose.title}
            </h2>
            <div className="text-xl sm:text-2xl font-extrabold text-[#002d62] bg-slate-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
              &ldquo;{aboutData.purpose.headline}&rdquo;
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                The Core Bridge
              </h4>
              <p className="text-base text-slate-700 font-semibold leading-relaxed whitespace-pre-line">
                {aboutData.purpose.description}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Connected Cycle
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {aboutData.purpose.detailedDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Questions: TNIIIRBI / TNITRI / TNI²TRI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="system">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Three Fundamental Inquiries
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-2">
              {aboutData.coreQuestions.title}
            </h2>
            <p className="text-sm text-slate-600">{aboutData.coreQuestions.intro}</p>
          </div>

          <div className="space-y-6">
            {aboutData.coreQuestions.questions.map((q, idx) => (
              <div
                key={q.layer}
                id={q.layer.toLowerCase()}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded bg-slate-200 text-slate-800">
                      Layer 0{idx + 1}
                    </span>
                    <span className="text-sm font-extrabold text-[#0284c7]">
                      {q.layer} — {q.layerName}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#002d62] mb-2">
                    &ldquo;{q.question}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {q.description}
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    href={idx === 0 ? '/resources' : idx === 1 ? '/assessment' : '/how-it-works'}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#002d62] hover:bg-[#07192d] px-4 py-2.5 rounded-lg transition-colors"
                  >
                    <span>Explore Layer Specification</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive System Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ThreeLayerDiagram />
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Foundational Philosophy
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-2">
              {aboutData.philosophy.title}
            </h2>
            <div className="text-lg font-bold text-slate-900 mb-2">
              {aboutData.philosophy.headline}
            </div>
            <p className="text-sm text-slate-600">
              {aboutData.philosophy.statement}
            </p>
          </div>

          {/* 6 Pitfalls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {aboutData.philosophy.pitfalls.map((pf) => (
              <div
                key={pf.title}
                className="p-5 rounded-xl border border-rose-200 bg-rose-50/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-rose-700 font-extrabold text-sm mb-1.5">
                    <AlertOctagon className="w-4 h-4 flex-shrink-0" />
                    <span>{pf.title}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {pf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-4 border border-slate-800">
            <div className="text-xs sm:text-sm font-bold text-amber-300">
              {aboutData.philosophy.conclusion}
            </div>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
            >
              <span>Begin Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Continuous Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Closed-Loop Governance
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-white mt-1 mb-2">
              {aboutData.continuousModel.title}
            </h2>
            <p className="text-sm text-slate-300">
              {aboutData.continuousModel.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {aboutData.continuousModel.stages.map((stg, idx) => (
              <div
                key={stg.name}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 text-center flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-400">STAGE 0{idx + 1}</span>
                  <h4 className="text-xs sm:text-sm font-black text-white mt-1 mb-2">
                    {stg.name}
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    {stg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
