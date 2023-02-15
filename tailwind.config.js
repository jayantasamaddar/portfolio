const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#0C0032',
          'primary-2': '#190061',
          accent: '#240090',
          'accent-2': '#3500D3',
          secondary: '#282828',
          tertiary: '#7510F7',
        },
      },
      fontFamily: {
        'nexa-bold': ['Nexa', 'Helvetica', 'Arial', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
      },
      zIndex: {
        1: '1',
        100: '100',
        1000: '1000',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        'fade-out': {
          '0%': { opacity: 100 },
          '100%': { opacity: 0 },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out forwards 0.2s',
        'fade-out': 'fade-out 0.2s ease-out forwards 0.2s',
        'slide-in-left': 'slide-in-left 0.2s ease-in-out forwards',
      },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
      square: 'square',
      decimal: 'decimal',
      'lower-roman': 'lower-roman',
      'upper-roman': 'upper-roman',
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('middle', '&:not(:first-child):not(:last-child)');
    }),
  ],
};
