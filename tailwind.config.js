/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
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
        "fade-slide-up": "fade-slide-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
