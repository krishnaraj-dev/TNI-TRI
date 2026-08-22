'use client';

import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Gauge, ShieldCheck, Target, TrendingUp } from 'lucide-react';

interface ReadinessScaleViewerProps {
  showPillars?: boolean;
}

export function ReadinessScaleViewer({ showPillars = true }: ReadinessScaleViewerProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('R3');

  const scales = [
    {
      code: 'R0',
      name: 'Not Ready',
      subtitle: 'Absence of baseline conditions',
      description: 'Lack of prerequisite structural clarity, missing executive mandate, undefined operational metrics, or severe foundational gaps preventing active execution.',
      color: 'border-red-300 bg-red-50/50 text-red-900',
      badge: 'bg-red-100 text-red-800 border-red-200',
      action: 'Conduct foundational awareness, resolve critical legal/safety compliance, and appoint transformational leadership.'
    },
    {
      code: 'R1',
      name: 'Aware',
      subtitle: 'Recognition of transformation need',
      description: 'Management recognizes existing capability constraints and external market threats, but has not yet formulated structured diagnostic baselines or dedicated resource commitments.',
      color: 'border-orange-300 bg-orange-50/50 text-orange-900',
      badge: 'bg-orange-100 text-orange-800 border-orange-200',
      action: 'Initiate TNI²TRI baseline diagnostic across all 10 domains to convert assumptions into verified evidence.'
    },
    {
      code: 'R2',
      name: 'Preparing',
      subtitle: 'Structuring requirements and resources',
      description: 'Early project teams assigned, initial scoping underway, baseline data collection active, and preliminary resource allocation models drafted.',
      color: 'border-amber-300 bg-amber-50/50 text-amber-900',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      action: 'Map cross-domain dependencies, validate C0 data into C1/C2 evidence, and formulate phased implementation milestones.'
    },
    {
      code: 'R3',
      name: 'Ready',
      subtitle: 'Mobilized for phased transformation',
      description: 'Prerequisite capabilities in place: leadership alignment secure, CapEx budget ringfenced, frontline engagement initiated, and core metrics established.',
      color: 'border-sky-300 bg-sky-50/50 text-sky-900',
      badge: 'bg-sky-100 text-sky-800 border-sky-200',
      action: 'Launch prioritized high-leverage workstreams with bi-weekly gating checkpoints under strict decision control.'
    },
    {
      code: 'R4',
      name: 'Transformation Ready',
      subtitle: 'High maturity & agile execution',
      description: 'Cross-functional operational agility, high evidence confidence across systems, rapid feedback telemetry, and robust change management institutionalized.',
      color: 'border-indigo-300 bg-indigo-50/50 text-indigo-900',
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      action: 'Scale modernization to enterprise-wide ecosystems, automated quality loops, and digital supply network integration.'
    },
    {
      code: 'R5',
      name: 'Transformation Capable',
      subtitle: 'Continuous self-renewing institution',
      description: 'The organization operates as an adaptive learning engine: continuous sensing, proactive pivoting, self-funded transformation loops, and industry-leading resilience.',
      color: 'border-emerald-300 bg-emerald-50/50 text-emerald-900',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      action: 'Maintain continuous intelligence scanning (TNIIIRBI) and drive next-horizon frontier innovation.'
    }
  ];

  const pillars = [
    { name: 'Strategy', desc: 'Clarity of long-term vision, leadership mandate, and competitive positioning.' },
    { name: 'Organisation', desc: 'Operating model agility, role clarity, and cross-functional coordination.' },
    { name: 'Capability', desc: 'Operational throughput, manufacturing engineering, and process discipline.' },
    { name: 'Technology', desc: 'Digital architecture, system interoperability, and data fidelity.' },
    { name: 'People', desc: 'Frontline and managerial competencies, upskilling capacity, and culture.' },
    { name: 'Finance', desc: 'Capital allocation discipline, cash conversion velocity, and CapEx ROI.' },
    { name: 'Resources', desc: 'Physical equipment bandwidth, supply chains, and technical tools.' },
    { name: 'Risk & Leadership', desc: 'Enterprise risk controls, governance oversight, and crisis resilience.' }
  ];

  const active = scales.find((s) => s.code === selectedLevel) || scales[3];

  return (
    <div className="w-full space-y-8" id="readiness-scale-module">
      {/* Scale Step Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Diagnostic Metric
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#002d62]">
              The R0 → R5 Transformation Readiness Scale
            </h3>
          </div>
          <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
            Interactive Scale Explorer
          </div>
        </div>

        {/* Horizontal Visual Progression Tracker */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6">
          {scales.map((s, idx) => {
            const isCurrent = s.code === selectedLevel;
            return (
              <button
                key={s.code}
                onClick={() => setSelectedLevel(s.code)}
                className={`p-3.5 rounded-xl border-2 text-left transition-all duration-150 flex flex-col justify-between ${
                  isCurrent
                    ? `${s.color} border-current shadow-md ring-2 ring-blue-500/20 scale-[1.02]`
                    : 'border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 text-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-extrabold px-2 py-0.5 rounded border ${s.badge}`}>
                    {s.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">0{idx}</span>
                </div>
                <div className="font-bold text-xs sm:text-sm tracking-tight leading-snug">
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Box for the Active Scale */}
        <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span className={`text-sm font-extrabold px-3 py-1 rounded-md border ${active.badge}`}>
                Level {active.code}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                {active.name} — <span className="text-slate-300 font-medium text-sm">{active.subtitle}</span>
              </h4>
            </div>
            <div className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
              <Gauge className="w-4 h-4" />
              <span>Readiness Calibration</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {active.description}
          </p>

          <div className="bg-slate-800/90 rounded-lg p-3.5 border border-slate-700 text-xs sm:text-sm">
            <span className="font-bold text-sky-300">Prescribed Diagnostic Action: </span>
            <span className="text-slate-200">{active.action}</span>
          </div>
        </div>
      </div>

      {/* 8 Readiness Pillars */}
      {showPillars && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Multi-Dimensional Scrutiny
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#002d62]">
              Readiness Evaluated Across 8 Strategic Pillars
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Transformation failure often stems from isolated readiness in technology while remaining unready in governance, workforce, or financial resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, idx) => (
              <div
                key={p.name}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400">Pillar 0{idx + 1}</span>
                  <ShieldCheck className="w-4 h-4 text-[#0284c7] group-hover:scale-110 transition-transform" />
                </div>
                <h5 className="font-bold text-sm text-[#002d62] mb-1">{p.name}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
