import { useEffect, useState } from 'react';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import ProjectItem from '../../helpers/ProjectItem';
import { ProjectList } from '../../helpers/ProjectList';


const Projects = () => {
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
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
                    idx={15}
                    />
                </h1>
            </div>
            <div className="projectList">
                    {/* <div className='proj1'>
                    <ProjectItem
                        name = "TA Queue Website"
                        image = {Proj1}/>
                    </div>
                    <ProjectItem
                        name = "Discord ChatBot"
                        image = {Proj2}/> */}
                    {ProjectList.map((project, idx) => {
                        return (
                            <ProjectItem id={idx} name={project.name} image={project.image} />
                        );
                    })}
                </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Projects
