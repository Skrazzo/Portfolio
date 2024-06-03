<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index() {
        return Inertia::render('Portfolio', ['projects' => Projects::all()]);
    }
}
