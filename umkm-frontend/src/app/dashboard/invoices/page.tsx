// src/app/dashboard/invoices/page.tsx
'use client';

import { useState } from 'react';

export default function InvoicesPage() {
  const [orders, setOrders] = useState([
    { id: 'ORD-1256', customer: 'Budi Santoso', total: 85000, status: 'Selesai', date: '2024-01-15', items: ['Nasi Goreng Spesial', 'Es Jeruk'], payment: 'Transfer' },
    { id: 'ORD-1255', customer: 'Sari Indah', total: 120000, status: 'Diproses', date: '2024-01-15', items: ['Ayam Bakar Madu', 'Nasi'], payment: 'Cash' },
    { id: 'ORD-1254', customer: 'Rizki Pratama', total: 65000, status: 'Menunggu', date: '2024-01-14', items: ['Mie Ayam'], payment: 'Transfer' },
    { id: 'ORD-1253', customer: 'Dewi Lestari', total: 95000, status: 'Selesai', date: '2024-01-14', items: ['Chicken Roll', 'Kentang Goreng'], payment: 'Cash' },
  ]);

  const [filterStatus, setFilterStatus] = useState('Semua Status');
  const [showDetails, setShowDetails] = useState<string | null>(null);

  const updateStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = filterStatus === 'Semua Status'
    ? orders
    : orders.filter(order => order.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai': return 'from-green-500 to-emerald-500';
      case 'Diproses': return 'from-blue-500 to-cyan-500';
      case 'Menunggu': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'Selesai': return 'from-green-100 to-emerald-100 text-green-800 border-green-300';
      case 'Diproses': return 'from-blue-100 to-cyan-100 text-blue-800 border-blue-300';
      case 'Menunggu': return 'from-yellow-100 to-orange-100 text-yellow-800 border-yellow-300';
      default: return 'from-gray-100 to-gray-200 text-gray-800 border-gray-300';
    }
  };

  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Manajemen <span className="brand-text">Pesanan</span>
          </h2>
          <p className="welcome-subtitle">
            Kelola semua pesanan pelanggan dengan mudah dan efisien
          </p>
          <div className="welcome-stats">
            <div className="stat-item">
              <div className="stat-number">{orders.length}</div>
              <div className="stat-label">Total Pesanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{orders.filter(o => o.status === 'Menunggu').length}</div>
              <div className="stat-label">Menunggu</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{orders.filter(o => o.status === 'Diproses').length}</div>
              <div className="stat-label">Diproses</div>
            </div>
          </div>
        </div>
        <div className="welcome-decoration">
          <div className="floating-icon icon-1">📋</div>
          <div className="floating-icon icon-2">🛒</div>
          <div className="floating-icon icon-3">✅</div>
          <div className="floating-icon icon-4">🚚</div>
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
          <div className="card-value">{orders.length}</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> {orders.filter(o => o.status === 'Selesai').length} selesai
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Pendapatan</h3>
            <div className="card-icon revenue">
              <i className="fas fa-dollar-sign"></i>
            </div>
          </div>
          <div className="card-value">Rp {orders.reduce((sum, order) => sum + order.total, 0).toLocaleString('id-ID')}</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> {Math.round((orders.filter(o => o.status === 'Selesai').length / orders.length) * 100)}% konversi
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Menunggu</h3>
            <div className="card-icon customers">
              <i className="fas fa-clock"></i>
            </div>
          </div>
          <div className="card-value">{orders.filter(o => o.status === 'Menunggu').length}</div>
          <div className="card-change negative">
            <i className="fas fa-exclamation-triangle"></i> Perlu perhatian
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Selesai</h3>
            <div className="card-icon products">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="card-value">{orders.filter(o => o.status === 'Selesai').length}</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> Hari ini
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Daftar <span className="brand-text">Pesanan</span>
          </h2>
          <p className="welcome-subtitle">Pantau dan kelola status semua pesanan</p>
        </div>
        <div className="welcome-decoration">
          <div className="floating-icon icon-1">📋</div>
          <div className="floating-icon icon-2">🛒</div>
          <div className="floating-icon icon-3">✅</div>
          <div className="floating-icon icon-4">🚚</div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="card">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Filter Pesanan</h3>
            <p className="text-gray-600">Pilih status pesanan yang ingin ditampilkan</p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Filter Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm"
              >
                <option>Semua Status</option>
                <option>Menunggu</option>
                <option>Diproses</option>
                <option>Selesai</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="invoices-table-container">
        <table>
          <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
            <tr>
              <th className="text-left text-sm font-bold uppercase tracking-wider">
                ID Pesanan
              </th>
              <th className="text-left text-sm font-bold uppercase tracking-wider">
                Pelanggan
              </th>
              <th className="text-left text-sm font-bold uppercase tracking-wider">
                Tanggal
              </th>
              <th className="text-left text-sm font-bold uppercase tracking-wider">
                Total
              </th>
              <th className="text-left text-sm font-bold uppercase tracking-wider">
                Status
              </th>
              <th className="text-left text-sm font-bold uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white/60 backdrop-blur-md">
            {filteredOrders.map((order, index) => (
              <tr key={order.id} className={`hover:bg-gradient-to-r hover:from-red-50/80 hover:via-orange-50/80 hover:to-yellow-50/80 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg ${index % 2 === 0 ? 'bg-white/40' : 'bg-gradient-to-r from-gray-50/30 to-orange-50/20'}`}>
                <td className="whitespace-nowrap">
                  <div className="font-mono text-red-600 font-bold text-lg">{order.id}</div>
                  <div className="text-xs text-gray-500 font-medium">{order.payment}</div>
                </td>
                <td className="whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="avatar-circle bg-gradient-to-r from-red-500 to-orange-500">
                      {order.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="customer-name font-bold text-gray-900">{order.customer}</div>
                      <div className="text-xs text-gray-500 font-medium">{order.items.length} item{order.items.length > 1 ? 's' : ''}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{new Date(order.date).toLocaleDateString('id-ID')}</div>
                  <div className="text-xs text-gray-500 font-medium">{new Date(order.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
                </td>
                <td className="whitespace-nowrap">
                  <div className="text-xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                    Rp {order.total.toLocaleString('id-ID')}
                  </div>
                </td>
                <td className="whitespace-nowrap">
                  <span className={`inline-flex items-center px-4 py-2 text-sm font-black rounded-full shadow-lg border-2 ${getStatusBg(order.status)}`}>
                    <div className={`w-3 h-3 rounded-full mr-3 shadow-md bg-gradient-to-r ${getStatusColor(order.status)}`}></div>
                    {order.status}
                  </span>
                </td>
                <td className="whitespace-nowrap">
                  <div className="flex gap-3">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white shadow-sm"
                    >
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                    <button
                      onClick={() => setShowDetails(showDetails === order.id ? null : order.id)}
                      className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-red-400"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Detail
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Detail Pesanan {showDetails}</h3>
                <button
                  onClick={() => setShowDetails(null)}
                  className="text-white hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              {(() => {
                const order = orders.find(o => o.id === showDetails);
                if (!order) return null;
                return (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Informasi Pelanggan</h4>
                        <p className="text-sm text-gray-600"><strong>Nama:</strong> {order.customer}</p>
                        <p className="text-sm text-gray-600"><strong>Tanggal:</strong> {new Date(order.date).toLocaleDateString('id-ID')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Detail Pembayaran</h4>
                        <p className="text-sm text-gray-600"><strong>Metode:</strong> {order.payment}</p>
                        <p className="text-sm text-gray-600"><strong>Status:</strong> {order.status}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Item Pesanan</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-900">{item}</span>
                            <span className="text-sm text-gray-600">Qty: 1</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total:</span>
                        <span className="text-xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                          Rp {order.total.toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {filteredOrders.length === 0 && (
        <div className="text-center py-8 text-gray-500">
        </div>
      )}
    </div>
  );
}
