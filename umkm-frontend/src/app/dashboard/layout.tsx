// src/app/dashboard/layout.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const authToken = localStorage.getItem('auth_token');
      
      // Jika di halaman login, jangan redirect
      if (pathname === '/dashboard/login') {
        setIsAuthenticated(false);
        return;
      }

      // Jika tidak ada token, redirect ke login
      if (!authToken) {
        router.push('/dashboard/login');
        return;
      }

      // Jika ada token, set authenticated
      setIsAuthenticated(true);
    };

    checkAuth();
  }, [router, pathname]);

  // Tampilkan loading hanya jika belum menentukan status auth
  // DAN bukan di halaman login
  if (isAuthenticated === null && pathname !== '/dashboard/login') {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}