
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': "var(--gray-100)",
        'gray-200': "var(--gray-200)",
        'gray-300': "var(--gray-300)",
        'gray-400': "var(--gray-400)",
        'blue-100': "var(--blue-100)",
        'turquoise-100': "var(--turquoise-100)",
        'red-100': "var(--red-100)",
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
        bebasNeue: ['var(--font-bebasNeue)'],
        ptRootUi: ['var(--font-ptRootUi)'],
      },
    },
    fontSize: {
      base: '16px',
      xs: '14px',
      sm: '18px',
      md: '24px',
      xl: '26px',
      '2xl': '30px',  
      '3xl': '50px',  
      '4xl': '60px',  
    },
    lineHeight: {
      "4xl": "103%"
    }
  },
  plugins: [],
};
