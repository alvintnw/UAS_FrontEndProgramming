// src/app/dashboard/products/page.tsx
'use client';

import { useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Nasi Goreng Spesial', category: 'Makanan', price: 25000, stock: 15, status: 'Tersedia', image: '/images/nasi-goreng.jpg', description: 'Nasi goreng dengan telur dan ayam' },
    { id: 2, name: 'Ayam Bakar Madu', category: 'Makanan', price: 35000, stock: 8, status: 'Tersedia', image: '/images/ayam-bakar.jpg', description: 'Ayam bakar dengan saus madu' },
    { id: 3, name: 'Es Jeruk Segar', category: 'Minuman', price: 12000, stock: 0, status: 'Habis', image: '/images/es-jeruk.jpg', description: 'Minuman segar dari jeruk asli' },
    { id: 4, name: 'Mie Ayam Jamur', category: 'Makanan', price: 20000, stock: 12, status: 'Tersedia', image: '/images/mie-ayam.jpg', description: 'Mie ayam dengan jamur' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [formData, setFormData] = useState({
    name: '',
    category: 'Makanan',
    price: '',
    stock: '',
    description: '',
    image: ''
  });

  const categories = ['Semua', 'Makanan', 'Minuman', 'Snack', 'Dessert'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: formData.name,
      category: formData.category,
      price: parseInt(formData.price),
      stock: parseInt(formData.stock),
      status: parseInt(formData.stock) > 0 ? 'Tersedia' : 'Habis',
      description: formData.description,
      image: formData.image || '/images/default-food.jpg'
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', category: 'Makanan', price: '', stock: '', description: '', image: '' });
    setShowForm(false);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      stock: product.stock.toString(),
      description: product.description,
      image: product.image
    });
    setShowForm(true);
  };

  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    const updatedProduct = {
      ...editingProduct,
      name: formData.name,
      category: formData.category,
      price: parseInt(formData.price),
      stock: parseInt(formData.stock),
      status: parseInt(formData.stock) > 0 ? 'Tersedia' : 'Habis',
      description: formData.description,
      image: formData.image || editingProduct.image
    };
    setProducts(products.map(p => p.id === editingProduct.id ? updatedProduct : p));
    setFormData({ name: '', category: 'Makanan', price: '', stock: '', description: '', image: '' });
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const totalProducts = products.length;
  const availableProducts = products.filter(p => p.status === 'Tersedia').length;
  const outOfStockProducts = products.filter(p => p.status === 'Habis').length;

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">
            Manajemen <span className="brand-text">Menu</span>
          </h2>
          <p className="welcome-subtitle">
            Kelola menu restoran Anda dengan mudah dan efisien
          </p>
          <div className="welcome-stats">
            <div className="stat-item">
              <div className="stat-number">{totalProducts}</div>
              <div className="stat-label">Total Menu</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{availableProducts}</div>
              <div className="stat-label">Tersedia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{outOfStockProducts}</div>
              <div className="stat-label">Habis</div>
            </div>
          </div>
        </div>
        <div className="welcome-decoration">
          <div className="floating-icon icon-1">🍽️</div>
          <div className="floating-icon icon-2">🥗</div>
          <div className="floating-icon icon-3">🥤</div>
          <div className="floating-icon icon-4">🍰</div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="cards">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Total Menu</h3>
            <div className="card-icon orders">
              <i className="fas fa-utensils"></i>
            </div>
          </div>
          <div className="card-value">{totalProducts}</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> Menu aktif
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Menu Tersedia</h3>
            <div className="card-icon revenue">
              <i className="fas fa-check-circle"></i>
            </div>
          </div>
          <div className="card-value">{availableProducts}</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> {Math.round((availableProducts/totalProducts)*100)}% tersedia
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Menu Habis</h3>
            <div className="card-icon customers">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
          </div>
          <div className="card-value">{outOfStockProducts}</div>
          <div className="card-change negative">
            <i className="fas fa-arrow-down"></i> Perlu restock
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Kategori</h3>
            <div className="card-icon products">
              <i className="fas fa-tags"></i>
            </div>
          </div>
          <div className="card-value">{categories.length - 1}</div>
          <div className="card-change positive">
            <i className="fas fa-arrow-up"></i> Kategori menu
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="products-search">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <div className="search-icon">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <button
              className="add-button"
              onClick={() => {
                setEditingProduct(null);
                setFormData({ name: '', category: 'Makanan', price: '', stock: '', description: '', image: '' });
                setShowForm(true);
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Tambah Menu
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl">
              <h3 className="text-xl font-bold text-white">{editingProduct ? 'Edit Menu' : 'Tambah Menu Baru'}</h3>
              <p className="text-indigo-100 text-sm mt-1">Kelola informasi menu dengan lengkap</p>
            </div>
            <form onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">Nama Menu</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  required
                  placeholder="Masukkan nama menu"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                >
                  <option value="Makanan">🍽️ Makanan</option>
                  <option value="Minuman">🥤 Minuman</option>
                  <option value="Snack">🍿 Snack</option>
                  <option value="Dessert">🍰 Dessert</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Harga</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                    required
                    min="0"
                    placeholder="Rp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Stok</label>
                  <input
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                    required
                    min="0"
                    placeholder="Jumlah"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-300 resize-none"
                  rows={3}
                  placeholder="Deskripsikan menu ini..."
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">URL Gambar</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-300"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProduct(null);
                    setFormData({ name: '', category: 'Makanan', price: '', stock: '', description: '', image: '' });
                  }}
                  className="px-6 py-3 text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {editingProduct ? 'Update Menu' : 'Simpan Menu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Nama Menu</th>
              <th>Kategori</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="flex items-center gap-3">
                  <div className="product-id">#{product.id.toString().padStart(3, '0')}</div>
                  <div className="font-bold text-gray-900">{product.name}</div>
                </td>
                <td>
                  <span className={`category-badge ${product.category.toLowerCase()}`}>
                    <span className="badge-dot"></span>
                    {product.category}
                  </span>
                </td>
                <td>
                  <div className="price-text">
                    Rp {product.price.toLocaleString('id-ID')}
                  </div>
                  <div className="price-label">per porsi</div>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className={`stock-circle ${product.stock > 10 ? 'high' : product.stock > 5 ? 'medium' : 'low'}`}>
                      {product.stock}
                    </div>
                    <div className="stock-label">unit</div>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${product.status === 'Tersedia' ? 'available' : 'unavailable'}`}>
                    <div className={`status-dot ${product.status === 'Tersedia' ? 'available' : 'unavailable'}`}></div>
                    {product.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="edit-button"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="delete-button"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Tidak ada menu yang tersedia. Silakan tambah menu baru.
        </div>
      )}
    </div>
  );
}