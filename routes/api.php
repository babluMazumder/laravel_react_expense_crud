<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpenseController;

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
Route::post('expense-create', [ExpenseController::class, 'create']);
Route::get('expenses', [ExpenseController::class, 'list']);
Route::get('expense-edit/{id}', [ExpenseController::class, 'edit']);
Route::post('expense-update', [ExpenseController::class, 'update']);
Route::get('expense-delete/{id}', [ExpenseController::class, 'delete']);
