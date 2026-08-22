import React from 'react';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { RegistrationForm } from '@/components/RegistrationForm';
import { BreadcrumbSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Enterprise Registration Portal — Onboarding & Diagnostic Dossier',
  description:
    'Register your enterprise for the TNI²TRI 2026 industrial intelligence and transformation readiness assessment. Submit enterprise profile, operations context, and diagnostic focus areas.',
  path: '/register',
  keywords: [
    'TNI2TRI Enterprise Registration',
    'Industrial Assessment Portal',
    'Tamil Nadu Manufacturing Application',
    'Capability Assessment Onboarding',
  ],
});

export default function RegisterPage() {
  return (
    <div className="w-full flex flex-col space-y-10 pb-20">
      <BreadcrumbSchema
        items={[{ name: 'Registration Portal', item: '/register' }]}
      />
      <Breadcrumb
        items={[{ label: 'Registration Portal', href: '/register' }]}
        pageNumber="PAGE 08 — REGISTRATION"
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Intro Alert Box */}
        <div className="mb-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex items-start gap-3 text-xs text-[#002d62]">
          <ShieldCheck className="w-5 h-5 text-[#002d62] flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Official Registration Dossier:</span> Complete the four sections below to initiate your organisation’s assessment journey. Further evidence verification and diagnostic telemetry will be scheduled following profile review.
          </div>
        </div>

        {/* Master Registration Wizard */}
        <RegistrationForm />

        {/* Privacy and Verification Note */}
        <div className="mt-8 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Lock className="w-3.5 h-3.5" />
          <span>All enterprise data submitted is strictly confidential and protected under standard institutional non-disclosure covenants.</span>
        </div>
      </section>
    </div>
  );
}
