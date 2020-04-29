<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order_Items  extends Model
{
    protected $table = "order_items";
    protected $with = ['item'];
    protected $fillable = [
        'order_id','menu_id',
    ];
    public function item(){
        return $this->belongsTo('App\Menu','menu_id');
    }
}
