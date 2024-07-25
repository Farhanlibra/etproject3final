import React from 'react';
import { Card } from 'antd';
const  PriceCard = () => (
  <Card className='shadow-2xl'
    
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <h1 className='text-center text-lg'>STARTER</h1>
    <p className='text-center text-5xl text-blue-900 mt-3 mb-10'>$22.99</p>
    <p className='text-center text-gray-200 text-sm'>This is a monthly recurring payment.</p>
    <ul className='mt-8 mb-20 list-disc px-4'>
              <li className='leading-10'>
              Pointing has no control 
              </li>
              <li className='leading-10' >A small river named Duden flows</li>
              <li className='leading-10'> Roasted parts of sentences fly into your mouth</li>
            </ul>
  </Card>
);
export default PriceCard;