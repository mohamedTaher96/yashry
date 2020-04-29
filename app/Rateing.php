<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rateing extends Model
{
    protected $table="rateing";
    protected $fillable = [
        'user_id','comment','rate'
    ];
    public function user()
    {
        return $this->belongsTo('App\user'); 
        
    }

}