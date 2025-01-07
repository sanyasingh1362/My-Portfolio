import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import SkillContent from "../components/SkillContent";

const Skills = () =>{
    return <div>
        <Navbar/>
        <Heroimg2 heading="Skills" text="Let's see, how can I help you with my skills?"/>
        <SkillContent/>
        <Footer/>
    </div>
    
}
export default Skills;