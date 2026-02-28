import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'NileBridge - Connecting Egyptian Exporters with UK Importers',
  description: 'The trusted marketplace connecting verified Egyptian agricultural exporters with UK importers. Fresh produce, competitive prices, reliable supply chain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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