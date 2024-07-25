import React from 'react'

const Contact = () => {
  return (
    <div className='grid bg-gray-600 sm:grid-cols-1 lg:grid-cols-2'>
        <div>
            <form className='shadow-2xl border-solid px-6 sm:ml-2 lg:ml-36 my-12 bg-white  sm: w-[370px] lg:w-[450px]'>
                <h1 className='font-bold text-2xl py-6'>Get In Touch</h1>
                <input className='border-solid my-2 sm:w-[370px] lg:w-[400px]' type='text' placeholder='Name'></input><br></br>
                <input className='border-solid my-2 sm:w-[370px] lg:w-[400px]'type='text' placeholder='Email'></input><br></br>
                <input className='border-solid my-2 sm:w-[370px] lg:w-[400px]'type='text' placeholder='Phone'></input><br></br>
                <input className='border-solid my-2 sm:w-[370px] lg:w-[400px] h-60'type='text' placeholder='Enter Message Here' ></input><br></br>
                <button className='bg-slate-700 text-white w-[170px] h-[35px] mb-8'>Send Message</button>
            </form>

        </div>
        <div className='my-12 ml-4'>
            <h1 className='font-[400px] text-2xl'>EMAIL</h1>
            <p className='pb-6 text-lg'>probootstrap@gmail.com</p>
            <h1 className='font-[400px] text-2xl'>PHONE</h1>
            <p className='pb-6 text-lg'>+30 976 1382 9921</p>
            <h1 className='font-[400px] text-2xl'>FAX</h1>
            <p className='pb-6 text-lg'>+30 976 1382 9922</p>
            <h1 className='font-[400px] text-2xl'>ADDRESS</h1>
            <p className='text-xl leading-9'>San Francisco, CA<br></br>
4th Floor8 Lower<br></br>
San Francisco street, M1 50F</p>
        </div>

    </div>
  )
}

export default Contact