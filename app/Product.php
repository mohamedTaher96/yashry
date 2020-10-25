<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table="products";
    protected $fillable = [
        'category_id','title','info','price','discount','image'
    ];
    public function getImageAttribute()
    {
        if (!isset($this->attributes['image'])) {
            return url('/images/products/shoes.png');
        }
            return url("images/products/".$this->attributes['image']) ;
    }
    public function category()
    {
        return belongsTo('App\Category','category_id');
    } 
}