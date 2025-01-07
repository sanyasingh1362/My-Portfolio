import "./WorkCardStyles.css";
import React from "react";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";
const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {ProjectCardData.map((val, index) => {
                    return (
                        <WorkCard 
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text= {val.text}
                        source={val.source}
                        />
                    )
    
                    
                })}
            </div>
            
        </div>
    );

};
export default Work;