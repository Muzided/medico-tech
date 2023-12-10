import React from 'react'
import KeyFeatures from './KeyFeatures'
import Connect from '../../Components/Contact/Connect'
import Talk from '../../Components/Talk'
const CashFlow = () => {
  return (
    <div className=' bg-mem5 flex py-4  flex-col lg:justify-center bg-cover bg-no bg-repeat'>
    
    <h1 className='text-3xl md:text-6xl text-center font-bold pb-6 lg:pb-10 text-cGreen' > Cash Flow Practices (RCM)</h1> 
    <p className='px-4 md:px-6 tracking-wide lg:px-8 text-sm lg:pb-10 pb-4 md:text-lg  text-center'>
   
MedioTech's Cash Flow Practices (RCM) Service optimizes revenue cycles with precision and efficiency. Our comprehensive solution enhances financial performance for healthcare providers, from claims processing to payment collection, ensuring a robust and consistent cash flow.</p>
<KeyFeatures F1='Complete Revenue Cycle Optimization' F2='Precision Analytics for Insights' F3='Tailored Solutions for Providers' D1="

MedioTech streamlines processes from claims to payments, ensuring peak financial efficiency."
D2="
Our RCM Service offers data-driven strategies for improved cash flow and financial health."
D3="Customized to individual needs, our service enhances revenue streams for lasting financial stability." />

  <Talk/>
<Connect/>
</div>
  )
}

export default CashFlow