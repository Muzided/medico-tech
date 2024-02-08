import React from 'react'
import { TbMedicineSyrup } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { RiHomeHeartLine } from "react-icons/ri";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
const Services = () => {
  return (
    <div>
      <div className=' bg-primary py-12'>
        <div className='  bg-no-repeat flex flex-col items-center gap-6'>
          <h1 className=' font-bold tracking-wider text-white' >SERVICES</h1>
          <h1 className=' text-2xl md:text-6xl text-white text-center font-bold pb-4'> Special Services  </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4'>

            <div className='   text-primary hover:bg-secondary  hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <TbMedicineSyrup size={72} />

              <h1 className='text-2xl font-bold  '>Medical Services</h1>
              <p className='  text-center font-medium'> Stay in your best health with our Medical Services</p>


            </div>



            <div className='text-primary  bg-white hover:bg-secondary hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <RiMentalHealthLine size={72} />

              <h1 className='text-2xl text-center  '>Mental Health Services</h1>
              <p className=' text-center font-medium'> Elevate your well-being with our expert mental health services.</p>
            </div>
            <div className='text-primary bg-white hover:bg-secondary hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <FaHandshake size={72} />

              <h1 className='text-2xl text-center  '>Behavioral Health Services</h1>
              <p className=' text-center font-medium'> Transforming lives through tailored behavioral health services</p>
            </div>
            <div className='text-primary bg-white hover:bg-secondary hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <TbDental size={72} />

              <h1 className='text-2xl text-center  '>Dental & Dentistry Services</h1>
              <p className=' text-center font-medium'>Optimal oral wellness through comprehensive Dental & Dentistry services.</p>
            </div>

        
            <div className='text-primary bg-white hover:bg-secondary hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <MdAttachMoney size={72} />

              <h1 className='text-2xl text-center '>Workers Compensation & Non-Fault claims</h1>
              <p className=' text-center font-medium'> Efficient solutions ensuring a smooth path to recovery.</p>
            </div>
            <div className='text-primary hover:bg-secondary hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <FaRegEye size={72} />

              <h1 className='text-2xl font-bold text-center '>Vision Care Services</h1>
              <p className=' text-center font-medium'> Expert Vision Care for clear, compassionate sight.</p>
            </div>



            <div className='text-primary hover:bg-secondary hover:text-white bg-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <FaComputer size={72} />

              <h1 className='text-2xl  text-center '>DME Services </h1>
              <p className=' text-center font-medium'> Elevate life with our DME Services.</p>
            </div>
            <div className='text-primary hover:bg-secondary hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <RiHomeHeartLine size={72} />

              <h1 className='text-2xl font-bold text-center '>Home Health Care Services</h1>
              <p className=' text-center font-medium'> Bringing comfort home with our Home Health Care Services</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Services