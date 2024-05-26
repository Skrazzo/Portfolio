/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: {
                    green: '#222724',
                    "green-light": '#2D3932',
                },
                text: {
                    primary: '#FFFFFF', // Primary on green background
                    secondary: '#ABABAB', // Secondary on green bg
                    dark: '#384D40', // Primary on white bg
                    green: '#ABD4BC', // idk
                },
                gradient: {
                    from: '#D3FF77',
                    to: '#8AFF77',
                },
                duck: '#FEE176',

            },
        },
    },
    plugins: [],
}