// src/app/dashboard/invoices/page.tsx
'use client';

import { useState } from 'react';

export default function InvoicesPage() {
  const [orders, setOrders] = useState([
    { id: 'ORD-1256', customer: 'Budi Santoso', total: 85000, status: 'Selesai', date: '2024-01-15' },
    { id: 'ORD-1255', customer: 'Sari Indah', total: 120000, status: 'Diproses', date: '2024-01-15' },
    { id: 'ORD-1254', customer: 'Rizki Pratama', total: 65000, status: 'Menunggu', date: '2024-01-14' },
    { id: 'ORD-1253', customer: 'Dewi Lestari', total: 95000, status: 'Selesai', date: '2024-01-14' },
  ]);

  const updateStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <div className="page-header">
        <h2>Manajemen Pesanan</h2>
        <div className="filter-controls">
          <select>
            <option>Semua Status</option>
            <option>Menunggu</option>
            <option>Diproses</option>
            <option>Selesai</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID Pesanan</th>
              <th>Pelanggan</th>
              <th>Tanggal</th>
              <th>Total</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>Rp {order.total.toLocaleString()}</td>
                <td>
                  <span className={`status ${order.status === 'Selesai' ? 'completed' : order.status === 'Diproses' ? 'processing' : 'pending'}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <select 
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                    <button className="btn-sm btn-view">
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}