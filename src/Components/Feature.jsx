import React from 'react'

const Feature = () => {
  return (
    <div className='max-w-screen-2xl  bg-slate-400 h-auto  mt-[30px] ml-0 px-0 '>

        <h1 className='text-center font-[500px] text-[34px] sm:pt-10 lg:pt-32 lg:pb-10 sm:pb-2'>Features</h1>
        
        <p className='text-center sm:w-[300px] lg:w-[600px]  lg:ml-[400px] sm:ml-2 lg:mb-32 sm:mb-16'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-auto'>
        <div className=' sm: w-[360px] lg:w-[600px] order-1 lg:order-1'  >
            <img className=' sm:mt-6 ' src='f1.jpg'/>
        </div>
        <div className=' w-[400px] ml-10 sm:max-w-full order-2 lg:order-2'>
            <h1 className='text-blue-950 font-bold text-[28px] mb-4 sm:ml-6 lg:ml-16'> Big Benefits for Small Business</h1>
            <p className='lg:ml-16 sm:ml-3 sm:mt-4 leading-6'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <ul className='mt-8 ml-20 mb-20 list-disc '>
              <li className='leading-10'>
              Pointing has no control 
              </li>
              <li className='leading-10' >A small river named Duden flows</li>
              <li className='leading-10'> Roasted parts of sentences fly into your mouth</li>
            </ul>
        </div>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-auto'>
        <div className='  sm: w-[360px] lg:w-[600px]  order-3 lg:order-4' >
            <img className='sm:mt-6 ' src='f2.jpg'/>
        </div>
        <div className=' w-[400px] ml-10  sm:max-w-full order-4 lg:order-3'>
        <h1 className='text-blue-950 font-bold text-[28px] mb-4 sm:ml-6 :lg:ml-16'> Big Benefits for Small Business</h1>
            <p className='lg:ml-16 sm:ml-6 leading-6'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <ul className='mt-8 ml-20 mb-20 list-disc '>
              <li className='leading-10'>
              Pointing has no control 
              </li>
              <li className='leading-10' >A small river named Duden flows</li>
              <li className='leading-10'> Roasted parts of sentences fly into your mouth</li>
            </ul>
        </div>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mx-auto'>
        <div className=' sm: w-[360px] lg:w-[600px]  order-5 lg:order-5'>
            <img className=' sm:mt-6  ' src='f3.jpg'/>
        </div>
        <div className=' w-[400px] ml-10  order-6 lg:order-6 '>
        <h1 className='text-blue-950 font-bold text-[28px] mb-4 sm:ml-2 lg:ml-16'> Big Benefits for Small Business</h1>
            <p className='sm:ml-2 lg:ml-16 leading-6'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <ul className='mt-8 sm:ml-2 lg:ml-20 mb-20 list-disc '>
              <li className='leading-10'>
              Pointing has no control 
              </li>
              <li className='leading-10' >A small river named Duden flows</li>
              <li className='leading-10'> Roasted parts of sentences fly into your mouth</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Feature