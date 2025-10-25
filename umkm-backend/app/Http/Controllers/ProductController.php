<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    public function index(): JsonResponse
    {
        // Temporary dummy data - nanti akan diganti dengan MongoDB
        $products = [
            [
                'id' => 1,
                'name' => 'Nasi Goreng Special',
                'description' => 'Nasi goreng dengan telur, ayam, udang, dan sayuran segar',
                'price' => 25000,
                'category' => 'makanan_utama',
                'image_url' => '/images/nasi-goreng.jpg'
            ],
            [
                'id' => 2,
                'name' => 'Mie Ayam Bakso',
                'description' => 'Mie ayam dengan bakso urat dan pangsit goreng',
                'price' => 20000,
                'category' => 'makanan_utama',
                'image_url' => '/images/mie-ayam.jpg'
            ]
        ];

        return response()->json([
            'success' => true,
            'data' => $products,
            'message' => 'Products retrieved successfully'
        ]);
    }
}