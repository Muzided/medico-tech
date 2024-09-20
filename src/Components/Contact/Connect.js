import { React, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import img from '../../Assets/Home/Bus2.jpg'
import toast, { Toaster } from 'react-hot-toast';
import {constactUs} from '../../Services/Server/api'
const Connect = () => {
   const [loading, setLoading] = useState(false)
   const [contactData, setContactData] = useState({
      name: "",
      practiceName: "",
      phoneNumber: "",
      email: "",
      message: ""
   })


   const handleChange = (e) => {
      const { id, value } = e.target;
      setContactData((prevData) => ({
         ...prevData,
         [id]: value
      }));
   };
   const handleSubmit = () => {
      
      setLoading(true)
      constactUs(contactData.name,contactData.practiceName,contactData.phoneNumber,contactData.email,contactData.message, setLoading)
   }
   return (
      <div className=' lg:bg-img4 overflow-x-hidden flex justify-center '>
         <div className=''>
            <img src={img} className='  md:hidden' />
            <div className=' py-10 justify-center lg:pb-6 flex'>
               <div className=' w-4/5'>
                  <div className=' pl flex px-10 flex-col lg:flex-row bg-white rounded-lg   shadow-lg overflow-hidden'>

                     <div className=' lg:pl-12 lg:pr-0 md:py-12 lg:w-3/5 '>
                        <h2 className=' text-lg tracking-wider font-bold text-[#08485E] mb-4'> FORM CONTACT </h2>
                        <p className='pb-4 text-5xl font-bold    tracking-wide text-black/80'> Let's Talk To Us </p>
                        <hr className=' py-2  lg:w-9/12 sm:w-9/12 md:w-7/12  border-t-2 border-secondary   ' />

                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                           <div className='flex md:flex-row flex-col gap-5  '>
                              <div className='md:w-1/2 '>
                                 <label for="large-input" class="block mb-2 font-bold  text-md text-black dark:text-white">Full Name</label>
                                 <input type="text" onChange={handleChange} value={contactData.name} id='name' required placeholder='Full Name' className='bg-[#CAF0F8] border w-full tracking-wide rounded-md  py-2 px-2' ></input>

                              </div>
                              <div className='md:w-1/2 '>
                                 <label for="large-input" class="block mb-2 font-bold  text-md text-black dark:text-white">Practice Name</label>
                                 <input type="text" onChange={handleChange} value={contactData.practiceName} required id='practiceName' placeholder='Practice Name' className='bg-[#CAF0F8] border w-full  tracking-wide rounded-md  py-2 px-2' ></input>

                              </div>
                           </div>
                           <div className='mt-5'>
                              <div className='flex md:flex-row flex-col gap-5 '>
                                 <div className='md:w-1/2'>
                                    <label for="large-input" class="block mb-2 font-bold  text-md text-black dark:text-white">Phone Number</label>
                                    <input type="tel" id='phoneNumber' required onChange={handleChange} value={contactData.phoneNumber} placeholder='Phone number' className='bg-[#CAF0F8] border w-full tracking-wide rounded-md first-letter:     py-2 px-2' ></input>
                                 </div>
                                 <div className='md:w-1/2'>
                                    <label for="large-input" class="block mb-2 font-bold  text-md text-black dark:text-white">Email</label>
                                    <input type="email" id='email' onChange={handleChange} required placeholder='Email' className='bg-[#CAF0F8] border w-full tracking-wide rounded-md first-letter:    py-2 px-2' ></input>
                                 </div>


                              </div>
                           </div>
                           <div className='mt-5'>
                              <div class="mb-6">
                                 <label for="large-input" class="block mb-2 font-bold  text-md text-black dark:text-white">Message</label>
                                 <textarea required cols="40" rows="5" type="text" id="message" onChange={handleChange} placeholder='Message' class="bg-[#CAF0F8] block w-full p-4 text-gray-900 border rounded-md sm:text-md  focus:border-[#8CDCAD]  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                              </div>

                           </div>
                           <div className='mt-5'>
                              <button
                                 id='submit'
                                 type='submit'
                                 className={`${loading ? 'animate-pulse' : 'animate-none'} w-full rounded-lg font-bold tracking-widest bg-primary hover:bg-secondary  text-white border-2 py-4`}> {loading?"Submitting":"Submit"}</button>
                           </div>
                        </form>
                     </div>
                     <div className='flex md:px-12 md:py-12 px-0 pb-8 pt-16 md:w-2/5 flex-col'>
                        <h1 className='text-sm md:text-lg tracking-wider font-bold text-[#08485E] mb-4'> SOCIAL MEDIA</h1>
                        <h1 className='pb-4 text-3xl md:text-5xl font-bold    tracking-wide text-black/80'>
                           Connect With Us
                        </h1>
                        <p className='text-secondary'><span className=' text-secondary text-lg'>_______</span>__________________________________</p>
                        <div className='   pt-6 '>
                           <p>
                              Stay connected and explore more by checking out our socials – where community, updates, and engagement come together in one click.</p>
                        </div>
                        <div className='flex  gap-6 bg-white  text-primary pt-10 py-6'>
                           <FaFacebook size={28} className='cursor-pointer duration-300 hover:-translate-y-2 ' />
                           <FaTwitter size={28} className='cursor-pointer duration-300 hover:-translate-y-2 ' />
                           <FaYoutube size={28} className='cursor-pointer duration-300 hover:-translate-y-2 ' />
                           <FaInstagram size={28} className='cursor-pointer duration-300 hover:-translate-y-2 ' />
                        </div>
                     </div>
                  </div>
               </div>
            </div>


         </div>
         <Toaster
          toastOptions={{
            success: {
              style: {
                background: '#22223b',
                color:'white'
                
              },
            },
            loading: {
               style: {
                 background: '#22223b',
                 color:'white'
                 
               },
             },
            error: {
              style: {
                background: '#22223b',
                color:'white'
              },
            },
          }}
          />
      </div>
   )
}

export default Connect