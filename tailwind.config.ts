import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/APP/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        AppPrimary: "#A6734D",   // Slightly lighter warm brown
        AppSecondary: "#8B5E34", // Deeper, muted brown
        AppTertiary: "#FAF4ED",  // Softer, light beige background
        AppPop: "#E57C6D",       // Muted coral for highlights or accents
        AppMutedPop: "#6A5545",  // Darker muted brown for subtle accents
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
};
export default config;
