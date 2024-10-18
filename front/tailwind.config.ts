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
        customBgPage:'#FAFAF0',
        customTextPage:'#333',
        customBgCard: '#ffffff',      
        customBg: '#0a0a0a',
        customBgPromos: '#131010', 
        customTextPromos: '#d9cece',
        customText: '#ffffff',
        customHoverButton: '#c4df63', 
        customHoverTextButton: '#0d0d0d'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
