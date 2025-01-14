import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        helvetica: ["helvetica"],
        arial: ["arial"],
      },
      colors: {
        'anduril-bg': '#000',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollToTopButton': {
          cursor: 'pointer',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out'
        },
        '.scrollToTopButton.visible':  {
          opacity: 1,
        }
      }

      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
