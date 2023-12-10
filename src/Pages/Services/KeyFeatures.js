import React from 'react'

const KeyFeatures = (props) => {
  return (
    <div className='lg:py-10 md:py-8 py-2 bg-mem4'>
    <h1 className='text-center lg:text-4xl md:text-2xl pt-2 pb-8 text-lg font-bold text-[#08485E]/90'> Key Features </h1>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 md:px-8   grid-rows-3 lg:grid-rows-1'>
    <div className='bg-white shadow-lg rounded-lg lg:py-6 py-4 flex flex-col text-cGreen/90 hover:scale-105 hover:shadow-xl cursor-pointer'>
                  <h1 className='lg:text-3xl text-xl font-bold text-center  '>{props.F1}</h1>
                  <p className='leading-8 text-black px-4 lg:pt-4 py-2 text-center '>
                  {props.D1}
                  </p>
            </div>
            <div className='bg-white shadow-lg rounded-lg lg:py-6 py-4 flex flex-col text-cGreen/90 hover:scale-105 hover:shadow-xl cursor-pointer'>
                  <h1 className='lg:text-3xl text-xl font-bold text-center  '>{props.F2}</h1>
                  <p className='leading-8 text-black px-4 lg:pt-4 py-2 text-center '>
                  {props.D2}
                  </p>
            </div>
            <div className='bg-white shadow-lg rounded-lg lg:py-6 py-4 flex flex-col text-cGreen/90 hover:scale-105 hover:shadow-xl cursor-pointer'>
                  <h1 className='lg:text-3xl text-xl font-bold text-center  '>{props.F3}</h1>
                  <p className='leading-8 text-black px-4 lg:pt-4 py-2 text-center '>
                  {props.D3}
                  </p>
            </div>
    </div>
           
    </div>
  )
}

export default KeyFeatures