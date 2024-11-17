import { useState } from 'react'
import images from '../images'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function AboutMe() {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 750
    })
    return(
        <div id='AboutMe' className='w-8/12 h-full py-10 grid content-center justify-items-center'>
          <div className='grid align-middle justify-items-center content-center pt-32'>
            <div data-aos="fade-up">
            <h1 className='text-3xl font-bold text-blue-100 pb-7'>
              About Me
            </h1>
            </div>
            <div data-aos="fade-up" className='pb-6 bg-slate-900 rounded-2xl bg-opacity-60 grid justify-items-center shadow-inner'>
              <p className='text-blue-100 text-center p-5'>
                  Raihan Muhammad Nafis Al-Kautsar merupakan seorang mahasiswa jurusan Teknik Komputer di Fakultas Teknik Universitas Indonesia. Memiliki ketertarikan di bidang IT, seperti <span className='text-blue-400'>Frontend Web Development</span>, <span className='text-red-400'>UI/UX Design</span>, dan <span className='text-purple-400'>Hacking</span>. Memiliki beberapa skill umum yang dimiliki seseorang yang bekerja di bidang IT, seperti programming, selain itu juga memiliki kemampuan di bidang desain.
              </p>
              <div className='flex flex-row'>
                <img src={images.css} alt='css' className='size-20'></img>
                <img src={images.py} alt='python' className='size-20'></img>
                <img src={images.c} alt='c' className='size-20'></img>
                <img src={images.html} alt='html' className='size-20'></img>
              </div>
              <div className='pt-4'>
                <button className=' transition ease-in-out delay-50 bg-blue-900 bg-opacity-60 px-4 py-1 rounded-xl hover:bg-blue-900 duration-300'>
                <span className='text-blue-100 font-bold'>
                  My CV
                </span>
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default AboutMe