module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1f1d36",
        secondary: "#3f3351",
        badgeColor: "#864879",
        textColor: " #e9a6a6",
        textColorAlt: "#f5f5f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
