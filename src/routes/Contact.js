import React from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImgProject from '../components/HeroImgProject';
import Form from '../components/Form';

function Contact() {
  return (
    <div>
      <NavBar/>
      <HeroImgProject heading="CONTACT" text="Let's have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
