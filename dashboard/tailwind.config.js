/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",        
        secondary: "#16213e",
        textLight: "#e0e0e0",
        accentPink: "#ff6bcb",
        accentPurple: "#6b47ff",
        accentCyan: "#00d4ff",
      },
    },
  },
  plugins: [],
});
