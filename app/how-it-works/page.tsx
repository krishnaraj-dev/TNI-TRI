import React from 'react';
import type { Metadata } from 'next';
import { HowItWorksView } from '@/components/HowItWorksView';
import { BreadcrumbSchema, ItemListSchema, FaqSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import howItWorksData from '@/content/how-it-works.json';

export const metadata: Metadata = constructMetadata({
  title: 'How It Works — The 13-Stage Continuous Transformation Lifecycle',
  description:
    'Explore the 13-stage continuous industrial transformation lifecycle and the 7 fundamental diagnostic questions governing every TNI²TRI 2026 engagement.',
  path: '/how-it-works',
  keywords: [
    '13 Stage Transformation Lifecycle',
    'Industrial Transformation Methodology',
    'Transformation Operating Principles',
    'Tamil Nadu Manufacturing Transformation Process',
    'Diagnostic Progression Stages',
  ],
});

export default function HowItWorksPage() {
  const lifecycleItems = howItWorksData.lifecycle.map((s) => ({
    name: `Stage ${s.step}: ${s.name} (${s.category})`,
    description: `${s.tagline} — ${s.details}`,
  }));

  const operatingFaqs = howItWorksData.operatingPrinciple.questions.map((q) => ({
    question: `Question 0${q.id}: ${q.question}`,
    answer: q.desc,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'How It Works', item: '/how-it-works' }]}
      />
      <ItemListSchema
        name="The 13-Stage Transformation Lifecycle"
        description="A rigorous, closed-loop progression from Foundation and Diagnosis to Strategy, Mobilization, Execution, and Evolution"
        items={lifecycleItems}
      />
      <FaqSchema faqs={operatingFaqs} />
      <HowItWorksView />
    </>
  );
}
