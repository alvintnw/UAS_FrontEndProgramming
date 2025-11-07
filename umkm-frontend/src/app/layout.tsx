// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Inter } from 'next/font/google';
import BootstrapClient from '@/components/BootstrapClient';
import Navbar from '@/components/Navbar';
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
        <footer className="bg-dark text-light py-4 mt-auto">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <h5 className="fw-bold mb-3">Sabana Fried Chicken</h5>
                <p className="text-light opacity-75">
                  Sabana Fried Chicken hadir untuk memenuhi kebutuhan masyarakat Indonesia dengan produk Fried Chicken yang Halal, Lezat dan Berkualitas.
                </p>
                <div className="social-links">
                  <a href="#" className="text-light me-3 opacity-75 hover-opacity-100 text-decoration-none">
                    Facebook
                  </a>
                  <a href="#" className="text-light me-3 opacity-75 hover-opacity-100 text-decoration-none">
                    Instagram
                  </a>
                  <a href="#" className="text-light opacity-75 hover-opacity-100 text-decoration-none">
                    TikTok
                  </a>
                </div>
              </div>
              
              <div className="col-lg-2 col-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-3">Quick Links</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link href="/" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href="/about" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                      Tentang Kami
                    </Link>
                  </li>
                  <li className="mb-2">
                    <a href="#menu" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                      Menu
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#contact" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="col-lg-3 col-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-3">Kontak Kami</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="text-light opacity-75">
                      📍 Jl. Contoh No. 123, Jakarta
                    </span>
                  </li>
                  <li className="mb-2">
                    <a 
                      href="tel:+622112345678" 
                      className="text-light opacity-75 text-decoration-none hover-opacity-100"
                    >
                      📞 (021) 1234-5678
                    </a>
                  </li>
                  <li className="mb-2">
                    <a 
                      href="https://wa.me/6281234567890" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light opacity-75 text-decoration-none hover-opacity-100"
                    >
                      📱 +62 812-3456-7890
                    </a>
                  </li>
                  <li className="mb-2">
                    <a 
                      href="mailto:info@sabanafc.com" 
                      className="text-light opacity-75 text-decoration-none hover-opacity-100"
                    >
                      ✉️ info@sabanafc.com
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="col-lg-3">
                <h6 className="fw-bold mb-3">Jam Operasional</h6>
                <ul className="list-unstyled text-light opacity-75">
                  <li className="mb-2">Senin - Jumat: 08:00 - 22:00</li>
                  <li className="mb-2">Sabtu - Minggu: 09:00 - 23:00</li>
                  <li className="mb-2">Pesan Antar 24 Jam</li>
                </ul>
              </div>
            </div>
            
            <hr className="my-4 opacity-25" />
            
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 text-light opacity-75">
                  &copy; {currentYear} Sabana Fried Chicken. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0 text-light opacity-75">
                  Developed by <Link href="/about" className="text-light text-decoration-none">Developer Team</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>

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