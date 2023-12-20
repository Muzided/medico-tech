import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const Email = () => {
  return (
    <div>
<div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Email/SMS Support Service</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedicoTech's Email/SMS Support Service delivers efficient and responsive communication solutions, ensuring prompt and personalized engagement for healthcare providers and their stakeholders.
</p>
<KeyFeatures F1='Swift and Responsive Communication' F2='Personalized Engagement' F3='Efficient Information Delivery' D1="
MedicoTech's service ensures rapid response times through email and SMS, enhancing communication efficiency for healthcare providers."
D2="
We tailor our support to individual needs, providing personalized email and SMS interactions that meet the unique requirements of healthcare stakeholders."
D3="MedicoTech's Email/SMS Support optimizes information dissemination, ensuring timely and accurate communication for streamlined healthcare operations.
" />

</div>
<Talk/>
<Connect/>
    </div>
    
  )
}

export default Email