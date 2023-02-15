/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./index.html",
    "./src/components/*.{html,js}",
    "./src/pages/**/*.{html,js}",
    "./src/pages/admin/*.{html,js}",
  ],
  // prefix: "tw-",
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', "cursive"],
      },
      maxWidth: {
        wrapper: "1051px",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
