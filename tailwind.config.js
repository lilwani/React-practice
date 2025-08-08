/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //   colors: {
      //     'custom-blue': '#1da1f2',
      //   },
      //   spacing: {
      //     '128': '32rem',
      //   },
    },
  },
  plugins: [],
};
