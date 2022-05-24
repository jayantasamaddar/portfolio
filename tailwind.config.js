module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './blocks/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        1: '1',
        100: '100',
      },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      circle: 'circle',
      square: 'square',
      decimal: 'decimal',
      square: 'square',
      'lower-roman': 'lower-roman',
      'upper-roman': 'upper-roman',
    },
  },
  plugins: [],
};
