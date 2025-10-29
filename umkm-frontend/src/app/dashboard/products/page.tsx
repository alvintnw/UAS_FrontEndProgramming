// src/app/dashboard/products/page.tsx
'use client';

import { useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Nasi Goreng Spesial', category: 'Makanan', price: 25000, stock: 15, status: 'Tersedia' },
    { id: 2, name: 'Ayam Bakar Madu', category: 'Makanan', price: 35000, stock: 8, status: 'Tersedia' },
    { id: 3, name: 'Es Jeruk Segar', category: 'Minuman', price: 12000, stock: 0, status: 'Habis' },
    { id: 4, name: 'Mie Ayam Jamur', category: 'Makanan', price: 20000, stock: 12, status: 'Tersedia' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Makanan',
    price: '',
    stock: ''
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: formData.name,
      category: formData.category,
      price: parseInt(formData.price),
      stock: parseInt(formData.stock),
      status: parseInt(formData.stock) > 0 ? 'Tersedia' : 'Habis'
    };
    setProducts([...products, newProduct]);
    setFormData({ name: '', category: 'Makanan', price: '', stock: '' });
    setShowForm(false);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus menu ini?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleEditProduct = (id: number) => {
    // Fitur edit bisa ditambahkan di sini
    alert(`Fitur edit untuk produk ID ${id} akan segera tersedia!`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manajemen Menu</h2>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition duration-200"
          onClick={() => setShowForm(true)}
        >
          <span>+</span>
          Tambah Menu
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-800">Tambah Menu Baru</h3>
            </div>
            <form onSubmit={handleAddProduct} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Menu</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder="Masukkan nama menu"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Makanan">Makanan</option>
                  <option value="Minuman">Minuman</option>
                  <option value="Snack">Snack</option>
                  <option value="Dessert">Dessert</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Harga</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                  placeholder="Masukkan harga"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Stok</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({...formData, stock: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  min="0"
                  placeholder="Masukkan jumlah stok"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-200"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Simpan Menu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Menu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Harga</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stok</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Rp {product.price.toLocaleString('id-ID')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    product.status === 'Tersedia' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditProduct(product.id)}
                      className="text-blue-600 hover:text-blue-900 transition duration-200"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-600 hover:text-red-900 transition duration-200"
                    >
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