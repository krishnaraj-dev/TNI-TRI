import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import homeData from '@/content/home.json';
import siteMeta from '@/content/site-meta.json';
import { ThreeLayerDiagram } from '@/components/ThreeLayerDiagram';
import { ReadinessScaleViewer } from '@/components/ReadinessScaleViewer';
import { EvidenceViewer } from '@/components/EvidenceViewer';
import { DecisionMatrix } from '@/components/DecisionMatrix';
import { InteractiveDiagnostic } from '@/components/InteractiveDiagnostic';
import { AssessmentServiceSchema, ItemListSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Compass,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  TrendingUp,
  Target,
  Sparkles,
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Building2,
  Users,
  Zap
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'TNI²TRI 2026 — Industrial Intelligence & Transformation Readiness System',
  description:
    'An Intelligence-to-Transformation System for Industries: TNIIIRBI (What is happening) → TNITRI (Where you stand) → TNI²TRI (What to do next). Know where you stand and what must change.',
  path: '/',
  keywords: [
    'Tamil Nadu Industrial Policy',
    'Industrial Capability Assessment 2026',
    'TNIIIRBI',
    'TNITRI',
    'TNI2TRI',
    'Industry 4.0 Assessment',
  ],
});

export default function HomePage() {
  const domainItems = homeData.domainsSection.domains.map((d) => ({
    name: `Domain ${d.id}: ${d.name}`,
    description: d.question,
    url: `/domains#domain-${d.id}`,
  }));

  return (
    <div className="w-full flex flex-col space-y-16 sm:space-y-24 pb-20">
      <AssessmentServiceSchema />
      <ItemListSchema
        name="10 Industrial Transformation Domains"
        description="The multi-dimensional evaluation scope of the TNI²TRI framework"
        items={domainItems}
      />

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#07192d] text-white pt-12 sm:pt-20 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-circuit-subtle border-b border-slate-800">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>{homeData.hero.eyebrow}</span>
            </div>

            {/* Title */}
            <h1 className="text-3.5xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white text-balance">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-200">
                Know Where You Stand.
              </span>
              <br />
              <span className="text-amber-400">
                Know What Must Change.
              </span>
              <br />
              <span className="text-sky-300">
                Know What to Do Next.
              </span>
            </h1>

            {/* Description */}
            <div className="mt-6 text-slate-300 text-base sm:text-xl leading-relaxed space-y-4 max-w-3xl">
              <p>
                TNI²TRI 2026 brings <strong className="text-white font-semibold">industrial intelligence</strong>, <strong className="text-white font-semibold">transformation-readiness assessment</strong> and <strong className="text-white font-semibold">structured implementation</strong> into one continuous framework.
              </p>
              <p className="text-sm sm:text-base text-slate-400">
                It helps industries understand their current capabilities, identify critical gaps and dependencies, determine transformation readiness, prioritise what matters most, and establish a practical direction for the next stage of growth and transformation.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={homeData.hero.primaryCTA.href}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 text-sm sm:text-base font-extrabold px-7 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>{homeData.hero.primaryCTA.label}</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </Link>

              <Link
                href={homeData.hero.secondaryCTA.href}
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-slate-100 text-sm sm:text-base font-bold px-6 py-4 rounded-xl border border-slate-700 transition-all"
              >
                <span>{homeData.hero.secondaryCTA.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Key Statistics Bar */}
            <div className="mt-14 pt-8 border-t border-slate-800/90 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {homeData.hero.stats.map((st) => (
                <div key={st.label} className="border-l-2 border-amber-400/80 pl-3.5">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">{st.value}</div>
                  <div className="text-xs font-bold text-slate-300 mt-0.5">{st.label}</div>
                  <div className="text-[11px] text-slate-400 hidden sm:block">{st.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOME HIGHLIGHT WIDGETS 01, 02, 03 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Widget 01: TNIIIRBI */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  {homeData.highlightWidgets[0].layer} • {homeData.highlightWidgets[0].badge}
                </span>
                <Cpu className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {homeData.highlightWidgets[0].title}
              </h3>
              <h4 className="text-lg font-extrabold text-[#002d62] mb-3">
                {homeData.highlightWidgets[0].headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {homeData.highlightWidgets[0].description}
              </p>
            </div>
            <Link
              href={homeData.highlightWidgets[0].href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform"
            >
              <span>{homeData.highlightWidgets[0].ctaLabel}</span>
            </Link>
          </div>

          {/* Widget 02: TNITRI */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-sky-100 text-[#002d62] border border-sky-300">
                  {homeData.highlightWidgets[1].layer} • {homeData.highlightWidgets[1].badge}
                </span>
                <Layers className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {homeData.highlightWidgets[1].title}
              </h3>
              <h4 className="text-lg font-extrabold text-[#002d62] mb-3">
                {homeData.highlightWidgets[1].headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {homeData.highlightWidgets[1].description}
              </p>
            </div>
            <Link
              href={homeData.highlightWidgets[1].href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-[#002d62] pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform"
            >
              <span>{homeData.highlightWidgets[1].ctaLabel}</span>
            </Link>
          </div>

          {/* Widget 03: TNI²TRI */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 border border-emerald-300">
                  {homeData.highlightWidgets[2].layer} • {homeData.highlightWidgets[2].badge}
                </span>
                <Compass className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {homeData.highlightWidgets[2].title}
              </h3>
              <h4 className="text-lg font-extrabold text-[#002d62] mb-3">
                {homeData.highlightWidgets[2].headline}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {homeData.highlightWidgets[2].description}
              </p>
            </div>
            <Link
              href={homeData.highlightWidgets[2].href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform"
            >
              <span>{homeData.highlightWidgets[2].ctaLabel}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. HOME SECTION — THE CHALLENGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Home Section — The Challenge
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] tracking-tight leading-tight mt-2 mb-4">
              {homeData.challengeSection.heading}
            </h2>
            <div className="text-slate-600 text-sm sm:text-base space-y-3 leading-relaxed">
              {homeData.challengeSection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Contrast: The Old Way vs The TNI²TRI Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* The Conventional Way */}
            <div className="p-6 rounded-xl border border-rose-200 bg-rose-50/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block mb-2">
                  Conventional Failure Pattern
                </span>
                <h4 className="text-base sm:text-lg font-bold text-rose-950 mb-2">
                  Instead of asking:
                </h4>
                <div className="text-lg sm:text-xl font-mono font-bold text-rose-900 bg-white/80 p-3 rounded-lg border border-rose-200">
                  &ldquo;{homeData.challengeSection.contrast.oldWay.question}&rdquo;
                </div>
              </div>
              <p className="text-xs text-rose-700/90 mt-4">
                Leads to misaligned CapEx, shelfware software, and unadopted tools.
              </p>
            </div>

            {/* The TNI²TRI Sequence */}
            <div className="p-6 rounded-xl border border-emerald-300 bg-emerald-50/50 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  The TNI²TRI Diagnostic Sequence
                </span>
                <h4 className="text-base sm:text-lg font-bold text-emerald-950 mb-2">
                  TNI²TRI begins by asking:
                </h4>
                <div className="text-lg sm:text-xl font-bold text-[#002d62] bg-white p-3 rounded-lg border border-emerald-200 mb-3">
                  &ldquo;{homeData.challengeSection.contrast.newWay.primaryQuestion}&rdquo;
                </div>
                <div className="text-xs font-semibold text-slate-700 mb-1.5">Then systematically investigating:</div>
                <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                  {homeData.challengeSection.contrast.newWay.followUpQuestions.map((q) => (
                    <li key={q} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Highlight Statement Banner */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-bold text-slate-100">
                {homeData.challengeSection.highlightStatement}
              </span>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-white transition-colors flex-shrink-0"
            >
              <span>Learn Our Philosophy</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOME SECTION — THE SYSTEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="system-architecture-section">
        <ThreeLayerDiagram />
      </section>

      {/* 5. HOME SECTION — 10 DOMAINS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Home Section — 10 Domains
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] tracking-tight mt-1 mb-2">
                {homeData.domainsSection.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {homeData.domainsSection.description}
              </p>
            </div>
            <Link
              href={homeData.domainsSection.ctaHref}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-[#002d62] hover:bg-[#07192d] px-5 py-2.5 rounded-lg shadow-sm transition-colors flex-shrink-0"
            >
              <span>{homeData.domainsSection.ctaLabel}</span>
            </Link>
          </div>

          {/* Grid of 10 Domain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {homeData.domainsSection.domains.map((dom) => (
              <Link
                key={dom.id}
                href={`/domains#domain-${dom.id}`}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-blue-50/50 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#0284c7] transition-colors mb-1.5">
                    Domain {dom.id}
                  </div>
                  <h4 className="text-sm font-extrabold text-[#002d62] mb-2 group-hover:text-blue-900 transition-colors">
                    {dom.name}
                  </h4>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200/80">
                  <div className="text-[11px] font-semibold text-slate-600 italic">
                    &ldquo;{dom.question}&rdquo;
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE ASSESSMENT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="interactive-diagnostic">
        <InteractiveDiagnostic />
      </section>

      {/* 7. HOME HIGHLIGHT WIDGET — ADAPTIVE ASSESSMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Home Highlight Widget — Adaptive Assessment
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2">
              {homeData.adaptiveAssessmentWidget.title} <span className="text-sky-300">{homeData.adaptiveAssessmentWidget.subtitle}</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {homeData.adaptiveAssessmentWidget.description}
            </p>
          </div>

          {/* Sequential Flow */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {homeData.adaptiveAssessmentWidget.flow.map((st, i) => (
              <div
                key={st.step}
                className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3.5 text-center relative"
              >
                <div className="text-[10px] font-mono text-amber-400 font-bold mb-1">
                  STAGE {st.step}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-white">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm font-semibold text-amber-300">
              💡 {homeData.adaptiveAssessmentWidget.highlight}
            </div>
            <Link
              href={homeData.adaptiveAssessmentWidget.ctaHref}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors flex-shrink-0"
            >
              <span>{homeData.adaptiveAssessmentWidget.ctaLabel}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HOME HIGHLIGHT WIDGET — EVIDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="evidence-section">
        <EvidenceViewer />
      </section>

      {/* 9. HOME SECTION — DIAGNOSIS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Home Section — Diagnosis
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-2">
              {homeData.diagnosisSection.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {homeData.diagnosisSection.description}
            </p>
          </div>

          {/* Diagnostic Flow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
            {homeData.diagnosisSection.flow.map((f, i) => (
              <div
                key={f.step}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-slate-400 mb-1">
                    STEP 0{i + 1}
                  </div>
                  <h4 className="text-sm font-extrabold text-[#002d62] mb-1">
                    {f.step}
                  </h4>
                  <p className="text-xs text-slate-600 leading-snug">
                    {f.desc}
                  </p>
                </div>
                {i < homeData.diagnosisSection.flow.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-400 font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-[#002d62] text-center">
            &ldquo;{homeData.diagnosisSection.highlightStatement}&rdquo;
          </div>
        </div>
      </section>

      {/* 10. HOME SECTION — READINESS (R0-R5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="readiness-section">
        <ReadinessScaleViewer showPillars={true} />
      </section>

      {/* 11. HOME SECTION — PRIORITY & TRANSFORMATION LOGIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Priority Section */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Home Section — Priority
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#002d62] mt-1 mb-2">
                {homeData.prioritySection.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {homeData.prioritySection.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                Priorities Consider:
              </h4>

              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {homeData.prioritySection.considerations.map((item) => (
                  <div
                    key={item}
                    className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60 text-xs font-bold text-slate-800 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900">
              💡 {homeData.prioritySection.highlight}
            </div>
          </div>

          {/* Transformation Logic Widget */}
          <div className="bg-[#07192d] text-white rounded-2xl border border-slate-800 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
                Home Highlight Widget
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1 mb-1">
                {homeData.transformationLogicWidget.title}
              </h3>
              <p className="text-xs text-slate-300 font-mono mb-4">
                {homeData.transformationLogicWidget.subtitle}
              </p>

              <div className="space-y-2 mb-6">
                {homeData.transformationLogicWidget.chain.map((c, i) => (
                  <div
                    key={c.stage}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70 flex items-center justify-between text-xs"
                  >
                    <span className="font-extrabold text-amber-300">{c.stage}</span>
                    <span className="text-slate-300 italic font-medium">&ldquo;{c.question}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 text-center font-mono">
              Intelligence → Readiness → Transformation → Impact → Reassessment
            </div>
          </div>
        </div>
      </section>

      {/* 12. HOME SECTION — TRANSFORMATION CONTROL (6 Decisions) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <DecisionMatrix />
      </section>

      {/* 13. HOME SECTION — OUTCOMES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Home Section — Outcomes
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-2">
                {homeData.outcomesSection.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {homeData.outcomesSection.subtitle}
              </p>
            </div>
            <Link
              href={homeData.outcomesSection.ctaHref}
              className="inline-flex items-center gap-2 bg-[#002d62] hover:bg-[#07192d] text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm transition-colors flex-shrink-0"
            >
              <span>{homeData.outcomesSection.ctaLabel}</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {homeData.outcomesSection.items.map((out, i) => (
              <Link
                key={out}
                href="/outcomes"
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all flex items-center gap-2.5 group"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#002d62]">
                  {out}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 14. HOME SECTION — CONTINUOUS TRANSFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-2xl p-6 sm:p-10 border border-slate-800 text-center relative overflow-hidden">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
            Home Section — Continuous Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-4">
            {homeData.continuousTransformationSection.title}
          </h2>

          {/* Loop Diagram */}
          <div className="max-w-4xl mx-auto my-6 p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-xs sm:text-sm font-bold text-sky-300 font-mono tracking-wide leading-relaxed">
            {homeData.continuousTransformationSection.loop}
          </div>

          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            &ldquo;{homeData.continuousTransformationSection.coreStatement}&rdquo;
          </p>
        </div>
      </section>

      {/* 15. HOME SECTION — WHY & WHO SHOULD PARTICIPATE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Why Participate */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Home Section — Why Participate?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#002d62] mt-1 mb-2">
              {homeData.whyParticipateSection.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">{homeData.whyParticipateSection.intro}</p>

            <ul className="space-y-2 mb-6">
              {homeData.whyParticipateSection.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-bold text-[#002d62]">
              {homeData.whyParticipateSection.highlight}
            </div>
          </div>

          {/* Who Should Participate */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
                Home Section — Who Should Participate?
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#002d62] mt-1 mb-2">
                {homeData.whoShouldParticipateSection.title}
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                {homeData.whoShouldParticipateSection.relevanceIntro}
              </p>

              {/* Context Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {homeData.whoShouldParticipateSection.contexts.map((c) => (
                  <span
                    key={c}
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-800"
                  >
                    • {c}
                  </span>
                ))}
              </div>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                {homeData.whoShouldParticipateSection.leadersIntro}:
              </h4>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {homeData.whoShouldParticipateSection.leaders.map((ldr) => (
                  <span
                    key={ldr}
                    className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900"
                  >
                    {ldr}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/participate"
              className="inline-flex items-center justify-center gap-2 bg-[#002d62] hover:bg-[#07192d] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all"
            >
              <span>Explore Participation Criteria</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 16. HOME FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-br from-[#002d62] to-[#07192d] text-white rounded-3xl p-8 sm:p-14 text-center border border-blue-900 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Home Final CTA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {homeData.finalCTA.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8">
              {homeData.finalCTA.subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={homeData.finalCTA.primaryCTA.href}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 text-sm sm:text-base font-extrabold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>{homeData.finalCTA.primaryCTA.label}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href={homeData.finalCTA.secondaryCTA.href}
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-100 text-sm sm:text-base font-bold px-7 py-4 rounded-xl border border-slate-700 transition-all"
              >
                <span>{homeData.finalCTA.secondaryCTA.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
