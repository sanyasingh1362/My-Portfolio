import React from "react";
import { Link } from "react-router-dom";
import backgroundP from "../assets/backgroundP.avif";
import "./HeroimgStyles.css";

const Heroimg = () => {
    return <div className="hero">
        <div className="mask">
            <img className="into-img" src={backgroundP} alt="backgroundP"/>
        </div>
        <div className="content">
            <p>HI, I'M SANYA SINGH</p>
            <h1>Software Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>  
            </div>
        </div>
    </div>
         
}
export default Heroimg;