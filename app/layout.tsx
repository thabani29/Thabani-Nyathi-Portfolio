import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thabani-nyathi.dev'),
  verification: {
    google: 'GETGzejVcECRm9PKjYtPLefQEXt1Ssj204ENMVS8KvQ',
  },
  applicationName: 'Thabani Nyathi Portfolio',
  title: {
    default: 'Thabani Nyathi | Software Engineer in Zimbabwe',
    template: '%s | Thabani Nyathi',
  },
  description:
    'Thabani Nyathi is a software engineer and full-stack developer in Harare, Zimbabwe, studying at HIT. Explore his projects, skills, experience, and contact details.',
  keywords: [
    // Primary Name Keywords
    'Thabani Nyathi',
    'Thabani Nyathi software engineer',
    'Thabani Nyathi developer',
    'software engineer Harare Zimbabwe',
    'full-stack developer Zimbabwe',
    'Harare Institute of Technology software engineering',
    'Thabani Nyathi portfolio',
  ],
  authors: [{ name: 'Thabani Nyathi', url: 'https://thabani-nyathi.dev' }],
  creator: 'Thabani Nyathi',
  publisher: 'Thabani Nyathi',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: '/',
    siteName: 'Thabani Nyathi Portfolio',
    title: 'Thabani Nyathi | Software Engineer in Zimbabwe',
    description:
      'Meet Thabani Nyathi, a software engineer and full-stack developer based in Harare, Zimbabwe. Explore selected projects, experience, and skills.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thabani Nyathi | Software Engineer in Zimbabwe',
    description:
      'Explore the portfolio, projects, and experience of Thabani Nyathi, a software engineer in Harare, Zimbabwe.',
    creator: '@thabani_nyathi',
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
    icon: [
      { url: '/thabani.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/thabani.png',
    apple: '/thabani.png',
  },
  other: {
    'geo.region': 'ZW-HA',
    'geo.placename': 'Harare, Zimbabwe',
    'geo.position': '-17.8252;31.0335',
    ICBM: '-17.8252, 31.0335',
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://thabani-nyathi.dev/#person',
      name: 'Thabani Nyathi',
      alternateName: 'Thabani',
      url: 'https://thabani-nyathi.dev',
      image: {
        '@type': 'ImageObject',
        url: 'https://thabani-nyathi.dev/thabani.png',
        caption: 'Thabani Nyathi — Software Engineer in Zimbabwe',
      },
      jobTitle: 'Software Engineer and Full-Stack Developer',
      description:
        'Thabani Nyathi is a software engineer and full-stack developer based in Harare, Zimbabwe, and a Software Engineering student at Harare Institute of Technology.',
      affiliation: {
        '@type': 'CollegeOrUniversity',
        name: 'Harare Institute of Technology',
        sameAs: 'https://www.hit.ac.zw',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Harare',
          addressCountry: 'Zimbabwe',
        },
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Harare',
        addressRegion: 'Harare Province',
        addressCountry: 'ZW',
      },
      email: 'mailto:nyathiza31@gmail.com',
      telephone: '+263789657604',
      sameAs: [
        'https://github.com/thabani29',
        'https://www.linkedin.com/in/thabani-nyathi-3143142aa',
      ],
      knowsAbout: [
        'Software Engineering',
        'Full Stack Web Development',
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Database Systems',
        'Computer Architecture',
      ],
      mainEntityOfPage: {
        '@id': 'https://thabani-nyathi.dev/#profilepage',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://thabani-nyathi.dev/#website',
      url: 'https://thabani-nyathi.dev',
      name: 'Thabani Nyathi Portfolio',
      description:
        'The official portfolio of Thabani Nyathi, a software engineer and full-stack developer in Harare, Zimbabwe.',
      inLanguage: 'en',
      about: {
        '@id': 'https://thabani-nyathi.dev/#person',
      },
      publisher: {
        '@id': 'https://thabani-nyathi.dev/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://thabani-nyathi.dev/#profilepage',
      url: 'https://thabani-nyathi.dev',
      name: 'Thabani Nyathi | Software Engineer Profile',
      isPartOf: {
        '@id': 'https://thabani-nyathi.dev/#website',
      },
      mainEntity: {
        '@id': 'https://thabani-nyathi.dev/#person',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${String(() => {
              try {
                const mode = localStorage.getItem('themeMode');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const useDark = mode === 'dark' || (mode !== 'light' && prefersDark);
                document.documentElement.classList.toggle('dark', useDark);
                document.documentElement.style.colorScheme = useDark ? 'dark' : 'light';
              } catch (e) {
                // Ignore if localStorage is unavailable
              }
            })})();`,
          }}
        />
        <link rel="icon" href="/thabani.png" type="image/png" />
        <link rel="apple-touch-icon" href="/thabani.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdGraph).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="bg-[color:var(--surface-950)] text-[color:var(--text-primary)] font-inter antialiased overflow-x-hidden" suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
