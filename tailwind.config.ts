import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        escuro:"#1E1E1E",
        cinza:"#2D2D2D",
        dourado:"#D8BE7D"
      }
    },
  },
  plugins: [],
};
export default config;
