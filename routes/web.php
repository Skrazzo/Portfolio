<?php

use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [ProjectsController::class, 'index'])->name('portfolio');
