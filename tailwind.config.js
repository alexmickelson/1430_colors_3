/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        primaryHover: "var(--primary-hover-color)",
        primaryTextColor: "var(--primary-text-color)",
        body: "var(--body-color)",
        bodyLight: "var(--body-light-color)",
        bodyLightBorder: "var(--body-light-border-color)",
        bodyText: "var(--body-text-color)",
      },
    },
  },
  plugins: [],
};
