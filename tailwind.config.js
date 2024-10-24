/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
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
