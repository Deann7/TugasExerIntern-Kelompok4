import { useState } from 'react'
import images from '../images'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function Home() {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
    return (
        <div id='Home'>
          <div data-aos="zoom-in" className='min-h-96 grid justify-items-center pt-36 pb-12'>
            <img src={images.pp} alt='profilephoto' className='size-80 rounded-full'></img>
          </div>
          <div data-aos="fade-up" className='min-h-20 grid justify-items-center content-start bg-blue-950'>
            <h1 className='text-4xl font-bold text-blue-100'>
              Raihan Muhammad Nafis Al-Kautsar
            </h1>
            <p className='text-xl text-blue-300 text-opacity-50'>
              Computer Engineering UI'24
            </p>
          </div>
        </div>
    )
}

export default Home