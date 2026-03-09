import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'NileBridge - Egyptian Agricultural Exporters & UK Importers Marketplace',
  description: 'The trusted B2B marketplace connecting verified Egyptian agricultural exporters with UK importers. Fresh citrus, vegetables, herbs & more. Direct trade, quality assured.',
  keywords: 'Egyptian agricultural exports, UK food importers, Egypt fruits export, fresh produce supplier Egypt, import from Egypt UK, Egyptian oranges supplier, agricultural trade Egypt UK',
  openGraph: {
    title: 'NileBridge - Egyptian Agricultural Exporters & UK Importers',
    description: 'Connect with verified Egyptian agricultural exporters. Fresh produce, competitive prices, reliable supply chain to UK.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'NileBridge',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NileBridge - Egypt to UK Agricultural Trade',
    description: 'The trusted marketplace for Egyptian agricultural exports to the UK.',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="NileBridge" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.region" content="EG" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}