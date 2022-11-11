/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '400px',
        'md': '660px',
        'lg': '830px'
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury"]
  }
}
