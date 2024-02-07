import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      green: {
        100: "#e8f6f1",
        200: "#d1ede4",
        300: "#bbe5d6",
        400: "#A5EBD3",
        500: "#8dd3bb",
        600: "#71a996",
        700: "#557f70",
        800: "#38544b",
        900: "#112211",
      },
      gray: {
        100: "#e4e3e5",
        200: "#c9c7cb",
        300: "#afacb2",
        400: "#949098",
        500: "#79747e",
        600: "#615d65",
        700: "#49464c",
        800: "#302e32",
        900: "#1C1B1F",
      },
    },
  },
  plugins: [],
};
export default config;
