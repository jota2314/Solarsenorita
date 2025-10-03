import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata: Metadata = {
  title: {
    default: 'Solar Señorita | Free Solar Consultation in Massachusetts',
    template: '%s | Solar Señorita',
  },
  description: 'Get FREE solar consultation with Solar Señorita Jenni. Save money on energy bills in Massachusetts. Expert solar panel installation and energy independence solutions.',
  keywords: [
    'solar panels Massachusetts',
    'solar installation Boston',
    'solar energy Cambridge',
    'free solar consultation',
    'solar savings calculator',
    'renewable energy MA',
    'solar panel cost',
    'energy independence',
    'solar financing options',
    'Massachusetts solar incentives'
  ],
  authors: [{ name: 'Solar Señorita' }],
  creator: 'Solar Señorita',
  publisher: 'Solar Señorita',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://solarsenorita.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://solarsenorita.com',
    title: 'Solar Señorita | Free Solar Consultation in Massachusetts',
    description: 'Get FREE solar consultation with Solar Señorita Jenni. Save money on energy bills in Massachusetts.',
    siteName: 'Solar Señorita',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solar Señorita - Massachusetts Solar Panel Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solar Señorita | Free Solar Consultation in Massachusetts',
    description: 'Get FREE solar consultation with Solar Señorita Jenni. Save money on energy bills in Massachusetts.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ff69b4" />
        <meta name="msapplication-TileColor" content="#ff69b4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <AuthProvider>
            {children}
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
