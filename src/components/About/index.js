import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faCuttlefish, faHtml5, faJava, faJsSquare, faPython } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);
        
          return () => {
            clearTimeout(timeoutId);
          };
    }, []);

    
      
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                        />
                </h1>
                <p>
                    Hello! I'm Jacob Valbuena, a student at the University of Texas at Austin.
                    I'm majoring in Electrical and Computer Engineering, focused on Software Engineering for my career.
                    This is my first website!
                </p>
                <p>
                    I look at every opportunity as a way to learn more about the latest technologies and am currently looking
                    for roles that would allow me to explore the diverse areas of software with challenging projects.
                </p>
                <p>
                    I think my biggest strengths would be my adaptability and perception to look at problems in many different ways.
                </p>
                <p>
                    My hobbies are playing the guitar, watching sports with the family, and learning more about upcoming technologies.
                </p>
                <a href="https://drive.google.com/file/d/1Xl8I2kPPaDa8EA9NZgGtlxNSbRF7PqmM/view?usp=drive_link" target="_blank" rel="noreferrer noopener"><h3 className="resume">Resume</h3></a>
            </div>

            <div className = 'stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color= "#FFE873" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCuttlefish} color= "#004482" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color= "#EFD81D" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faHtml5} color= "#F06529" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faCss3Alt} color= "#28A4D9" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJava} color= "#f89820" />
                    </div>
                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About;
