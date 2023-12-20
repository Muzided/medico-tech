import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'

const HealthCare = () => {
  return (
    <div>
  <div className=' bg-mem5 flex py-4 lg:pt-8  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold lg:pb-10 pb-6 text-cGreen ' > Health Care</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
    MedicoTech Health Care Service pioneers a patient-centric healthcare experience, blending advanced technology with compassionate care. Our integrated approach and cutting-edge solutions prioritize your well-being, ensuring personalized and efficient healthcare for a healthier life.</p>
<KeyFeatures F1='Patient-Centric Care' F2='Integrated Healthcare' F3='Health Information Tech' D1='
MedicoTech prioritizes your unique needs, fostering shared decision-making and comprehensive, individualized healthcare'
D2='Seamless coordination across medical services ensures efficient and holistic care for our patients'
D3='MedicoTech leverages advanced technology, from electronic records to telemedicine, enhancing precision, efficiency, and insightful decision-making in healthcare' />


</div>
<Talk/>
<Connect/>
    </div>
  
  )
}

export default HealthCare