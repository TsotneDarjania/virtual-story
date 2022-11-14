import React from 'react'
import company_icon from "../../img/company-icon.png"

import { FaEnvelope } from "react-icons/fa";


import "./style.css"

const Footer = () => {
  return (
    <div className='footer'>
       <img className='company-icon' src={company_icon} alt="" />
       <p className='company-name'> Virtual Story 2022</p>
       <p className='gmail-text'> virtualstory.info@gmail.com</p>
       <div className='gmail-icon'>
        <FaEnvelope color='white'  size={50} />
       </div>
       
    </div>
  )
}

export default Footer