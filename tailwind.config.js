/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                description: "#2E4B3F",
                icon: {
                    project: "#43584C",
                },
                bg: {
                    green: "#222724",
                    "green-light": "#2D3932",
                },
                text: {
                    primary: "#FFFFFF", // Primary on green background
                    secondary: "#ABABAB", // Secondary on green bg
                    dark: "#384D40", // Primary on white bg
                    green: "#ABD4BC", // idk
                    "green-light": "#E3FFEE", // light green text
                },
                gradient: {
                    from: "#D3FF77",
                    to: "#8AFF77",
                },
                duck: "#FEE176",
            },
            fontSize: {
                "timeline-description": "20px",
                "project-description": "28px",
                title: "48px", // 3rem
                "6.25xl": "4rem",
                "1.75xl": "1.75rem",
            },
            borderRadius: {
                rem: "1rem",
            },
            width: {
                "section-icon": "4.25rem", // 68px
            },
            maxWidth: {
                "timeline-description": "400px",
            },
            padding: {
                18: "72px",
            },
            screens: {
                xs: "400px",
                xsm: "524px",
                "before-lg": `${1024 + 24}px`,
            },
            boxShadow: {
                glow: "0 0 10px 0",
                "glow-hover": "0 0 20px 0",
                chapter: "0 0 0 5px",
            },
        },
    },
    plugins: [],
};
