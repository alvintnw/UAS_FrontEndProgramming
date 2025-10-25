<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    public function run()
    {
        // Clear existing users dari MySQL
        DB::table('users')->truncate();

        $users = [
            [
                'name' => 'Admin UMKM',
                'email' => 'admin@umkmdelicious.com',
                'password' => Hash::make('password123'),
                'role' => 'admin',
                'is_active' => true,
                'email_verified_at' => now(),
            ],
            [
                'name' => 'Manager UMKM',
                'email' => 'manager@umkmdelicious.com',
                'password' => Hash::make('password123'),
                'role' => 'manager',
                'is_active' => true,
                'email_verified_at' => now(),
            ],
            [
                'name' => 'Kasir UMKM',
                'email' => 'kasir@umkmdelicious.com',
                'password' => Hash::make('password123'),
                'role' => 'kasir',
                'is_active' => true,
                'email_verified_at' => now(),
            ]
        ];

        foreach ($users as $user) {
            User::create($user);
        }

        $this->command->info('Users seeded successfully in MySQL!');
    }
}