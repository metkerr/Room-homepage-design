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
        18: "4.5rem",
        88: "22rem",
        "80v": "80vh",
        "70v": "70vh",
        "75v": "75vh",
        "60v": "60vh",
        "55v": "55vh",
      },
      minWidth: {
        64: "16rem",
      },
    },
  },
  plugins: [],
};
