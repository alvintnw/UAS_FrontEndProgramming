<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class InvoiceItem extends Eloquent
{
    protected $connection = 'mongodb';
    protected $collection = 'invoice_items';

    protected $fillable = [
        'invoice_id',
        'product_id',
        'product_name',
        'quantity',
        'price',
        'subtotal',
        'notes'
    ];

    protected $casts = [
        'quantity' => 'integer',
        'price' => 'float',
        'subtotal' => 'float'
    ];

    /**
     * Get the invoice that owns the item.
     */
    public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }

    /**
     * Get the product that owns the item.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Calculate subtotal
     */
    public function calculateSubtotal()
    {
        $this->subtotal = $this->quantity * $this->price;
        return $this->subtotal;
    }

    /**
     * Boot method to calculate subtotal before saving
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($item) {
            $item->calculateSubtotal();
        });
    }
}