import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thabani-nyathi.dev'),
  title: {
    default: 'Thabani Nyathi — Software Engineer in Zimbabwe | Full Stack Developer',
    template: '%s | Thabani Nyathi — Software Engineer Zimbabwe',
  },
  description:
    'Thabani Nyathi is a premier Software Engineer and Full Stack Developer based in Harare, Zimbabwe. Software Engineering student at Harare Institute of Technology (HIT), specializing in React, Next.js, Node.js, TypeScript, and Scalable Web Applications.',
  keywords: [
    // Primary Name Keywords
    'Thabani Nyathi',
    'Thabani Nyathi Software Engineer',
    'Thabani Nyathi Developer',
    'Thabani Nyathi Zimbabwe',
    'Thabani Nyathi HIT',
    'Thabani Nyathi Portfolio',
    'Thabani Nyathi Harare',
    // Regional & Country Keywords
    'Software Engineer in Zimbabwe',
    'Software Developer Zimbabwe',
    'Best Software Engineers in Zimbabwe',
    'Full Stack Developer Zimbabwe',
    'Full Stack Developer Harare',
    'Web Developer Zimbabwe',
    'Web Developer Harare',
    'Top Developers in Zimbabwe',
    'Computer Science Student Zimbabwe',
    'Harare Institute of Technology Computer Science',
    'HIT Computer Science Student',
    // Technology Specific Keywords
    'React Developer Zimbabwe',
    'Next.js Developer Zimbabwe',
    'TypeScript Engineer Zimbabwe',
    'Node.js Developer Harare',
    'Frontend Developer Zimbabwe',
    'Backend Engineer Zimbabwe',
    'Database Developer Zimbabwe',
    // Projects & Specific Work
    'Zimcrafts-Hub',
    'Pulse SEO Engine',
    'Thabani Nyathi Projects',
  ],
  authors: [{ name: 'Thabani Nyathi', url: 'https://thabani-nyathi.dev' }],
  creator: 'Thabani Nyathi',
  publisher: 'Thabani Nyathi',
  alternates: {
    canonical: 'https://thabani-nyathi.dev',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thabani-nyathi.dev',
    siteName: 'Thabani Nyathi — Software Engineer Portfolio',
    title: 'Thabani Nyathi — Software Engineer in Zimbabwe | Full Stack Developer',
    description:
      'Thabani Nyathi is a premier Software Engineer & Full Stack Developer in Harare, Zimbabwe. Computer Science student at Harare Institute of Technology (HIT), building scalable web applications and software solutions.',
    images: [
      {
        url: '/thabani.png',
        width: 1200,
        height: 630,
        alt: 'Thabani Nyathi — Software Engineer in Zimbabwe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thabani Nyathi — Software Engineer in Zimbabwe',
    description:
      'Premier Software Engineer & Full Stack Developer based in Harare, Zimbabwe. Computer Science at Harare Institute of Technology.',
    images: ['/thabani.png'],
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

// JSON-LD structured data graph
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://thabani-nyathi.dev/#person',
      name: 'Thabani Nyathi',
      alternateName: [
        'Thabani',
        'T. Nyathi',
        'Thabani Nyathi Software Engineer',
        'Thabani Nyathi Developer Zimbabwe',
      ],
      url: 'https://thabani-nyathi.dev',
      image: {
        '@type': 'ImageObject',
        url: 'https://thabani-nyathi.dev/thabani.png',
        caption: 'Thabani Nyathi — Software Engineer in Zimbabwe',
      },
      jobTitle: 'Software Engineer & Full Stack Developer',
      description:
        'Thabani Nyathi is a Software Engineer and Computer Science student at Harare Institute of Technology (HIT) in Harare, Zimbabwe, specializing in React, Next.js, TypeScript, Node.js, and scalable web architecture.',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance Software Engineering & Web Development Services',
      },
      alumniOf: {
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
        'React.js',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Database Management',
        'Computer Architecture',
        'Software Architecture in Zimbabwe',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://thabani-nyathi.dev/#website',
      url: 'https://thabani-nyathi.dev',
      name: 'Thabani Nyathi Portfolio — Software Engineer in Zimbabwe',
      description: 'Official portfolio website of Thabani Nyathi, Software Engineer & Full Stack Developer in Zimbabwe.',
      publisher: {
        '@id': 'https://thabani-nyathi.dev/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://thabani-nyathi.dev/#profilepage',
      url: 'https://thabani-nyathi.dev',
      name: 'Thabani Nyathi — Software Engineer Profile',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-[color:var(--surface-950)] text-[color:var(--text-primary)] font-inter antialiased overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
