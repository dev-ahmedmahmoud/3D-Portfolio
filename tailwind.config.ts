import type { Config } from "tailwindcss";

export default {
  content: [
    "./public/**/*.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/canvas/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "black-300": "#1C1C21",
        "white-100": "#f3f3f3",
        "white-500": "#62646C",
        "white-600": '#AFB0B6',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxs: "390px",
        xs: "450px",
        xss: "588px",
        smd: "700px",
        mdlg: "800px",
        mdlg2: "900px",
        mdlg3: "1000px",
        lgxlg: "1150px",
        lgxlg2: "1210px",
      },
      backgroundImage: {
        "hero-pattern": "url('/imgs/herobg.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
