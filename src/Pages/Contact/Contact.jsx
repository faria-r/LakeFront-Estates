import React, { useRef } from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiPhoneDisconnectBold } from 'react-icons/pi';
import SocialLinks from '../../Components/ReUsable/SocialLinks/SocialLinks';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0l0kvy', 'template_q9b0j7h', form.current, 'zf7KzE3hvzLkVfD3g')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: "Email Sent!",
            text: "We Will Contact You Soon!",
            icon: "success",
          });
          form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='bg-black'>
            <img className='h-[1200px] min-w-full opacity-30' src="https://i.ibb.co/D10S6PB/ki.jpg" alt="" />
            <div className='w-[90%] min-h-screen grid lg:grid-cols-2 gap-4 pt-16 px-8   text-white pb-36 text-center absolute top-0 left-0 right-0 mx-auto'>
<div className='border-r-[1px] min-h-screen'>
    <h1 className='text-5xl font-mono mb-6 pt-6 text-start'>Contact details</h1>
    <div className="flex-col justify-start font-bold relative">
        <div>
            <p className='text-start text-xl mb-2'>Faria Rahman</p>
        </div>
          <div className="lg:flex justify-start items-center my-6  text-start">
            <p className="text-3xl mr-8">
              <MdOutlineMailOutline />
            </p>
            <p>
              EMAIL <br />
              FARIARAHMAN622@GMAIL.COM
            </p>
          </div>
          <div className="lg:flex justify-start items-center my-6 text-start">
            <p className="text-3xl  mr-8">
              <FaMapLocationDot />
            </p>
            <p>
              ADDRESS <br />
              02346 JOHNSBARG UTC- LAKE RY
            </p>
          </div>
          <div className=" lg:flex justify-start items-center my-6 font-bold text-start">
          <p className="text-3xl  mr-8">
            <PiPhoneDisconnectBold />
          </p>
          <p>
            PHONE - NUMBER <br />
            +88 01970-477973
          </p>
        </div>
       <div className='absolute left-0'>
       <SocialLinks></SocialLinks>
       </div>
        </div>
       
</div>
<div className='h-auto mt-24 lg:mt-0   lg:pl-16'>
    <h1 className='text-5xl font-mono mb-6 pt-6 text-start'>Send Email</h1>
    <form ref={form} onSubmit={sendEmail} className="flex-col justify-start font-bold relative">
        
          <div className=" my-6  text-start">
            
            <input type="text" placeholder='NAME' name="user_name"  className='w-72 py-4 border-0 border-b-[1px] bg-transparent'/>
          </div>
          <div className=" my-6  text-start">
            
            <input type="email" name="user_email" placeholder='EMAIL'  className='w-72 py-4 border-0 border-b-[1px] bg-transparent'/>
          </div>
         
          <div className="  my-6 font-bold text-start">
          
          <input type='text' placeholder='PHONE NUMBER'  className='w-72 py-4 border-0 border-b-[1px] bg-transparent'/>
        </div>
        <div className='text-start '>
            
        <textarea name="message" placeholder="MESSAGE" className=" w-72 my-6 bg-transparent border-white rounded-none textarea textarea-bordered textarea-md " ></textarea>
        </div>
        <input type='submit' className='border border-white bg-transparent text-start py-2 px-6'/>
     
        </form>
       
</div>
            </div>
        </div>
    );
};

export default Contact;