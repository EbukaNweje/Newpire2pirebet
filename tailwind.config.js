/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from "tailwind-scrollbar";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            phone: {max: "480px"},
            tb: "1024px",
            dk: "1280px",
            smallPhone: "351px",
        },
    },
    plugins: [scrollbarPlugin({ nocompatible: true }),],
};
