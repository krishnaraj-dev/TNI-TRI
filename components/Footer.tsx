'use client';

import React from 'react';
import Link from 'next/link';
import { BrandLogo } from './BrandLogo';
import siteMeta from '@/content/site-meta.json';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#07192d] text-white border-t border-slate-800" id="site-global-footer">
      {/* Top Banner with Motto */}
      <div className="border-b border-slate-800/80 bg-[#051323] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-amber-400 font-bold text-xs uppercase tracking-widest mb-1">
              {siteMeta.brand.fullName}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {siteMeta.brand.tagline}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all"
            >
              <span>{siteMeta.primaryCTA.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-5 py-3 rounded-lg border border-slate-700 transition-all"
            >
              <span>{siteMeta.secondaryCTA.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-md pt-2">
              TNI²TRI 2026 brings industrial intelligence, transformation-readiness assessment and structured implementation into one continuous framework.
            </p>

            <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="font-semibold text-amber-400">Continuous Transformation Cycle:</div>
              <div className="font-mono text-[11px] text-slate-300 leading-snug">
                {siteMeta.brand.cycleMotto}
              </div>
            </div>
          </div>

          {/* Col 2: Explore Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {siteMeta.footer.exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Assessment & Intelligence */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              Assessment
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 mb-6">
              {siteMeta.footer.assessmentLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Intelligence
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {siteMeta.footer.intelligenceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-sky-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
              Contact
            </h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Location: {siteMeta.contact.location}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Email: {siteMeta.contact.email}</div>
                  <div className="text-xs text-slate-500">{siteMeta.contact.officialEmail}</div>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Phone: {siteMeta.contact.phone}</span>
              </div>
              <div className="pt-2 text-xs text-slate-500">
                {siteMeta.contact.officeHours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Architecture Ribbon */}
      <div className="border-t border-slate-800 bg-[#040e1b] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-slate-300 font-medium">
            <span className="text-amber-400 font-bold">TNIIIRBI</span>
            <span>→</span>
            <span className="text-sky-400 font-bold">TNITRI</span>
            <span>→</span>
            <span className="text-emerald-400 font-bold">TNI²TRI</span>
          </div>

          <div className="text-center md:text-right text-slate-400">
            {siteMeta.brand.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}
