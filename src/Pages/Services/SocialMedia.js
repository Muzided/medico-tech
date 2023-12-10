import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const SocialMedia = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Social Media Campaigns</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedioTech's Social Media Campaigns service amplifies your brand's presence through strategic and engaging campaigns, fostering audience connection and driving impactful results across diverse social platforms.
     </p>
<KeyFeatures F1='Strategic Campaign Planning' F2='Engaging Content Creation' F3='Performance Analytics and Optimization' D1="
MedioTech's service devises targeted social media campaigns, aligning content with audience demographics and platform dynamics for optimal engagement."
D2="
We craft compelling and shareable content, leveraging creative elements to enhance brand awareness and encourage audience interaction."
D3="MedioTech's Social Media Campaigns include rigorous performance tracking, allowing for real-time adjustments and optimizations to maximize campaign effectiveness." />

  <Talk/>
<Connect/>
</div>
  )
}

export default SocialMedia