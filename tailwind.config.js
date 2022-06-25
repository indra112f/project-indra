/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        primary: '#155e75',
        secondary: '#6b7280',
        dark: '#1f2937',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
