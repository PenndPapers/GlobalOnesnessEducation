/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "logo-color": "#FF9900",
        "grayDark" : "#767474"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
