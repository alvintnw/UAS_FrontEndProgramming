<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\InvoiceController;
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
Route::post('/foods', [FoodController::class, 'store']);
Route::put('/foods/{id}', [FoodController::class, 'update']);
Route::delete('/foods/{id}', [FoodController::class, 'destroy']);

// Developers
Route::resource('developers', DeveloperController::class)->only(['index', 'show']);

// Authentication
Route::post('/register', [AuthController::class, 'register']);

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
    
    // Invoices (Ganti dengan Resource yang lebih bersih)
    // Mencakup GET, POST, PUT, DELETE
    Route::resource('invoices', InvoiceController::class)->except(['create', 'edit']);
    
    // ------------------------------------------------------------------------
    // Rute Admin/Manajer (CRUD: CREATE, UPDATE, DELETE)
    // ------------------------------------------------------------------------
    Route::middleware('admin')->prefix('admin')->group(function () {
        
        // 1. ✅ CRUD FOOD (POST, PUT, DELETE)
        // Kita gunakan resource karena lebih bersih, tapi kita kecualikan (except) index dan show 
        // karena itu sudah ada di rute public di atas.
        Route::resource('foods', FoodController::class)->except(['index', 'show', 'create', 'edit']); 
        
        /* Rute yang dihasilkan:
        - POST    /api/admin/foods
        - PUT/PATCH /api/admin/foods/{food}
        - DELETE  /api/admin/foods/{food}
        */

        // 2. CRUD Products (POST, PUT, DELETE) - Gunakan Resource jika ProductController Anda adalah Resource Controller
        // Jika tidak, rute manual Anda sebelumnya sudah benar, tapi Resource lebih disarankan:
        Route::post('/products', [ProductController::class, 'store']);
        Route::put('/products/{id}', [ProductController::class, 'update']);
        Route::delete('/products/{id}', [ProductController::class, 'destroy']);
    });
});