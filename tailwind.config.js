/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'primary' : "#0077B6"
        ,
        'secondary' : '#CE4D23'
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
      backgroundImage:{
      "img" : "url('../src/Assets/Home/doc.jpg') ",
      "mem1" : "url('../src/Assets/Home/memphis1.png') ",
      "mem2" : "url('../src/Assets/Home/Memphis2.png') ",
      "mem4" : "url('../src/Assets/Home/Memphis4.png') ",
      "doc" : "url('../src/Assets/Home/doctor.jpg') ",
      "doc2" : "url('../src/Assets/Home/doc2.png') ",
      "mem3" : "url('../src/Assets/Home/memphis3.png') ",
      "mem5" : "url('../src/Assets/Home/mem5.png') ",
      "img1" : "url('../src/Assets/Home/picture.png') ",
      "img2" : "url('../src/Assets/Home/logo.png') ",
      "img3" : "url('../src/Assets/Home/logo-backgroud.png') ",
      "img4" : "url('../src/Assets/Home/bus.jpg') ",
      "img5" : "url('../src/Assets/TopBenefits/Medical-Billing-Companies.jpg') ",
      'grad,ient-radial': 'radial-gradient(var(--tw-gradient-stops))'
    }
  }
   
  },
  plugins: [],
}