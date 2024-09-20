/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        colors: {
          

            'primary': '#2E7D32',
            'secondary': '#333333',
            'btnTheme' : '#5C6BC0',
            
        },


    },
  },
  plugins: [],
}

