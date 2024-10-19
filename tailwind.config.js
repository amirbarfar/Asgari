/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  darkMode: ['variant', [
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
  ]],
  theme: {
      extend: {
          colors: {
              primary: "#0091FF",
              subtitle: "#8F8F8F",
              primaryLight: "#CEE9FE"
          }
      },
  },
  // plugins: [require("daisyui")],
  daisyui: {
      themes: {
          light: {
              ...require("daisyui/src/theming/themes")["light"],
              primary: "#0091FF",
              primaryLight: "#CEE9FE"
          },
          dark: {
              ...require("daisyui/src/theming/themes")["dark"],
              primary: "#0091FF",
              primaryLight: "#CEE9FE"
          },
      },
  }
}
