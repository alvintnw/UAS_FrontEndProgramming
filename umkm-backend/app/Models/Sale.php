<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Sale extends Eloquent
{
    use HasFactory;

    protected $connection = 'mongodb';
    protected $collection = 'sales';

    protected $fillable = [
        'total_sales',
        'daily_sales',
        'monthly_sales',
        'yearly_sales',
        'total_orders',
        'average_order_value',
        'last_updated'
    ];

    protected $casts = [
        'total_sales' => 'float',
        'daily_sales' => 'float',
        'monthly_sales' => 'float',
        'yearly_sales' => 'float',
        'total_orders' => 'integer',
        'average_order_value' => 'float',
        'last_updated' => 'datetime'
    ];

    /**
     * Update sales statistics
     */
    public function updateStatistics($amount, $isNewOrder = true)
    {
        $this->total_sales += $amount;
        
        // Update daily sales (you might want to reset this daily)
        $this->daily_sales += $amount;
        
        // Update monthly sales
        $this->monthly_sales += $amount;
        
        // Update yearly sales
        $this->yearly_sales += $amount;
        
        if ($isNewOrder) {
            $this->total_orders += 1;
            $this->average_order_value = $this->total_sales / $this->total_orders;
        }
        
        $this->last_updated = now();
        $this->save();
    }

    /**
     * Reset daily sales (to be called via scheduler)
     */
    public function resetDailySales()
    {
        $this->daily_sales = 0;
        $this->save();
    }

    /**
     * Reset monthly sales (to be called via scheduler)
     */
    public function resetMonthlySales()
    {
        $this->monthly_sales = 0;
        $this->save();
    }

    /**
     * Get sales growth percentage
     */
    public function getSalesGrowthAttribute()
    {
        // This would require historical data for accurate calculation
        // For now, return a placeholder
        return 12.5; // Example growth percentage
    }
}