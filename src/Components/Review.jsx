import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <div className='bg-slate-400 mt-10'>
         <h1 className='text-center font-[500px] text-[34px] pt-10 sm:pb-1 lg:pb-4'>That’s why 100,000+ Love Frame</h1>
        <hr className='ml-[400px] text-blue-950 w-1 sm:pl-2 lg:pl-[600px] sm:mb-3 lg:mb-6'></hr>
        <p className='text-center sm:w-[300px] lg:w-[600px] sm:ml-3 lg:ml-[400px] mb-6'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <div className='grid p-10 sm:grid-cols-1 lg:grid-cols-3 gap-10'>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
        </div>
    </div>
  )
}

export default Review