import React from 'react'
import logo1 from '../../Assets/Home/logo-20.png'
import logo2 from '../../Assets/Home/logo-18.png'
import logo3 from '../../Assets/Home/logo-23.png'

const Achievements = () => {
  return (
    <div className='min-h-screen bg-img1 bg-cover'>

         <div className='bg-white/70 min-h-screen'>

         <div className='flex flex-col lg:flex-row lg:justify-center lg:w-5/6 lg:pl-64 items-center md:min-h-screen gap-6'>
            <div className='flex flex-col items-center lg:items-start gap-5 md:w-2/5 pr-4 '>

                <h1 className=' text-[#08485E] pt-4 text-sm lg:text-md md:pt-0 font-bold'>ACHIEVEMENTS</h1>
                <h1 className=' text-3xl lg:text-5xl font-bold pb-2 md:py-4 border-b-2 md:border-[#08485E]'> We've won awards</h1>
                <p className='px-6 md:px-0 text-center md:text-left py-4 md:py-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className=' md:pl-4'>
                <div className= '  flex-col items-center flex shadow-xl py-4 pb-6 bg-white  '>
                    <img src={logo1} alt='eh'/>
                    <h1 className='text-2xl font-bold pt-6 rouned-lg'> Hyper Best 2019</h1>
                    <p className=' px-10 leading-8 text-center pt-4'>Senectus  efficitur at ultrices arcu curabitur</p>
                </div>
                <div className= '   flex-col items-center flex shadow-xl py-6 bg-white  pt-14  '>
                    <img src={logo2} alt='eh'/>
                    <h1 className='text-2xl font-bold pt-6 rouned-lg'> Hyper Best 2019</h1>
                    <p className=' px-10 leading-8 text-center pt-4'>Senectus  efficitur at ultrices arcu curabitur</p>
                </div>
            </div>
            <div className=' lg:pt-20'>
            <div className= '  flex-col items-center flex shadow-xl py-4 pb-6  bg-white '>
                    <img src={logo3} alt='eh'/>
                    <h1 className='text-2xl font-bold pt-6 rouned-lg'> Hyper Best 2019</h1>
                    <p className=' px-10 leading-8 text-center pt-4'>Senectus  efficitur at ultrices arcu curabitur</p>
                </div>
                <div className= '  flex-col items-center flex shadow-xl bg-white  py-6 pt-14  '>
                    <img src={logo1} alt='eh'/>
                    <h1 className='text-2xl font-bold pt-6 rouned-lg'> Hyper Best 2019</h1>
                    <p className=' px-10 leading-8 text-center pt-4'>Senectus  efficitur at ultrices arcu curabitur</p>
                </div>
            </div>
         </div>

         </div>
        
    </div>
  )
}

export default Achievements