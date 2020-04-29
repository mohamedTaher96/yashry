<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/menu','apiController@menu');
Route::get('/home','apiController@home');
Route::post('/newOrder','apiController@new_order');
Route::post('/search','apiController@search');
Route::post('/login','apiController@login');
Route::post('/register','apiController@register');


