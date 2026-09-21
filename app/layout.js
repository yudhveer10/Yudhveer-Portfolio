import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';
import { siteUrl, siteDescription as description } from './site-config';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yudhveer Singh Panwar | Full Stack AI Developer',
    template: '%s | Yudhveer Singh Panwar',
  },
  description,
  keywords: [
    'Yudhveer Singh Panwar',
    'AI Engineer',
    'Full Stack Developer',
    'Next.js',
    'Applied AI',
    'Machine Learning',
    'New Delhi',
  ],
  authors: [{ name: 'Yudhveer Singh Panwar', url: siteUrl }],
  creator: 'Yudhveer Singh Panwar',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Yudhveer Singh Panwar',
    title: 'Yudhveer Singh Panwar | Full Stack AI Developer',
    description,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yudhveer Singh Panwar | Full Stack AI Developer',
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  themeColor: '#050b0f',
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Yudhveer Singh Panwar',
  url: siteUrl,
  email: 'mailto:yudhveerp10@gmail.com',
  jobTitle: 'AI Engineer Associate',
  worksFor: { '@type': 'Organization', name: 'TechAivv Technologies' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Vivekananda Institute of Professional Studies (GGSIPU)',
  },
  knowsAbout: [
    'Applied AI',
    'Agentic systems',
    'Full-stack engineering',
    'Computer vision',
    'Next.js',
    'Python',
  ],
  sameAs: [
    'https://github.com/yudhveer10',
    'https://www.linkedin.com/in/yudhveer10',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
