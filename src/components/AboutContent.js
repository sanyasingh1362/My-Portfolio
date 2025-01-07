import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";
import SD1 from "../assets/SD1.jpg";
import tech from "../assets/tech.png";

const AboutContent = () => {
    return <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm full stack software developer. I create responsive projects for my clients.</p>
            <Link to="/contact">
            <button className="btn">Contact</button>
            </Link>
            <br></br>
            <h2>Wanna Know More About Me?</h2>
            <p>Go through my resume for more details about me.</p>
            <a href="https://drive.google.com/file/d/1BJzjpbiuKmZlYkAQogUmmw_b63Qt1O4d/view" target="_blank" rel="noopener noreferrer">
                <button className="btn">Resume</button>
            </a>
        </div>
    
        <div className="right">
            <div className="img-container">
                <div className="img-stack top"> 
                    <img src={SD1} className="img" alt="true"/>               
                </div>
                <div className="img-stack bottom">
                    <img src={tech} className="img" alt="true"/>               
                </div>
            </div>
         </div>
    </div>
};
export default AboutContent;
