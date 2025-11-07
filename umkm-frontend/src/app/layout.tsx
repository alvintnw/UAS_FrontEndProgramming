// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Inter } from 'next/font/google';
import BootstrapClient from '@/components/BootstrapClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sabana Fried Chicken - Makanan Enak & Berkualitas',
    template: '%s | Sabana Fried Chicken'
  },
  description: 'Website UMKM makanan dengan berbagai menu lezat dan fresh. Menyediakan nasi goreng, mie ayam, sate, dan berbagai makanan tradisional Indonesia.',
  keywords: ['UMKM', 'makanan', 'kuliner', 'nasi goreng', 'mie ayam', 'makanan tradisional', 'fried chicken'],
  authors: [{ name: 'Sabana Fried Chicken Team' }],
  creator: 'Sabana Fried Chicken',
  publisher: 'Sabana Fried Chicken',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="id" className="h-100">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d6efd" />
      </head>
      <body className={`${inter.className} d-flex flex-column h-100`}>
        {/* Navigation Header */}
        <header>
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Floating Button */}
        <div className="position-fixed bottom-0 end-0 m-4 z-3">
          <a 
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success rounded-pill shadow-lg d-flex align-items-center"
            style={{ 
              padding: '12px 20px',
              animation: 'pulse 2s infinite'
            }}
          >
            <span className="fs-5 me-2">✆</span>
            <div className="d-flex flex-column text-start">
              <small className="opacity-75" style={{ fontSize: '0.7rem', lineHeight: '1' }}>Pesan Sekarang</small>
              <strong style={{ fontSize: '0.8rem', lineHeight: '1' }}>WhatsApp</strong>
            </div>
          </a>
        </div>

        {/* Bootstrap JavaScript */}
        <BootstrapClient />
      </body>
    </html>
  );
}