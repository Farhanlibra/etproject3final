import React from 'react'
import { CheckOutlined } from '@ant-design/icons';


const Try = () => {
  return (
    <div>
         <h1 className='text-center font-[500px] text-[34px] pt-10 pb-4'>Try It Today</h1>
        <hr className='ml-[400px] text-blue-950 w-1 sm:pl-2 lg:pl-[600px] mb-6'></hr>
        <p className='text-center sm:w-[300px] lg:w-[600px] sm:ml-2 lg:ml-[400px] mb-6'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <button className='text-white bg-sky-800 w-[150px] h-[50px] text-center text-[18px] sm:ml-72 lg:ml-[590px] mr-2 mt-[50px] mb-8'>Get Them Now</button>
        <img className='sm:ml-3 lg:ml-32' src='try1.jpg'/>
        <div className='grid p-10 sm:grid-cols-1 lg:grid-cols-2'>
          <div>
            <h1 className='font-bold py-8'><CheckOutlined className='font-bold mr-3' />What is Instant?
            </h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
          <div>
            <h1 className='font-bold py-8'><CheckOutlined className='font-bold mr-3'/>Is this available to my country?

            </h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
          <div>
            <h1 className='font-bold py-8'><CheckOutlined className='font-bold mr-3' />How do I use the new features of Frame App?
            </h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div><div>
            <h1 className='font-bold py-8'><CheckOutlined className='font-bold mr-3'/>I have technical problem who do I email?
            </h1>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
          </div>
        </div>
    </div>
  )
}

export default Try