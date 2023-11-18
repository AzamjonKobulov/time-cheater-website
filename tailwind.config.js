/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        base: '89.75rem',
      },
      screens: {
        '2xl': '90rem',
        '3xl': '107.5rem',
      },
      spacing: {
        15: '3.75rem',
        100: '6.25rem',
      },
      colors: {
        brand: {
          wind: '#4BC2C2',
          title: '#2B2E67',
          purple: {
            100: '#6367D0',
            200: '#767BFF',
          },
          'dark-blue': '#2E328B',
          gray: {
            DEFAULT: '#515372',
            100: '#585858',
          },
          card: {
            100: '#3B40C1',
            200: '#2E328B',
          },
        },
      },
      fontFamily: {
        'cera-pro': ['Cera Pro', 'sans-serif'],
      },
      fontSize: {
        22: '22px',
        32: '2rem',
        42: '2.625rem',
      },
      borderRadius: {
        35: '2.1875rem',
        75: '4.6875rem',
      },
      backgroundImage: {
        hero: "url('/public/assets/images/img-hero.png')",
      },
    },
  },
  plugins: [],
};
