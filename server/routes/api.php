<?php

use App\Http\Controllers\Api\GenderController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


Route::controller(GenderController::class)->group(function () {
    Route::post('storeGender', 'storeGender');
    Route::post('storeGender', 'storeGender');
});

// If you want to keep the user route, uncomment this block:
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
