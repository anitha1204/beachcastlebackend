/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: ' #3C585B', 
        secondary: '#4D2719',
      },
    },
  },
  plugins: [],
}

