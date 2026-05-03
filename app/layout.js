import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Analytics } from '@vercel/analytics/next';

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  title: 'Yudhveer Singh Panwar | Game UI Portfolio',
  description:
    'Game-inspired portfolio for Yudhveer Singh Panwar, featuring full stack AI work, product-focused frontend systems, and recent projects from his resume.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} ${rajdhani.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
