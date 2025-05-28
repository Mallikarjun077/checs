import React from 'react'
import './service.css'
import img14 from '../assets/14.png'
import img15 from '../assets/15.png'
import img13 from '../assets/13.png'
import img16 from '../assets/16.png'
import img17 from '../assets/17.png'
import img18 from '../assets/18.png'


const Services = () => {
  return (
    <>
    <h1 style={{fontSize:'35px'}}>SERVICES</h1>
    <p style={{textAlign:'center',fontSize:'25px',position:'relative',bottom:'30px'}}>We offer a comprehensive suite of engineering and design services to help you bring your ideas to life.</p>
    <div className='serv'>
      <div className="services">
        <div className="serv2">
          <img src={img14} alt="" />
          <h2>CAE/FEA</h2>
        
        </div>

        <p>Our team of experts specializes in advanced computational analysis and finite element analysis (FEA) to help you optimize your designs and ensure structural integrity.</p>
        
      </div>
       <div className="services">
                <div className="serv2">
                  <img src={img15} alt="" />

        <h2>LS-Dyna</h2>
                </div>
        <p>Our experts are well-versed in LS-Dyna, a powerful finite-element analysis software for simulating complex engineering problems, including nonlinear dynamics and impact analysis.</p>
        
      </div>
       <div className="services">
                <div className="serv2">
                  <img src={img13} alt="" />

        <h2>CAD Services</h2>
                </div>
        <p>Our team of skilled CAD designers can help you create high-quality, detailed 3D models and drawings for your projects, using the latest CAD software and technologies.</p>
        
      </div>
       <div className="services">
              <div className="serv2">
                  <img src={img16} alt="" />

        <h2>HyperMesh Training</h2>
              </div>
        <p>We offer comprehensive training on HyperMesh, a leading pre-processing tool for FEA, to help you streamline your simulation workflows.</p>
        
      </div>
       <div className="services">
                        <div className="serv2">
                          <img src={img17} alt="" />

        <h2>Optistruct/Nastran</h2>
                        </div>
        <p>We have extensive experience in Optistruct and Nastran, two leading structural analysis and optimization tools, to help you achieve optimal designs.</p>
        
      </div>
      
       <div className="services">
             <div className="serv2">
                         <img src={img18} alt="" />

        <h2>Technical staffing solutions

</h2>
             </div>
        <p>We offer Technical staffing solutions with Trained professionals deputed on-site.
We also handle In-House Projects.</p>
      </div>
      </div>
      <h1 style={{fontSize:"50px"}}>We Are Unique</h1>
      <p style={{fontSize: '25px',position:'relative',bottom:'70px' ,textAlign:'center',margin:'50px',lineHeight:'1.5'}}>In the fast-paced world of today, it can be difficult for both individuals and organizations to stay up to date with changing knowledge and abilities. CHECS stands out as a symbol of adaptability and commitment in the face of these changing demands. Personalized training, problem-solving, and project solutions that can be delivered at any time and from any location. The customer-centric approach implies that the solutions are flexible and client-centered.</p>
    </>
  )
}

export default Services