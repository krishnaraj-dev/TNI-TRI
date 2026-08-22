import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TNI²TRI 2026 — Tamil Nadu Industrial Intelligence & Transformation Readiness',
    short_name: 'TNI²TRI 2026',
    description: 'An Intelligence-to-Transformation System for Industries: TNIIIRBI → TNITRI → TNI²TRI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07192d',
    theme_color: '#002d62',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
