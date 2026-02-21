import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Presencia Digital | Custom Software Development from El Salvador',
  description: 'Senior software engineers based in El Salvador. Custom development, cloud migration, and dedicated teams for businesses across the Americas. Java, PHP/Laravel, React, GCP.',
  keywords: 'custom software development El Salvador, nearshore software engineers, Laravel development, Java Spring Boot, cloud migration GCP, dedicated engineering team Latin America',
  icons: {
    icon: '/isotipo.png',
  },
  openGraph: {
    title: 'Presencia Digital — Senior Software Engineering',
    description: 'A team of senior software engineers based in El Salvador.',
    url: 'https://www.presenciadigital.io',
    siteName: 'Presencia Digital',
    type: 'website',
    locale: 'en_US',
    // images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presencia Digital — Senior Software Engineering',
    description: 'A team of senior software engineers based in El Salvador.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
