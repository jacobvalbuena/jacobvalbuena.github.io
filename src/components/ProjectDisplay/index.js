import { useParams } from 'react-router-dom';
import './index.scss'
import { ProjectList } from '../../helpers/ProjectList';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const ProjectDisplay = () => {
  const { id } = useParams();
        const project = ProjectList[id];

  const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 5000);
            
    return () => {
      clearTimeout(timeoutId);
    };
  }, [])
  return(

    <>
    <div className='container projectsdisplay-page'>  
      <div className="project">
        <h1> <AnimatedLetters letterClass={letterClass}
              strArray={project.name.split("")}
              idx={15}/>
        </h1>
        <img src={project.image} alt="proj-img"/>
        <p>
          <b>Skills:</b> <AnimatedLetters letterClass={letterClass}
          strArray={project.skills.split("")}
          idx={15}/>
        </p>
      <ul>
        <li>
        <a 
                target="_blank" 
                rel='noreferrer' 
                href="https://github.com/jacobvalbuena"
                >
                    <FontAwesomeIcon icon={faGithub} color = "#4d4d4e" />
                </a>
        </li>
      </ul>
    </div>
    </div>
    <Loader type="pacman" />
    </>
  )
  
}
export default ProjectDisplay;