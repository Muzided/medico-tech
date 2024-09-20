import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const GraphicDesign = () => {
  return (
    <div>
  <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold lg:pb-10 pb-6 text-cGreen' > Graphic Designing</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedicoTech's Graphic Designing service crafts visually stunning and impactful designs, transforming ideas into compelling visuals that resonate with your audience.
    </p>
<KeyFeatures F1='Creative Expertise' F2='Tailored Visual Communication' F3='Versatility and Innovation' D1="
MedicoTech's Graphic Designing service brings creative mastery to every project, ensuring visually striking and original designs."
D2="
We customize designs to match your unique brand identity, conveying messages effectively and creating a lasting visual impact."
D3="Our designs encompass a wide range of styles and formats, staying at the forefront of industry trends to provide innovative solutions for diverse graphic needs." />

</div>
{/* 
<Talk/> */}
<Connect/>
    </div>
  
  )
}

export default GraphicDesign