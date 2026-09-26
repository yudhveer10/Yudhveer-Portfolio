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
          background: '#fafaf9',
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
              background: '#111113',
              color: '#fafaf9',
              borderRadius: 14,
              fontSize: 26,
              fontWeight: 900,
            }}
          >
            YS
          </div>
          <div
            style={{
              color: '#111113',
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            Yudhveer Singh Panwar
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              color: '#111113',
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            I build AI products
          </div>
          <div style={{ display: 'flex', gap: 22, fontSize: 82, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            <span style={{ color: '#111113' }}>that feel</span>
            <span style={{ color: '#3f5bd9', fontStyle: 'italic' }}>human.</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: 30,
            borderTop: '1px solid #e7e6e3',
            color: '#52525b',
            fontSize: 22,
            
          }}
        >
          <div style={{ display: 'flex' }}>AI Engineer · TechAivv</div>
          <div style={{ display: 'flex', color: '#8a8a93' }}>New Delhi, India</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
