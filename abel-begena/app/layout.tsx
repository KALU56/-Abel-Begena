import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Abel Begena - Ethiopian Music Training',
  description: 'Learn the traditional Ethiopian begena and kirar with Abel Begena, preserving cultural heritage through expert training and instrument craftsmanship.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}