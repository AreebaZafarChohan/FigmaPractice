import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
  primary1:  "var(--primary1)",
  secondary: "var(--secondary)",
  secondary1: "var(--secondary1)",
  text: "var(--text)",
  text1: "var(--text1)",
  text2: "var(--text2)",
  secondary2 : "var(--secondary2)",
  button1: "var(--button1)",
  hoverButton: "var(--hoverButton)",
  hoverButton2: "var(--hoverButton2)",
      },
      fontFamily : { 
        inter: ["inter", "sans-serif"],
        poppins: ["poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
