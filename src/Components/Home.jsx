import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero from "../assets/hero.jpg";
import hero1 from "../assets/hero1.jpg";

import About from "./About";
import Infrastructure from "./Infrastructure";
import Services from "./Services";
import Contact from "./Contact";
import Nav from "../Nav";

import "./home.css";

const Home = () => {
  const aboutRef = useRef(null);
  const infraRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      about: aboutRef,
      infrastructure: infraRef,
      services: servicesRef,
      contact: contactRef,
      home: window,
     
    };

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const settings = {
  arrows: true,    
  dots: true,      
  speed: 500,
};


  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={hero} alt="Slide 1" />
        </div>
        <div>
          <img src={hero1} alt="Slide 2" />
        </div>
        <div>
          <img src={hero} alt="Slide 3" />
        </div>
        <div>
          <img src={hero1} alt="Slide 4" />
        </div>
      </Slider>

      <Nav scrollToSection={scrollToSection} />

      <div ref={aboutRef}><About /></div>
      <div ref={infraRef}><Infrastructure /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
};

export default Home;
