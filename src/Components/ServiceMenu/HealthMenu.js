import React from 'react'
import { NavLink } from 'react-router-dom'

const HealthMenu = () => {
  return (
    <div className='flex px-2 flex-col pt-6 gap-2'>
         <NavLink to={'/MedicalBilling'}><h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><div >Medical Billing</div> </h1> </NavLink>
         <NavLink to={'/MedicalCoding'}><h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><div > Medical Coding </div> </h1> </NavLink>
         <NavLink to={'/Credential'}><h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><div >Credentialing/Enrollment</div> </h1> </NavLink>
         <NavLink to={'/CashFlow'}><h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><div >Cash Flow Practices</div> </h1> </NavLink>
         <NavLink to={'/PatientSt'}><h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><div >Patient Statements</div> </h1> </NavLink>
         <NavLink to={'/PatientAR'}><h1 className='text-cGreen cursor-pointer hover:text-[#21C063] font-bold text-sm'><div >Patient AR-Collection </div>  </h1> </NavLink>
         
    </div>
  )
}

export default HealthMenu