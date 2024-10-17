/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
        bold : "Vbold"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

