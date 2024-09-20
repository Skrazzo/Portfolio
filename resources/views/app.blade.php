<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Leons Aleksandrovs</title>
        <meta property="description" content="Full stack developer with over <?= date('Y') - 2020; ?> years of experience, and extensive web skills.">
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

    <script>
        ;["click", "scroll", "mousemove", "touchstart"].forEach(function (e) {
            window.addEventListener(e, firstInteraction, {
                once: true,
            })
        })
        
        let userInteracted = false

        function firstInteraction() {
            if (!userInteracted) {
                userInteracted = true

                // Load google analytics
                if (!document.getElementById("ga-script")) {
                    // Google tag (gtag.js)
                    const script = document.createElement("script")
                    script.src = "https://www.googletagmanager.com/gtag/js?id=G-T4HFQ9N61W"
                    script.async = true

                    document.head.appendChild(script)

                    script.onload = function () {
                        window.dataLayer = window.dataLayer || []
                        function gtag() {
                            dataLayer.push(arguments)
                        }
                        gtag("js", new Date())

                        gtag("config", "G-T4HFQ9N61W")
                    }
                }
            }
        }
    </script>
</html>
