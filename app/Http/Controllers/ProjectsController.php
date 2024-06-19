<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use App\Models\Review;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    public function index() {
        $reviews = Review::orderBy("date", "DESC")->get();
        $projects = Projects::orderBy('date', 'DESC')->get();
        return Inertia::render('Portfolio', ['projects' => $projects, 'reviews' => $reviews]);
    }
}
