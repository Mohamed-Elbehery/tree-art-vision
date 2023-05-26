/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textColor: {
        main: "#d8b454",
      },
      backgroundColor: {
        main: "#d8b454",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
