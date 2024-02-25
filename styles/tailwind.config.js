/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}

