'use client';

import React from 'react';
import Link from 'next/link';
import assessmentData from '@/content/assessment.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import { EvidenceViewer } from '@/components/EvidenceViewer';
import { ReadinessScaleViewer } from '@/components/ReadinessScaleViewer';
import { InteractiveDiagnostic } from '@/components/InteractiveDiagnostic';
import {
  ArrowRight,
  Eye,
  Target,
  HelpCircle,
  GitFork,
  AlertTriangle,
  Compass
} from 'lucide-react';

export function AssessmentView() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Eye,
    Target,
    HelpCircle,
    GitFork,
    AlertTriangle,
    Compass
  };

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <Breadcrumb
        items={[{ label: 'Assessment', href: '/assessment' }]}
        pageNumber="PAGE 05 — ASSESSMENT"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {assessmentData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {assessmentData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {assessmentData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {assessmentData.intro}
            </p>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-amber-500 hover:to-orange-600 transition-all shadow-lg"
            >
              <span>Register for Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6-Stage Diagnostic Intelligence Investigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Systematic Method
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002d62]">
              {assessmentData.diagnosticIntelligence.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {assessmentData.diagnosticIntelligence.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {assessmentData.diagnosticIntelligence.pipeline.map((p, idx) => {
              const Icon = iconMap[p.icon] || Target;
              return (
                <div
                  key={p.stage}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-extrabold px-2.5 py-0.5 rounded bg-[#002d62] text-white">
                        Phase 0{idx + 1}
                      </span>
                      <Icon className="w-4 h-4 text-[#0284c7]" />
                    </div>
                    <h4 className="text-base font-black text-[#002d62] mb-1">{p.stage}</h4>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">&ldquo;{p.question}&rdquo;</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-semibold text-[#002d62] text-center">
            &ldquo;{assessmentData.diagnosticIntelligence.highlight}&rdquo;
          </div>
        </div>
      </section>

      {/* Readiness Scale Explorer (R0 to R5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ReadinessScaleViewer />
      </section>

      {/* Evidence Hierarchy (C0 to C3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <EvidenceViewer />
      </section>

      {/* Interactive Sandbox Simulator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <InteractiveDiagnostic />
      </section>
    </div>
  );
}
