import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GlobalOrganizationSchema, WebSiteSchema } from '@/components/StructuredData';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/seo';
import siteMeta from '@/content/site-meta.json';

export const viewport: Viewport = {
  themeColor: '#002d62',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TNI²TRI 2026 | Tamil Nadu Industrial Intelligence & Transformation Readiness',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'TNI²TRI 2026 brings industrial intelligence, transformation-readiness assessment, and structured implementation into one continuous, evidence-backed framework for industries.',
  applicationName: 'TNI²TRI 2026 Portal',
  keywords: [
    'TNI2TRI',
    'TNI²TRI 2026',
    'Tamil Nadu Industrial Intelligence',
    'Transformation Readiness Assessment',
    'TNIIIRBI',
    'TNITRI',
    'Industrial Capability Assessment',
    'Industry 4.0 Tamil Nadu',
    'Manufacturing Excellence',
    'Digital Transformation Tamil Nadu',
    'Industrial Policy India',
    'Industrial Ecosystem Diagnostic',
    'Smart Manufacturing Roadmap',
  ],
  authors: [{ name: 'TNI²TRI 2026 Consortium & Secretariat', url: SITE_URL }],
  creator: 'TNI²TRI 2026 Secretariat',
  publisher: 'TNI²TRI 2026 Consortium',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TNI²TRI 2026 | Tamil Nadu Industrial Intelligence & Transformation Readiness',
    description: 'Know Where You Stand. Know What Must Change. Know What to Do Next.',
    url: SITE_URL,
    siteName: 'TNI²TRI 2026 — Tamil Nadu Industrial Intelligence & Transformation Readiness',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${siteMeta.brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNI²TRI 2026 | Tamil Nadu Industrial Intelligence & Transformation Readiness',
    description: 'Know Where You Stand. Know What Must Change. Know What to Do Next.',
    images: [DEFAULT_OG_IMAGE],
    creator: '@tni2tri',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'Industrial Transformation & Government Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GlobalOrganizationSchema />
        <WebSiteSchema />
      </head>
      <body
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-900"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
