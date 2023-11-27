import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1250px",
        mobile: { max: "639px" },
        tablet: { max: "1250px" },
        tabletOnly: { min: "640px", max: "1249px" },
        sm: "640px",
        xl: "1650px",
        // => @media (min-width: 1120px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
