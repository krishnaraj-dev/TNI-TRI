'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowDown, CheckCircle2, ChevronRight, Layers, Cpu, Compass, ArrowRight } from 'lucide-react';

export function ThreeLayerDiagram() {
  const [activeLayer, setActiveLayer] = useState<'TNIIIRBI' | 'TNITRI' | 'TNI2TRI'>('TNITRI');

  const layers = [
    {
      id: 'TNIIIRBI' as const,
      code: 'TNIIIRBI',
      name: 'Industrial Intelligence',
      question: 'What is happening?',
      tagline: 'Context, Market Dynamics, Sector Trends & Benchmarking',
      description:
        'Industrial intelligence creates the macroscopic and sector-specific context required to understand the organization and its environment. It monitors shifts in global value networks, supply chains, emerging technology inflection points, regulatory policies, and competitive baselines.',
      deliverable: 'Sector intelligence briefs, market opportunity maps, policy trend analyses.',
      color: 'border-amber-400 bg-amber-50/70',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      accentColor: 'text-amber-600',
      icon: Cpu,
      next: 'Feeds environmental data & benchmarks into'
    },
    {
      id: 'TNITRI' as const,
      code: 'TNITRI',
      name: 'Transformation Readiness Intelligence',
      question: 'Where are we now, and what are we ready for?',
      tagline: 'Multi-Domain Diagnosis, Evidence Grounding & Readiness Calibration',
      description:
        'Assesses current capability across 10 interconnected industrial domains. Distinguishes self-reported claims from verified evidence (C0–C3), separates surface symptoms from root causes, uncovers systemic dependencies, and scores institutional readiness across 8 strategic dimensions (R0–R5).',
      deliverable: 'Diagnostic profile, maturity heatmaps, dependency trees, calibrated readiness index.',
      color: 'border-sky-500 bg-sky-50/70',
      badgeColor: 'bg-sky-100 text-[#002d62] border-sky-300',
      accentColor: 'text-sky-600',
      icon: Layers,
      next: 'Establishes baseline clarity & verified priorities for'
    },
    {
      id: 'TNI2TRI' as const,
      code: 'TNI²TRI',
      name: 'Transformation Intelligence & Implementation',
      question: 'What should we do next, and how should we transform?',
      tagline: 'Prioritization, Resource Allocation, Roadmapping & Agile Execution',
      description:
        'Connects verified intelligence and readiness with strict decision discipline (Continue, Modify, Pause, Stop, Reset, Restart). Formulates phased execution roadmaps, aligns CapEx and human resources, establishes leading/lagging KPIs, and structures the continuous learning and reassessment feedback loop.',
      deliverable: '13 actionable transformation deliverables, resource blueprint, continuous reassessment cycle.',
      color: 'border-emerald-500 bg-emerald-50/70',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      accentColor: 'text-emerald-600',
      icon: Compass,
      next: 'Loops continuous impact & learning back into'
    }
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8" id="three-layer-system-widget">
      {/* Top Architecture Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
            System Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#002d62] tracking-tight">
            Three Connected Layers. One Transformation Journey.
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
          {layers.map((l) => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeLayer === l.id
                  ? 'bg-white text-[#002d62] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {l.code}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Stack Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {layers.map((layer, idx) => {
          const isSelected = activeLayer === layer.id;
          const Icon = layer.icon;

          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`cursor-pointer rounded-xl border-2 p-5 sm:p-6 transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? `${layer.color} shadow-md scale-[1.01]`
                  : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border ${layer.badgeColor}`}>
                    Layer 0{idx + 1} • {layer.code}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? layer.accentColor : 'text-slate-400'}`} />
                </div>

                <h4 className="text-lg font-bold text-[#002d62] mb-1">
                  {layer.name}
                </h4>

                <div className="text-xs font-semibold text-slate-700 bg-white/80 border border-slate-200/60 rounded-md px-2.5 py-1.5 mb-3 inline-block">
                  Question: <span className="text-[#002d62] font-bold">&ldquo;{layer.question}&rdquo;</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {layer.tagline}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#002d62]">
                <span>{isSelected ? 'Currently Viewing' : 'Click to Inspect'}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Layer Deep Dive Panel */}
      {(() => {
        const current = layers.find((l) => l.id === activeLayer) || layers[0];
        const Icon = current.icon;
        return (
          <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-600/20 text-sky-400 rounded-lg border border-blue-500/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
                      {current.code} Architecture Focus
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white">
                      {current.name}
                    </h4>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-mono">CORE INQUIRY</div>
                  <div className="text-sm sm:text-base font-bold text-sky-300">
                    &ldquo;{current.question}&rdquo;
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-4xl">
                {current.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                  <span className="text-slate-400 font-semibold block mb-1">Key Deliverables:</span>
                  <span className="text-slate-200 font-medium">{current.deliverable}</span>
                </div>
                <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                  <span className="text-slate-400 font-semibold block mb-1">Sequential Connection:</span>
                  <span className="text-amber-300 font-medium">{current.next}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Integrated into continuous TNI²TRI 2026 assessment master</span>
                </div>
                
                <Link
                  href={current.id === 'TNIIIRBI' ? '/about#tniiirbi' : current.id === 'TNITRI' ? '/assessment' : '/how-it-works'}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white bg-blue-900/50 hover:bg-blue-800/80 px-4 py-2 rounded-lg border border-blue-700/50 transition-colors"
                >
                  <span>Explore Full {current.code} Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
