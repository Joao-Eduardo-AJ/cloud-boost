import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-purple-light": "#653DF5",
        "primary-purple": "#4E32B5",
        "primary-purple-dark": "#2C1B6A",

        "gray-100": "#F5F6FA",
        "gray-200": "#DFE1E8",
        "gray-300": "#C0C3CC",
        "gray-400": "#ABAFBA",
        "gray-500": "#979BA6",
        "gray-600": "#787C87",
        "gray-700": "#5C5F69",
        "gray-800": "#393B42",
        "gray-850": "#232529",
        "gray-900": "#0A0B0D",
        "gray-950": "#030009"
      },
      spacing: {
        "18": "4.5rem",
        "34": "8.5rem"
      },
      fontSize: {
        "1.5xl": "1.375rem",
        "4.5xl": "2.5rem",
        "5.5xl": "3.5rem"
      }
    }
  },
  plugins: []
};
export default config;
