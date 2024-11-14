/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      bold : 'HGofteh',
      boldV : "Vbold"
    }
  },
  'class': ['variant', [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
  ]],
  plugins: [require("daisyui")],
  daisyui: {
      themes: [
        "light"
      ],
  }
}
