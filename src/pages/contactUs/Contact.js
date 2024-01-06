import React from 'react'
import './contactus.css'
import { MdArrowOutward } from "react-icons/md";

export default function Contact() {
  return (
    <div>
      <div className='contactHeader'>
          <div className='ctctWrapper'>
            <h5>Cantari Corp India</h5>
            <h3>+91 95232 12121 <br/>
            supportind@gmail.com</h3>
          </div>

          <div  className='ctctWrapper'>
          <h5>Cantari Corp UK</h5>
            <h3>+44 35232 8910 <br/>
            supportuk@gmail.com </h3>
            </div>

            <div  className='ctctWrapper'>
            <h5>Cantari Corp USA</h5>
            <h3>+1 35232 1200 <br/>
            supportusa@gmail.com </h3>
            </div>
      </div>


      <div className='contactForm'>
        <h2>Send Us a message</h2>
        <div className='inputGroupC'>
        <input type='text' placeholder='Your Name'/>
        <input type='text'  placeholder='Phone Number'/>
        <input type='text'  placeholder='Email'/>
        <input type='text'  placeholder='Message'/>
        </div>
        <button className='msgBtn'>Send Message <MdArrowOutward/></button>
      </div>
    </div>
  )
}
