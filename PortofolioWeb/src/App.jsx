import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './assets/Page/Navbar';
import Home from './assets/Page/home';
import AboutMe from './assets/Page/AboutMe';
import ContactMe from './assets/Page/ContactMe';

AOS.init();

function App() {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  })
  return (
    <div className='bg-blue-950'>
      <div className=''>
        <Navbar/>
      </div>
      <div className='flex-col w-full grid content-center justify-items-center'>
        <Home/>
        <div className='w-8/12 h-full py-10 grid content-center justify-items-center'>
          <AboutMe/>
        </div>
        <div className='w-8/12 h-full py-10 grid content-center justify-items-center'>
          <ContactMe/>
        </div>
      </div>
    </div>  
  )
}

export default App
