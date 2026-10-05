import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './wallet-overrides.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://autodropshipprime.example'),
  title: { default: 'AutoDropshipPrime | All-in-One Dropshipping Automation Platform', template: '%s | AutoDropshipPrime' },
  description: 'Automate product hunting, listings, stock and price monitoring, order tracking, Google Sheets updates, profit calculations and reports from one platform.',
  openGraph: {
    title: 'AutoDropshipPrime | All-in-One Dropshipping Automation Platform',
    description: 'Product hunting, listing, monitoring, orders and profit analytics in one connected workflow.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
