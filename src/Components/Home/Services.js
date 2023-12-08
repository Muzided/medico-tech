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
            <div className=' bg-[#1AA04F]  pt-8 pb-12'>
                <div className='bg-mem3  bg-no-repeat flex flex-col items-center gap-6'>
                          <h1 className=' font-bold tracking-wider text-white' >SERVICES</h1>
                     <h1 className=' text-2xl md:text-6xl text-white text-center font-bold pb-4'> Special Services  </h1>

                     <div className='flex md:flex-row flex-col gap-6 w-4/5 justify-center'>
                  
           <div className='   text-[#0C5A23]  hover:text-white bg-white flex flex-col gap-4   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
           
           <TbMedicineSyrup   size={72} />
         
           <h1 className='text-2xl font-bold  '>Medical Services</h1>
                   <p className='  text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
         
         
                  </div>
              
                         
          
           <div className='text-[#0C5A23]  bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
           
           <RiMentalHealthLine size={72} />
           
                 <h1 className='text-2xl text-center  '>Mental Health Services</h1>
                   <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
           </div>
           <div className='text-[#0C5A23] bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
           
           <FaHandshake size={72}/>
           
                 <h1 className='text-2xl text-center  '>Behavioral Health Services</h1>
                   <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
           </div>
           <div className='text-[#0C5A23] bg-white hover:bg-[#44CA7C] hover:text-white flex flex-col gap-4 font-bold  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
           
           <TbDental size={72} />
           
                 <h1 className='text-2xl text-center  '>Dental & Dentistry Services</h1>
                   <p className=' text-center font-medium'> Natoque fames facilisi placerat nunc non felis erat duis imperdiet</p>
           </div>           

                </div>
                <div className='flex md:flex-row flex-col    gap-6 w-4/5 justify-center'>
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
                                  
                         </div>
                
            </div>
      </div>
    </div>
  )
}

export default Services