/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        320: "320px",
        546: "546px",
        xs: "465px", // для небольших экранов
        400: "400px", // для небольших экранов
        sm: "678px",
        md: "768px",
        867: "867px",
        lg: "992px", // измените здесь на 992px
        xl: "1024px",
        "2xl": "1200px",
        // fluid: "clamp(30px, 8vw, 67px)",
      },
    },
  },
  plugins: [],
};
