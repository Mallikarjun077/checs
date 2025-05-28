import React from 'react'
import img19 from '../assets/19.png'
import img20 from '../assets/20.png'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-section">
        <h1>Contact</h1>
        <p>Niranjan Dharnaik</p>
        <p>Sarjerao Nagar, Ankali - 591213</p>
        <p>GST No: 29BFVPD7309Q1ZH</p>
        <p><span><img src={img19} alt="" />+91-9739236994</span> </p>
        <p><span><img src={img20} alt="" />contact@checs.in</span> </p>



      </div>

      <div className="contact-section">
        <h1>Services</h1>
        <p>CAE / FEA</p>
        <p>CAD</p>
        <p>Technical Staffing Solutions</p>
        <p>Handling In-House Projects</p>
      </div>

      <div className="contact-section">
        <h1>CAE / FEA Training Contact</h1>
        <p>Rahul Dharnaik</p>
        <p><span><img src={img19} alt="" />+91-9739236994</span> </p>
        <h1>CAD Training Contact</h1>
        <p>Jode Deviprasad</p>
        <p><span><img src={img19} alt="" />+91-9739236994</span> </p>

      </div>
                                    <h4>© Chetan Engineering & Consultancy Services</h4>

    </div>
    
  )
}

export default Contact
