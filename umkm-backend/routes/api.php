<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\SaleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// API Status
Route::get('/', function () {
    return response()->json([
        'message' => 'UMKM Delicious API',
        'version' => '1.0.0',
        'status' => 'running',
        'timestamp' => now()
    ]);
});

// Public Routes
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/developers', [DeveloperController::class, 'index']);
Route::get('/developers/{id}', [DeveloperController::class, 'show']);

// Authentication
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Protected Routes
Route::middleware(['auth:sanctum'])->group(function () {
    // User
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    // Dashboard
    Route::get('/dashboard/stats', function () {
        return response()->json([
            'total_sales' => 0,
            'total_orders' => 0,
            'total_products' => 0,
            'recent_orders' => []
        ]);
    });
    
    // Invoices
    Route::get('/invoices', [InvoiceController::class, 'index']);
    Route::post('/invoices', [InvoiceController::class, 'store']);
    Route::put('/invoices/{id}', [InvoiceController::class, 'update']);
    Route::delete('/invoices/{id}', [InvoiceController::class, 'destroy']);
    
    // Sales
    Route::get('/sales', [SaleController::class, 'index']);
});