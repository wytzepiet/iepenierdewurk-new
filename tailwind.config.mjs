/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Hero", "sans-serif"],
        lovelo: ["Lovelo", "sans-serif"],
      },
      colors: {
        lightblue: "#c7ccd8",
      },
    },
  },
  plugins: [],
};
