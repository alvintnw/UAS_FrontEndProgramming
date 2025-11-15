<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\InvoiceStatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Api\FoodController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// API Status (Biarkan seperti ini)
Route::get('/', function () {
    return response()->json([
        'message' => 'UMKM Delicious API',
        'version' => '1.0.0',
        'status' => 'running',
        'timestamp' => now()
    ]);
});

// ------------------------------------------------------------------------
// ## Rute Publik (Unauthenticated)
// ------------------------------------------------------------------------

// ✅ FOOD (READ: Index dan Show) - Ini harus tetap public agar frontend bisa tampil
// Foods API Routes (index/show tersedia publik; create/update/delete tersedia di /api/admin/foods)
Route::get('/foods', [FoodController::class, 'index']);
Route::get('/foods/{id}', [FoodController::class, 'show']);

// Developers
Route::resource('developers', DeveloperController::class)->only(['index', 'show']);

// Authentication
Route::post('/register', [AuthController::class, 'register']);

// Customer Order (Public)
Route::post('/orders', [InvoiceController::class, 'customerOrder']);

// Test MongoDB connection and environment
Route::get('/test-db', function() {
    try {
        // Check MongoDB PHP extension
        if (!extension_loaded('mongodb')) {
            return [
                'status' => 'MongoDB PHP extension not installed',
                'php_version' => PHP_VERSION,
                'extensions' => get_loaded_extensions()
            ];
        }

        // Check connection
        $connection = DB::connection('mongodb');
        $connection->command(['ping' => 1]);

        // Get database name
        $config = config('database.connections.mongodb');

        return [
            'status' => 'Connected to MongoDB successfully',
            'database_name' => $config['database'],
            'host' => $config['host'],
            'port' => $config['port']
        ];
    } catch (\Exception $e) {
        return [
            'status' => 'Failed to connect to MongoDB',
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ];
    }
});
Route::post('/login', [AuthController::class, 'login']);

// ------------------------------------------------------------------------
// ## Rute Terproteksi (Authenticated)
// ------------------------------------------------------------------------
// Admin product routes are protected. We allow either a real authenticated
// admin user (Sanctum) or a demo token (Bearer demo-token-*) via the
// EnsureAdminOrDemo middleware implemented in app/Http/Middleware.

Route::middleware(['auth:sanctum'])->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Dashboard (Biarkan seperti ini)
    Route::get('/dashboard/stats', function () {
        return response()->json([
            'total_sales' => 0,
            'total_orders' => 0,
            'total_products' => 0,
            'recent_orders' => []
        ]);
    });

    // Invoices moved to admin group below
});

// ------------------------------------------------------------------------
// Rute Admin/Manajer (CRUD: CREATE, UPDATE, DELETE)
// Melakukan proteksi dengan EnsureAdminOrDemo middleware (mendukung demo token)
// Ini diletakkan di luar auth:sanctum group agar demo-token tidak ditangani oleh Sanctum
// yang pada setup ini tidak menggunakan relational personal access tokens.
Route::middleware([\App\Http\Middleware\EnsureAdminOrDemo::class])->prefix('admin')->group(function () {

    // CRUD FOOD (POST, PUT, DELETE) - Menggunakan FoodController untuk admin
    Route::get('foods', [FoodController::class, 'adminIndex']);
    Route::post('foods', [FoodController::class, 'store']);
    Route::put('foods/{id}', [FoodController::class, 'update']);
    Route::delete('foods/{id}', [FoodController::class, 'destroy']);

    // CRUD Products (POST, PUT, DELETE) - Tetap ada untuk backward compatibility
    Route::resource('products', ProductController::class)->except(['create', 'edit']);

    // Invoices (Ganti dengan Resource yang lebih bersih)
    // Mencakup GET, POST, PUT, DELETE
    Route::resource('invoices', InvoiceController::class)->except(['create', 'edit']);

    // Update invoice status (endpoint khusus untuk update status)
    Route::put('invoices/{id}/status', [InvoiceStatusController::class, 'updateStatus']);
});
