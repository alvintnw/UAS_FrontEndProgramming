<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run()
    {
        // Clear existing products dari MongoDB
        Product::truncate();

        $products = [
            [
                'name' => 'Nasi Goreng Special',
                'description' => 'Nasi goreng dengan telur, ayam, udang, dan sayuran segar',
                'price' => 25000,
                'category' => 'makanan_utama',
                'image_url' => '/images/nasi-goreng.jpg',
                'stock_quantity' => 50,
                'ingredients' => ['Nasi', 'Telur', 'Ayam', 'Udang', 'Sayuran', 'Bumbu Rahasia'],
                'nutrition_facts' => [
                    'calories' => 450,
                    'protein' => '20g',
                    'carbs' => '60g',
                    'fat' => '15g'
                ],
                'is_active' => true
            ],
            // ... (data products lainnya sama seperti sebelumnya)
        ];

        foreach ($products as $product) {
            Product::create($product);
        }

        $this->command->info('Products seeded successfully in MongoDB!');
    }
}