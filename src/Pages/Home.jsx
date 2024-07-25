import React from 'react'
import Header from '../Components/Header'
import Intro from '../Components/Intro'
import Feature from '../Components/Feature'
import Price from '../Components/Price'
import Review from '../Components/Review'
import Try from '../Components/Try'
import Join from '../Components/Join'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'


const Home = () => {
  return (
    <div>
       
       <Intro/>
       <Feature/>
       <Price/>
       <Review/>
       <Try/>
       <Join/>
       <Contact/>
       
    </div>
  )
}

export default Home