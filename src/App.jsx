import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Infrastructure from './Components/Infrastructure';
import Services from './Components/Services';
import Contact from './Components/Contact';

import checs from './assets/checs.png';
import './Nav'
import './App.css';
import Nav from './Nav';


function App() {
  return (
    <Router>
       <Nav />
      <div>
           
     

       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
