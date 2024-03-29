import React from "react";
import IntroImg from "../assets/IntroImg.jpg"
import { Link } from "react-router-dom";
import "./HeroImg.css";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt = "IntroImg"></img>
        </div>
        <div className="content">
            <p>HI, I'M A SOFTWARE DEVELOPER</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to ="/project" className="btn">PROJECTS</Link>
                <Link to ="/contact" className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
