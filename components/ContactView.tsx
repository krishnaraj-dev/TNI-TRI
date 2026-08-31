'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import contactData from '@/content/contact.json';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Building2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    phone: '',
    inquiryType: 'Assessment Onboarding',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const recipient = 'tni2tri2026@gmail.com';
    const subject = `TNI²TRI 2026 Executive Inquiry: ${formData.name} — ${formData.org} [${formData.inquiryType}]`;
    const body = [
      'TNI²TRI 2026 EXECUTIVE INQUIRY & COORDINATION DOSSIER',
      '======================================================',
      `Full Name:          ${formData.name}`,
      `Organization:       ${formData.org}`,
      `Corporate Email:    ${formData.email}`,
      `Telephone / Mobile: ${formData.phone || 'Not Provided'}`,
      `Nature of Inquiry:  ${formData.inquiryType}`,
      '======================================================',
      '',
      'OPERATIONAL SCOPE & MESSAGE:',
      formData.message,
      '',
      '======================================================',
      'Transmitted via TNI²TRI 2026 Industrial Intelligence Portal',
    ].join('\n');

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger email client with pre-filled content
    if (typeof window !== 'undefined') {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full flex flex-col space-y-12 pb-20">
      <Breadcrumb
        items={[{ label: 'Contact & Coordination', href: '/contact' }]}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#07192d] text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl bg-circuit-subtle relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              {contactData.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2 mb-3">
              {contactData.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-sky-300 mb-4">
              {contactData.subtitle}
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {contactData.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284c7] mb-2">
              <MessageSquare className="w-4 h-4 text-[#0284c7]" />
              <span>Direct Coordination Channel</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002d62] mb-6">
              Transmit an Executive Inquiry
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">Inquiry Prepared & Email Client Opened</h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your default email client has been launched with a pre-filled executive dispatch addressed directly to <strong className="font-mono text-emerald-950">tni2tri2026@gmail.com</strong>.
                </p>
                <div className="p-3 bg-white/80 rounded-lg border border-emerald-200 text-[11px] text-slate-700 max-w-md w-full text-left font-mono">
                  <div><strong>To:</strong> tni2tri2026@gmail.com</div>
                  <div className="truncate"><strong>Subject:</strong> TNI²TRI 2026 Executive Inquiry: {formData.name} — {formData.org}</div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={`mailto:tni2tri2026@gmail.com?subject=${encodeURIComponent(`TNI²TRI 2026 Executive Inquiry: ${formData.name} — ${formData.org} [${formData.inquiryType}]`)}&body=${encodeURIComponent([
                      'TNI²TRI 2026 EXECUTIVE INQUIRY & COORDINATION DOSSIER',
                      '======================================================',
                      `Full Name:          ${formData.name}`,
                      `Organization:       ${formData.org}`,
                      `Corporate Email:    ${formData.email}`,
                      `Telephone / Mobile: ${formData.phone || 'Not Provided'}`,
                      `Nature of Inquiry:  ${formData.inquiryType}`,
                      '======================================================',
                      '',
                      'OPERATIONAL SCOPE & MESSAGE:',
                      formData.message,
                      '',
                      '======================================================',
                      'Transmitted via TNI²TRI 2026 Industrial Intelligence Portal',
                    ].join('\n'))}`}
                    className="px-4 py-2 rounded-lg border border-emerald-600 text-emerald-900 bg-emerald-100/60 hover:bg-emerald-200 text-xs font-bold transition-all"
                  >
                    Re-open Email App
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        org: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Assessment Onboarding',
                        message: '',
                      });
                    }}
                    className="px-5 py-2 rounded-lg bg-[#002d62] text-white text-xs font-bold hover:bg-[#07192d] transition-all"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sundaram"
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Enterprise / Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="e.g. Apex Industrial Components Ltd."
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Direct Telephone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {contactData.enquiryTypes.map((t) => (
                      <option key={t.id} value={t.label}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Operational Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide relevant transformation context, facility scale, or specific capability questions..."
                    className="w-full px-3.5 py-2.5 text-xs font-medium border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    Confidentiality protected under standard NDA.
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002d62] hover:bg-[#07192d] text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50"
                  >
                    <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Secretariat & Coordination Info Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#07192d] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400 block mb-2">
                Secretariat Coordinates
              </span>
              <h3 className="text-xl font-black text-white mb-4">
                TNI²TRI 2026 Secretariat
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-400 mt-1 flex-shrink-0" />
                  <div className="text-slate-300">
                    <strong className="text-white block">TNI²TRI 2026 Secretariat</strong>
                    {contactData.contactDetails.location}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <a
                    href={`mailto:${contactData.contactDetails.email}`}
                    className="text-sky-300 hover:underline font-mono"
                  >
                    {contactData.contactDetails.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div className="text-slate-300 font-mono flex flex-wrap items-center gap-1.5">
                    <a
                      href={`tel:${contactData.contactDetails.primaryPhone}`}
                      className="hover:text-amber-400 text-sky-300 transition-colors"
                    >
                      9952996930
                    </a>
                    <span className="text-slate-500">/</span>
                    <a
                      href={`tel:${contactData.contactDetails.secondaryPhone}`}
                      className="hover:text-amber-400 text-sky-300 transition-colors"
                    >
                      8248759056
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span className="text-slate-300">{contactData.contactDetails.workingHours}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700/80">
                <div className="text-xs font-mono text-amber-400 mb-1 font-bold">
                  DIRECT ONBOARDING
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  For formal evaluation onboarding, proceed directly to the registration portal.
                </p>
                <Link
                  href="/register"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:from-amber-500 hover:to-orange-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>Initiate Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284c7]">
              Clarifications & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#002d62]">
              Frequently Asked Inquiries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactData.faq.map((faq) => (
              <div
                key={faq.q}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-extrabold text-[#002d62] mb-2 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {faq.a}
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
