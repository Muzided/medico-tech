import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const SEO = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold lg:pb-10 pb-6 text-cGreen' > SEO Services</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedioTech's SEO service maximizes online visibility, employing strategic techniques to optimize your website's ranking on search engines, driving increased organic traffic and enhancing digital presence.
    </p>
<KeyFeatures F1='Strategic Keyword Optimization' F2='Content Optimization for Relevance' F3='Continuous Performance Monitoring' D1="
MedioTech's SEO service employs targeted keyword strategies to enhance your website's visibility, ensuring it ranks prominently on search engine results."
D2="
We optimize website content for relevance, aligning with search engine algorithms and providing users with valuable and authoritative information."
D3="MedioTech's SEO service includes ongoing monitoring and adjustments, ensuring sustained improvement in search engine rankings and visibility over time." />

  <Talk/>
<Connect/>
</div>
  )
}

export default SEO