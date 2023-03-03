/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        showModal: {
          '0%': { 
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '25%': {
            transform: 'translateY(0%)',
            opacity: '0',
          },
          '75%': {
            transform: 'translateY(0%)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1'
          }
        },
        hiddenModal: {
          '0%': { 
            transform: 'translateY(0%)',
            opacity: '1',
          },
          '50%': {
            transform: 'translateY(0%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0',
          }
        },
      },
      animation: {
        showModal: 'showModal 1s ease-in-out forwards',
        hiddenModal: 'hiddenModal 1s ease-in-out forwards'
      },
      colors: {
        azul: "#8b95ff",
        azulTwo: "#8b95ff",
        azulOscuro: '#290042',
        rojo: '#f4905b',
        gris: "rgba(248, 248, 253, 0.5)",
        azulOscurorgba: "rgba(41, 0, 66, 0.60)",
        azulViejo: "rgba(102, 182, 243, 0.99)"
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