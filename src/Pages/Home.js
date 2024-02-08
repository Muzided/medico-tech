import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import { TbMedicineSyrup } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import img from '../Assets/Home/doctor.jpg';
import Services from '../Components/Home/Services';
import Achievements from '../Components/Home/Achievements'
import Testimonials from '../Components/Home/Testimonials'
import Partner from '../Components/Home/Partner';
import Blog from '../Components/Home/Blog';
import Footer from '../Components/Footer';


export const Home = () => {
  return (
    <div>
      {/* HeroSection */}
      <div className='bg-img h-60 bg-center bg-cover  md:hidden '></div>
      <div className=' md:shadow-lg md:bg-img md:bg-cover md:bg-no-repeat  '>
        <div className='md:bg-white/30 md:py-40 md:px-12 flex flex-col lg:flex-row justify-center items-center '>
          <div className='md:flex md:flex-col md:bg-white/60 lg:w-1/2 max-w-xl  md:px-10 md:rounded-lg md:pt-10 md:pb-14'>
            <h1 className=' text-[#08485E] tracking-widest md:tracking-wider md:block md:text-lg justify-center flex py-4 text-xs font-bold' > BETTER HEALTH </h1>

            <h2 className=' text-primary text-4xl text-center md:tracking-normal md:text-left md:text-7xl font-bold tracking-wide' >
            Maximize Your Revenue
            </h2>
            <p className='text-center md:text-left py-8 md:px-0 leading-7 px-4'>
            MedicoTech stands out as a premier choice, offering a various services that streamline operations, enhance revenue collection, and reduce the administrative burden for healthcare providers. </p>
            <div className='md:block flex justify-center  md:w-2/5' >
              <div className='  justify-center flex py-2 rounded-md px-6 bg-primary hover:bg-secondary'>
                <button className=' text-white text-lg font-semibold '>
                  Discover More
                </button>
              </div>
            </div>
          </div>
          <div className='w-1/2 hidden lg:flex '>

          </div>
        </div>
      </div>

      {/* About Us */}
      <div className='flex flex-col pt-6 md:flex-row justify-center gap-4 lg:gap-8'>  
        <div className='flex  flex-col  md:flex-row py-10 md:gap-12 gap-6 px-4'>
          <div className='text-primary flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg  md:p-12 md:pb-6 py-8 px-8'>
            <AiOutlineSafety size={72} />
            <h1 className='text-2xl  '>Extra Care</h1>
            <p className='text-gray-500'> Your Health is Our Priority</p>
          </div>
          <div className='text-primary flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-12 md:pb-6 py-8  px-8'>

            <TbMedicineSyrup size={72} />

            <h1 className='text-2xl  '>Online Medicine</h1>
            <p className='text-gray-500'> We Provide Easy Service</p>
          </div>


        </div>
        <div className='px-4 py-4  shadow-xl rounded-lg'>
          <div className='bg-primary lg:px-10 pt-8 rounded-lg'>
            <div className='text-white flex flex-col gap-4 font-bold pb-10 items-center   rounded-lg p-8'>

              <TfiHeadphoneAlt size={72} />

              <h1 className='text-xl md:text-3xl lg:text-4xl pt-6 '>69969696969</h1>
              <p className=''>24 Hours Emergency Call</p>
            </div>
          </div>

        </div>

      </div>
      <div className='pb-20' >
        <div className='md:pl-32'>
          <div className='md::pl-96 -mb-32 pt-2'>
            <div className='md:pl-96 pt-2'>
              <div className='md:bg-mem1 h-60 bg-no-repeat  md:bg-fit  ' >
                <div className='bg-white/80 h-72 '>

                </div>
              </div>

            </div>

          </div>
        </div>


        <div className='  px-6 py-6 md:flex md:justify-center md:gap-6'>

          <div className=' md:h-[81vh] md:bg-mem2  bg-cover  px-8 pb-2 md:pb-6  pt-8 '>
            <img className=' lg:h-[75vh] rounded-lg' src={img} alt='eh' />
          </div>
          <div className='flex flex-col md:text-md md:items-start md:pt-4 gap-5 items-center md:w-2/5'>
            <h1 className='pt-4 text-[#08485E] font-bold md:text-lg tracking-wider'>
              ABOUT US
            </h1>
            <h1 className='text-3xl md:text-5xl text-primary md:text-left text-center font-bold tracking-wider'>
            Boost Your Revenue With Our Expert<span className='bg-white text-secondary md:bg-transparent' >  Medical Billing Company</span>
            </h1>
            <p className='bg-white hidden md:flex '>
            Welcome to our Medio Tech, your trusted partner in medical billing/coding and credentialing services. With a commitment to excellence and a passion for healthcare, we are dedicated to simplifying the administrative complexities that medical professionals face in their practices. </p>
            <p className='hidden md:flex'>
           Our main focus is on Individual providers, clinics, hospitals, medical practices, nursing facilities and DME suppliers. Our goal is to optimize your revenue cycle, streamline your administrative processes, and ensure your practice remains compliant with ever-evolving regulations.</p>
            <div className='hidden md:block pt-10 pl-8'>
              <div className='   py-4 rounded-md px-8 bg-primary '>
                <button className=' text-white text-lg font-semibold '>
                  Discover More
                </button>
              </div>
            </div>

          </div>

        </div>
        <p className='bg-white md:hidden px-8 leading-8 pt-4 '>
        Welcome to our Medio Tech, your trusted partner in medical billing/coding and credentialing services. With a commitment to excellence and a passion for healthcare, we are dedicated to simplifying the administrative complexities that medical professionals face in their practices.
        </p><p className='bg-white md:hidden px-8 leading-8 pt-4 '>
       Our main focus is on Individual providers, clinics, hospitals, medical practices, nursing facilities and DME suppliers. Our goal is to optimize your revenue cycle, streamline your administrative processes, and ensure your practice remains compliant with ever-evolving regulations.</p>
        <div className='md:hidden bg-white justify-center flex py-6 pt-10'>
          <div className='  justify-center flex py-4 rounded-md w-2/3 bg-primary '>
            <button className=' text-white text-lg font-semibold '>
              Discover More
            </button>
          </div>
        </div>


      </div>
      <div className=''>
        <Services />

      </div>
      {/* <div className='md:pb-8'>
        <Achievements />
      </div> */}
      <div>
        <Testimonials/>
      </div>
      {/* <div>
        <Partner/>
      </div> */}
      {/* <div className='pb-14 md:pb-0'>
        <Blog />
      </div> */}



    </div>

  )
}
export default Home