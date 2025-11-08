'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  // Data 5 developer
  const developers = [
    {
      id: 1,
      name: 'Mecky Alvin Tanuwidjaya',
      role: 'Full Stack Developer',
      email: 'alvin@gmail.com',
      whatsapp: '+62 812-3456-7891',
      photo: '/images/developer-1.jpg',
      skills: ['Laravel', 'Next.js', 'MongoDB', 'TypeScript'],
      description: 'Berpengalaman dalam pengembangan web aplikasi selama 3 tahun.'
    },
    {
      id: 2,
      name: 'Rendy Matheu',
      role: 'Full Stack Developer',
      email: 'rendymatheu52@gmail.com',
      whatsapp: '+62 821-7737-3376',
      photo: '/images/developer-2.jpg',
      skills: ['Next.js', 'React', 'Bootstrap', 'CSS'],
      description: 'Berpengalaman dalam database dan pengembangan web.'
    },
    {
      id: 3,
      name: 'Muhammad Satria Rizky',
      role: 'Frontend Developer, UI/UX Designer',
      email: 'muhammmad.535240002@stu.untar.ac.id',
      whatsapp: '+62 812-3456-7893',
      photo: '/images/developer-3.jpg',
      skills: ['Javascript', 'Figma', 'CSS', 'PHP', 'HTML'],
      description: 'Ahli dalam membuat UI/UX yang menarik.'
    },
    {
      id: 4,
      name: 'Muhammad Aldi Rifky Pasaribu',
      role: 'UI/UX Designer, Debugger',
      email: 'muhammmad.535240005@stu.untar.ac.id',
      whatsapp: '+62 895-3600-43140',
      photo: '/images/developer-4.jpg',
      skills: ['Figma', 'Adobe XD', 'Javascript', 'User Research'],
      description: 'Menciptakan pengalaman pengguna yang optimal dan desain yang estetik.'
    },
    {
      id: 5,
      name: 'Angelo',
      role: 'Tester',
      email: 'rizki.pratama@umkmdelicious.com',
      whatsapp: '+62 812-3456-7895',
      photo: '/images/developer-5.png',
      skills: ['Docker', 'CI/CD', 'AWS', 'Server Management'],
      description: 'Memastikan aplikasi berjalan lancar dan terdeploy dengan baik.'
    }
  ];

  return (
    <div className="fade-in">
      {/* Enhanced Header Section */}
      <section className="about-hero-section text-white d-flex align-items-center justify-content-center position-relative overflow-hidden" style={{ minHeight: '70vh' }}>
        {/* Animated Background */}
        <div className="about-hero-bg">
          <div className="about-bg-layer-1"></div>
          <div className="about-bg-layer-2"></div>
          <div className="about-bg-layer-3"></div>
        </div>

        {/* Floating Elements */}
        <div className="about-floating-elements">
          <div className="about-floating-item item-1">👨‍💻</div>
          <div className="about-floating-item item-2">🎨</div>
          <div className="about-floating-item item-3">🚀</div>
          <div className="about-floating-item item-4">⭐</div>
        </div>

        <div className="container position-relative z-index-2">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center slide-in-left">
              <div className="about-hero-content">
                <div className="hero-badge mb-4">
                  <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fs-6">
                    #TimDeveloperProfesional
                  </span>
                </div>

                <h1 className="display-4 fw-bold mb-4 gradient-text">
                  Tentang Developer Team
                  <span className="typing-cursor">|</span>
                </h1>

                <p className="lead mb-4 fs-5 text-light lh-base">
                  Tim developer profesional yang berdedikasi dalam membangun website Sabana
                  dengan <strong>teknologi terkini</strong> dan standar kualitas tertinggi.
                </p>

                <div className="hero-rating mt-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="stars me-2">
                      ⭐⭐⭐⭐⭐
                    </div>
                    <span className="text-warning fw-bold">5.0/5</span>
                    <span className="text-light ms-2">• Tim Terpercaya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Developer Team Section */}
      <section className="about-developer-section py-5 position-relative">
        <div className="about-developer-bg-decoration"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <span className="badge bg-primary text-white px-4 py-2 rounded-pill">
                Tim Developer
              </span>
            </div>
            <h2 className="fw-bold display-4 mb-3 gradient-text-secondary">Tim Developer Kami</h2>
            <p className="text-muted lead fs-5">Berkenalan dengan para ahli di balik kesuksesan website ini</p>
          </div>

          <div className="row g-4">
            {developers.map((developer, index) => (
              <div key={developer.id} className="col-lg-6">
                <div className={`card h-100 shadow-sm border-0 developer-card animate-card delay-${index % 3} hover-scale`}>
                  <div className="card-body p-4">
                    <div className="row">
                      <div className="col-md-4 text-center">
                        <div className="developer-image-wrapper mb-3">
                          <Image
                            src={developer.photo}
                            alt={`Foto ${developer.name}`}
                            width={120}
                            height={120}
                            className="rounded-circle developer-image"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <h6 className="fw-bold text-primary">{developer.role}</h6>
                      </div>
                      <div className="col-md-8">
                        <h4 className="card-title fw-bold gradient-text-secondary mb-3">{developer.name}</h4>
                        <p className="card-text text-muted mb-3">{developer.description}</p>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-2">Skills:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {developer.skills.map((skill, index) => (
                              <span key={index} className="badge bg-light text-dark border skill-badge">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="contact-info">
                          <div className="mb-2">
                            <strong>Email:</strong>
                            <a href={`mailto:${developer.email}`} className="text-decoration-none ms-2 text-primary">
                              {developer.email}
                            </a>
                          </div>
                          <div className="mb-2">
                            <strong>WhatsApp:</strong>
                            <a
                              href={`https://wa.me/${developer.whatsapp.replace('+', '').replace(/\s/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none ms-2 text-success"
                            >
                              {developer.whatsapp}
                            </a>
                          </div>
                        </div>

                        <div className="mt-3">
                          <a
                            href={`https://wa.me/${developer.whatsapp.replace('+', '').replace(/\s/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success btn-sm me-2 hover-scale"
                          >
                            WhatsApp
                          </a>
                          <a
                            href={`mailto:${developer.email}`}
                            className="btn btn-outline-primary btn-sm hover-scale"
                          >
                            Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-5 bg-white position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 slide-in-left">
              <h3 className="fw-bold mb-4 gradient-text-secondary">Kolaborasi dengan Mitra UMKM</h3>
              <p className="text-muted mb-4">
                Kami bekerja sama secara erat dengan pemilik Sabana untuk memahami
                kebutuhan bisnis dan menciptakan solusi digital yang tepat guna.
              </p>
              <p className="text-muted mb-4">
                Foto ini menunjukkan momen kolaborasi antara tim developer dengan mitra UMKM
                dalam proses pengembangan website yang user-friendly dan efektif.
              </p>
              <div className="d-flex gap-3">
                <Link href="/" className="btn btn-primary btn-xl hover-scale">
                  ← Kembali ke Home
                </Link>
                <a href="#contact" className="btn btn-outline-primary btn-xl hover-scale">
                  Hubungi Tim
                </a>
              </div>
            </div>
            <div className="col-lg-6 slide-in-right">
              <div
                className="team-photo bg-light rounded d-flex align-items-center justify-content-center text-muted shadow-lg hover-scale"
                style={{
                  height: '400px',
                  overflow: 'hidden',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                <Image
                  src="/images/Mitra-Photo.png" // Path ke gambar Anda di folder public/images
                  alt="Foto Tim Developer dan Mitra UMKM"
                  fill={true}
                  style={{
                    objectFit: 'cover'
                  }}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Team Section */}
      <section id="contact" className="about-contact-section py-5 position-relative overflow-hidden">
        <div className="about-contact-bg-pattern"></div>
        <div className="container position-relative">
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <span className="badge bg-primary text-white px-4 py-2 rounded-pill shadow-lg">
                <i className="fas fa-headset me-2"></i>Hubungi Kami
              </span>
            </div>
            <h3 className="fw-bold display-5 mb-3 gradient-text-secondary">Butuh Bantuan Teknis?</h3>
            <p className="lead fs-5 text-muted">Tim developer profesional siap membantu Anda dengan solusi terbaik</p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="contact-service-card h-100 hover-scale animate-fade-in position-relative" style={{ animationDelay: '0.1s' }}>
                <div className="card-glow"></div>
                <div className="service-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-lg position-relative"
                     style={{ width: '120px', height: '120px', zIndex: 2 }}>
                  <span className="fs-1">💻</span>
                </div>
                <h5 className="fw-bold text-dark mb-3">Technical Support</h5>
                <p className="text-muted mb-4">Bantuan teknis dan troubleshooting untuk website Anda dengan respons cepat</p>
                <div className="service-features">
                  <small className="text-primary fw-bold">✓ 24/7 Support</small><br />
                  <small className="text-primary fw-bold">✓ Quick Response</small><br />
                  <small className="text-primary fw-bold">✓ Expert Team</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="contact-service-card h-100 hover-scale animate-fade-in position-relative" style={{ animationDelay: '0.3s' }}>
                <div className="card-glow"></div>
                <div className="service-icon bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-lg position-relative"
                     style={{ width: '120px', height: '120px', zIndex: 2 }}>
                  <span className="fs-1">🔧</span>
                </div>
                <h5 className="fw-bold text-dark mb-3">Maintenance</h5>
                <p className="text-muted mb-4">Pemeliharaan rutin dan update sistem untuk performa optimal website</p>
                <div className="service-features">
                  <small className="text-warning fw-bold">✓ Regular Updates</small><br />
                  <small className="text-warning fw-bold">✓ Security Patches</small><br />
                  <small className="text-warning fw-bold">✓ Performance Boost</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="contact-service-card h-100 hover-scale animate-fade-in position-relative" style={{ animationDelay: '0.5s' }}>
                <div className="card-glow"></div>
                <div className="service-icon bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-lg position-relative"
                     style={{ width: '120px', height: '120px', zIndex: 2 }}>
                  <span className="fs-1">🚀</span>
                </div>
                <h5 className="fw-bold text-dark mb-3">Development</h5>
                <p className="text-muted mb-4">Pengembangan fitur baru dan modernisasi sistem sesuai kebutuhan</p>
                <div className="service-features">
                  <small className="text-success fw-bold">✓ Custom Features</small><br />
                  <small className="text-success fw-bold">✓ Modern Tech Stack</small><br />
                  <small className="text-success fw-bold">✓ Scalable Solutions</small>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="contact-cta-wrapper position-relative">
              <div className="cta-background"></div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-xl px-5 py-3 fw-bold shadow-lg pulse-btn position-relative"
                style={{ zIndex: 2 }}
              >
                <span className="me-3">📱</span>
                Hubungi Tim Developer
                <span className="ms-3">✨</span>
              </a>
              <p className="text-muted mt-3 mb-0">Konsultasi gratis • Response dalam 1 jam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5 bg-light position-relative">
        <div className="container">
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <span className="badge bg-secondary text-white px-4 py-2 rounded-pill">
                Teknologi
              </span>
            </div>
            <h4 className="fw-bold display-5 gradient-text-secondary">Teknologi yang Digunakan</h4>
            <p className="text-muted lead">Stack teknologi modern untuk performa optimal</p>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-2 col-4">
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item-link text-decoration-none d-block p-3 border rounded hover-scale animate-fade-in shadow-sm"
                style={{ animationDelay: '0.1s', transition: 'all 0.3s ease', backgroundColor: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="fs-2 mb-2 text-primary">⚡</div>
                <small className="fw-bold text-dark">Next.js</small>
              </a>
            </div>
            <div className="col-md-2 col-4">
              <a
                href="https://laravel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item-link text-decoration-none d-block p-3 border rounded hover-scale animate-fade-in shadow-sm"
                style={{ animationDelay: '0.2s', transition: 'all 0.3s ease', backgroundColor: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="fs-2 mb-2 text-danger">🐘</div>
                <small className="fw-bold text-dark">Laravel</small>
              </a>
            </div>
            <div className="col-md-2 col-4">
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item-link text-decoration-none d-block p-3 border rounded hover-scale animate-fade-in shadow-sm"
                style={{ animationDelay: '0.3s', transition: 'all 0.3s ease', backgroundColor: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="fs-2 mb-2 text-success">🍃</div>
                <small className="fw-bold text-dark">MongoDB</small>
              </a>
            </div>
            <div className="col-md-2 col-4">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item-link text-decoration-none d-block p-3 border rounded hover-scale animate-fade-in shadow-sm"
                style={{ animationDelay: '0.4s', transition: 'all 0.3s ease', backgroundColor: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="fs-2 mb-2 text-info">🎨</div>
                <small className="fw-bold text-dark">Bootstrap 5</small>
              </a>
            </div>
            <div className="col-md-2 col-4">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item-link text-decoration-none d-block p-3 border rounded hover-scale animate-fade-in shadow-sm"
                style={{ animationDelay: '0.5s', transition: 'all 0.3s ease', backgroundColor: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="fs-2 mb-2 text-primary">📱</div>
                <small className="fw-bold text-dark">TypeScript</small>
              </a>
            </div>
            <div className="col-md-2 col-4">
              <a
                href="https://restfulapi.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="tech-item-link text-decoration-none d-block p-3 border rounded hover-scale animate-fade-in shadow-sm"
                style={{ animationDelay: '0.6s', transition: 'all 0.3s ease', backgroundColor: '#fff' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="fs-2 mb-2 text-warning">🔗</div>
                <small className="fw-bold text-dark">REST API</small>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
