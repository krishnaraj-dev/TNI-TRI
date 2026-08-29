import React from 'react';
import siteMeta from '@/content/site-meta.json';
import { SITE_URL, SITE_NAME } from '@/lib/seo';

/**
 * Universal JSON-LD Wrapper
 */
export function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Global Organization & Government / Industrial Initiative Schema
 */
export function GlobalOrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: 'TNI²TRI 2026',
    legalName: 'Tamil Nadu Industrial Intelligence, Transformation Readiness & Implementation Initiative',
    alternateName: [
      'TNI2TRI',
      'TNIIIRBI',
      'TNITRI',
      'Tamil Nadu Industrial Transformation Secretariat',
    ],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    description:
      'TNI²TRI 2026 unites industrial intelligence, readiness assessment, and structured transformation implementation into a single continuous framework for industrial enterprises in Tamil Nadu.',
    slogan: siteMeta.brand.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-9952996930',
        contactType: 'secretariat inquiries and enterprise onboarding',
        email: 'tni2tri2026@gmail.com',
        availableLanguage: ['English', 'Tamil'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-8248759056',
        contactType: 'technical coordination and assessment support',
        email: 'tni2tri2026@gmail.com',
        availableLanguage: ['English', 'Tamil'],
      },
    ],
  };

  return <JsonLdScript data={schema} />;
}

/**
 * WebSite Schema with SearchAction
 */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: `${SITE_NAME} Official Portal`,
    alternateName: siteMeta.brand.fullName,
    url: SITE_URL,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/domains?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * BreadcrumbList Schema
 */
export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...items.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: crumb.name,
        item: crumb.item.startsWith('http') ? crumb.item : `${SITE_URL}${crumb.item}`,
      })),
    ],
  };

  return <JsonLdScript data={schema} />;
}

/**
 * FAQPage Schema
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSchema({ faqs }: { faqs: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={schema} />;
}

/**
 * Service / Diagnostic Framework Schema
 */
export function AssessmentServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#assessment-service`,
    name: 'TNI²TRI Industrial Transformation Readiness Assessment',
    serviceType: 'Industrial Capability and Readiness Diagnostic Evaluation',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Tamil Nadu, India',
    },
    description:
      'A multi-dimensional diagnostic process spanning 10 industrial domains, 8 organizational pillars, and an evidence hierarchy (C0–C3) providing baseline maturity scores (R0–R5) and actionable transformation roadmaps.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Assessment Deliverables',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Diagnostic Dossier',
            description: 'Comprehensive maturity profile across all 10 transformation domains.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transformation Readiness Scorecard',
            description: 'Granular R0-R5 pillar scoring with C0-C3 evidence audit verification.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Priority Intervention Blueprint',
            description: 'Sequenced roadmap targeting isolated root constraints before technological deployment.',
          },
        },
      ],
    },
  };

  return <JsonLdScript data={schema} />;
}

/**
 * ItemList Schema for Domains or Process Stages
 */
export function ItemListSchema({
  name,
  description,
  items,
}: {
  name: string;
  description: string;
  items: { name: string; description: string; url?: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      description: item.description,
      ...(item.url && { url: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}` }),
    })),
  };

  return <JsonLdScript data={schema} />;
}
