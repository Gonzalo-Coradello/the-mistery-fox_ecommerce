/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': 'var(--ff-body)',
      'heading': 'var(--ff-heading)'
    },
    extend: {
      screens: {
        'sm': '500px',
        'md': '660px',
        'lg': '720px',
        'xl': '1024px'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        misteryFox: {
          "primary": "#FFFFFF",
          "secondary": "#243016",
          "accent": "#E6AF2E",
          "neutral": "#DAE7CB",
          "base-100": "#243016",
          "base-300": "#1b2213",
          "base-content": "#FFFFFF",
          "info": "#66C6FF",
          "success": "#87D039",
          "warning": "#E2D562",
          "error": "#FF6F6F",
        }
      }
    ]
  }
}
