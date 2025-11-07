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
    <div className="p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl p-6 mb-6 border border-white/50 backdrop-blur-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text mb-2">
              Manajemen Pesanan
            </h2>
            <p className="text-gray-600 font-medium">Kelola semua pesanan pelanggan dengan mudah</p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Filter Status:</span>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
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

      <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
            <tr>
              <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                ID Pesanan
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                Pelanggan
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                Tanggal
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                Total
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                Status
              </th>
              <th className="px-8 py-5 text-left text-sm font-bold uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white/60 backdrop-blur-md">
            {filteredOrders.map((order, index) => (
              <tr key={order.id} className={`hover:bg-gradient-to-r hover:from-indigo-50/80 hover:via-purple-50/80 hover:to-pink-50/80 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-lg ${index % 2 === 0 ? 'bg-white/40' : 'bg-gradient-to-r from-gray-50/30 to-blue-50/20'}`}>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="font-mono text-indigo-600 font-bold text-lg">{order.id}</div>
                  <div className="text-xs text-gray-500 font-medium">{order.payment}</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="avatar-circle bg-gradient-to-r from-purple-500 to-pink-500">
                      {order.customer.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="customer-name font-bold text-gray-900">{order.customer}</div>
                      <div className="text-xs text-gray-500 font-medium">{order.items.length} item{order.items.length > 1 ? 's' : ''}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{new Date(order.date).toLocaleDateString('id-ID')}</div>
                  <div className="text-xs text-gray-500 font-medium">{new Date(order.date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="text-xl font-black text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text">
                    Rp {order.total.toLocaleString('id-ID')}
                  </div>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <span className={`inline-flex items-center px-4 py-2 text-sm font-black rounded-full shadow-lg border-2 ${getStatusBg(order.status)}`}>
                    <div className={`w-3 h-3 rounded-full mr-3 shadow-md bg-gradient-to-r ${getStatusColor(order.status)}`}></div>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-6 whitespace-nowrap">
                  <div className="flex gap-3">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white shadow-sm"
                    >
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                    <button
                      onClick={() => setShowDetails(showDetails === order.id ? null : order.id)}
                      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 border-2 border-indigo-400"
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
            <div className="p-6 border-b bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-t-2xl">
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
          Tidak ada pesanan dengan status "{filterStatus}".
        </div>
      )}
    </div>
  );
}
