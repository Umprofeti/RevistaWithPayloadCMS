/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'logo-pattern': "url('../../public/background_logo.jpg')",
      }
    }
  },
  plugins: [],
}
