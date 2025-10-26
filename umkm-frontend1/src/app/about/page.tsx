// src/app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  // Data 5 developer
  const developers = [
    {
      id: 1,
      name: 'Ahmad Wijaya',
      role: 'Full Stack Developer',
      email: 'ahmad.wijaya@umkmdelicious.com',
      whatsapp: '+62 812-3456-7891',
      photo: '/images/developer-1.jpg',
      skills: ['Laravel', 'Next.js', 'MongoDB', 'TypeScript'],
      description: 'Berpengalaman dalam pengembangan web aplikasi selama 3 tahun.'
    },
    {
      id: 2,
      name: 'Sari Dewi',
      role: 'Frontend Developer',
      email: 'sari.dewi@umkmdelicious.com',
      whatsapp: '+62 812-3456-7892',
      photo: '/images/developer-2.jpg',
      skills: ['Next.js', 'React', 'Bootstrap', 'CSS'],
      description: 'Spesialis dalam membuat UI/UX yang menarik dan user-friendly.'
    },
    {
      id: 3,
      name: 'Budi Santoso',
      role: 'Backend Developer',
      email: 'budi.santoso@umkmdelicious.com',
      whatsapp: '+62 812-3456-7893',
      photo: '/images/developer-3.jpg',
      skills: ['Laravel', 'MongoDB', 'REST API', 'PHP'],
      description: 'Ahli dalam membangun sistem backend yang scalable dan aman.'
    },
    {
      id: 4,
      name: 'Maya Sari',
      role: 'UI/UX Designer',
      email: 'maya.sari@umkmdelicious.com',
      whatsapp: '+62 812-3456-7894',
      photo: '/images/developer-4.jpg',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      description: 'Menciptakan pengalaman pengguna yang optimal dan desain yang estetik.'
    },
    {
      id: 5,
      name: 'Rizki Pratama',
      role: 'DevOps Engineer',
      email: 'rizki.pratama@umkmdelicious.com',
      whatsapp: '+62 812-3456-7895',
      photo: '/images/developer-5.jpg',
      skills: ['Docker', 'CI/CD', 'AWS', 'Server Management'],
      description: 'Memastikan aplikasi berjalan lancar dan terdeploy dengan baik.'
    }
  ];

  return (
    <div className="bg-light">
      {/* Header Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Tentang Developer Team</h1>
              <p className="lead">
                Tim developer profesional yang berdedikasi dalam membangun website UMKM Delicious 
                dengan teknologi terkini dan standar kualitas tertinggi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Tim Developer Kami</h2>
            <p className="text-muted">Berkenalan dengan para ahli di balik kesuksesan website ini</p>
          </div>

          <div className="row g-4">
            {developers.map((developer) => (
              <div key={developer.id} className="col-lg-6">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 text-center">
                        <div 
                          className="developer-photo bg-secondary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-white"
                          style={{ width: '120px', height: '120px' }}
                        >
                          <span>[Foto {developer.name}]</span>
                        </div>
                        <h6 className="fw-bold">{developer.role}</h6>
                      </div>
                      <div className="col-md-8">
                        <h5 className="card-title fw-bold text-primary">{developer.name}</h5>
                        <p className="card-text text-muted mb-3">{developer.description}</p>
                        
                        <div className="mb-3">
                          <h6 className="fw-bold mb-2">Skills:</h6>
                          <div className="d-flex flex-wrap gap-2">
                            {developer.skills.map((skill, index) => (
                              <span key={index} className="badge bg-light text-dark border">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="contact-info">
                          <div className="mb-2">
                            <strong>📧 Email:</strong>
                            <a href={`mailto:${developer.email}`} className="text-decoration-none ms-2">
                              {developer.email}
                            </a>
                          </div>
                          <div className="mb-2">
                            <strong>📱 WhatsApp:</strong>
                            <a 
                              href={`https://wa.me/${developer.whatsapp.replace('+', '').replace(/\s/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none ms-2"
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
                            className="btn btn-success btn-sm me-2"
                          >
                            💬 WhatsApp
                          </a>
                          <a 
                            href={`mailto:${developer.email}`}
                            className="btn btn-outline-primary btn-sm"
                          >
                            📧 Email
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
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="fw-bold mb-4">Kolaborasi dengan Mitra UMKM</h3>
              <p className="text-muted mb-4">
                Kami bekerja sama secara erat dengan pemilik UMKM Delicious untuk memahami 
                kebutuhan bisnis dan menciptakan solusi digital yang tepat guna.
              </p>
              <p className="text-muted mb-4">
                Foto ini menunjukkan momen kolaborasi antara tim developer dengan mitra UMKM 
                dalam proses pengembangan website yang user-friendly dan efektif.
              </p>
              <div className="d-flex gap-3">
                <Link href="/" className="btn btn-primary">
                  ← Kembali ke Home
                </Link>
                <a href="#contact" className="btn btn-outline-primary">
                  Hubungi Tim
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div 
                className="team-photo bg-light rounded d-flex align-items-center justify-content-center text-muted"
                style={{ height: '400px', border: '2px dashed #dee2e6' }}
              >
                <div className="text-center">
                  <div className="fs-1 mb-3">📸</div>
                  <p>Foto Bersama Tim Developer dan Mitra UMKM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team Section */}
      <section id="contact" className="py-5 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="fw-bold">Butuh Bantuan Teknis?</h3>
            <p className="lead">Hubungi tim developer kami untuk konsultasi dan support</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="fs-1 mb-3">💻</div>
              <h5>Technical Support</h5>
              <p>Bantuan teknis dan troubleshooting</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="fs-1 mb-3">🔧</div>
              <h5>Maintenance</h5>
              <p>Pemeliharaan dan update berkala</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="fs-1 mb-3">🚀</div>
              <h5>Development</h5>
              <p>Pengembangan fitur baru</p>
            </div>
          </div>

          <div className="text-center mt-5">
            <a 
              href="https://wa.me/6281234567890" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-light btn-lg"
            >
              📱 Hubungi Tim Developer
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="fw-bold">Teknologi yang Digunakan</h4>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-2 col-4">
              <div className="tech-item p-3 border rounded">
                <div className="fs-2 mb-2">⚡</div>
                <small>Next.js</small>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="tech-item p-3 border rounded">
                <div className="fs-2 mb-2">🐘</div>
                <small>Laravel</small>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="tech-item p-3 border rounded">
                <div className="fs-2 mb-2">🍃</div>
                <small>MongoDB</small>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="tech-item p-3 border rounded">
                <div className="fs-2 mb-2">🎨</div>
                <small>Bootstrap 5</small>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="tech-item p-3 border rounded">
                <div className="fs-2 mb-2">📱</div>
                <small>TypeScript</small>
              </div>
            </div>
            <div className="col-md-2 col-4">
              <div className="tech-item p-3 border rounded">
                <div className="fs-2 mb-2">🔗</div>
                <small>REST API</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}