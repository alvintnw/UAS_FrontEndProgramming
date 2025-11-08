// src/app/dashboard/reports/page.tsx
'use client';

import { useState } from 'react';

export default function ReportsPage() {
  const [reportType, setReportType] = useState('sales');
  const [dateRange, setDateRange] = useState('week');

  const salesData = {
    week: [1200000, 1800000, 1500000, 2200000, 1900000, 2500000, 2100000],
    month: [45000000, 52000000, 48000000, 55000000],
    year: [120000000, 135000000, 125000000, 140000000, 155000000, 160000000]
  };

  const topProducts = [
    { name: 'Nasi Goreng Spesial', sales: 156, revenue: 2340000, growth: '+15%', rating: 4.8 },
    { name: 'Es Jeruk Segar', sales: 142, revenue: 1420000, growth: '+8%', rating: 4.7 },
    { name: 'Ayam Bakar Madu', sales: 128, revenue: 3200000, growth: '+22%', rating: 4.9 },
    { name: 'Chicken Roll', sales: 95, revenue: 1900000, growth: '+12%', rating: 4.6 },
    { name: 'Kentang Goreng', sales: 87, revenue: 870000, growth: '+5%', rating: 4.5 }
  ];

  const getDateRangeLabel = () => {
    switch (dateRange) {
      case 'week': return '7 Hari Terakhir';
      case 'month': return '30 Hari Terakhir';
      case 'year': return '1 Tahun Terakhir';
      default: return '';
    }
  };

  const getReportTypeLabel = () => {
    switch (reportType) {
      case 'sales': return 'Laporan Penjualan';
      case 'products': return 'Laporan Produk';
      case 'customers': return 'Laporan Pelanggan';
      default: return '';
    }
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Laporan & <span className="brand-text">Analitik</span>
          </h2>
          <p className="welcome-subtitle">
            Pantau performa bisnis Anda dengan data real-time
          </p>
          <div className="welcome-stats">
            <div className="stat-item">
              <div className="stat-number">Export</div>
              <div className="stat-label">PDF</div>
            </div>
          </div>
        </div>
        <div className="welcome-decoration">
          <div className="floating-icon icon-1">📊</div>
          <div className="floating-icon icon-2">📈</div>
          <div className="floating-icon icon-3">📋</div>
          <div className="floating-icon icon-4">💼</div>
        </div>
      </div>
      {/* Controls Section */}
      <div className="flex gap-3 mb-6">
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
        >
          <option value="sales">Laporan Penjualan</option>
          <option value="products">Laporan Produk</option>
          <option value="customers">Laporan Pelanggan</option>
        </select>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
        >
          <option value="week">7 Hari Terakhir</option>
          <option value="month">30 Hari Terakhir</option>
          <option value="year">1 Tahun Terakhir</option>
        </select>
        <button className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white px-6 py-2 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-green-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Export PDF
        </button>
      </div>

      {/* Report Cards */}
      <div className="cards">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Total Pendapatan</h3>
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
            <h3 className="card-title">Rata-rata Nilai Pesanan</h3>
            <div className="card-icon customers">
              <i className="fas fa-chart-line"></i>
            </div>
          </div>
          <div className="card-value">Rp 89.500</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> 5% dari bulan lalu
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-container">
        <h3 className="section-title">Grafik Penjualan - {getDateRangeLabel()}</h3>
        <div className="chart-placeholder">
          <div className="chart-icon">📊</div>
          <p>Grafik penjualan {getDateRangeLabel().toLowerCase()}</p>
          <small className="chart-note">Data real-time tersedia</small>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="popular-products">
        <h3 className="section-title">Produk Terlaris</h3>
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
              {topProducts.map((product, index) => (
                <tr key={index}>
                  <td className="flex items-center gap-3">
                    <div className="product-indicator bg-yellow-500"></div>
                    <div className="product-image">
                      <img src={`/images/${product.name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}.png`} alt={product.name} onError={(e) => e.currentTarget.style.display = 'none'} />
                    </div>
                    <div>
                      <div className="product-name">{product.name}</div>
                      <div className="product-desc">{product.sales} terjual</div>
                    </div>
                  </td>
                  <td>Makanan</td>
                  <td className="font-bold text-blue-600 text-lg">{product.sales}</td>
                  <td className="font-bold text-green-600 text-lg">Rp {product.revenue.toLocaleString('id-ID')}</td>
                  <td>
                    <div className="rating-container">
                      <div className="stars">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : i < product.rating ? 'half' : ''}`}>★</span>
                        ))}
                      </div>
                      <span className="rating-number">{product.rating}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
