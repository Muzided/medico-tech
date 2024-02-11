import React from 'react'
import Lottie from 'lottie-react'
import whyus from './../Assets/animations/whyus.json'
import trusttech from './../Assets/animations/trusttech.json'

const TopBenefits = () => {
  return (
    <div className='flex flex-col pb-10 justify-between'>
      <div className='bg-img5 bg-cover bg-center bg-fit bg-no-repeat '>
        <div className='bg-white/60   py-20 px-6 flex justify-center  '>
          <div className='bg-white/80 shadow-lg py-8 flex flex-col md:flex-row justify-center items-center px-4 lg:px-8  rounded-md gap-4  '>

            <h1 className='text-center lg:text-4xl md:text-3xl text-xl  text-black/70 font-bold md:tracking-wider'> <span className='text-cGreen/90'>MEDICOTECH</span> </h1>
            <div className='flex flex-col gap-2 text-gray-500'>
              <p>
                Welcome to Medicotech – dedicated to empowering healthcare providers. We specialize in optimizing revenue cycles, streamlining administrative processes, and ensuring compliance for individual providers, clinics, hospitals, medical practices, nursing facilities, and DME suppliers. Trust Medicotech to simplify your healthcare administration, allowing you to focus on delivering high-quality patient care.</p>

              <p>With a commitment to excellence, Medicotech is your trusted partner in navigating the intricate landscape of healthcare administration. Let us help you optimize your operations and ensure that your focus remains where it truly matters – on delivering high-quality healthcare to your patients.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-8  '>

        <div className=' grid grid-cols-1 lg:grid-cols-2  gap-4 px-4'>
          <div className='flex items-center justify-center'>
            <div className='flex-col  flex justify-center h- items-center'>
              <h1 className='text-center lg:text-4xl  lg:py-8 leading-3 py-4 md:text-2xl text-xl text-black/80 font-bold tracking-widest '> Here's Why <span className='text-cGreen/80 '> MedicoTech</span> is the Smart Choice  </h1>
              <div className=''>

                <Lottie animationData={trusttech} loop={false} className='md:h-52' />
              </div>


            </div>

          </div>
          <div className='grid-cols-1 lg:grid-cols-2 px-8 grid gap-4'>


            <div className=' flex justify-center  w-full bg-primary/70 backdrop:blur-2xl  text-black/70 text-white  text-center  items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Lowest rate collection rate </h1>

            </div>



            <div className=' flex   w-full bg-primary/70 backdrop:blur-2xl  text-black/70  text-white   text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl  font-bold   '>Coding review </h1>


            </div>

            <div className=' flex justify-center w-full  bg-primary/70 backdrop:blur-2xl   text-black/70 text-white   text-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Benefit verification before charges/claims submission </h1>


            </div>

            <div className=' flex justify-center  w-full  bg-primary/70 backdrop:blur-2xl text-black/70  text-white  text-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Claim submissions are done within 24 hours </h1>
            </div>



            <div className='flex justify-center w-full   bg-primary/70 backdrop:blur-2xl border text-black/70 text-white   text-center   items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Timely AR-follows </h1>

            </div>


            <div className='flex justify-center  w-full   bg-primary/70 backdrop:blur-2xl text-black/70 text-white  text-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Timely account reconciliation process </h1>

            </div>

            <div className=' flex justify-center w-full  bg-primary/70 backdrop:blur-2xl text-black/70  text-white  text-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Sending patient statements </h1>


            </div>

            <div className='flex justify-center w-full    bg-primary/70 backdrop:blur-2xl text-black/70 text-white  text-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className='text-xl font-bold  '>Growth rate 28% annualy </h1>

            </div>
          </div>







        </div>
      </div>
      <div className='py-6 grid grid-cols-1 px-4 md:py-10'>
        <div className='flex items-center justify-center'>
          <h1 className='text-center lg:text-3xl  lg:py-4 py-4 md:text-2xl text-xl text-black/80 font-bold tracking-wider '> OUR SERVICES SPEAK FOR THEMSELVES</h1>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3   grid-rows-2 md:py-8  gap-4 px-4'>
          <div className='flex justify-center'>
            <div className='  w-full   bg-primary/70 backdrop:blur-2xl border  text-black/70 text-white   flex text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl font-bold   '>Certified billing/coding experts </h1>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='  w-full   bg-primary/70 backdrop:blur-2xl border  text-black/70 text-white   flex text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl  font-bold   '>24/7 Online support </h1>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='  w-full   bg-primary/70 backdrop:blur-2xl border  text-black/70 text-white   flex text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl font-bold   '>HIPAA-Compliant  </h1>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='  w-full  bg-primary/70 backdrop:blur-2xl border  text-black/70 text-white   flex text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl font-bold   '>Free-Billing Audit (For first 30 days)  </h1>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className=' w-full   bg-primary/70 backdrop:blur-2xl border  text-black/70 text-white   flex text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl font-bold   '>Free Eligibilities & benefits services  </h1>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='  w-full  bg-primary/70 backdrop:blur-2xl border  text-black/70  text-white   flex text-center justify-center    items-center shadow-lg  rounded-lg md:p-10  py-8  px-8'>
              <h1 className=' text-xl font-bold    '>
                Providing 31% revenue increase in first 365 days </h1>
            </div>

          </div>





        </div>

      </div>
      <div className='py-8 md:px-8 lg:py-14 gap-6 grid grid-cols-1 lg:grid-cols-2'>
        <div className=' flex  justify-center items-center'>
          <div className='flex-col flex justify-center items-center gap-2'>
            <h1 className='text-2xl md:text-4xl text-black/80 text-center font-bold'>Why Should you Choose <span className='text-cGreen/90'>MedicoTech</span> ?</h1>
            <div className=''>

              <Lottie animationData={whyus} loop={false} className='md:h-80' />
            </div>

          </div>
        </div>
        <div className=' grid-cols-1 gap-6 grid '>
          <div className='shadow-lg border p-4 rounded-lg'>
            <h1 className='leading-8 font-medium  text-black/80 text-sm md:text-xl '>Claims that have been underpaid, rejected/denied, our experts takes the 	corrective actions as soon as it's needed. We follow and end-to-end appeal process to ensure we catch up on every single dollar amount. The payment posting department ensures to complete the account reconciliation process in a timely-manner.</h1>
          </div>

          <div className='shadow-lg border rounded-lg p-4 '>
            <h1 className='leading-8 font-medium text-black/80 text-sm md:text-xl '>To maximise the revenue our front-desk team collect all money due on patient's side.

              Our patient AR collectors sends all balance invoices via certified mail and 	follow-up via calls/emails, and text messages to ensure all payments are 	collected full/partially to maximise the profitability.

            </h1>
          </div>
          <div className='shadow-lg border p-4 rounded-lg'>
            <h1 className='leading-8 font-medium text-black/80 text-sm md:text-xl '>All patient inquiries (inbound/outbound) are taken care by our front-	desk, and patient help-desk in-house team.
              We provide a customized reporting system to ensure our client have the clean transparency of their practice financial health.</h1>
          </div>
        </div>

      </div>
    </div>



  )
}

export default TopBenefits