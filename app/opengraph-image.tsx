import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'TNI²TRI 2026 — Tamil Nadu Industrial Intelligence & Transformation Readiness';
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
          backgroundColor: '#07192d',
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(14, 165, 233, 0.08) 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          padding: '80px 80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          border: '12px solid #002d62',
        }}
      >
        {/* Top Badges */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              backgroundColor: '#f59e0b',
              color: '#07192d',
              fontWeight: 900,
              fontSize: '18px',
              padding: '6px 16px',
              borderRadius: '8px',
              letterSpacing: '1px',
            }}
          >
            OFFICIAL 2026 INITIATIVE
          </div>
          <div
            style={{
              color: '#38bdf8',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '2px',
            }}
          >
            TNIIIRBI → TNITRI → TNI²TRI
          </div>
        </div>

        {/* Center Title Lockup */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              letterSpacing: '-1px',
              color: '#ffffff',
              lineHeight: 1.1,
            }}
          >
            TNI²TRI <span style={{ color: '#f59e0b' }}>2026</span>
          </div>
          <div
            style={{
              fontSize: '30px',
              fontWeight: 700,
              color: '#93c5fd',
              lineHeight: 1.3,
              maxWidth: '960px',
            }}
          >
            Tamil Nadu Industrial Intelligence, Transformation Readiness & Implementation
          </div>
          <div
            style={{
              fontSize: '22px',
              fontWeight: 500,
              color: '#cbd5e1',
              fontStyle: 'italic',
              marginTop: '8px',
            }}
          >
            &ldquo;Know Where You Stand. Know What Must Change. Know What to Do Next.&rdquo;
          </div>
        </div>

        {/* Footer Metrics / Framework Architecture */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '2px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '32px',
          }}
        >
          <div style={{ display: 'flex', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 600 }}>SYSTEM ARCHITECTURE</span>
              <span style={{ fontSize: '20px', color: '#f8fafc', fontWeight: 800 }}>3 Sequential Layers</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 600 }}>EVALUATION SCOPE</span>
              <span style={{ fontSize: '20px', color: '#f8fafc', fontWeight: 800 }}>10 Domains • 8 Pillars</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 600 }}>RIGOR & EVIDENCE</span>
              <span style={{ fontSize: '20px', color: '#f8fafc', fontWeight: 800 }}>R0–R5 Scale • C0–C3 Verification</span>
            </div>
          </div>
          <div
            style={{
              fontSize: '18px',
              fontWeight: 700,
              color: '#38bdf8',
            }}
          >
            tni2tri.org
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
