// src/app/dashboard/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Simulasi login - ganti dengan API call sesungguhnya
      if (email === 'admin@umkmdelicious.com' && password === 'password123') {
        const userData = {
          id: 1,
          name: 'Admin UMKM Delicious',
          email: email,
          role: 'admin'
        };

        localStorage.setItem('auth_token', 'demo-token-' + Date.now());
        localStorage.setItem('user', JSON.stringify(userData));
        
        router.push('/dashboard');
      } else {
        setError('Email atau password salah');
      }
    } catch (err: any) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: '60px', height: '60px' }}>
                    <span className="text-white fs-4">🔐</span>
                  </div>
                  <h3 className="fw-bold text-dark">Admin Login</h3>
                  <p className="text-muted">UMKM Delicious Dashboard</p>
                </div>

                <form onSubmit={handleLogin}>
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <span className="me-2">⚠️</span>
                      <small>{error}</small>
                    </div>
                  )}

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      📧 Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="admin@umkmdelicious.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-semibold">
                      🔒 Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 py-3"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Logging in...
                      </>
                    ) : (
                      '🚀 Login to Dashboard'
                    )}
                  </button>
                </form>

                <div className="mt-4 p-3 bg-light rounded">
                  <h6 className="fw-bold mb-2">Demo Credentials:</h6>
                  <div className="small">
                    <div>📧 Email: <code>admin@umkmdelicious.com</code></div>
                    <div>🔑 Password: <code>password123</code></div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Link href="/" className="text-decoration-none">
                    ← Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}