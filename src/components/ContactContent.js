import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactContentStyles.css";
import React from "react";


const ContactCotent = () => {
    return <div >
        <h3 className="connect">See My Socials Below!</h3>
        <div className="social">
            <a href="https://www.linkedin.com/in/sanya-singh-s0306/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/>
            </a>
        
            <a href="https://github.com/sanyasingh1362" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{color:"#fff", marginRight: "1rem"}}/>
            </a>
            <a href="https://leetcode.com/u/sanyasingh362/" target="_blank" rel="noopener noreferrer">
                <FaCode size={30} style={{color:"#fff", marginRight: "1rem"}}/>
            </a>


        </div>

    </div>

};
export default ContactCotent;