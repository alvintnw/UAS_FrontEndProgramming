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
    { name: 'Nasi Goreng Spesial', sales: 156, revenue: 2340000, growth: '+15%' },
    { name: 'Es Jeruk Segar', sales: 142, revenue: 1420000, growth: '+8%' },
    { name: 'Ayam Bakar Madu', sales: 128, revenue: 3200000, growth: '+22%' },
    { name: 'Chicken Roll', sales: 95, revenue: 1900000, growth: '+12%' },
    { name: 'Kentang Goreng', sales: 87, revenue: 870000, growth: '+5%' }
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
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 mb-6 border border-white/50 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text mb-2">
              Laporan & Analitik
            </h2>
            <p className="text-gray-600 font-medium">Pantau performa bisnis Anda dengan data real-time</p>
          </div>
          <div className="flex gap-3">
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
        </div>
      </div>

      {/* Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 border border-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Pendapatan</h3>
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text mb-1">
                Rp 24.8 Jt
              </div>
              <div className="text-sm font-medium text-green-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +8% dari bulan lalu
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 border border-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Pesanan</h3>
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text mb-1">
                1,248
              </div>
              <div className="text-sm font-medium text-blue-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +12% dari bulan lalu
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 border border-white/50 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Rata-rata Nilai Pesanan</h3>
              <div className="text-3xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-1">
                Rp 89.500
              </div>
              <div className="text-sm font-medium text-purple-600 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                +5% dari bulan lalu
              </div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 mb-6 border border-white/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
            Grafik Penjualan - {getDateRangeLabel()}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            <span>{getReportTypeLabel()}</span>
          </div>
        </div>
        <div className="chart-placeholder bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-xl p-6 border-2 border-dashed border-gray-300">
          <div className="flex items-center justify-center mb-4">
            <div className="text-6xl mb-4">📊</div>
          </div>
          <p className="text-center text-gray-600 font-medium mb-6">
            Grafik penjualan {getDateRangeLabel().toLowerCase()}
          </p>
          <div className="chart-bars flex items-end justify-center gap-4 h-64">
            {salesData[dateRange as keyof typeof salesData].map((amount, index) => {
              const maxAmount = Math.max(...salesData[dateRange as keyof typeof salesData]);
              const height = (amount / maxAmount) * 100;
              return (
                <div key={index} className="chart-bar flex flex-col items-center gap-2">
                  <div className="text-xs font-medium text-gray-600">
                    Rp {(amount / 1000000).toFixed(1)}Jt
                  </div>
                  <div
                    className="bar-fill bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-t-lg shadow-lg transition-all duration-500 hover:scale-110"
                    style={{ height: `${height}%`, width: '40px' }}
                  ></div>
                  <div className="text-xs font-medium text-gray-500">
                    {dateRange === 'week' ? ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][index] :
                     dateRange === 'month' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4'][index] :
                     ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 border border-white/50 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text mb-6">
          Produk Terlaris
        </h3>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-white/80 to-gray-50/50 rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${
                  index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                  index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                  index === 2 ? 'bg-gradient-to-r from-orange-400 to-red-500' :
                  'bg-gradient-to-r from-blue-400 to-indigo-500'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{product.name}</div>
                  <div className="text-sm text-gray-600">{product.sales} terjual</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                  Rp {product.revenue.toLocaleString('id-ID')}
                </div>
                <div className="text-sm font-medium text-green-600">{product.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
