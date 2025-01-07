import "./FooterStyles.css";
import React from "react";
import { FaHome, FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        <div>
                            <p>Noida, Uttar Pradesh</p>
                            <p>India</p>
                        </div>
                    </div>
                    
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                        sanyasingh.khushi@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About Me</h4>
                    <p>
                    I am a passionate Software Engineer specializing in developing robust and scalable applications using Java, React, and SQL. With a strong foundation in software development and a keen eye for detail, I thrive in crafting solutions that blend efficiency, functionality, and user-centric design.I am committed to continuous learning and staying updated with emerging technologies to enhance my skill set. Beyond coding, I enjoy exploring innovative approaches to problem-solving and contributing to meaningful projects that create tangible value.
                    Let’s connect to collaborate on exciting opportunities or discuss how I can bring value to your next project.
                    </p>
                    
                </div>
            </div>
        </div>
    )
} 
export default Footer;