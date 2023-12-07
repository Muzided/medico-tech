/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'cGreen' : "#229631"
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        }
    },  backgroundImage:{
      "img" : "url('../src/Assets/Home/doc.jpg') ",
      "mem1" : "url('../src/Assets/Home/memphis1.png') ",
      "mem2" : "url('../src/Assets/Home/Memphis2.png') ",
      "mem4" : "url('../src/Assets/Home/Memphis4.png') ",
      "doc" : "url('../src/Assets/Home/doctor.jpg') ",
      "doc2" : "url('../src/Assets/Home/doc2.png') ",
      "mem3" : "url('../src/Assets/Home/memphis3.png') ",
      "img1" : "url('../src/Assets/Home/picture.png') ",
      "img2" : "url('../src/Assets/Home/logo.png') ",
      'grad,ient-radial': 'radial-gradient(var(--tw-gradient-stops))'
    }
   
  },
  plugins: [],
}