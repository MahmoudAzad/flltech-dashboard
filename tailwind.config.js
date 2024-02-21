/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#131517",
          200: "#1D1F20",
        },
        Phosphorus: {
          100: "#23F4F9",
        },
      },
    },
  },
  plugins: [],
};
