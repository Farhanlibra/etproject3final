import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const ReviewCard = () => (
  <Card
    hoverable
    style={{
      width: 340,
    }}
    cover={<img className=' h-[200px] w-[200px] ' alt="example" src="r1.jpg" />}
  >
   <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
   <p>— Garry Alexander</p>
  </Card>
);
export default ReviewCard;