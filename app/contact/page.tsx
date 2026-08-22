import React from 'react';
import type { Metadata } from 'next';
import { ContactView } from '@/components/ContactView';
import { BreadcrumbSchema, FaqSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import contactData from '@/content/contact.json';

export const metadata: Metadata = constructMetadata({
  title: 'Contact & Coordination — TNI²TRI 2026 Secretariat Inquiries',
  description:
    'Contact the TNI²TRI 2026 Secretariat for enterprise assessment onboarding, industrial diagnostic coordination, institutional partnerships, and methodology queries.',
  path: '/contact',
  keywords: [
    'TNI2TRI Contact',
    'TNI2TRI Secretariat Tamil Nadu',
    'Industrial Assessment Coordination',
    'Transformation Inquiries',
    'Secretariat Phone and Email',
  ],
});

export default function ContactPage() {
  const faqs = contactData.faq.map((f) => ({
    question: f.q,
    answer: f.a,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Contact & Coordination', item: '/contact' }]}
      />
      <FaqSchema faqs={faqs} />
      <ContactView />
    </>
  );
}
