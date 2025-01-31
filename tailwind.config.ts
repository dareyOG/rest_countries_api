import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      gray: {
        50: "hsl(0, 0%, 98%)",
        100: "hsl(0, 0%, 52%)",
      },
      blue: {
        50: "hsl(209, 23%, 22%)",
        100: "hsl(207, 26%, 17%)",
        200: "hsl(200, 15%, 8%)",
      },
    },
    fontFamily: {
      sans: ["Nunito Sans", "system-ui"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
