<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency  extends Model
{
    protected $table = "currencies";

    protected $fillable = [
        'key','default','price_to_default',
    ];
}
