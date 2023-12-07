import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doc2 from '../../Assets/Home/doc3.png'
import img from '../../Assets/Home/5star.jpg'
import pic1 from '../../Assets/Home/old.jpg'
import pic2 from '../../Assets/Home/portrait-of-happy-woman-with-curly-hair-at-park.jpg'
import pic3 from '../../Assets/Home/portrait-of-smiling-young-man-in-loft-apartment.jpg'
import { FaQuoteRight } from "react-icons/fa";
const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
  };
 const data=[
  {
    name:"Pete Joseph",
    img : pic1
  
  },
  {
    name:"Carla Manik",
    img : pic2
  
  },
  {
    name:"Albert William",
    img : pic3
  
  }

 ]
  return (
    
    <div className=' md:h-[150vh] md:bg-doc2 md:bg-cover   '>
<div className='md:h-[150vh] bg-white/20  md:items-center flex-col md:flex-row md:pt-56 pt-24 md:px-32  flex '>
<img src={doc2} className=' md:hidden'/>
<div className='flex flex-col   md:px-8 md:py-10 pt-5 rounded-lg bg-white '>
              <h1 className=' text-[#08485E] text-center font-bold pb-3 text-sm md:text-md '>TESTIMONIALS</h1>
              <h1 className='text-center text-2xl md:text-6xl font-bold '>What they say</h1>
             
              <div className='md:hidden'>
              <Slider {...settings}>
              {
  data.map((item)=>(
   
           <div className=' shadow-lg card md:px-6 rounded-lg md:py-8   py-6 px-6'>
    <div className='card-top'>
    <img src={img} alt='?' className='h-12'/>
    </div>
                           <div className='card-bottom'>
                           <p className=' text-left md:pt-10'> I am very satisfied with the results I got by using the medical services. The customer service is very nice</p>
                                <div className='flex pt-8'>
                                    <img src={item.img}   alt='?' className='rounded-full w-24 h-24  ' />
                                    <div className='flex-col px-4 pt-6'>
                                         <h1 className='text-xl font-bold'> {item.name}</h1>
                                         <p> Patient</p>
                                    </div>
                                    <div className='pl-10 pt-10'>
                                    <FaQuoteRight  size={44} color='lightblue'/>
                                    </div>
                                </div>
                            </div> 
                           </div>
                               

                          
          
    
  ))
}  </Slider>
              </div>
           
                <div className=' hidden md:flex pt-2 gap-4   '>
                    
                           
                              {
  data.map((item)=>(

    <div className=' shadow-lg card md:px-6 rounded-lg py-8   '>
    <div className='card-top'>
    <img src={img} alt='?' className='h-12'/>
    </div>
                           <div className='card-bottom'>
                           <p className=' text-left pt-10'> I am very satisfied with the results I got by using the medical services. The customer service is very nice</p>
                                <div className='flex pt-8'>
                                    <img src={item.img}   alt='?' className='rounded-full w-24 h-24  ' />
                                    <div className='flex-col px-4 pt-6'>
                                         <h1 className='text-xl font-bold'> {item.name}</h1>
                                         <p> Patient</p>
                                    </div>
                                    <div className='pl-10 pt-10'>
                                    <FaQuoteRight  size={44} color='lightblue'/>
                                    </div>
                                </div>
                            </div> 
                           </div>
                               


  ))
}
                             

                                
                               
                           
                           
                  
                </div>
              </div>
                
                </div>

              
              
 
       

    </div>
  )
}

export default Testimonials