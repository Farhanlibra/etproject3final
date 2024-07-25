
import './App.css'
import Contact from './Components/Contact'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Price from './Components/Price'
import Review from './Components/Review'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element=<Home/>/>
        <Route path='/feature' element=<Feature/>/>
        <Route path='/price' element=<Price/>/>
        <Route path='/review' element=<Review/>/>
        <Route path='/contact' element=<Contact/>/>

      </Routes>

      <Footer/>
      </BrowserRouter>
      
    
    </>
  )
}

export default App
