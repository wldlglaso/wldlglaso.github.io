import type { Config } from "tailwindcss";
import * as colors from "./styles/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        spoca: ["Spoqa Han Sans Neo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
