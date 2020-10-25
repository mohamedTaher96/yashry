<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BillItems  extends Model
{
    protected $table = "bill_items";

    protected $fillable = [
        'bill_id','item_id','price','qty',
    ];

    public function product()
    {
        return $this->belongsTo('App\Product','item_id');
    }
}
