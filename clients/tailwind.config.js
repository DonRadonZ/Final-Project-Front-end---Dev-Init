import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    extend: {
      fontSize: {
        huge: ['120rem',{lineHeight: '1'}],
      },
      height: {
        screen: 'h-full'
      }
    },
  },
  plugins: [
    daisyui,
  ],
}