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

  return (
    <div>
      <div className="page-header">
        <h2>Laporan & Analitik</h2>
        <div className="report-controls">
          <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="sales">Laporan Penjualan</option>
            <option value="products">Laporan Produk</option>
            <option value="customers">Laporan Pelanggan</option>
          </select>
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="week">7 Hari Terakhir</option>
            <option value="month">30 Hari Terakhir</option>
            <option value="year">1 Tahun Terakhir</option>
          </select>
          <button className="btn btn-primary">
            <i className="fas fa-download"></i> Export PDF
          </button>
        </div>
      </div>

      <div className="report-cards">
        <div className="report-card">
          <h3>Total Pendapatan</h3>
          <div className="report-value">Rp 24.8 Jt</div>
          <div className="report-change positive">+8% dari bulan lalu</div>
        </div>
        <div className="report-card">
          <h3>Total Pesanan</h3>
          <div className="report-value">1,248</div>
          <div className="report-change positive">+12% dari bulan lalu</div>
        </div>
        <div className="report-card">
          <h3>Rata-rata Nilai Pesanan</h3>
          <div className="report-value">Rp 89.500</div>
          <div className="report-change positive">+5% dari bulan lalu</div>
        </div>
      </div>

      <div className="chart-container">
        <h3>Grafik Penjualan</h3>
        <div className="chart-placeholder">
          <p>Grafik penjualan {dateRange === 'week' ? '7 hari' : dateRange === 'month' ? '30 hari' : '1 tahun'} terakhir</p>
          <div className="chart-bars">
            {salesData[dateRange as keyof typeof salesData].map((amount, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar-fill"
                  style={{ height: `${(amount / Math.max(...salesData[dateRange as keyof typeof salesData])) * 100}%` }}
                ></div>
                <span>Rp {(amount / 1000000).toFixed(1)}Jt</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="top-products">
        <h3>Produk Terlaris</h3>
        <div className="products-list">
          <div className="product-item">
            <span>1. Nasi Goreng Spesial</span>
            <span>156 terjual</span>
          </div>
          <div className="product-item">
            <span>2. Es Jeruk Segar</span>
            <span>142 terjual</span>
          </div>
          <div className="product-item">
            <span>3. Ayam Bakar Madu</span>
            <span>128 terjual</span>
          </div>
        </div>
      </div>
    </div>
  );
}