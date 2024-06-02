module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        primary: '#0F4C81',
        secondary: '#53B0AE',
        accent: '#F74371',
      },
      fontFamily: {
        display: 'Libre Baskerville, Arial, sans-serif',
        body: 'Noto Sans JP, Arial, sans-serif',
      },
    },
  },
  content: [
    './components/**/*.vue', // all components
    './examples/**/*.vue', // all examples
    './pages/**/*.vue', // all pages as well
  ],
};
