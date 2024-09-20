import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doc2 from '../../Assets/Home/doc3.png'
import img from '../../Assets/Home/5star.jpg'
import pic1 from '../../Assets/Home/old.jpg'
import pic2 from '../../Assets/Home/portrait-of-happy-woman-with-curly-hair-at-park.jpg'
import pic3 from '../../Assets/Home/portrait-of-smiling-young-man-in-loft-apartment.jpg'
import anomuser from '../../Assets/images/anomuser.webp'
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
  const data = [
    {
      name: "Dr. S Vashish",
      img: anomuser,
      testimonial:'We have been using  Medico Tech for medical billing and Credentialing services. We highly recommend them. We received timely response. and someone is always there for us to provide excellence customer satisfaction.'

    },
    {
      name: "Dr. A Bell",
      img: anomuser,
      testimonial:'Medico Tech is a top-notch billing, coding, and credentialing company. They provide tremendous services , and I am so grateful for the outstanding work they have provided thus far for my behavioral health practice.'

    },
    {
      name: "Mrs. D Johnson",
      img: anomuser,
      testimonial:'Outstanding billing & credentialing services! they get provider enrollment accurately and timely, Special thanks to Haider and Richard and all the team in Medico Tech! and I highly recommend them.'

    }

  ]
  return (

    <div className=' md:h-[150vh] md:bg-doc2 md:bg-cover   '>
      <div className='md:h-[150vh] bg-white/20  lg:items-center flex-col md:flex-row md:pt-56 pt-24 md:px-32  flex '>
        <img src={doc2} className=' md:hidden' />
        <div className='flex flex-col   md:px-8 lg:py-10 pt-5 rounded-lg bg-white '>
          <h1 className=' text-[#08485E] text-center font-bold pb-3 text-sm md:text-md '>TESTIMONIALS</h1>
          <h1 className='text-center text-2xl md:text-6xl font-bold '>What they say</h1>

          <div className='md:hidden overflow-x-hidden'>
            <Slider {...settings}>
              {
                data.map((item,key) => (

                  <div key={key} className=' shadow-lg card md:px-6 rounded-lg md:py-8   py-6 px-6'>
                    <div className='card-top'>
                      <img src={img} alt='?' className='h-12' />
                    </div>
                    <div className='card-bottom'>
                      <p className=' text-left md:pt-10'>{item.testimonial}</p>
                      <div className='flex pt-8'>
                        <img src={item.img} alt='?' className='rounded-full w-24 h-24  ' />
                        <div className='flex-col px-4 pt-6'>
                          <h1 className='text-xl font-bold '> {item.name}</h1>
                          
                        </div>
                        <div className='pl-10 pt-10'>
                          <FaQuoteRight size={44} color='lightblue' />
                        </div>
                      </div>
                    </div>
                  </div>





                ))
              }  </Slider>
          </div>

          <div className=' hidden md:flex pt-2 gap-4   '>


            {
              data.map((item) => (

                <div className=' shadow-lg card md:px-6 rounded-lg py-8  max-w-sm '>
                  <div className='card-top'>
                    <img src={img} alt='?' className='h-12' />
                  </div>
                  <div className='card-bottom'>
                    <p className=' text-left pt-10'> {item.testimonial}</p>
                    <div className='flex pt-8'>
                      <img src={item.img} alt='?' className='rounded-full w-24 h-24  ' />
                      <div className='flex-col px-4 pt-6'>
                        <h1 className='text-xl font-bold'> {item.name}</h1>
                      
                      </div>
                      <div className='pl-10 pt-10'>
                        <FaQuoteRight size={44} color='lightblue' />
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