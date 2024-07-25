import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='mx-auto pl-10'>
         <h1 className='text-center font-[500px] text-[34px] pt-10 lg:pb-4 sm:pb-1'>Choose the plan that’s right for your business</h1>
        <hr className='ml-[400px] text-blue-950 w-1 sm:pl-2 lg:pl-[600px] mb-6'></hr>
        <p className='text-center sm:w-[300px] lg:w-[600px] sm:ml-3 lg:ml-[400px] mb-6'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div>
              <PriceCard/>
            </div>
            <div>
              <PriceCard/>
            </div>
            <div>
              <PriceCard/>
            </div>
        </div>
        
    </div>
    
  )
}

export default Price