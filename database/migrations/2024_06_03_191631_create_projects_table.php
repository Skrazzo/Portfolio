<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('icon'); // icon name
            $table->string('title');
            $table->json('tech'); // skill images
            $table->string('description'); // -b bold the word -n new line
            $table->string('showcaseUrl');
            $table->string('githubUrl')->nullable();
            $table->string('demoUrl')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
