<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bill  extends Model
{
    protected $table = "bills";

    protected $fillable = [
        'subtotal','discount','discount_txt','tax','total','currency_id'
    ];

    public function currency()
    {
        return $this->belongsTo('App\Currency','currency_id');
    }
    public function items()
    {
        return $this->hasMany('App\BillItems','bill_id');
    }
}
