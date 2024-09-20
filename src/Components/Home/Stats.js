import React from 'react'
import cashflow from "../../Assets/stats/cashflow.png"
import clientSays from "../../Assets/stats/Client-satisfy.png"
import daysIn from "../../Assets/stats/days-in-ar.png"
import increase from "../../Assets/stats/inrease-pay.png"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5,
    });
    return (
        <div className=' px-8 xl:px-28 py-12' ref={ref}>
            <div className='bg-primary grid gap-2 grid-cols-2 md:grid-cols-4  justify-center items-center px-12 py-2 rounded-2xl shadow-2xl'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                <div><img src={cashflow} className='w-16 lg:w-20' /></div>
                <div className='flex flex-col items-center text-white'>
                    <span className='text-sm md:text-xl lg:text-2xl font-bold'>{inView ? <CountUp start={0} end={25} duration={3} /> : null}%</span>
                    <span className='font-mono font-light text-center text-xs md:text-base'>Increase Cashflow</span>
                </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                <div><img src={increase} className='w-16 lg:w-20' /></div>
                <div className='flex flex-col items-center text-white'>
                    <span className='text-sm md:text-xl lg:text-2xl font-bold'> {inView ? <CountUp start={0} end={97} duration={3} /> : null}%</span>
                    <span className='font-mono font-light text-center text-xs md:text-base'>Net Collection Rate</span>
                </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                <div><img src={daysIn} className='w-16 lg:w-20' /></div>
                <div className='flex flex-col items-center text-white'>
                    <span className='text-sm md:text-xl lg:text-2xl font-bold'> {inView ? <CountUp start={0} end={32} duration={3} /> : null}%</span>
                    <span className='font-mono font-light text-center text-xs md:text-base'>Reduction in A/R</span>
                </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                <div><img src={clientSays} className='w-16 lg:w-20' /></div>
                <div className='flex flex-col items-center text-white'>
                    <span className='text-sm md:text-xl lg:text-2xl font-bold'>{inView ? <CountUp start={0} end={99} duration={3} /> : null}%</span>
                    <span className='font-mono font-light text-center text-xs md:text-base'>Client Success Rate</span>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Stats
