'use client';

import React, { useState } from 'react';
import { Shield, CheckCircle, FileCheck2, AlertCircle, Sparkles } from 'lucide-react';

export function EvidenceViewer() {
  const [activeLevel, setActiveLevel] = useState<string>('C2');

  const levels = [
    {
      code: 'C0',
      title: 'Unverified',
      subtitle: 'Self-reported without supporting evidence',
      description: 'The finding or claim relies entirely on subjective perception, unvalidated interviews, or anecdotal assertions without verifiable data artifacts.',
      status: 'Preliminary Hypothesis',
      color: 'border-slate-300 bg-slate-50 text-slate-800',
      badge: 'bg-slate-200 text-slate-800 border-slate-300',
      iconColor: 'text-slate-400',
      examples: 'Survey responses without logs, estimated OEE without automated sensor data.'
    },
    {
      code: 'C1',
      title: 'Supported',
      subtitle: 'Some supporting information available',
      description: 'The finding is supported by initial documentation, sample reports, single-department spreadsheets, or qualitative manager sign-offs.',
      status: 'Emerging Confidence',
      color: 'border-blue-300 bg-blue-50/60 text-blue-900',
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      iconColor: 'text-blue-500',
      examples: 'Internal SOP documents, monthly variance summaries, manual logbooks.'
    },
    {
      code: 'C2',
      title: 'Corroborated',
      subtitle: 'Multiple independent sources support finding',
      description: 'The finding is cross-verified across distinct organizational silos: e.g. financial ledgers match plant floor production rates and customer delivery records.',
      status: 'High Diagnostic Confidence',
      color: 'border-indigo-300 bg-indigo-50/60 text-indigo-900',
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      iconColor: 'text-indigo-600',
      examples: 'Cross-functional ERP reconciliations, third-party supplier audits, quality QA/QC logs.'
    },
    {
      code: 'C3',
      title: 'Verified',
      subtitle: 'Strong empirical evidence confirms finding',
      description: 'Empirical ground truth confirmed via continuous telemetry, immutable logs, automated system triggers, statutory audit records, and validated physical tests.',
      status: 'Empirical Ground Truth',
      color: 'border-emerald-300 bg-emerald-50/60 text-emerald-900',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      iconColor: 'text-emerald-600',
      examples: 'SCADA/MES automated sensor telemetry, audited statutory financial filings, ISO certified test results.'
    }
  ];

  const active = levels.find((l) => l.code === activeLevel) || levels[2];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8" id="evidence-validation-widget">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
            Confidence Protocol
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#002d62]">
            Evidence & Validation: The C0 → C3 Confidence Hierarchy
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            TNI²TRI distinguishes between what an organisation reports and what available evidence demonstrates.
          </p>
        </div>
      </div>

      {/* 4 Levels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {levels.map((lvl) => {
          const isSelected = lvl.code === activeLevel;
          return (
            <div
              key={lvl.code}
              onClick={() => setActiveLevel(lvl.code)}
              className={`cursor-pointer rounded-xl border-2 p-4 transition-all duration-150 flex flex-col justify-between ${
                isSelected
                  ? `${lvl.color} border-current shadow-md scale-[1.02] ring-2 ring-blue-500/20`
                  : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded border ${lvl.badge}`}>
                    {lvl.code}
                  </span>
                  <FileCheck2 className={`w-4 h-4 ${isSelected ? lvl.iconColor : 'text-slate-400'}`} />
                </div>
                <h4 className="text-base font-bold text-[#002d62] mb-1">{lvl.title}</h4>
                <p className="text-xs text-slate-600 leading-snug">{lvl.subtitle}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-[11px] font-bold text-slate-700 flex items-center justify-between">
                <span>{lvl.status}</span>
                <span className="text-xs font-mono">→</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Level Detail Box */}
      <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <span className={`text-xs font-extrabold px-2.5 py-1 rounded border ${active.badge}`}>
              Level {active.code}
            </span>
            <span className="text-lg font-bold text-white">{active.title}</span>
            <span className="text-xs text-slate-400">({active.status})</span>
          </div>
          <span className="text-xs text-amber-400 font-mono">CONFIDENCE TIER</span>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {active.description}
        </p>

        <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700 text-xs text-slate-200">
          <span className="font-bold text-sky-400">Typical Evidence Artifacts: </span>
          <span>{active.examples}</span>
        </div>
      </div>
    </div>
  );
}
