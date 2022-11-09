/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#131213",
        "gray": "#c7c7c7"
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]']
}
