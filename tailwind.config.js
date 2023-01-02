/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  content: ["index.html",  
            "node_modules/flowbite/**/*.js",
          ],
  theme: {
    extend: {
      colors: {
        'grey-wellness': '#3A434A',
        'red-wellness': '#EB2F02'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
