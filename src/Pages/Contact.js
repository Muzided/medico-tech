import React from 'react'
import Herosection from '../Components/Contact/Herosection'
import Connect from '../Components/Contact/Connect'
import Footer from '../Components/Footer'
import Map from '../Components/Contact/GoogleMap'
import ConsentForm from '../Components/Home/ConsentForm'

const Contact = () => {
  return (
    <div className='mx-0'>
    <Herosection/>
    
    {/* <Connect/> */}
    <ConsentForm/>
    <Map/>
   
    </div>
  )
}

export default Contact