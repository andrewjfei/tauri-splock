/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['orbitron', 'sans-serif'],
      },
      screens: {
        '3xl': '1800px', // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [],
}

