/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        magenta: "#b92b5d",
        green: "#06af52",
        red: "#af0606",
        gold: "#af9b06",
      },
    },
  },
  plugins: [],
};
