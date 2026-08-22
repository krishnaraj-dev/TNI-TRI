import React from 'react';
import type { Metadata } from 'next';
import { AssessmentView } from '@/components/AssessmentView';
import { BreadcrumbSchema, AssessmentServiceSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Diagnostic Assessment Framework — Process, Readiness Scales & Evidence Hierarchy',
  description:
    'Comprehensive diagnostic methodology: 6-stage investigation process, R0–R5 Readiness Scales across 8 organizational pillars, and C0–C3 Evidence Verification Hierarchy.',
  path: '/assessment',
  keywords: [
    'Transformation Readiness Assessment Process',
    'R0 to R5 Readiness Maturity Scale',
    'C0 to C3 Evidence Hierarchy',
    'Diagnostic Process Stages',
    'Root Cause Constraint Isolation',
    'Industrial Diagnostic Scorecard',
  ],
});

export default function AssessmentPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Assessment', item: '/assessment' }]}
      />
      <AssessmentServiceSchema />
      <AssessmentView />
    </>
  );
}
