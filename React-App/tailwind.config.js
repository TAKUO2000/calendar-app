// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Graphik", "sans-serif"],
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.03em" }],
        title: ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.03em" }],
      },
    },
  },
  plugins: [],
};
