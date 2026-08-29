import { Metadata } from 'next';
import siteMeta from '@/content/site-meta.json';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.APP_URL ? `https://${process.env.APP_URL.replace(/^https?:\/\//, '')}` : 'https://tni2tri.org');

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
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: PageSeoProps): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const url = `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;

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
    'Smart Manufacturing India',
    'Industrial Ecosystem Diagnostic',
  ];

  const allKeywords = Array.from(new Set([...baseKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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
      site: '@tni2tri',
    },
  };
}
