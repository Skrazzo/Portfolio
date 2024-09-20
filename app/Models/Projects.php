<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    protected $fillable = ['icon', 'title', 'showcaseUrl', 'githubUrl','name', 'description', 'tech'];
    use HasFactory;

    protected $casts = [
        'tech' => 'array'
    ];
}
