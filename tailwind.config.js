/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: '#F5F7FA',
        neutralDGrey: '#4D4D4D',
        neutralGrey: '#717171',
        brandPrimary: '#4CAF4F',
        grey900: '#18191F',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
