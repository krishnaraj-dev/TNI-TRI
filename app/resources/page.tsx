import React from 'react';
import type { Metadata } from 'next';
import { ResourcesView } from '@/components/ResourcesView';
import { BreadcrumbSchema, ItemListSchema } from '@/components/StructuredData';
import { constructMetadata } from '@/lib/seo';
import resourcesData from '@/content/resources.json';

export const metadata: Metadata = constructMetadata({
  title: 'Resources & Industrial Intelligence — Reports, Whitepapers & Methodology Handbooks',
  description:
    'Access official TNI²TRI 2026 intelligence assets, transformation diagnostic whitepapers, Industry 4.0 benchmark reports, and governance frameworks.',
  path: '/resources',
  keywords: [
    'TNI2TRI Resources',
    'Industrial Intelligence Briefings',
    'Manufacturing Benchmark Reports',
    'Transformation Whitepapers',
    'Tamil Nadu Industry Reports',
  ],
});

export default function ResourcesPage() {
  const resourceItems = resourcesData.categories.flatMap((cat) =>
    cat.items.map((item) => ({
      name: `${item.title} (${item.type})`,
      description: `${cat.name} — ${item.summary}`,
    }))
  );

  return (
    <>
      <BreadcrumbSchema
        items={[{ name: 'Resources & Intelligence', item: '/resources' }]}
      />
      <ItemListSchema
        name="TNI²TRI Industrial Intelligence & Publication Repository"
        description="Curated publications, methodology whitepapers, and transformation intelligence briefs"
        items={resourceItems}
      />
      <ResourcesView />
    </>
  );
}
