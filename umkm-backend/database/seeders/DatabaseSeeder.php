<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UserSeeder::class,        // SQLite
            // ProductSeeder::class,  // Comment dulu
            // DeveloperSeeder::class, // Comment dulu  
            // SaleSeeder::class,     // Comment dulu
        ]);
    }
}