import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject';
import PricingCards from '../components/PricingCards';
import Work from '../components/Work';

function Project() {
  return (
    <div>
      <NavBar/>
      <HeroImgProject heading="PROJECTS" text="Some of my most 
      recent works" />
      <Work />
      <PricingCards/>
      <Footer/>
    </div>
  )
}

export default Project
