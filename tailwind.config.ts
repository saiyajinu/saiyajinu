import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      primary:{
        focused: '#15e49e',
        hover: '#11b57e',
        background: "rgba(21, 228, 158, 0.16)"
      },
      secondary:{
        100: '#F3F4F6',
        200: '#1a1a1a',
        transparent: 'rgba(0,0,0,0.2)',
      },
      gray: {
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      black: '#000000',
      white: '#ffffff',
      orange: '#ff9b3e',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shake: {
          '16%': { transform: 'skew(-14deg)' },
          '33%': { transform: 'skew(12deg)' },
          '49%': { transform: 'skew(-8deg)' },
          '66%': { transform: 'skew(6deg)' },
          '83%': { transform: 'skew(-4deg)' },
        },
      },
      animation: {
        shakeAnim: 'shake 600ms ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
