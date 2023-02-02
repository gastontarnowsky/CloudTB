/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#887aff"
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'rajdhani': ['Rajdhani'],
        'shadows': ['Shadows Into Light'],
        'slabo': ['Slabo 27px'],
        'chakra': ['Chakra Petch'],
        'cinzel': ['Cinzel'],
      }
    },
  },
  plugins: [require("daisyui")],
}