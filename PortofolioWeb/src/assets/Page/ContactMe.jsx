import { useState } from 'react'
import images from '../images'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

AOS.init();

const ContactMe = () => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    });
    const {Name, setName} = useState('');
    const {Email, setEmail} = useState('');
    const {Message, setMessage} = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      
      const serviceId = 'service_u3v9qe8';
      const templateId = 'template_rl8wimj';
      const publicKey = 'h0hjiovfuDVxIMc06';

      const templateParams = {
        name : Name,
        email : Email,
        message : Message,
      };
        emailjs
        .send(serviceId, templateId, publicKey, templateParams, {
        })
        .then(
          (response) => {
            console.log('SUCCESS!', response);
            setName('');
            setEmail('');
            setMessage('');
          },
          (err) => {
            console.log('FAILED...', err);
          },
        );
    };
        
    return(
        <div id='ContactMe' className='grid align-middle justify-items-center content-center pt-32'>
            <div data-aos="fade-up">
            <h1 className='text-3xl font-bold text-blue-100 pb-7'>
              Contact Me
            </h1>
            </div>
            <div data-aos="fade-up" className='flex flex-row pb-6 bg-slate-900 rounded-2xl bg-opacity-60 justify-items-center shadow-inner w-11/12 h-96'>
              <div className='flex flex-col justify-items-center pt-7 pl-7 bg-blue-500 rounded-2xl h-96 w-full bg-opacity-20'>
                <p className='text-blue-100 font-bold text-2xl'>
                  Info
                </p>
                <div className='pr-5'>
                  <p className='text-xl text-blue-100 font-bold pt-11'>
                    Line
                  </p>
                  <p className='text-blue-100 text-opacity-40'>
                    raihan2812
                  </p>
                </div>
                <div className='pr-5'>
                  <p className='text-xl text-blue-100 font-bold'>
                    Whatsapp
                  </p>
                  <p className='text-blue-100 text-opacity-40'>
                    +62 812-8849-3331
                  </p>
                </div>
                <div className='pr-5'>
                  <p className='text-xl text-blue-100 font-bold'>
                    Gmail
                  </p>
                  <p className='text-blue-100 text-opacity-40'>
                    raihan2031r@gmail.com
                  </p>
                </div>
                <div className='pr-5'>
                  <p className='text-xl text-blue-100 font-bold'>
                    Instagram
                  </p>
                  <p className='text-blue-100 text-opacity-40'>
                    @Raihanmunaf
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-items-center content-center w-96 pr-0 py-7 pl-7'>
                <div>
                  <p className='text-blue-100 font-bold text-2xl'>
                    Form
                  </p>
                </div>
                <div className='pt-11 text-blue-100 text-opacity-70'>
                  <form onSubmit={handleSubmit}>
                    <div className='pb-2'>
                      <span className='pl-2'>Name</span>
                      <input value={Name} onChange={(e) => setName(e.target.value)} className='bg-blue-400 rounded-md bg-opacity-20 w-44 px-2 py-0.5 text-sm'></input>
                    </div>
                    <div>
                      <span className='pl-2'>Email</span>
                      <input value={Email} onChange={(e) => setEmail(e.target.value)} className='bg-blue-400 rounded-md bg-opacity-20 w-44 px-2 py-0.5 text-sm'></input>
                    </div>
                    <div className='pt-2'>
                      <span className='pl-2'>Message</span>
                      <textarea value={Message} onChange={(e) => setEmail(e.target.value)} className='bg-blue-400 rounded-md bg-opacity-20 w-44 h-20 resize-none px-2 py-0.5 text-sm'></textarea>
                    </div>
                    <div className='p-2'>
                        <button type='submit' className='bg-slate-500 bg-opacity-40 text-center rounded-md px-2 py-1'>Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    )
}

export default ContactMe