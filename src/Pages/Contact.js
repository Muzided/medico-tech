import React from 'react'
import Herosection from '../Components/Contact/Herosection'
import Connect from '../Components/Contact/Connect'
import Footer from '../Components/Footer'
import Map from '../Components/Contact/GoogleMap'

const Contact = () => {
  return (
    <div className='mx-0'>
    <Herosection/>
    <Map/>
    <Connect/>
   
    </div>
  )
}

export default Contact