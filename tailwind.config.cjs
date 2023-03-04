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
        azulOscurorgba: "rgba(41, 0, 66, 1)",
        azulOscuroMensaje: 'rgba(41, 0, 66, 0.3)',
        azulOscuroFocus: 'rgba(41, 0, 66, 0.1)',
        azulOscuroInput: 'rgba(110, 40, 156, 0.9)',
        
        rojo: '#fd3456',
        gris: "rgba(232, 239, 247, 0.99)",
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