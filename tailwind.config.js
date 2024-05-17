/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            sans: ["Overpass", "sans-serif"],
        },
        screens: {
            desktop: "1440px",
        },
        extend: {},
    },
    plugins: [],
};
