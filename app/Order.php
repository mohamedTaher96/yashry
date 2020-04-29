<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table="orders";
    protected $fillable = [
        'total','user_id','name','address','contact'
    ];
    public function order_items(){
        return $this->hasMany('App\Order_Items');
    }
}