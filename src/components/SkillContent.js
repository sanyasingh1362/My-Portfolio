import "./SkillContentStyles.css";
import React from "react";

const SkillContent = () => {
    return <div className="skills">
        <h3> What I Bring to the Table</h3>
        <div className="content">
            <div className="left">
                <h4>Tech Skills</h4>
                <div className="left-content">
                <input type="text"   value="Java" readonly/>
                <input type="text"   value="ReactJS" readonly/>
                <input type="text"   value="MySQL" readonly/>
                <input type="text"   value="Python" readonly/>
                <input type="text"   value="JavaScript" readonly/>
                <input type="text"   value="CSS" readonly/>
                <input type="text"   value="HTML" readonly/>
                <input type="text"   value="DSA" readonly/>   
                </div>
            </div>
            <div className="right">
                <h4>Soft Skills</h4>
                <input type="text"   value="Fast Learnig Curve" readonly/>
                <input type="text"   value="Time Management" readonly/>
                <input type="text"   value="Problem Solving" readonly/>
                <input type="text"   value="Teamwork" readOnly/>
            </div>
        </div>
    </div>
}
export default SkillContent;