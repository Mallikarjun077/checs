import React, { useState } from 'react'
import hero from '../assets/hero.jpg'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import img10 from '../assets/10.png'
import img11 from '../assets/11.png'
import img12 from '../assets/12.png'  
import img13 from '../assets/13.png'
import finger from '../assets/finger.webp'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './infra.css'

const Infrastructure = () => {
  
  const [meshingOpen, setMeshingOpen] = useState(false);
  const [meshingIndex, setMeshingIndex] = useState(0);

  const [analysisOpen, setAnalysisOpen] = useState(false);
  const [analysisIndex, setAnalysisIndex] = useState(0);

  const [designOpen, setDesignOpen] = useState(false);
  const [designIndex, setDesignIndex] = useState(0);

  
  const meshingImages = [img6, img8, img7, img5];
  const analysisImages = [img1,];
  const designImages = [img2, img4, img9, img3]; 

  
  const openPopup = (setIndexFunc, setOpenFunc, index) => {
    setIndexFunc(index);
    setOpenFunc(true);
  };

  
  const closePopup = (setOpenFunc) => {
    setOpenFunc(false);
  };

  const sliderSettings = (initialSlide) => ({
    initialSlide,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });

  return (
    <>
      <h1 style={{fontSize:'35px'}}>INFRASTRUCTURE</h1>
      <div className='infra'>
        <img src={hero} alt="hero" />
        <div className='infra-text'>
          <p>At ChECS, we are committed to staying ahead of global challenges by continuously reviewing and updating our technological capabilities in the CAD/CAE field. Our leadership team brings over 16 years of experience in Automotive Seating CAE, with a strong background in automotive seating engineering and a deep understanding of industry regulations. This expertise spans key regions including North America, Europe, and Asia-Pacific, allowing us to provide highly specialized solutions for our clients across the globe.</p>
          <p>We pride ourselves on our strong domain knowledge and proficiency in both seat design and full vehicle design, ensuring that we can deliver comprehensive solutions for our clients’ needs. Our professionals are trained in the latest CAE/CAD technologies and can be deployed on-site to support our clients' projects directly.</p>
          <p>At every stage of a project, we prioritize quality assurance through detailed checklists and multi-layered reviews. Our team is well-versed in maintaining effective and concise communication, which allows us to take a focused approach to our work, ensuring that projects are completed on time and to the highest standards.</p>
        </div>
      </div>

      <h1 style={{fontSize:'35px'}}>BUSINESS VERTICLES</h1>

        <div className='menu'>
      <div className="menu1">
        <img src={img11} alt="" />
        <h2>TRAINING</h2>
        
      </div>
      
        <div className="menu1">
          <img src={img12} alt="" />
          <h2>STAFFING SERVICES</h2>
        
      </div>
        <div className="menu1">
          <img src={img12} alt="" />
          <h2>ENGINEERING SERVICES</h2>
       
      </div>
        <div className="menu1">
          <img src={img13} alt="" />
          <h2>VALIDATION SUPPORT AND DESIGN</h2>
        
      </div>

    </div>
       

      <div className='cap'>
        <h1 style={{fontSize:'35px'}}>CAPABILITIES</h1>


        <div className='cap1'>
     <img src={finger} alt="" className='finger'/>
     <p>Meshing for various commodities (Sheet Metal, Mechanisms, Plastics, Foams) using different element types (0D, 1D, 2D, and 3D approaches).</p>
    </div>
     <div className='cap1'>
     <img src={finger} alt="" className='finger'/>
     <p>FE Model Integration and customer-specific FE model build-up. Regulatory/Abuse Load Case Setup and FEA correlation with physical test results</p>
    </div>
     <div className='cap1'>
     <img src={finger} alt="" className='finger'/>
     <p>FEA Results Post-Processing and technical report writing.</p>
    </div>
     <div className='cap1'>
     <img src={finger} alt="" className='finger'/>
     <p>RFQ Project Support for clients.</p>
    </div>
     <div className='cap1'>
     <img src={finger} alt="" className='finger'/>
     <p>Technical Staffing Solutions: Deployment of trained professionals to client sites.

</p>
    </div>
     <div className='cap1'>
     <img src={finger} alt="" className='finger'/>
     <p>Offering basic and advanced training for professionals and students to help them gain the skills needed for success in the CAD/CAE industry.

</p>
    </div>
       
    
    </div>
    
      {/* Meshing Examples */}
      <h1 style={{textAlign:'left',fontSize:"30px"}}>Meshing Examples</h1>
      <div className="pop" style={{display: 'flex', gap: 10, flexWrap: 'wrap',justifyContent:'space-around'}}>
        {meshingImages.map((img, i) => (
          <div 
            key={i} 
            className="menu2" 
            onClick={() => openPopup(setMeshingIndex, setMeshingOpen, i)} 
            style={{cursor: 'pointer'}}
          >
                  <figure className="mesh-figure">
  <img src={img} alt={`meshing-${i}`} />
  <figcaption style={{color:"black"}}>Solid Mesh {i+ 1}</figcaption>
</figure>
            {/* <img src={img} alt={`meshing-${i}`} style={{width: 210}} /> */}
            
          </div>
          
        ))}
      </div>

     
      <h1 style={{textAlign:'left',fontSize:"30px"}}>Model Integration</h1>
      <div className="pop" style={{display: 'flex', gap: 10, flexWrap: 'wrap',width: '100%', justifyContent: 'space-around' }}>
        {analysisImages.map((img, i) => (
          <div 
            key={i} 
            className="menu3" 
            onClick={() => openPopup(setAnalysisIndex, setAnalysisOpen, i)} 
            style={{cursor: 'pointer'}}
          >
                <figure className="mesh-figure">
                              <img src={img} alt={`analysis-${i}`} style={{width: 350}} />

  <figcaption style={{color:"black"}}>Customer Models, QPS</figcaption>
</figure>
          </div>
        ))}
      </div>

     
      <h1 style={{textAlign:'left',fontSize:"30px"}}>Type Of Load-Case Setup</h1>
      <div className="pop" style={{display: 'flex', gap: 10, flexWrap: 'wrap', width: '100%', justifyContent: 'space-around'}}>
        {designImages.map((img, i) => (
          <div 
            key={i} 
            className="menu2" 
            onClick={() => openPopup(setDesignIndex, setDesignOpen, i)} 
            style={{cursor: 'pointer'}}
          >
             
                        <img src={img} alt={`design-${i}`} style={{width: 210}} />
                        

  

          </div>
        ))}
      </div>

     
      {meshingOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => closePopup(setMeshingOpen)}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{position: 'relative', width: '80%', maxWidth: 800}}
          >
            <button 
              onClick={() => closePopup(setMeshingOpen)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                fontSize: 30,
                background: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close meshing popup"
            >&times;</button>

            <Slider {...sliderSettings(meshingIndex)}>
              {meshingImages.map((img, i) => (
                <div key={i}>
                  <img 
                    src={img} 
                    alt={`meshing-slide-${i}`} 
                    style={{width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 10, margin: 'auto'}} 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {analysisOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => closePopup(setAnalysisOpen)}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{position: 'relative', width: '80%', maxWidth: 800}}
          >
            <button 
              onClick={() => closePopup(setAnalysisOpen)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                fontSize: 30,
                background: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close analysis popup"
            >&times;</button>

            <Slider {...sliderSettings(analysisIndex)}>
              {analysisImages.map((img, i) => (
                <div key={i}>
                  <img 
                    src={img} 
                    alt={`analysis-slide-${i}`} 
                    style={{width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 10, margin: 'auto'}} 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {/* Design Popup */}
      {designOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => closePopup(setDesignOpen)}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{position: 'relative', width: '80%', maxWidth: 800}}
          >
            <button 
              onClick={() => closePopup(setDesignOpen)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: 0,
                fontSize: 30,
                background: 'transparent',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Close design popup"
            >&times;</button>

            <Slider {...sliderSettings(designIndex)}>
              {designImages.map((img, i) => (
                <div key={i}>
                  <img 
                    src={img} 
                    alt={`design-slide-${i}`} 
                    style={{width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: 10, margin: 'auto'}} 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  )
}

export default Infrastructure;
