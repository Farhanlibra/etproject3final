import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         <div> 
        <div className="bg-[url('/public/hero.jpg')]  lg:h-[600px]  h-[400px] w-full bg-cover ">
        <div className=' text-white text-xl  py-8'>
          <Link className='text-[24px] sm: mr-2 sm:ml-1 sm:text-[8px] lg:mr-[680px] lg:ml-9 font-bold' to='/home'>FARAME</Link>
          <Link className='text-[18px] sm:mr-1 lg:mr-5' to='/'>HOME</Link>
          <Link className='text-[18px] sm:mr-1 lg:mr-5' to='/feature'>FEATURE</Link>
          <Link className='text-[18px] sm:mr-1 lg:mr-5' to='/contact'>CONTACT</Link>
          <Link className='text-[18px] sm:mr-1 lg:mr-5' to='/price'>PRICE</Link>
          <Link className='text-[18px] sm:mr-1 lg:mr-5' to='/review'>REVIEW</Link>
        </div>
        <div className='container'>
        <p className='text-white sm:ml-4 lg:ml-[300px]  lg:w-[600px] text-center mx-auto lg:text-[50px] md:text-[40px] sm:text-[20px] pt-[10px] mt-3 '>uicookies.com Creates High Quality Bootstrap Template For Free</p>
        <a href='https://uicookies.com/'><button className='text-white bg-sky-800  lg:ml-[390px]     lg:w-[150px] h-[50px] text-center text-[18px]  mr-2 mt-[50px]'>Get Them Now</button></a>
        
        <Link to='/feature'><button className='text-white  bg-none  lg:w-[150px] h-[50px] text-center text-[18px]  border-red-200 border-x-[1px] border-y-[1px]' >See Features</button></Link>
        
      
        </div>
         </div>
         
         </div>
    </div>
  )
}

export default Header