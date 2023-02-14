/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                serif: "'Playfair Display', serif",
                sans: "'Roboto', sans-serif",
                heading: "'Bebas Neue', sans-serif",
            },
        },
    },
    plugins: [],
};
