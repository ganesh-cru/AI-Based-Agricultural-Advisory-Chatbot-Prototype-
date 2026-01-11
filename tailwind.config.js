/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
 colors: {
  background: "#fdfdfb",
  foreground: "#1e293b",
  primary: "#16a34a",       // main Agri green
  secondary: "#86efac",     // leaf accent
  border: "#d4d4d8",
  muted: "#ecfdf5",         // pale mint
  highlight: "#65a30d",     // hover / focus
}

},

  },
  plugins: [require("tailwindcss-animate")],
};
