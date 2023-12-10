import React from 'react'
import { TbMedicineSyrup } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { RiHomeHeartLine } from "react-icons/ri";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { GrEmergency } from "react-icons/gr";
import { FaBiohazard } from "react-icons/fa";
import { IoIosFlask } from "react-icons/io";
import { GiBackPain } from "react-icons/gi";
import { GiAmbulance } from "react-icons/gi";
import Connect from '../Components/Contact/Connect';
import Talk from '../Components/Talk';
export const Specialities = () => {
  return (
    <div>
      <div className=' bg-[#1AA04F]  py-12'>
        <div className='bg-mem3  bg-no-repeat flex flex-col items-center gap-6'>
          <h1 className=' font-bold tracking-wider text-white' >SPECIALITIES</h1>
          <h1 className=' text-2xl md:text-6xl text-white text-center font-bold pb-4'> Special Services  </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4'>

            <div className='   text-[#0C5A23]  hover:text-white hover:bg-[#44CA7C] bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <TbMedicineSyrup size={72} />

              <h1 className='text-2xl font-bold  '>Medical Services</h1>
              <p className='  text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>


            </div>



            <div className='text-[#0C5A23]  bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <RiMentalHealthLine size={72} />

              <h1 className='text-2xl text-center  '>Mental Health Services</h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>
            <div className='text-[#0C5A23] bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <FaHandshake size={72} />

              <h1 className='text-2xl text-center  '>Behavioral Health Services</h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>
            <div className='text-[#0C5A23] bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <TbDental size={72} />

              <h1 className='text-2xl text-center  '>Dental & Dentistry Services</h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>

        
            <div className='text-[#0C5A23] bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <MdAttachMoney size={72} />

              <h1 className='text-2xl text-center '>Workers Compensation & Non-Fault claims</h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>
            <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <FaRegEye size={72} />

              <h1 className='text-2xl font-bold text-center '>Vision Care Services</h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>



            <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <FaComputer size={72} />

              <h1 className='text-2xl  text-center '>DEM Services </h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>
            <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

              <RiHomeHeartLine size={72} />

              <h1 className='text-2xl font-bold text-center '>Home Health Care Services</h1>
              <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
            </div>
            <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

            <FaAmbulance size={72} />

<h1 className='text-2xl font-bold text-center '>Ambulatory Services</h1>
<p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
</div>
 <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

 <GrEmergency size={72} />

<h1 className='text-2xl font-bold text-center '>Emergency Room Billing Services</h1>
<p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
</div>
 <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

 <FaBiohazard size={72} />

<h1 className='text-2xl font-bold text-center '>Radiology Services</h1>
<p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
</div>
 <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

 <IoIosFlask size={72} />

<h1 className='text-2xl font-bold text-center '>Laboratory Billing Services</h1>
<p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
</div>
 <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

 <GiBackPain size={72} />

<h1 className='text-2xl font-bold text-center '>Pain Management Services</h1>
<p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
</div>
 <div className='text-[#0C5A23] hover:bg-[#44CA7C] hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>

 <GiAmbulance size={72} />

<h1 className='text-2xl font-bold text-center '>Urgent Care Health Services</h1>
<p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
</div>

          </div>

        </div>
      </div>
      <Talk/>
      <Connect/>
    </div>
  )
}
export default Specialities
