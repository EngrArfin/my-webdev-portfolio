/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 3.5s steps(40) 1s forwards", // Adjust steps according to your text length
        "blink-caret": "blink 0.75s step-end infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "#f7f7f7" }, // Or your desired caret color
        },
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
