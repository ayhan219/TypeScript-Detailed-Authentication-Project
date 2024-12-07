/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0.3" }, 
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0.3" }, 
        },
      },
      animation: {
        slideDown: "slideDown 0.6s ease-in-out forwards", 
        slideUp: "slideUp 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
