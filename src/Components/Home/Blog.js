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
    <div className=' bg-mem4 min-h-screen bg-no-repeat'>
        <div className='bg-white/40 min-h-screen px-2 md:px-44'> 
        <div>
        
         <div className='flex items-center  md:'>
         <h1 className=' pb-4 md:w-2/3  w-3/5  text-lg tracking-widest font-bold text-[#08485E] '> EDITOR'S CHOICE </h1>
        <p className='  -mt-7  w-5/6 hidden  md:block  text-[#44CA7C]'>____________________________________________________________________________________________________________________________________________________-</p>
        <p className='  -mt-7      md:hidden w-2/3  text-[#44CA7C]'>________________________________</p>
        
         </div>

              
              <h1 className=' text-3xl md:text-6xl font-bold pb-6'> Featured Article</h1>
              <div className='flex'>
                     
                     
                     <div className='flex md:flex-row flex-col gap-8 md:gap-6'>
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