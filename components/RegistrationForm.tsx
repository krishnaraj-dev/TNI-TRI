'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import registrationData from '@/content/registration.json';
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Send, Sparkles, Building2, User, HelpCircle, CheckSquare, ShieldCheck, Download, Printer } from 'lucide-react';

interface FormData {
  orgName: string;
  industrySector: string;
  location: string;
  orgType: string;
  yearsInOperation: string;
  primaryProducts: string;
  marketsServed: string;
  orgSize: string;
  annualTurnover: string;
  numLocations: string;
  contactName: string;
  contactDesignation: string;
  contactEmail: string;
  contactPhone: string;
  transformationContexts: string[];
  primaryQuestion: string;
  declaration: boolean;
}

export function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    orgName: '',
    industrySector: '',
    location: '',
    orgType: '',
    yearsInOperation: '',
    primaryProducts: '',
    marketsServed: '',
    orgSize: '',
    annualTurnover: '',
    numLocations: '',
    contactName: '',
    contactDesignation: '',
    contactEmail: '',
    contactPhone: '',
    transformationContexts: [],
    primaryQuestion: '',
    declaration: false,
  });

  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [regId, setRegId] = useState<string>('');

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleCheckboxToggle = (context: string) => {
    setFormData((prev) => {
      const current = prev.transformationContexts;
      const next = current.includes(context)
        ? current.filter((c) => c !== context)
        : [...current, context];
      return { ...prev, transformationContexts: next };
    });
  };

  const validateStep = (currentStep: number): boolean => {
    const errs: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.orgName.trim()) errs.orgName = 'Organisation name is required';
      if (!formData.industrySector) errs.industrySector = 'Please select your industry sector';
      if (!formData.location.trim()) errs.location = 'Location (City / State / Country) is required';
      if (!formData.orgType) errs.orgType = 'Please select organisation type';
      if (!formData.primaryProducts.trim()) errs.primaryProducts = 'Primary products/services description is required';
    }

    if (currentStep === 2) {
      if (!formData.orgSize) errs.orgSize = 'Please select approximate organisation size';
      if (!formData.annualTurnover) errs.annualTurnover = 'Please select turnover range';
    }

    if (currentStep === 3) {
      if (!formData.contactName.trim()) errs.contactName = 'Contact name is required';
      if (!formData.contactDesignation.trim()) errs.contactDesignation = 'Designation/role is required';
      if (!formData.contactEmail.trim() || !formData.contactEmail.includes('@')) {
        errs.contactEmail = 'Valid corporate email address is required';
      }
      if (!formData.contactPhone.trim()) errs.contactPhone = 'Contact phone number is required';
    }

    if (currentStep === 4) {
      if (formData.transformationContexts.length === 0) {
        errs.transformationContexts = 'Please select at least one transformation context';
      }
      if (!formData.declaration) {
        errs.declaration = 'You must confirm the declaration to proceed';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    // Simulate high-reliability registration ingestion
    setTimeout(() => {
      const generatedId = `TNI2TRI-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      setRegId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-12 text-center max-w-3xl mx-auto" id="registration-success-card">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Registration Confirmed
        </span>

        <h3 className="text-2xl sm:text-3.5xl font-black text-[#002d62] mt-3 mb-2">
          Assessment Initiation Dossier Created
        </h3>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Your registration begins the assessment journey. Further information will be requested progressively as required by the assessment process.
        </p>

        {/* Reference Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 text-left max-w-lg mx-auto">
          <div className="flex justify-between items-center pb-3 border-b border-slate-200 text-xs">
            <span className="text-slate-500 font-semibold">Registration Identifier:</span>
            <span className="font-mono font-bold text-[#002d62] text-sm">{regId}</span>
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-slate-200 text-xs">
            <span className="text-slate-500">Organisation:</span>
            <span className="font-semibold text-slate-800">{formData.orgName}</span>
          </div>
          <div className="flex justify-between items-center py-2.5 border-b border-slate-200 text-xs">
            <span className="text-slate-500">Primary Contact:</span>
            <span className="font-semibold text-slate-800">{formData.contactName} ({formData.contactDesignation})</span>
          </div>
          <div className="flex justify-between items-center pt-2.5 text-xs">
            <span className="text-slate-500">Sector / Scale:</span>
            <span className="font-semibold text-slate-800">{formData.industrySector} • {formData.orgSize}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print Dossier Summary</span>
          </button>
          
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 bg-[#002d62] hover:bg-[#07192d] text-white px-6 py-2.5 rounded-lg text-xs font-bold shadow transition-all"
          >
            <span>Review Assessment Methodology</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden" id="registration-master-form">
      {/* Wizard Progress Bar */}
      <div className="bg-[#07192d] text-white p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {registrationData.eyebrow}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {registrationData.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {registrationData.intro}
            </p>
          </div>
          <div className="text-xs font-mono bg-blue-900/60 px-3 py-1.5 rounded-lg border border-blue-700 text-sky-300">
            Step 0{step} of 04
          </div>
        </div>

        {/* Step Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { n: 1, label: 'Organisation Details', icon: Building2 },
            { n: 2, label: 'Organisation Scale', icon: Sparkles },
            { n: 3, label: 'Primary Contact', icon: User },
            { n: 4, label: 'Transformation Context', icon: HelpCircle },
          ].map((s) => {
            const isDone = step > s.n;
            const isCurrent = step === s.n;
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                onClick={() => {
                  if (s.n < step) setStep(s.n);
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-blue-600/30 border-amber-400 text-white shadow'
                    : isDone
                    ? 'bg-slate-800/80 border-emerald-500/50 text-emerald-300 cursor-pointer hover:bg-slate-800'
                    : 'bg-slate-900/50 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase">Step 0{s.n}</span>
                  {isDone ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Icon className="w-3.5 h-3.5" />
                  )}
                </div>
                <div className="text-xs font-bold truncate">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* STEP 1: Organisation Details */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-base font-bold text-[#002d62]">Organisation Details</h4>
              <p className="text-xs text-slate-500">Provide legal entity profile and core manufacturing footprint.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Organisation Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tamil Nadu Precision Tech Ltd"
                  value={formData.orgName}
                  onChange={(e) => handleChange('orgName', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.orgName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.orgName && <p className="text-xs text-rose-500 mt-1">{errors.orgName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Industry / Sector <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.industrySector}
                  onChange={(e) => handleChange('industrySector', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.industrySector ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">-- Select Industry / Sector --</option>
                  {registrationData.sectors.map((sec) => (
                    <option key={sec} value={sec}>{sec}</option>
                  ))}
                </select>
                {errors.industrySector && <p className="text-xs text-rose-500 mt-1">{errors.industrySector}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Location (City / State / Country) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Coimbatore / Tamil Nadu / India"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.location ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.location && <p className="text-xs text-rose-500 mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Organisation Type <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.orgType}
                  onChange={(e) => handleChange('orgType', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.orgType ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">-- Select Organisation Type --</option>
                  {registrationData.orgTypes.map((ot) => (
                    <option key={ot} value={ot}>{ot}</option>
                  ))}
                </select>
                {errors.orgType && <p className="text-xs text-rose-500 mt-1">{errors.orgType}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Years in Operation
                </label>
                <input
                  type="text"
                  placeholder="e.g. 18 Years"
                  value={formData.yearsInOperation}
                  onChange={(e) => handleChange('yearsInOperation', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Markets Served
                </label>
                <input
                  type="text"
                  placeholder="e.g. Domestic (All-India), Europe & North America Exports"
                  value={formData.marketsServed}
                  onChange={(e) => handleChange('marketsServed', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Primary Products / Services <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={2}
                placeholder="Briefly describe key product lines, components, or industrial capabilities..."
                value={formData.primaryProducts}
                onChange={(e) => handleChange('primaryProducts', e.target.value)}
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                  errors.primaryProducts ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.primaryProducts && <p className="text-xs text-rose-500 mt-1">{errors.primaryProducts}</p>}
            </div>
          </div>
        )}

        {/* STEP 2: Organisation Scale */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-base font-bold text-[#002d62]">Organisation Scale</h4>
              <p className="text-xs text-slate-500">Benchmark capacity and operational scale.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Approximate Organisation Size <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.orgSize}
                  onChange={(e) => handleChange('orgSize', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.orgSize ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">-- Select Headcount Size --</option>
                  {registrationData.orgSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.orgSize && <p className="text-xs text-rose-500 mt-1">{errors.orgSize}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Approximate Annual Turnover / Scale <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.annualTurnover}
                  onChange={(e) => handleChange('annualTurnover', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.annualTurnover ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">-- Select Annual Turnover Range --</option>
                  {registrationData.turnoverRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                {errors.annualTurnover && <p className="text-xs text-rose-500 mt-1">{errors.annualTurnover}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Number of Locations / Plant Units
                </label>
                <input
                  type="text"
                  placeholder="e.g. 3 Manufacturing Plants + 1 R&D Center"
                  value={formData.numLocations}
                  onChange={(e) => handleChange('numLocations', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Primary Contact */}
        {step === 3 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-base font-bold text-[#002d62]">Primary Contact</h4>
              <p className="text-xs text-slate-500">Designated executive point of contact for diagnostic coordination.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. K. Ramanathan"
                  value={formData.contactName}
                  onChange={(e) => handleChange('contactName', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.contactName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.contactName && <p className="text-xs text-rose-500 mt-1">{errors.contactName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Designation / Role <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Managing Director / Chief Technology Officer"
                  value={formData.contactDesignation}
                  onChange={(e) => handleChange('contactDesignation', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.contactDesignation ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.contactDesignation && <p className="text-xs text-rose-500 mt-1">{errors.contactDesignation}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Corporate Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="e.g. ramanathan@tnprecision.com"
                  value={formData.contactEmail}
                  onChange={(e) => handleChange('contactEmail', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.contactEmail ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.contactEmail && <p className="text-xs text-rose-500 mt-1">{errors.contactEmail}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Phone / Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={formData.contactPhone}
                  onChange={(e) => handleChange('contactPhone', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
                    errors.contactPhone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-300 bg-slate-50/50 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.contactPhone && <p className="text-xs text-rose-500 mt-1">{errors.contactPhone}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Transformation Context & Declaration */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-slate-100 pb-3">
              <h4 className="text-base font-bold text-[#002d62]">Transformation Context</h4>
              <p className="text-xs text-slate-500">Why are you considering TNI²TRI 2026 now? (Select all that apply)</p>
            </div>

            {/* Checkboxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {registrationData.transformationContexts.map((ctx) => {
                const checked = formData.transformationContexts.includes(ctx);
                return (
                  <label
                    key={ctx}
                    className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer text-xs font-medium transition-all ${
                      checked
                        ? 'border-[#002d62] bg-blue-50/70 text-[#002d62] font-semibold'
                        : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleCheckboxToggle(ctx)}
                      className="rounded border-slate-300 text-[#002d62] focus:ring-blue-500 w-4 h-4"
                    />
                    <span>{ctx}</span>
                  </label>
                );
              })}
            </div>
            {errors.transformationContexts && (
              <p className="text-xs text-rose-500">{errors.transformationContexts}</p>
            )}

            {/* Primary Question Open Text */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Primary Question: What would you most like to understand about your organisation?
              </label>
              <textarea
                rows={3}
                placeholder="Share specific capability uncertainties, bottleneck symptoms, or strategic questions you want the diagnostic process to answer..."
                value={formData.primaryQuestion}
                onChange={(e) => handleChange('primaryQuestion', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Declaration */}
            <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/60 space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.declaration}
                  onChange={(e) => handleChange('declaration', e.target.checked)}
                  className="rounded border-slate-300 text-[#002d62] focus:ring-blue-500 w-4 h-4 mt-0.5"
                />
                <span className="text-xs text-slate-800 font-semibold leading-relaxed">
                  {registrationData.declarationText}
                </span>
              </label>
              {errors.declaration && <p className="text-xs text-rose-600 font-bold">{errors.declaration}</p>}
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div></div>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-2 bg-[#002d62] hover:bg-[#07192d] text-white px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow transition-all"
            >
              <span>Continue to Next Section</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 px-8 py-3 rounded-lg text-xs sm:text-sm font-extrabold shadow-md transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Registration Dossier...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{registrationData.primaryCTALabel}</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
