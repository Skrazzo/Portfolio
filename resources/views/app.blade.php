<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Leons Aleksandrovs</title>
        <meta property="og:title" content="Leon - Full-stack developer">
        <meta property="og:description" content="Full stack developer with over <?= date('Y') - 2020; ?> years of experience, and extensive web skills.">
        <meta property="og:keywords" content="Full stack developer, React, Laravel, HTML, CSS, JavaScript, PHP">
        <meta property="og:author" content="Leons Aleksandrovs">

        @viteReactRefresh
        @vite(['resources/scss/app.scss', 'resources/js/app.jsx'])
        <!-- As you can see, we will use vite with jsx syntax for React-->
        @routes
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
