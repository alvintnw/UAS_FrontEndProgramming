// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/services/api';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  stock_quantity: number;
  ingredients: string[];
  nutrition_facts: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data.data);
    } catch (err) {
      setError('Gagal memuat data produk. Silakan refresh halaman.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const featuredFoods = products.slice(0, 6).map(product => ({
    id: product.id,
    name: product.name,
    price: `Rp ${product.price.toLocaleString('id-ID')}`,
    image: product.image_url || '/images/placeholder-food.jpg',
    description: product.description,
    category: product.category
  }));

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Halo, saya ingin memesan ${productName}. Bisa info lebih lanjut?`;
    const phoneNumber = '6281234567890';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Selamat Datang di UMKM Delicious
              </h1>
              <p className="lead mb-4">
                Menyajikan berbagai menu makanan dan minuman terbaik dengan bahan-bahan fresh 
                dan cita rasa yang menggugah selera. Setiap hidangan dibuat dengan penuh cinta.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link href="#menu" className="btn btn-light btn-lg">
                  🍽️ Lihat Menu
                </Link>
                <Link href="/about" className="btn btn-outline-light btn-lg">
                  👥 Tentang Kami
                </Link>
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  📱 Pesan Sekarang
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div 
                  className="hero-image bg-light rounded d-flex align-items-center justify-content-center text-muted"
                  style={{ 
                    height: '300px', 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white'
                  }}
                >
                  <div>
                    <div className="fs-1 mb-3">🍽️</div>
                    <h4>UMKM Delicious</h4>
                    <p className="mb-0">Makanan Enak & Berkualitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section id="menu" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">🍚 Menu Andalan Kami</h2>
            <p className="text-muted lead">Pilihan menu terbaik yang selalu dinantikan pelanggan</p>
          </div>
          
          {loading && (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Sedang memuat menu...</p>
            </div>
          )}

          {error && (
            <div className="alert alert-warning text-center mx-auto" style={{ maxWidth: '500px' }}>
              <div className="fs-4">⚠️</div>
              <h5>Terjadi Kesalahan</h5>
              <p className="mb-3">{error}</p>
              <button 
                onClick={fetchProducts} 
                className="btn btn-primary btn-sm"
              >
                🔄 Coba Lagi
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="row g-4">
                {featuredFoods.map((food) => (
                  <div key={food.id} className="col-md-6 col-lg-4">
                    <div className="card h-100 shadow-sm border-0 product-card">
                      <div 
                        className="card-img-top d-flex align-items-center justify-content-center text-white position-relative"
                        style={{ 
                          height: '200px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleWhatsAppOrder(food.name)}
                      >
                        <div className="text-center">
                          <div className="fs-1 mb-2">🍽️</div>
                          <small>Klik untuk pesan</small>
                        </div>
                        <div className="position-absolute top-0 end-0 m-2">
                          <span className="badge bg-success">{food.category}</span>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-dark">{food.name}</h5>
                        <p className="card-text text-muted flex-grow-1">{food.description}</p>
                        <div className="d-flex justify-content-between align-items-center mt-auto">
                          <span className="h5 mb-0 text-primary fw-bold">{food.price}</span>
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => handleWhatsAppOrder(food.name)}
                          >
                            📝 Pesan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {products.length === 0 && !loading && (
                <div className="text-center py-5">
                  <div className="fs-1 text-muted mb-3">🍽️</div>
                  <h5 className="text-muted">Menu sedang tidak tersedia</h5>
                  <p className="text-muted">Silakan hubungi kami untuk informasi menu terbaru</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold display-6">⭐ Kenapa Memilih Kami?</h3>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="feature-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '80px', height: '80px' }}>
                <span className="fs-4">🚚</span>
              </div>
              <h5 className="fw-bold">Gratis Ongkir</h5>
              <p className="text-muted">Gratis pengantaran untuk area sekitar dengan minimum pembelian tertentu</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '80px', height: '80px' }}>
                <span className="fs-4">⏰</span>
              </div>
              <h5 className="fw-bold">Layanan 24 Jam</h5>
              <p className="text-muted">Layanan pesan antar 24 jam untuk kenyamanan Anda kapan saja</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '80px', height: '80px' }}>
                <span className="fs-4">🌱</span>
              </div>
              <h5 className="fw-bold">Bahan Fresh</h5>
              <p className="text-muted">Menggunakan bahan-bahan segar dan berkualitas terbaik setiap hari</p>
            </div>
          </div>

          <div className="row g-4 text-center mt-3">
            <div className="col-md-4">
              <div className="feature-icon bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '80px', height: '80px' }}>
                <span className="fs-4">👨‍🍳</span>
              </div>
              <h5 className="fw-bold">Chef Profesional</h5>
              <p className="text-muted">Dimasak oleh chef berpengalaman dengan resep turun temurun</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '80px', height: '80px' }}>
                <span className="fs-4">💳</span>
              </div>
              <h5 className="fw-bold">Pembayaran Mudah</h5>
              <p className="text-muted">Berbagai metode pembayaran tersedia untuk kemudahan transaksi</p>
            </div>
            <div className="col-md-4">
              <div className="feature-icon bg-secondary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                   style={{ width: '80px', height: '80px' }}>
                <span className="fs-4">⭐</span>
              </div>
              <h5 className="fw-bold">Terpercaya</h5>
              <p className="text-muted">Sudah melayani ribuan pelanggan dengan kepuasan terjamin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="fs-2 fw-bold">1000+</div>
              <div className="text-light opacity-75">Pelanggan Puas</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="fs-2 fw-bold">50+</div>
              <div className="text-light opacity-75">Menu Variasi</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="fs-2 fw-bold">3+</div>
              <div className="text-light opacity-75">Tahun Pengalaman</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="fs-2 fw-bold">24/7</div>
              <div className="text-light opacity-75">Layanan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold display-6 mb-4">📞 Hubungi Kami</h3>
              <div className="contact-info">
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-5 me-3">📍</span>
                  <div>
                    <strong>Alamat:</strong>
                    <p className="mb-0 text-muted">Jl. Contoh No. 123, Jakarta Pusat</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-5 me-3">📞</span>
                  <div>
                    <strong>Telepon:</strong>
                    <p className="mb-0 text-muted">
                      <a href="tel:+622112345678" className="text-decoration-none">(021) 1234-5678</a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="fs-5 me-3">📱</span>
                  <div>
                    <strong>WhatsApp:</strong>
                    <p className="mb-0 text-muted">
                      <a 
                        href="https://wa.me/6281234567890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                      >
                        +62 812-3456-7890
                      </a>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <span className="fs-5 me-3">⏰</span>
                  <div>
                    <strong>Jam Operasional:</strong>
                    <p className="mb-0 text-muted">Setiap Hari 08:00 - 22:00 WIB</p>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2 flex-wrap">
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  💬 WhatsApp
                </a>
                <a 
                  href="tel:+622112345678" 
                  className="btn btn-outline-primary btn-lg"
                >
                  📞 Telepon
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div 
                className="map-placeholder rounded d-flex align-items-center justify-content-center text-white"
                style={{ 
                  height: '400px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              >
                <div className="text-center">
                  <div className="fs-1 mb-3">🗺️</div>
                  <h5>Lokasi Kami</h5>
                  <p className="mb-0">Jl. Contoh No. 123, Jakarta</p>
                  <small className="opacity-75">[Peta akan ditampilkan di sini]</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h3 className="fw-bold display-6 mb-3">Siap Memesan?</h3>
          <p className="lead mb-4">Pesan sekarang dan nikmati kelezatan makanan kami!</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-success btn-lg"
            >
              🛒 Pesan via WhatsApp
            </a>
            <Link href="/about" className="btn btn-outline-light btn-lg">
              ℹ️ Tentang Kami
            </Link>
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              🔐 Admin Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}