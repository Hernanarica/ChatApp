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
        message: {
          100: '#F8FAFF',
          900: '#91d1f4',
        }
      }
    },
  },
  plugins: [],
};

