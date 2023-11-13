/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      pc: "1450px",
      "2xl": "1536px",
    },
    extend: {},
    colors: {
      "primary-color": "#560764",
      "primary-text-color": "#B9B4C7",
      cream: "#F7F2F8",
      white: "#ffffff",
      description: "#A85E93",
    },
  },
  plugins: [],
};
