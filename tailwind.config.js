/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Alegreya Sans', 'sans-serif'],
        'title': ['Shadows Into Light', 'cursive']
      },
    },
  },
  plugins: [],
}
