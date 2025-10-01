/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // 320px
        'sm': '480px',   // 480px
        'md': '636px',   // 636px
        'lg': '732px',   // 732px
        'xl': '1280px',  // 1280px
        '2xl': '1920px', // 1920px
      },
      fontFamily: {
        'stolzl': ['Stolzl', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'xq-orange': '#D5600C',
        'xq-orange-dark': '#994000',
        'xq-cream': '#FDEBDD',
        'xq-brown': '#D1AD94',
        'xq-gray': '#C3C3C3',
        'xq-dark': '#181818',
        'xq-overlay': 'rgba(8, 5, 2, 0.5)',
      },
    },
  },
  plugins: [],
}
