// src/app/dashboard/login/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user');
    
    if (authToken && userData) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
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
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="logo">
              <h1>Delicious <span>Admin</span></h1>
              <p>UMKM Delicious Dashboard</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}

            <div className="form-group">
              <label>
                <i className="fas fa-envelope"></i>
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@umkmdelicious.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>
                <i className="fas fa-lock"></i>
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Logging in...
                </>
              ) : (
                <>
                  <i className="fas fa-rocket"></i>
                  Login to Dashboard
                </>
              )}
            </button>
          </form>

          <div className="demo-credentials">
            <h4>Demo Credentials</h4>
            <div className="credentials">
              <div>
                <i className="fas fa-envelope"></i>
                <span>admin@umkmdelicious.com</span>
              </div>
              <div>
                <i className="fas fa-key"></i>
                <span>password123</span>
              </div>
            </div>
          </div>

          <div className="back-home">
            <Link href="/">
              <i className="fas fa-arrow-left"></i>
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .login-container {
          width: 100%;
          max-width: 420px;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .login-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .logo h1 {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #e74c3c, #f39c12);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
        }

        .logo span {
          font-weight: 300;
        }

        .logo p {
          color: #6c757d;
          font-size: 1.1rem;
        }

        .login-form {
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2c3e50;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 0.95rem;
        }

        .form-group input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .form-group input:focus {
          outline: none;
          border-color: #e74c3c;
          box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
        }

        button {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #e74c3c, #f39c12);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(231, 76, 60, 0.4);
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .error-message {
          background: #f8d7da;
          color: #721c24;
          padding: 12px 15px;
          border-radius: 8px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #f5c6cb;
        }

        .demo-credentials {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .demo-credentials h4 {
          color: #2c3e50;
          margin-bottom: 15px;
          text-align: center;
        }

        .credentials div {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          color: #6c757d;
          font-family: monospace;
        }

        .back-home a {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6c757d;
          text-decoration: none;
          justify-content: center;
          transition: color 0.3s ease;
        }

        .back-home a:hover {
          color: #e74c3c;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}