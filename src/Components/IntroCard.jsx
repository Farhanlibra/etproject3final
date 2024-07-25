import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import { MobileTwoTone } from '@ant-design/icons';
const IntroCard = () => (
  <Card className=' sm:w-[300px] lg:w-[350px] lg:h-[400px] mb-4'
    hoverable
   
   
  >
    <MobileTwoTone className='sm:px-auto lg:px-24'  style={{fontSize:'60px', textAlign:'right'}} />
    <h1 className='text-blue-400 font-bold py-5 text-[20px]'>Mobile Optimize</h1>
    <p className='text-[18px] mb-2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    <a className='text-red-900 text-[20px]' href='/'>Learn More</a>
  </Card>
);
export default IntroCard;