/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js,css}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px"
      },
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1200px"
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost'
    },
    backgroundImage: {
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '3f4f0ec',
          hover: '#b88c5d',
        }
      }
    },
  },
  plugins: [],
}