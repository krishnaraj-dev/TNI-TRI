import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TNI²TRI 2026 — Industrial Intelligence & Transformation Readiness';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#002d62',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              backgroundColor: '#f59e0b',
              color: '#002d62',
              fontWeight: 900,
              fontSize: '18px',
              padding: '6px 16px',
              borderRadius: '8px',
            }}
          >
            TNI²TRI 2026 INITIATIVE
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ fontSize: '60px', fontWeight: 900, color: '#ffffff' }}>
            TNI²TRI 2026
          </div>
          <div style={{ fontSize: '28px', fontWeight: 700, color: '#93c5fd', maxWidth: '900px' }}>
            Tamil Nadu Industrial Intelligence, Transformation Readiness & Implementation
          </div>
          <div style={{ fontSize: '20px', color: '#e2e8f0', fontStyle: 'italic' }}>
            &ldquo;Know Where You Stand. Know What Must Change. Know What to Do Next.&rdquo;
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '2px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '24px',
            fontSize: '18px',
            color: '#38bdf8',
            fontWeight: 700,
          }}
        >
          <span>TNIIIRBI → TNITRI → TNI²TRI</span>
          <span>tni2tri.org</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
