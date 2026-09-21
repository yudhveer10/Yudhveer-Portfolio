import { ImageResponse } from 'next/og';

export const alt = 'Yudhveer Singh Panwar — Full Stack AI Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#050b0f',
          backgroundImage:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          padding: 68,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 54,
              height: 54,
              background: '#baff00',
              color: '#050b0f',
              fontSize: 26,
              fontWeight: 900,
            }}
          >
            YS
          </div>
          <div
            style={{
              color: '#929b9e',
              fontSize: 21,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            Yudhveer Singh Panwar
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              color: '#f2eee4',
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            I build AI products
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 82, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            <span style={{ color: '#f2eee4' }}>that feel</span>
            <span style={{ color: '#baff00' }}>human.</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 30,
            borderTop: '1px solid #263238',
            color: '#929b9e',
            fontSize: 22,
            letterSpacing: 1.5,
          }}
        >
          <div style={{ display: 'flex' }}>AI ENGINEER ASSOCIATE · TECHAIVV</div>
          <div style={{ display: 'flex', color: '#baff00' }}>NEW DELHI, INDIA</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
