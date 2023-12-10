import React from 'react'
import s1 from '../../Assets/Home/woman-exercising-on-treadmill-at-home-wearing-wireless-earphones-checking-smart-watch-1536x1024-1.jpeg'
import s2 from '../../Assets/Home/woman-eating-ealthy-food-indoors-1536x1025-1.jpeg'
const Blog = () => {
    const data=[
    {
        img: s1,
        title:" Workout Playlist To Do At Home"

    },
    {
        img: s2,
        title:"  What Are The Benefits of Eating Healthy"

    },



    ]
  return (
    <div className='pt-20 bg-mem4 min-h-screen bg-no-repeat'>
        <div className='bg-white/40 min-h-screen px-2 md:px-44'> 
        <div>
        
         <div className='flex items-center  w-full  '>
         <h1 className=' pb-4 lg:w-2/12 sm:w-3/12 md:w-5/12 text-lg tracking-normal md:tracking-widest font-bold  text-[#08485E] '> EDITOR'S CHOICE </h1>
        
        <hr className=' -mt-3  lg:w-9/12 sm:w-9/12 md:w-7/12  border-t-2 border-[#44CA7C]   '/>
      
        
        
         </div>

              
              <h1 className=' text-3xl md:text-6xl font-bold pb-6'> Featured Article</h1>
              <div className='flex'>
                     
                     
                     <div className='flex lg:flex-row flex-col gap-8 lg:gap-6'>
                            {
                                data.map((item)=>(
                                    <div className='bg-white hover:shadow-2xl shadow-lg rounded-lg '>
                                        <img src={item.img} className='md:h-96 cursor-pointer rounded-lg  ' />
                                        <div className='flex flex-col py-4 px-8'>
                                            <h1 className='text-[#0C5A23]  text-2xl font-bold pb-4'>{item.title}</h1>
                                            <p className='pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc neque, finibus id cursus quis, blandit eget est. Quisque tempus placerat eros sit amet tempor.</p>
                                            <div>
                                                <button className='text-[#0C5A23] font-bold'> READ MORE</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                          
                     </div>


              </div>
        </div>

        </div>
    </div>
  )
}

export default Blog