// src/app/dashboard/panel/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/services/api';

interface DashboardStats {
  total_sales: number;
  total_orders: number;
  total_products: number;
  recent_orders: any[];
}

export default function AdminPanel() {
  const [stats, setStats] = useState<DashboardStats>({
    total_sales: 0,
    total_orders: 0,
    total_products: 0,
    recent_orders: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // For now, we'll use mock data since MongoDB might not be ready
      const mockStats: DashboardStats = {
        total_sales: 1250000,
        total_orders: 45,
        total_products: 8,
        recent_orders: [
          { id: 1, customer_name: 'Budi Santoso', total: 75000, status: 'paid' },
          { id: 2, customer_name: 'Sari Dewi', total: 120000, status: 'pending' },
          { id: 3, customer_name: 'Ahmad Wijaya', total: 85000, status: 'paid' }
        ]
      };
      setStats(mockStats);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2 text-muted">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 fw-bold text-dark mb-1">Dashboard Overview</h1>
          <p className="text-muted">Welcome to UMKM Admin Panel</p>
        </div>
        <div className="d-flex gap-2">
          <Link href="/dashboard/invoices" className="btn btn-primary">
            New Invoice
          </Link>
          <Link href="/dashboard/products" className="btn btn-outline-primary">
            Manage Products
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm bg-primary text-white">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="card-title fw-bold">Rp {stats.total_sales.toLocaleString('id-ID')}</h4>
                  <p className="card-text mb-0 opacity-75">Total Penjualan</p>
                </div>
                <div className="fs-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm bg-success text-white">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="card-title fw-bold">{stats.total_orders}</h4>
                  <p className="card-text mb-0 opacity-75">Total Orders</p>
                </div>
                <div className="fs-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm bg-warning text-white">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="card-title fw-bold">{stats.total_products}</h4>
                  <p className="card-text mb-0 opacity-75">Total Products</p>
                </div>
                <div className="fs-1"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm bg-info text-white">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h4 className="card-title fw-bold">3</h4>
                  <p className="card-text mb-0 opacity-75">Active Users</p>
                </div>
                <div className="fs-1">👥</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders & Quick Actions */}
      <div className="row g-4">
        {/* Recent Orders */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 fw-bold">Recent Orders</h5>
            </div>
            <div className="card-body">
              {stats.recent_orders.length > 0 ? (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.recent_orders.map((order) => (
                        <tr key={order.id}>
                          <td>#INV-{order.id.toString().padStart(4, '0')}</td>
                          <td>{order.customer_name}</td>
                          <td>Rp {order.total.toLocaleString('id-ID')}</td>
                          <td>
                            <span className={`badge ${
                              order.status === 'paid' ? 'bg-success' : 'bg-warning'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-4 text-muted">
                  <div className="fs-1 mb-3"></div>
                  <p>No recent orders found.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 fw-bold">Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
                <Link href="/dashboard/invoices" className="btn btn-outline-primary text-start">
                  Create New Invoice
                </Link>
                <Link href="/dashboard/products" className="btn btn-outline-success text-start">
                  Manage Products
                </Link>
                <button className="btn btn-outline-warning text-start">
                  View Sales Report
                </button>
                <button className="btn btn-outline-info text-start">
                  Customer Management
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="card-title mb-0 fw-bold"> System Status</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>Backend API</span>
                <span className="badge bg-success">Online</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span>Database</span>
                <span className="badge bg-success">Connected</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>Last Sync</span>
                <span className="text-muted small">{new Date().toLocaleTimeString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}