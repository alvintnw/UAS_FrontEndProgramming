// src/app/dashboard/page.tsx
'use client';

export default function Dashboard() {
  return (
    <div>
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
                  <td><span className="status processing">selesai</span></td>
                </tr>
                <tr>
                  <td>#ORD-1254</td>
                  <td>Rizki Pratama</td>
                  <td>Rp 65.000</td>
                  <td><span className="status pending">selesai</span></td>
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
                <td>4.8</td>
              </tr>
              <tr>
                <td>Es Jeruk Segar</td>
                <td>Minuman</td>
                <td>142</td>
                <td>Rp 1.420.000</td>
                <td>4.7</td>
              </tr>
              <tr>
                <td>Ayam Bakar Madu</td>
                <td>Makanan</td>
                <td>128</td>
                <td>Rp 3.200.000</td>
                <td>4.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}