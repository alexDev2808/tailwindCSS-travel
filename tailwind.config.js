/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      colors: {
        "hunt-yellow-300": "#FEFF86",
        "hunt-blue-300": "#B0DAFF",
        "hunt-blue-200": "#B9E9FC",
        "hunt-blue-100": "#B9E9FC",
        "hunt-lila-400": "#C04A82",
        "hunt-lila-200": "#BE6DB7",
        "hunt-rose-100": "#FFAACF",
        "hunt-salmon-200": "#FAAB78"
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

