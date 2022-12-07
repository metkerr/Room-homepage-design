/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "hsl(0, 0%, 63%)",
        "very-dark-gray": "hsl(0, 0%, 27%)",
      },
      height: {
        88: "22rem",
      },
    },
  },
  plugins: [],
};