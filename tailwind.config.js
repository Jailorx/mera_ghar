/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "custom-indigo-700": "#4C516D",
          "custom-indigo-600": "#5d627b",
          "custom-indigo-500": "#6f738a",
          "custom-indigo-400": "#818598",
          "custom-indigo-300": "#9396a7",
          "custom-indigo-200": "#a5a8b6",
          "custom-indigo-100": "#b7b9c4",
        },
      },
      width: {
        "custom-full": "1336px",
      },
    },
  },
  plugins: [],
};
