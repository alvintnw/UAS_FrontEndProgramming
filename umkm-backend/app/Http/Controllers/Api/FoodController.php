<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Food;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FoodController extends Controller
{
    /**
     * GET /api/foods
     * Mengambil semua data food (Publik - tanpa auth)
     */
    public function index(Request $request)
    {
        try {
            $query = Food::query();
            
            // Filter berdasarkan kategori
            if ($request->has('category')) {
                $query->where('category', $request->category);
            }
            
            // Filter hanya yang aktif
            if ($request->has('is_active')) {
                $query->where('is_active', filter_var($request->is_active, FILTER_VALIDATE_BOOLEAN));
            }
            
            // Search berdasarkan nama
            if ($request->has('search')) {
                $query->where('name', 'like', '%' . $request->search . '%');
            }
            
            // Urutkan berdasarkan created_at terbaru
            $query->orderBy('created_at', 'desc');
            
            $foods = $query->get();
            
            return response()->json([
                'success' => true,
                'message' => 'Data menu berhasil diambil',
                'data' => $foods,
                'total' => $foods->count()
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil data menu',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * GET /api/foods/{id}
     * Mengambil satu data food berdasarkan ID
     */
    public function show($id)
    {
        try {
            $food = Food::find($id);
            
            if (!$food) {
                return response()->json([
                    'success' => false,
                    'message' => 'Menu tidak ditemukan',
                ], 404);
            }
            
            return response()->json([
                'success' => true,
                'message' => 'Detail menu berhasil diambil',
                'data' => $food
            ], 200);
            
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengambil detail menu',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * POST /api/admin/foods
     * Menambah data food baru (Admin only)
     */
    public function store(Request $request)
    {
        try {
            // Validasi input
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'category' => 'required|string|max:100',
                'image_url' => 'nullable|string',
                'stock_quantity' => 'required|integer|min:0',
                'ingredients' => 'nullable|array',
                'nutrition_facts' => 'nullable|array',
                'is_active' => 'required|boolean',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validasi gagal',
                    'errors' => $validator->errors()
                ], 422);
            }

            // Simpan data
            $food = Food::create($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Menu berhasil ditambahkan',
                'data' => $food
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menambahkan menu',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * PUT/PATCH /api/admin/foods/{food}
     * Update data food (Admin only)
     */
    public function update(Request $request, $id)
    {
        try {
            $food = Food::find($id);

            if (!$food) {
                return response()->json([
                    'success' => false,
                    'message' => 'Menu tidak ditemukan',
                ], 404);
            }

            // Validasi input
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'sometimes|required|numeric|min:0',
                'category' => 'sometimes|required|string|max:100',
                'image_url' => 'nullable|string',
                'stock_quantity' => 'sometimes|required|integer|min:0',
                'ingredients' => 'nullable|array',
                'nutrition_facts' => 'nullable|array',
                'is_active' => 'sometimes|required|boolean',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Validasi gagal',
                    'errors' => $validator->errors()
                ], 422);
            }

            // Update data
            $food->update($request->all());

            return response()->json([
                'success' => true,
                'message' => 'Menu berhasil diupdate',
                'data' => $food
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal mengupdate menu',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * DELETE /api/admin/foods/{food}
     * Hapus data food (Admin only)
     */
    public function destroy($id)
    {
        try {
            $food = Food::find($id);

            if (!$food) {
                return response()->json([
                    'success' => false,
                    'message' => 'Menu tidak ditemukan',
                ], 404);
            }

            $food->delete();

            return response()->json([
                'success' => true,
                'message' => 'Menu berhasil dihapus',
            ], 200);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Gagal menghapus menu',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}