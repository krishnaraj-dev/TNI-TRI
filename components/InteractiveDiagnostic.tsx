'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ArrowLeft, RefreshCw, BarChart2, ShieldAlert, Sparkles, HelpCircle, FileCheck } from 'lucide-react';

interface QuestionItem {
  domain: string;
  domainName: string;
  question: string;
  options: { label: string; score: number; evidenceDefault: 'C0' | 'C1' | 'C2' | 'C3' }[];
}

const SAMPLE_QUESTIONS: QuestionItem[] = [
  {
    domain: '01',
    domainName: 'Industrial Capability',
    question: 'How is production scheduling and overall equipment effectiveness (OEE) managed across your plants?',
    options: [
      { label: 'Informal daily tracking with manual whiteboard notes and verbal handovers.', score: 1, evidenceDefault: 'C0' },
      { label: 'Weekly spreadsheet schedules with basic manual downtime logs.', score: 2, evidenceDefault: 'C1' },
      { label: 'Standardized ERP production orders with cross-checked shift logs.', score: 3, evidenceDefault: 'C2' },
      { label: 'Real-time MES / SCADA automated machine telemetry with live OEE dashboards.', score: 4, evidenceDefault: 'C3' }
    ]
  },
  {
    domain: '02',
    domainName: 'Technology & Digital',
    question: 'How integrated are your shopfloor systems with enterprise financial and supply data?',
    options: [
      { label: 'Isolated standalone software tools with zero automated data exchange.', score: 1, evidenceDefault: 'C0' },
      { label: 'Batch file exports and periodic manual re-entry between systems.', score: 2, evidenceDefault: 'C1' },
      { label: 'Standard API interfaces connecting ERP with inventory and accounting.', score: 3, evidenceDefault: 'C2' },
      { label: 'Unified IIoT digital backbone with end-to-end data pipeline and automated alerts.', score: 4, evidenceDefault: 'C3' }
    ]
  },
  {
    domain: '04',
    domainName: 'People & Skills',
    question: 'What is the structured capability of your workforce to operate digital & automated tools?',
    options: [
      { label: 'Ad-hoc on-the-job training with high dependency on individual tribal memory.', score: 1, evidenceDefault: 'C0' },
      { label: 'Periodic vendor-led training sessions when new machinery is installed.', score: 2, evidenceDefault: 'C1' },
      { label: 'Structured multi-skilling matrix with documented competency evaluations.', score: 3, evidenceDefault: 'C2' },
      { label: 'Continuous learning academy with digital fluency KPIs and leadership pipeline.', score: 4, evidenceDefault: 'C3' }
    ]
  },
  {
    domain: '09',
    domainName: 'Governance, Risk & Resilience',
    question: 'How does your organisation anticipate and manage supply chain and operational risks?',
    options: [
      { label: 'Reactive crisis management after disruptions or downtime events occur.', score: 1, evidenceDefault: 'C0' },
      { label: 'Annual insurance reviews and basic regulatory compliance checklists.', score: 2, evidenceDefault: 'C1' },
      { label: 'Formal Enterprise Risk Management (ERM) register with quarterly audits.', score: 3, evidenceDefault: 'C2' },
      { label: 'Dynamic scenario simulation, dual-sourcing resilience, and real-time BCP protocols.', score: 4, evidenceDefault: 'C3' }
    ]
  }
];

export function InteractiveDiagnostic() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [evidenceLevels, setEvidenceLevels] = useState<Record<number, string>>({});
  const [sector, setSector] = useState<string>('Automotive & Heavy Engineering');
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    const selected = SAMPLE_QUESTIONS[questionIndex].options[optionIndex];
    setAnswers((prev) => ({ ...prev, [questionIndex]: selected.score }));
    setEvidenceLevels((prev) => ({ ...prev, [questionIndex]: selected.evidenceDefault }));
  };

  const handleNext = () => {
    if (currentStep < SAMPLE_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setEvidenceLevels({});
    setShowResult(false);
  };

  // Calculate simulated score
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = SAMPLE_QUESTIONS.length * 4;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let readinessLevel = 'R2';
  let readinessTitle = 'Preparing';
  let readinessBadge = 'bg-amber-100 text-amber-900 border-amber-300';
  let readinessRecommendation = 'Structure diagnostic baselines, convert C0 claims into C1/C2 evidence, and map cross-domain dependencies before capital commitment.';

  if (percentage <= 35) {
    readinessLevel = 'R1';
    readinessTitle = 'Aware';
    readinessBadge = 'bg-orange-100 text-orange-900 border-orange-300';
    readinessRecommendation = 'High vulnerability in baseline processes. Full 10-domain diagnostic required to identify structural root causes and build foundational compliance.';
  } else if (percentage <= 65) {
    readinessLevel = 'R2';
    readinessTitle = 'Preparing';
    readinessBadge = 'bg-amber-100 text-amber-900 border-amber-300';
    readinessRecommendation = 'Operational foundations are emerging. Focus on evidence validation (C2), cross-departmental integration, and prioritized CapEx roadmapping.';
  } else if (percentage <= 85) {
    readinessLevel = 'R3';
    readinessTitle = 'Ready';
    readinessBadge = 'bg-sky-100 text-sky-900 border-sky-300';
    readinessRecommendation = 'Strong execution baseline. The enterprise is poised to launch high-leverage digital and automation workstreams under disciplined decision control.';
  } else {
    readinessLevel = 'R4';
    readinessTitle = 'Transformation Ready';
    readinessBadge = 'bg-emerald-100 text-emerald-900 border-emerald-300';
    readinessRecommendation = 'High maturity and automated data telemetry. Ready to scale advanced transformation, autonomous robotics, and continuous self-renewal.';
  }

  const currentQ = SAMPLE_QUESTIONS[currentStep];
  const isCurrentAnswered = answers[currentStep] !== undefined;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8" id="interactive-diagnostic-tool">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
            Interactive Assessment Preview
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#002d62]">
            Experience the TNI²TRI Adaptive Diagnostic Logic
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="text-xs font-semibold bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Automotive & Heavy Engineering">Automotive & Heavy Engineering</option>
            <option value="Textiles & Apparel">Textiles & Technical Fabrics</option>
            <option value="Electronics Manufacturing">Electronics & Hardware</option>
            <option value="Chemicals & Polymers">Chemicals & Polymers</option>
            <option value="Pharmaceuticals">Pharma & Life Sciences</option>
          </select>
        </div>
      </div>

      {!showResult ? (
        <div>
          {/* Progress Tracker */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>
              Diagnostic Probe <strong className="text-[#002d62]">{currentStep + 1}</strong> of {SAMPLE_QUESTIONS.length}
            </span>
            <span className="font-mono text-slate-400">
              Domain {currentQ.domain}: {currentQ.domainName}
            </span>
          </div>

          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-6">
            <div
              className="bg-gradient-to-r from-sky-600 to-amber-500 h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / SAMPLE_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Box */}
          <div className="bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded bg-blue-100 text-[#002d62] border border-blue-200">
                Domain {currentQ.domain}
              </span>
              <span className="text-xs font-bold text-slate-700">{currentQ.domainName}</span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-[#002d62] leading-snug">
              {currentQ.question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = answers[currentStep] === opt.score;
              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(currentStep, optIdx)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-150 flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'border-[#002d62] bg-blue-50/70 text-[#002d62] shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50 text-slate-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 flex-shrink-0 ${
                        isSelected ? 'border-[#002d62] bg-[#002d62] text-white' : 'border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white"></span>}
                    </div>
                    <span className="text-xs sm:text-sm font-medium leading-relaxed">{opt.label}</span>
                  </div>

                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded border flex-shrink-0 ${
                    opt.evidenceDefault === 'C3' ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                    opt.evidenceDefault === 'C2' ? 'bg-indigo-100 text-indigo-800 border-indigo-200' :
                    opt.evidenceDefault === 'C1' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                    'bg-slate-100 text-slate-700 border-slate-300'
                  }`}>
                    {opt.evidenceDefault} Evidence
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg border ${
                currentStep === 0
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Probe</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!isCurrentAnswered}
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all ${
                isCurrentAnswered
                  ? 'bg-[#002d62] text-white hover:bg-[#07192d]'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === SAMPLE_QUESTIONS.length - 1 ? 'Generate Diagnostic Synthesis' : 'Next Probe'}</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>
      ) : (
        /* Result Synthesis Panel */
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#002d62] to-[#07192d] text-white rounded-2xl p-6 sm:p-8 border border-blue-900 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-800/80 pb-6 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Preliminary Diagnostic Profile • {sector}
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Readiness Synthesis: <span className="text-amber-400">{readinessLevel} — {readinessTitle}</span>
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-sm font-extrabold px-3 py-1.5 rounded-lg border ${readinessBadge}`}>
                  Scale {readinessLevel}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  Index: {percentage}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-1.5">
                  <BarChart2 className="w-4 h-4" />
                  Diagnostic Recommendation
                </h5>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {readinessRecommendation}
                </p>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Evidence Confidence Mix
                </h5>
                <div className="flex flex-wrap gap-2 pt-1">
                  {Object.entries(evidenceLevels).map(([idx, lvl]) => (
                    <span key={idx} className="text-xs font-semibold px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300">
                      Probe {Number(idx) + 1}: <strong className="text-white">{lvl}</strong>
                    </span>
                  ))}
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  Official TNI²TRI assessment validates all findings via empirical evidence audits.
                </div>
              </div>
            </div>

            {/* Next Action Callout */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-blue-800/60">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Test Another Scenario</span>
              </button>

              <Link
                href="/register"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg shadow-md transition-all"
              >
                <span>Initiate Full Official Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
