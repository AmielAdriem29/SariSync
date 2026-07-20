/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",
        secondary: "#FF8891",
        neutral: "#6A6A6A",
        transactionsPrimary: "#9CD88A",
        productsPrimary: "#888DF4",
        creditPrimary: "white",
        expensesPrimary: "#FFA770"
      },
    },
  },
  plugins: [],
}
