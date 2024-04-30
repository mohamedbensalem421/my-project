/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    extend: {
      gridTemplateColumns:{
        fluid: "repeat(auto-fill, minmax(250px, 1fr))",
      }
    },
  },
  plugins: [],
}

