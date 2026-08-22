import { Metadata } from 'next';
import siteMeta from '@/content/site-meta.json';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tni2tri.org';
export const SITE_NAME = 'TNI²TRI 2026';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;

export interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
  publishedTime,
  modifiedTime,
}: PageSeoProps): Metadata {
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  
  const baseKeywords = [
    'TNI2TRI 2026',
    'Tamil Nadu Industrial Intelligence',
    'Transformation Readiness Assessment',
    'TNIIIRBI',
    'TNITRI',
    'Industrial Transformation Implementation',
    'Manufacturing Excellence Tamil Nadu',
    'Industry 4.0 Assessment Framework',
    'Industrial Capability Maturity',
    'Enterprise Transformation Roadmap',
  ];

  const allKeywords = Array.from(new Set([...baseKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: `${SITE_NAME} — Tamil Nadu Industrial Intelligence & Transformation Readiness`,
      locale: 'en_IN',
      type: ogType,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} — ${siteMeta.brand.tagline}`,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
      creator: '@tni2tri',
    },
  };
}
