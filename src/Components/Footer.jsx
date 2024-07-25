import React from 'react'
import { TwitterOutlined, WhatsAppOutlined,YoutubeOutlined,LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='grid h-[300px]  text-white bg-blue-950 grid-flow-row'>
        <div className='mt-24 sm:ml-5 lg:ml-[500px] text-3xl'>
        <TwitterOutlined className='mr-7' /><WhatsAppOutlined className='mr-7' /><YoutubeOutlined className='mr-7' /><LinkedinOutlined />
        </div>
        <div><p className='sm:pl-3 sm:w-[200px] lg:w-[400px] sm:text-left lg:text-center  sm:ml-5 lg:ml-96'>© 2019 Frame. All Rights Reserved.
Designed & Bootstrap templates by uiCookies
Demo Images by Unsplash</p></div>
            
    </div>
  )
}

export default Footer