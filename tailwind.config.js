/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2B7BBF',
        'brand-blue-dark': '#1E5A8F',
        'brand-blue-light': '#5DADE2',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        loadngo: {
          'primary': '#2B7BBF',
          'secondary': '#1E5A8F',
          'accent': '#5DADE2',
          'neutral': '#000000',
          'base-100': '#FFFFFF',
          'info': '#3ABFF8',
          'success': '#36D399',
          'warning': '#FBBD23',
          'error': '#F87272',
        },
      },
    ],
  },
};
