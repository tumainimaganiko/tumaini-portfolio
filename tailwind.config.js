/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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