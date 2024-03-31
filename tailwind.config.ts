import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      primary: "#1B1E23",
      secondary: "#9977D4",
      darkSecondary: "#6337AE"
     }
    },
  },
  plugins: [],
};
export default config;
