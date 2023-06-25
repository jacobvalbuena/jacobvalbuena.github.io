import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import AnimatedLetters from "../AnimatedLetters";
import './index.scss'
import { faHardHat, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
            
    return () => {
      clearTimeout(timeoutId);
    };
  }, [])
    
    return(
        <>
        <div className="container experience-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass}
                strArray={"My Experience".split("")}
                idx={15}
                />
                </h1>
            </div>
            <div className="experience">
                <VerticalTimeline className="vertical-timeline" lineColor="#ffd700">
                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2017-2021"
                    iconStyle={{background: "#ffd700", color: "#fff"}}
                    icon = {<FontAwesomeIcon icon={faSchool}/>}>
                        <h3 className="vertical-timeline-element-title"> 
                        Klein Oak High School, Spring, Texas
                        </h3>
                        <p>IB High School Diploma</p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement 
                    className="vertical-timeline-element--education"
                    date="2021"
                    iconStyle={{background: "#ffd700", color: "#fff"}}
                    icon = {<FontAwesomeIcon icon={faSchool}/>}>
                        <h3 className="vertical-timeline-element-title"> 
                        University of Texas at Austin, Austin, Texas 2021-Present
                        </h3>
                        <p>Bachelor's of Science: Electrical and Computer Engineering
                            <br />
                            Graduating December 2024
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="Summer 2022"
                    iconStyle={{background: "#ffd700", color: "#fff"}}
                    icon = {<FontAwesomeIcon icon={faHardHat}/>}>
                        <h3 className="vertical-timeline-element-title"> 
                        Siemens Energy, Houston, Texas Summer 2022
                        </h3>
                        <p>
                            Controls Engineer Intern
                            <br />
                            Designed Customer-side and Engineer-side Cable Schedules
                            Evaluated and Tested Control Systems of Offshore Oil Rigs
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    date="Summer 2023"
                    iconStyle={{background: "#ffd700", color: "#fff"}}
                    icon = {<FontAwesomeIcon icon={faHardHat}/>}>
                        <h3 className="vertical-timeline-element-title"> 
                        TTG Imaging Solutions, Houston, Texas Summer 2023
                        </h3>
                        <p>
                            Electronics/Computer Software Intern
                            <br />
                            Performed Insallation/Maintenance of Medical Imaging Equipment
                            Compiled and Analyzed Performance Data from Medical Imaging Equipment
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
    

}
export default Experience