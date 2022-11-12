/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',
        'md': '660px',
        'lg': '720px',
        'xl': '1024px'
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
