import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      neon: ["Neon"],
      muller: ["Muller-ExtraBold"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/bg-1.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
