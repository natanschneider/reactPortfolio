/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{sxs,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      }
    },
  },
  plugins: [],
}

