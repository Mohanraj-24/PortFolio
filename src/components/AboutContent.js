import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am Software Developer.
                I also develop web applications using React. 
                I create responsive secure websites
            </p>
            <Link to="/contact"><button className="btn">CONTACT</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="True"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="True"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
