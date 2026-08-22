import React from 'react';
import type { Metadata } from 'next';
import { DomainsView } from '@/components/DomainsView';
import { BreadcrumbSchema, ItemListSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import domainsData from '@/content/domains.json';

export const metadata: Metadata = constructMetadata({
  title: 'The 10 Industrial Transformation Domains — Capability & Readiness Architecture',
  description:
    'Deep dive into the 10 Industrial Transformation Domains evaluated under TNI²TRI 2026: Industrial Capability, Technology & Digital, Organisation, People, Innovation, Market, Supply Chain, Finance, Leadership, and Resilience.',
  path: '/domains',
  keywords: [
    '10 Industrial Transformation Domains',
    'Industrial Capability Matrix',
    'Technology & Digital Transformation Domain',
    'Supply Chain Value Network Maturity',
    'Leadership & Governance Assessment',
    'Operational Resilience Domain',
  ],
});

export default function DomainsPage() {
  const domainItems = domainsData.domains.map((dom) => ({
    name: `Domain ${dom.id}: ${dom.name}`,
    description: `${dom.coreQuestion} — ${dom.description}`,
    url: `/domains#domain-${dom.id}`,
  }));

  return (
    <>
      <BreadcrumbSchema
        items={[{ name: '10 Domains', item: '/domains' }]}
      />
      <ItemListSchema
        name="The 10 Industrial Transformation Domains"
        description="Comprehensive evaluation scope covering operational, technological, organisational, and market readiness"
        items={domainItems}
      />
      <DomainsView />
    </>
  );
}
