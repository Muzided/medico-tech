import React from 'react'
import pic1 from '../../Assets/Home/logo-1.png'
import pic2 from '../../Assets/Home/logo-2.png'
import pic3 from '../../Assets/Home/logo-4.png'
import pic4 from '../../Assets/Home/logo-6.png'
import pic5 from '../../Assets/Home/logo-11.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Partner = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    const data=[
        {img: pic1},
        {img: pic2},
        {img: pic3},
        {img: pic4},
        {img: pic5},
        {img: pic4},

    ]
  return (  
    <div className='pb-20 pt-12'>
    <div className='flex justify-center flex-col'>
        <h1 className='text-[#08485E] text-center font-bold pb-3 text-sm md:text-lg tracking-widest'> PARTNER</h1>
        <h1 className='text-center text-2xl md:text-6xl font-bold pb-10'> Awesome Partner</h1>
       
        <div className='  md:hidden'>
        <Slider {...settings2}>
            {data.map((item)=>(
               
                 <div>
                     <img src={item.img} alt='?' className='' />
                   
                 </div>
                 
             ))
         }   </Slider>
        </div>
       
        <div className='px-56 md:block hidden'>
        <Slider {...settings}>
            {data.map((item)=>(
               
                 <div>
                     <img src={item.img} alt='?' className='' />
                   
                 </div>
                 
             ))
         }   </Slider>
        </div>
       
       
          
      
       
  

  
    </div>
    
    </div>
  )
}

export default Partner