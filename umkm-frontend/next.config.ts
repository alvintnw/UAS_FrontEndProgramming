import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**', // Izinkan semua gambar dari folder /storage
      },
    ],
  },
};

export default nextConfig;