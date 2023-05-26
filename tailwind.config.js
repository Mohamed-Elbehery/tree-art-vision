/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      textColor: {
        main: "#d8b454",
        secondary: "rgb(253 227 159)",
      },
      backgroundColor: {
        main: "#d8b454",
        deepPink: "#ff1493",
        darkBlue: "#0000ff",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
