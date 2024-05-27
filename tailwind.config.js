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
                    'green-light': '#E3FFEE', // light green text
                },
                gradient: {
                    from: '#D3FF77',
                    to: '#8AFF77',
                },
                duck: '#FEE176',

            },
            fontSize: {
                title: '48px',
                '6.25xl': '4rem',
                '1.75xl': '1.75rem',
            },
            borderRadius: {
                rem: '1rem',
            },
        },
    },
    plugins: [],
}