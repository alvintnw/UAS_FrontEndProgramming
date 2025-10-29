// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import { Inter } from 'next/font/google';
import BootstrapClient from '@/components/BootstrapClient';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sabana - Makanan Enak & Berkualitas',
    template: '%s | UMKM Delicious'
  },
  description: 'Website UMKM makanan dengan berbagai menu lezat dan fresh. Menyediakan nasi goreng, mie ayam, sate, dan berbagai makanan tradisional Indonesia.',
  keywords: ['UMKM', 'makanan', 'kuliner', 'nasi goreng', 'mie ayam', 'makanan tradisional'],
  authors: [{ name: 'UMKM Delicious Team' }],
  creator: 'UMKM Delicious',
  publisher: 'UMKM Delicious',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://umkm-delicious.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://umkm-delicious.vercel.app',
    title: 'Sabana - Makanan Enak & Berkualitas',
    description: 'Website UMKM makanan dengan berbagai menu lezat dan fresh',
    siteName: 'UMKM Delicious',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UMKM Delicious',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UMKM Delicious - Makanan Enak & Berkualitas',
    description: 'Website UMKM makanan dengan berbagai menu lezat dan fresh',
    images: ['/images/og-image.jpg'],
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
  const currentYear = new Date().getFullYear();

  return (
    <html lang="id" className="h-100">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0d6efd" />
      </head>
      <body className={`${inter.className} d-flex flex-column h-100`}>
        {/* Navigation Header */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a className="navbar-brand fw-bold d-flex align-items-center" href="/">
                <span className="fs-4 me-2"></span>
                <div>
                  <div>Sabana Fried Chicken</div>
                  <small className="fw-normal opacity-75" style={{ fontSize: '0.7rem' }}>
                    Makanan Enak & Berkualitas
                  </small>
                </div>
              </a>
              
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a 
                      className="nav-link active" 
                      href="/"
                      aria-current="page"
                    >
                       Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link" 
                      href="/about"
                    >
                       Tentang Kami
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a 
                      className="nav-link dropdown-toggle" 
                      href="#" 
                      role="button" 
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                       Menu
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#makanan"> Makanan</a></li>
                      <li><a className="dropdown-item" href="#minuman"> Minuman</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#promo"> Menu Promo</a></li>
                    </ul>
                  </li>
                </ul>
                
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a 
                      className="nav-link" 
                      href="/dashboard"
                    >
                       Admin Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="btn btn-outline-light btn-sm ms-2" 
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                       Pesan Sekarang
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
                <h5 className="fw-bold mb-3"> Sabana Fried Chicken</h5>
                <p className="text-light opacity-75">
                  Menyajikan berbagai menu makanan dan minuman terbaik dengan bahan-bahan fresh 
                  dan cita rasa yang menggugah selera.
                </p>
                <div className="social-links">
                  <a href="#" className="text-light me-3 opacity-75 hover-opacity-100">
                    <i className="bi bi-facebook"></i> Facebook
                  </a>
                  <a href="#" className="text-light me-3 opacity-75 hover-opacity-100">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                  <a href="#" className="text-light opacity-75 hover-opacity-100">
                    <i className="bi bi-tiktok"></i> TikTok
                  </a>
                </div>
              </div>
              
              <div className="col-lg-2 col-6 mb-4 mb-lg-0">
                <h6 className="fw-bold mb-3">Quick Links</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/about" className="text-light opacity-75 text-decoration-none hover-opacity-100">
                      Tentang Kami
                    </a>
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
                       Jl. Contoh No. 123, Jakarta
                    </span>
                  </li>
                  <li className="mb-2">
                    <a 
                      href="tel:+622112345678" 
                      className="text-light opacity-75 text-decoration-none hover-opacity-100"
                    >
                       (021) 1234-5678
                    </a>
                  </li>
                  <li className="mb-2">
                    <a 
                      href="https://wa.me/6281234567890" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light opacity-75 text-decoration-none hover-opacity-100"
                    >
                       +62 812-3456-7890
                    </a>
                  </li>
                  <li className="mb-2">
                    <a 
                      href="mailto:info@SabanaFriedChicken.com" 
                      className="text-light opacity-75 text-decoration-none hover-opacity-100"
                    >
                       info@umkmdelicious.com
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="col-lg-3">
                <h6 className="fw-bold mb-3">Jam Operasional</h6>
                <ul className="list-unstyled text-light opacity-75">
                  <li className="mb-2">Senin - Jumat: 08:00 - 22:00</li>
                  <li className="mb-2">Sabtu - Minggu: 09:00 - 23:00</li>
                  <li className="mb-2"> Pesan Antar 24 Jam</li>
                </ul>
                <div className="mt-3">
                  <a 
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    Pesan via WhatsApp
                  </a>
                </div>
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
                  Developed by <a href="/about" className="text-light text-decoration-none">Developer Team</a>
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
            <span className="fs-5 me-2"></span>
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