/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        "hunt-primary": "#FEFF86",
        "hunt-blue-300": "#B0DAFF",
        "hunt-blue-200": "#B9E9FC",
        "hunt-blue-100": "#B9E9FC"
      }
    },
  },
  plugins: [],
}

