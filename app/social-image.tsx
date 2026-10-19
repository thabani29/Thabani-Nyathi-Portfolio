import { ImageResponse } from 'next/og';

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageAlt =
  'Thabani Nyathi, software engineer and full-stack developer in Harare, Zimbabwe';

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background:
            'linear-gradient(135deg, #06101f 0%, #0b1930 58%, #081321 100%)',
          color: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          overflow: 'hidden',
          padding: '58px 72px',
          position: 'relative',
          width: '100%',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(90deg, #22d3ee, #3b82f6, #34d399)',
            height: 7,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        />
        <div
          style={{
            border: '1px solid rgba(34, 211, 238, 0.17)',
            borderRadius: 400,
            height: 560,
            position: 'absolute',
            right: -180,
            top: 110,
            width: 560,
          }}
        />
        <div
          style={{
            border: '1px solid rgba(59, 130, 246, 0.16)',
            borderRadius: 400,
            height: 390,
            position: 'absolute',
            right: -95,
            top: 195,
            width: 390,
          }}
        />
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            gap: 18,
            position: 'relative',
          }}
        >
          <div
            style={{
              alignItems: 'center',
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 18,
              display: 'flex',
              fontSize: 28,
              fontWeight: 800,
              height: 58,
              justifyContent: 'center',
              width: 58,
            }}
          >
            TN
          </div>
          <div
            style={{
              color: '#cbd5e1',
              display: 'flex',
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
            }}
          >
            SOFTWARE ENGINEER
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            position: 'relative',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              display: 'flex',
              fontSize: 82,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Thabani Nyathi
          </div>
          <div
            style={{
              background: 'linear-gradient(90deg, #22d3ee, #34d399)',
              borderRadius: 8,
              height: 6,
              marginTop: 4,
              width: 116,
            }}
          />
          <div
            style={{
              color: '#e2e8f0',
              display: 'flex',
              fontSize: 31,
              fontWeight: 600,
            }}
          >
            Full-Stack Developer in Harare, Zimbabwe
          </div>
          <div
            style={{
              color: '#94a3b8',
              display: 'flex',
              fontSize: 21,
            }}
          >
            Software Engineering student at Harare Institute of Technology
          </div>
        </div>
        <div
          style={{
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            color: '#94a3b8',
            display: 'flex',
            fontSize: 19,
            justifyContent: 'space-between',
            paddingTop: 20,
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex' }}>
            Projects, skills, and experience
          </div>
          <div style={{ color: '#67e8f9', display: 'flex', fontWeight: 600 }}>
            thabani-nyathi.dev
          </div>
        </div>
      </div>
    ),
    {
      ...socialImageSize,
    },
  );
}
