// src/app/dashboard/page.tsx
'use client';

export default function Dashboard() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Selamat Datang di <span className="brand-text">Dashboard Admin</span>
          </h2>
          <p className="welcome-subtitle">
            Kelola bisnis kuliner Anda dengan mudah dan efisien
          </p>
          <div className="welcome-stats">
            <div className="stat-item">
              <div className="stat-number">1,248</div>
              <div className="stat-label">Total Pesanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">856</div>
              <div className="stat-label">Pelanggan Aktif</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">42</div>
              <div className="stat-label">Menu Tersedia</div>
            </div>
          </div>
        </div>
        <div className="welcome-decoration">
          <div className="floating-icon icon-1">🍗</div>
          <div className="floating-icon icon-2">🍜</div>
          <div className="floating-icon icon-3">🥤</div>
          <div className="floating-icon icon-4">🍕</div>
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
            <div className="chart-icon">📊</div>
            <p>Grafik penjualan akan ditampilkan di sini</p>
            <small className="chart-note">Data real-time tersedia</small>
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
                  <td className="font-mono text-blue-600">#ORD-1256</td>
                  <td className="flex items-center gap-3">
                    <div className="avatar-circle bg-gradient-to-r from-blue-500 to-purple-500">
                      BS
                    </div>
                    <div>
                      <div className="customer-name">Budi Santoso</div>
                      <div className="customer-time">2 jam yang lalu</div>
                    </div>
                  </td>
                  <td className="font-bold text-green-600 text-lg">Rp 85.000</td>
                  <td><span className="status completed">Selesai</span></td>
                </tr>
                <tr>
                  <td className="font-mono text-blue-600">#ORD-1255</td>
                  <td className="flex items-center gap-3">
                    <div className="avatar-circle bg-gradient-to-r from-pink-500 to-red-500">
                      SI
                    </div>
                    <div>
                      <div className="customer-name">Sari Indah</div>
                      <div className="customer-time">4 jam yang lalu</div>
                    </div>
                  </td>
                  <td className="font-bold text-green-600 text-lg">Rp 120.000</td>
                  <td><span className="status processing">Diproses</span></td>
                </tr>
                <tr>
                  <td className="font-mono text-blue-600">#ORD-1254</td>
                  <td className="flex items-center gap-3">
                    <div className="avatar-circle bg-gradient-to-r from-green-500 to-teal-500">
                      RP
                    </div>
                    <div>
                      <div className="customer-name">Rizki Pratama</div>
                      <div className="customer-time">6 jam yang lalu</div>
                    </div>
                  </td>
                  <td className="font-bold text-green-600 text-lg">Rp 65.000</td>
                  <td><span className="status pending">Pending</span></td>
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
                <td className="flex items-center gap-3">
                  <div className="product-indicator bg-yellow-500"></div>
                  <div className="product-image">
                    <img src="/images/nasi-goreng.jpg" alt="Nasi Goreng" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                  <div>
                    <div className="product-name">Nasi Goreng Spesial</div>
                    <div className="product-desc">Nasi goreng dengan telur dan ayam</div>
                  </div>
                </td>
                <td><span className="category-badge food">Makanan</span></td>
                <td className="font-bold text-blue-600 text-lg">156</td>
                <td className="font-bold text-green-600 text-lg">Rp 2.340.000</td>
                <td>
                  <div className="rating-container">
                    <div className="stars">
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star half">★</span>
                    </div>
                    <span className="rating-number">4.8</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-3">
                  <div className="product-indicator bg-blue-500"></div>
                  <div className="product-image">
                    <img src="/images/es-jeruk.jpg" alt="Es Jeruk" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                  <div>
                    <div className="product-name">Es Jeruk Segar</div>
                    <div className="product-desc">Minuman segar dari jeruk asli</div>
                  </div>
                </td>
                <td><span className="category-badge drink">Minuman</span></td>
                <td className="font-bold text-blue-600 text-lg">142</td>
                <td className="font-bold text-green-600 text-lg">Rp 1.420.000</td>
                <td>
                  <div className="rating-container">
                    <div className="stars">
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star">★</span>
                    </div>
                    <span className="rating-number">4.7</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="flex items-center gap-3">
                  <div className="product-indicator bg-red-500"></div>
                  <div className="product-image">
                    <img src="/images/ayam-bakar.jpg" alt="Ayam Bakar" onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                  <div>
                    <div className="product-name">Ayam Bakar Madu</div>
                    <div className="product-desc">Ayam bakar dengan saus madu</div>
                  </div>
                </td>
                <td><span className="category-badge food">Makanan</span></td>
                <td className="font-bold text-blue-600 text-lg">128</td>
                <td className="font-bold text-green-600 text-lg">Rp 3.200.000</td>
                <td>
                  <div className="rating-container">
                    <div className="stars">
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                    </div>
                    <span className="rating-number">4.9</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
