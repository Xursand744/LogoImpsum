/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

     
    container:{
      padding:'15px',
      center:true,
      screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1111px',
    },

    },
    extend: {},
  },
  plugins: [],
}

