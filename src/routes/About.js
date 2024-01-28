import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <div>
      <NavBar/>
      <HeroImgProject heading="ABOUT" text="I'm a friendly Front-End Developer"/>
      <AboutContent/> 
      <Footer/>
    </div>
  )
}

export default About
