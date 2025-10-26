// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const authToken = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user');
    
    if (!authToken || !userData) {
      router.push('/dashboard/login');
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    router.push('/dashboard/login');
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <h2>Delicious <span>Admin</span></h2>
        </div>
        <ul className="nav-links">
          <li className="active">
            <Link href="/dashboard">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/products">
              <i className="fas fa-utensils"></i>
              <span>Menu</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/invoices">
              <i className="fas fa-shopping-cart"></i>
              <span>Pesanan</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/panel">
              <i className="fas fa-users"></i>
              <span>Pelanggan</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fas fa-chart-bar"></i>
              <span>Laporan</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <i className="fas fa-cog"></i>
              <span>Pengaturan</span>
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-btn">
              <i className="fas fa-sign-out-alt"></i>
              <span>Keluar</span>
            </button>
          </li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Dashboard UMKM Delicious</h1>
          <div className="user-info">
            <img 
              src={`https://ui-avatars.com/api/?name=${user?.name || 'Admin'}&background=0D8ABC&color=fff`} 
              alt="Admin"
            />
            <div>
              <h4>{user?.name || 'Admin User'}</h4>
              <p>Administrator</p>
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="cards">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Total Pesanan</h3>
              <div className="card-icon orders">
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
            <div className="card-value">1,248</div>
            <div className="card-change positive">
              <i className="fas fa-arrow-up"></i> 12% dari bulan lalu
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Pendapatan</h3>
              <div className="card-icon revenue">
                <i className="fas fa-dollar-sign"></i>
              </div>
            </div>
            <div className="card-value">Rp 24.8 Jt</div>
            <div className="card-change positive">
              <i className="fas fa-arrow-up"></i> 8% dari bulan lalu
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Pelanggan</h3>
              <div className="card-icon customers">
                <i className="fas fa-users"></i>
              </div>
            </div>
            <div className="card-value">856</div>
            <div className="card-change positive">
              <i className="fas fa-arrow-up"></i> 5% dari bulan lalu
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Produk</h3>
              <div className="card-icon products">
                <i className="fas fa-utensils"></i>
              </div>
            </div>
            <div className="card-value">42</div>
            <div className="card-change negative">
              <i className="fas fa-arrow-down"></i> 2 produk habis
            </div>
          </div>
        </div>
        
        {/* Charts and Recent Orders */}
        <div className="dashboard-row">
          <div className="chart-container">
            <h3 className="section-title">Statistik Penjualan 7 Hari Terakhir</h3>
            <div className="chart-placeholder">
              <p>📊 Grafik penjualan akan ditampilkan di sini</p>
            </div>
          </div>
          
          <div className="recent-orders">
            <h3 className="section-title">Pesanan Terbaru</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID Pesanan</th>
                    <th>Pelanggan</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#ORD-1256</td>
                    <td>Budi Santoso</td>
                    <td>Rp 85.000</td>
                    <td><span className="status completed">Selesai</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-1255</td>
                    <td>Sari Indah</td>
                    <td>Rp 120.000</td>
                    <td><span className="status processing">Diproses</span></td>
                  </tr>
                  <tr>
                    <td>#ORD-1254</td>
                    <td>Rizki Pratama</td>
                    <td>Rp 65.000</td>
                    <td><span className="status pending">Menunggu</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Popular Products */}
        <div className="popular-products">
          <h3 className="section-title">Produk Terpopuler</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Kategori</th>
                  <th>Terjual</th>
                  <th>Pendapatan</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nasi Goreng Spesial</td>
                  <td>Makanan</td>
                  <td>156</td>
                  <td>Rp 2.340.000</td>
                  <td>⭐ 4.8</td>
                </tr>
                <tr>
                  <td>Es Jeruk Segar</td>
                  <td>Minuman</td>
                  <td>142</td>
                  <td>Rp 1.420.000</td>
                  <td>⭐ 4.7</td>
                </tr>
                <tr>
                  <td>Ayam Bakar Madu</td>
                  <td>Makanan</td>
                  <td>128</td>
                  <td>Rp 3.200.000</td>
                  <td>⭐ 4.9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}