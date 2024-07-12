/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        harPrimary: '#364117',
        harSecondary: '#899b22',
        harAccent: '#bfe84e',
      },
      fontFamily: {
        harFont: 'Dancing Script'
      }
    },
  },
  plugins: [
    require("daisyui"),
    function({addUtilities}){
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px #364117'
        }
      })
    },
  ],
};
