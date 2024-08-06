import React from 'react'
import IntroCard from './IntroCard'

const Intro = () => {
  return (
    <div className='container grid  sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto mt-16 lg:ml-10 sm:ml-0'>
        <div>
            <IntroCard/>
            
            
        </div>
        <div>
        <IntroCard/>
        </div>
        <div>
        <IntroCard/>
        </div>

    </div>
  )
}

export default Intro