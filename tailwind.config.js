/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-left": {
          "0%": {
            opacity: "0",
            "--tw-translate-x": "-100%",
          },
          "100%": {
            opacity: "1",
            "--tw-translate-x": "0px",
          },
        },
        "fade-slide-up": {
          "0%": {
            opacity: "0",
            "--tw-translate-y": "20px",
          },
          "100%": {
            opacity: "1",
            "--tw-translate-y": "0px",
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 1s ease-out forwards",
        "fade-slide-up": "fade-slide-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
