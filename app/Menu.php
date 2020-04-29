<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = "menu";
    protected $fillable = [
        'name','price','content','image',
    ];
    public function getImageAttribute()
    {

  if (!isset($this->attributes['image'])) {
        return url('public/images/slider/1.jpg');
        }
        return url("images/slider/".$this->attributes['image']) ;
        }
}
