// import j3logo from '../../assets/images/j3logo.png'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import Picture from './Picture';
import Loader from "react-loaders";



const Home = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','J', 'a', 'c', 'o', 'b',' ',
    'V','a','l','b','u','e','n','a']
    const jobArray = ['a',' ','s','t','u','d','e','n','t',' ',
    'd','e','v','e','l','o','p','e','r', '.']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 5700);
        
          return () => {
            clearTimeout(timeoutId);
          };
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={`${letterClass} _11`}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={30}
                />
                </h1>
                <h2>
                    Aspiring Software Engineer / UT Austin Student
                </h2>
                <Link to= "/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Picture />
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Home;