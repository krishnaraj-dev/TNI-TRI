import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import participateData from '@/content/participate.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import { BreadcrumbSchema, ItemListSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Users,
  Target,
  ShieldCheck,
  Building,
  TrendingUp,
  Layers
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Participate in TNI²TRI 2026 — Eligibility, Leadership Roles & Strategic Benefits',
  description:
    'Information for enterprises, MDs, plant heads, CIOs, and transformation leads on participating in the TNI²TRI 2026 industrial assessment and intelligence cohort.',
  path: '/participate',
  keywords: [
    'TNI2TRI Participation',
    'Industrial Enterprise Transformation Cohort',
    'Manufacturing Leadership Assessment',
    'Tamil Nadu Industrial Readiness Program',
    'MSME and Enterprise Eligibility',
  ],
});

export default function ParticipatePage() {
  const goalItems = participateData.whoShouldParticipate.goals.map((g) => ({
    name: g.label,
    description: g.desc,
  }));

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <BreadcrumbSchema
        items={[{ name: 'Participate', item: '/participate' }]}
      />
      <ItemListSchema
        name="Target Transformation Contexts & Goals"
        description="Organizational contexts and mandates qualified for TNI²TRI assessment"
        items={goalItems}
      />
      <Breadcrumb
        items={[{ label: 'Participate', href: '/participate' }]}
        pageNumber="PAGE 07 — PARTICIPATE"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {participateData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {participateData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {participateData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Join leading industrial enterprises, manufacturing conglomerates, and forward-looking MSMEs across Tamil Nadu in building data-grounded institutional transformation capacity.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 text-sm font-extrabold px-6 py-3 rounded-xl shadow transition-all"
            >
              <span>APPLY FOR ASSESSMENT ONBOARDING</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who Should Participate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Organizational Mandates
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-2">
              {participateData.whoShouldParticipate.title}
            </h2>
            <p className="text-sm text-slate-600">
              {participateData.whoShouldParticipate.intro}
            </p>
          </div>

          {/* 12 Contexts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {participateData.whoShouldParticipate.goals.map((g) => (
              <div
                key={g.label}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-blue-50/50 hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-[#002d62] mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>{g.label}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership Roles */}
          <div className="border-t border-slate-100 pt-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block">
              {participateData.whoShouldParticipate.targetAudience.title}:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {participateData.whoShouldParticipate.targetAudience.roles.map((r) => (
                <div
                  key={r.title}
                  className="p-4 rounded-xl border border-amber-200 bg-amber-50/40"
                >
                  <h4 className="text-xs sm:text-sm font-extrabold text-amber-950 mb-1">
                    {r.title}
                  </h4>
                  <p className="text-xs text-slate-700 leading-snug">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Strategic Return on Diagnosis
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-1 mb-2">
              {participateData.whyParticipate.title}
            </h2>
            <p className="text-sm text-slate-600">
              {participateData.whyParticipate.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {participateData.whyParticipate.reasons.map((r) => (
              <div
                key={r}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">{r}</span>
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold text-center border border-slate-800">
            💡 {participateData.whyParticipate.highlight}
          </div>
        </div>
      </section>

      {/* What to Expect (6 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Assessment Standards
            </span>
            <h2 className="text-2xl sm:text-3.5xl font-black text-white mt-1 mb-2">
              {participateData.whatToExpect.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {participateData.whatToExpect.pillars.map((p) => (
              <div
                key={p.title}
                className="bg-slate-900/80 border border-slate-700 rounded-xl p-5"
              >
                <h4 className="text-base font-bold text-amber-400 mb-2">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
