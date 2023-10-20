/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '744px',
      'laptop': '1065px',
      'desktop': '1440px',
    },
    extend: {
      boxShadow: {
      'xl' : '2px 4px 4px 0 rgba(0, 0, 0, 0.25)'

      },
      gridTemplateRows: {
        'layout': '70px 70px 70px',
        'layoutMD': '120px 120px',
      }
    },
  },
  plugins: [],
}