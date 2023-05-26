/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './src/*.tsx',
    './src/**/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        message: '#91d1f4'
      }
    },
  },
  plugins: [],
};

