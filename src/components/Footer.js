import "./FooterStyles.css";
import React from 'react'
import {FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone, FaTelegram} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div classname="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>203,Vaagai Hostels</p>
                        <p>Chennai.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    +91 6383717142
                    </h4>
                </div>
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    mohanjeeva18@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Mohanraj. Upcoming SDE Intern at Amazon
                    Currently pursuing Bachelor's degree in Computer Science 
                    and Engineering at Anna University
                </p>
                <div className="social">
                    <FaTelegram size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <FaInstagram size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
