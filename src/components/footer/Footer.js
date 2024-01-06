import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footerImage'>
      <img src='assets\currease logo 1.png' style={{width:'245px',height:"105px"}} />
      </div>

      <div className='footerSec-2'>

        <div className='footerTitle'>
          <p>Customer Support</p>
          <h6>+91 59563355464</h6>
          <h6>support@cantaricorp.com</h6>
        </div>
        <div className='nav'>
          <span>Home</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Shop </span>
        </div>
        <div className='socialLinks'>
            <span>2023 cantaricorp</span>
            <span>Terms of service</span>
            <div>
              <FaFacebook className='icons'/>
              < FaLinkedin className='icons'/>
              <FaTwitter className='icons'/>
              <FaInstagram className='icons'/>
            </div>
        </div>
        
      </div>
    </div>
  )
}
