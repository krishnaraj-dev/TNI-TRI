'use client';

import React, { useState } from 'react';
import { Play, RefreshCw, Pause, Square, RotateCcw, FastForward, CheckCircle2 } from 'lucide-react';

export function DecisionMatrix() {
  const [selectedDecision, setSelectedDecision] = useState<string>('CONTINUE');

  const decisions = [
    {
      id: 'CONTINUE',
      name: 'CONTINUE',
      desc: 'Evidence supports progression.',
      detail:
        'Milestone criteria are met, empirical evidence confirms capability uplift, and operational risk metrics remain within defined tolerances. Workstream proceeds to the subsequent execution gate.',
      icon: Play,
      color: 'bg-emerald-50 border-emerald-300 text-emerald-950',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      accent: 'text-emerald-600',
      trigger: 'Positive C2/C3 evidence, KPIs on track, budget variance < 5%.'
    },
    {
      id: 'MODIFY',
      name: 'MODIFY',
      desc: 'The direction remains valid, but the approach needs adjustment.',
      detail:
        'Strategic objective holds true, but operational bottlenecks, vendor underperformance, or technical friction require re-allocating resources, adjusting timelines, or modifying workflow design.',
      icon: RefreshCw,
      color: 'bg-sky-50 border-sky-300 text-sky-950',
      badge: 'bg-sky-100 text-sky-800 border-sky-200',
      accent: 'text-sky-600',
      trigger: 'Execution bottleneck identified; core business case remains solid.'
    },
    {
      id: 'PAUSE',
      name: 'PAUSE',
      desc: 'Conditions require temporary suspension.',
      detail:
        'External market shocks, supply chain freezes, leadership changes, or prerequisite upstream dependency delays necessitate a controlled temporary hold without forfeiting sunk investments.',
      icon: Pause,
      color: 'bg-amber-50 border-amber-300 text-amber-950',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      accent: 'text-amber-600',
      trigger: 'Prerequisite dependency missing or critical resource diverted temporarily.'
    },
    {
      id: 'STOP',
      name: 'STOP',
      desc: 'Evidence no longer supports continuation.',
      detail:
        'Empirical diagnostic signals prove the initiative cannot achieve required ROI, market demand has evaporated, or technological obsolescence has rendered the solution counterproductive. Prevents sunk-cost fallacy.',
      icon: Square,
      color: 'bg-rose-50 border-rose-300 text-rose-950',
      badge: 'bg-rose-100 text-rose-800 border-rose-200',
      accent: 'text-rose-600',
      trigger: 'Persistent failure across multiple gates; core hypothesis invalidated.'
    },
    {
      id: 'RESET',
      name: 'RESET',
      desc: 'The underlying assumptions need to be reconsidered.',
      detail:
        'The operational landscape has fundamentally shifted. Rather than executing minor patches, the leadership team returns to the diagnostic baseline (TNITRI) to re-evaluate core assumptions and root causes.',
      icon: RotateCcw,
      color: 'bg-purple-50 border-purple-300 text-purple-950',
      badge: 'bg-purple-100 text-purple-800 border-purple-200',
      accent: 'text-purple-600',
      trigger: 'Strategic misalignment discovered between capability and market needs.'
    },
    {
      id: 'RESTART',
      name: 'RESTART',
      desc: 'A revised approach is ready.',
      detail:
        'With recalibrated diagnostic intelligence, updated resource commitments, and revised stakeholder alignment, the transformation program relaunches under updated governance protocols.',
      icon: FastForward,
      color: 'bg-indigo-50 border-indigo-300 text-indigo-950',
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      accent: 'text-indigo-600',
      trigger: 'New operating model designed, dependencies cleared, teams remobilized.'
    }
  ];

  const active = decisions.find((d) => d.id === selectedDecision) || decisions[0];
  const ActiveIcon = active.icon;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8" id="transformation-control-module">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
          Decision Discipline
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-[#002d62]">
          Know When to Continue. Know When to Stop.
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Transformation requires disciplined governance. TNI²TRI formalizes Six Transformation Control Decisions to eliminate ambiguity and prevent sunk-cost traps.
        </p>
      </div>

      {/* Grid of 6 Decisions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {decisions.map((d) => {
          const isSelected = d.id === selectedDecision;
          const Icon = d.icon;
          return (
            <button
              key={d.id}
              onClick={() => setSelectedDecision(d.id)}
              className={`p-3.5 rounded-xl border-2 text-left transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? `${d.color} border-current shadow-md scale-[1.02] ring-2 ring-blue-500/20`
                  : 'border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${isSelected ? d.accent : 'text-slate-400'}`} />
                <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded border ${d.badge}`}>
                  {d.id}
                </span>
              </div>
              <div className="font-extrabold text-xs sm:text-sm text-[#002d62] tracking-tight">
                {d.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Detail Container */}
      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-sky-400 border border-blue-500/30">
              <ActiveIcon className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded border ${active.badge}`}>
                Control Protocol
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {active.name} — <span className="text-amber-400 font-medium text-sm">{active.desc}</span>
              </h4>
            </div>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {active.detail}
        </p>

        <div className="bg-slate-800/90 rounded-lg p-3 border border-slate-700 text-xs text-slate-200">
          <span className="font-bold text-sky-300">Decision Trigger: </span>
          <span>{active.trigger}</span>
        </div>
      </div>
    </div>
  );
}
