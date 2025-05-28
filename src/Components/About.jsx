import React from 'react'
import hero1 from '../assets/hero1.jpg'
import "./about.css"


const About = () => {
  return (
<>
<h1 style={{fontSize:'35px'}}>ABOUT US</h1>
<div className='about'>
<div className='about-text'>
<p>Headquartered in Belgaum, Karnataka, India, ChECS was founded with the purpose of addressing the staffing and training needs of the CAD/CAE industry.</p>
<p>Our team of experienced recruiters understands the complexities of the recruitment process and is committed to providing quick, effective, and cost-efficient staffing solutions. At the same time, we offer specialized training programs to help individuals and professionals upskill in key areas of CAD/CAE.</p>
<p>Whether you're an organization looking to fill critical roles or a professional seeking to enhance your expertise, we provide tailored solutions that meet your specific needs.</p></div>
<img src={hero1} /></div>







</>  )
}

export default About