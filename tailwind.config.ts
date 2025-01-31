import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      gray: {
        100: 'hsl(0, 0%, 98%)',
        200: 'hsl(0, 0%, 52%)'
      },
      blue: {
        100: 'hsl(209, 23%, 22%)',
        200: 'hsl(207, 26%, 17%)',
        300: 'hsl(200, 15%, 8%)'
      }
    },
    fontFamily: {},
    extend: {}
  },
  plugins: []
} satisfies Config;
