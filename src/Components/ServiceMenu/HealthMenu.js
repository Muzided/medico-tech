import React from 'react'
import { NavLink } from 'react-router-dom'

const HealthMenu = () => {
  return (
    <div className='flex flex-col md:bg-white px-4 gap-8 md:p-4 md:top-[50px] md:absolute md:shadow-lg md:rounded-sm '>
         <NavLink to={'/MedicalBilling'}><h1 className='text-primary cursor-pointer hover:text-secondary font-bold text-sm'><div >Medical Billing</div> </h1> </NavLink>
         <NavLink to={'/MedicalCoding'}><h1 className='text-primary cursor-pointer hover:text-secondary font-bold text-sm'><div > Medical Coding </div> </h1> </NavLink>
         <NavLink to={'/Credential'}><h1 className='text-primary cursor-pointer hover:text-secondary font-bold text-sm'><div >Credentialing/Enrollment</div> </h1> </NavLink>
       <NavLink to={'/PatientSt'}><h1 className='text-primary cursor-pointer hover:text-secondary font-bold text-sm'><div >Patient Statements</div> </h1> </NavLink>
         <NavLink to={'/PatientAR'}><h1 className='text-primary cursor-pointer hover:text-secondary font-bold text-sm'><div >Patient AR-Collection </div>  </h1> </NavLink>
         
    </div>
  )
}

export default HealthMenu