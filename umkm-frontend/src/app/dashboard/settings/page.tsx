// src/app/dashboard/settings/page.tsx
'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    storeName: 'UMKM Delicious',
    storeEmail: 'info@umkmdelicious.com',
    storePhone: '+6281234567890',
    storeAddress: 'Jl. Contoh No. 123, Jakarta',
    openingHours: '08:00 - 22:00',
    closingHours: '22:00'
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pengaturan berhasil disimpan!');
  };

  return (
    <div>
      <div className="page-header">
        <h2>Pengaturan Toko</h2>
      </div>

      <form onSubmit={handleSave} className="settings-form">
        <div className="form-section">
          <h3>Informasi Toko</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Nama Toko</label>
              <input
                type="text"
                value={settings.storeName}
                onChange={(e) => setSettings({...settings, storeName: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={settings.storeEmail}
                onChange={(e) => setSettings({...settings, storeEmail: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Telepon</label>
              <input
                type="text"
                value={settings.storePhone}
                onChange={(e) => setSettings({...settings, storePhone: e.target.value})}
              />
            </div>
            <div className="form-group full-width">
              <label>Alamat</label>
              <textarea
                value={settings.storeAddress}
                onChange={(e) => setSettings({...settings, storeAddress: e.target.value})}
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Jam Operasional</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Buka</label>
              <input
                type="time"
                value={settings.openingHours}
                onChange={(e) => setSettings({...settings, openingHours: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Tutup</label>
              <input
                type="time"
                value={settings.closingHours}
                onChange={(e) => setSettings({...settings, closingHours: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Integrasi WhatsApp</h3>
          <div className="form-group">
            <label>Nomor WhatsApp untuk Pemesanan</label>
            <input
              type="text"
              value={settings.storePhone}
              onChange={(e) => setSettings({...settings, storePhone: e.target.value})}
              placeholder="+6281234567890"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            <i className="fas fa-save"></i> Simpan Pengaturan
          </button>
        </div>
      </form>
    </div>
  );
}