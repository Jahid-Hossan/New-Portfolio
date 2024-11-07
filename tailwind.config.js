/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base Color
        'base-color1': '#fec544',
        'base-color2': '#a9adb8',
        'base-color3': '#fdfeff',
        'base-color4': '#232935',

        // Dark Color
        'dark-color1': '#151b29',
        'dark-color2': '#070d1b',
        'dark-color3': '#0a101e',
        'dark-color4': '#101624',
        'dark-color5': '#3f4551',

      },
      fontFamily: {
        'Poppins': 'Poppins',
      }
    },
  },
  plugins: [],
}