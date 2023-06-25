import React, { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
          }, 3000);
        
          return () => {
            clearTimeout(timeoutId);
          };
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8j9siyd', 'template_8hvkjox', form.current, 'CdPBaHJ3OX_rA-zav')
        .then((result) => {
            console.log(result.text);
            alert('Message successfully sent!')
            window.location.reload(false)
        }, (error) => {
            console.log(error.text);
            alert('Failed to send the message, please try again')
        });
    };

    return (
        <>
        <div className='container contact-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am interested in software related internships and co-ops, 
                    especially those that would allow me to work with machine learning
                    or cloud engineering. However, if you have any other questions about me,
                    please don't hesitate to contact me using the below form.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input 
                                type="text" 
                                name="user_name" 
                                placeholder='Name' 
                                required />
                            </li>
                            <li className='half'>
                                <input 
                                type="email" 
                                name="user_email" 
                                placeholder='Email' 
                                required />
                            </li>
                            <li>
                                <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required/>
                            </li>
                            <li>
                                <textarea
                                placeholder='Message'
                                name="message"
                                required/>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            <div className='info-map'>
                Jacob Valbuena,
                <br />
                United States
                <br />
                Houston, Texas
                <span>jacobemmbvalb@gmail.com</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[30.0702, -95.5511]} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[30.0702, -95.5511]}>
                    <Popup>
                        <b>Deep in the Heart of Texas</b>
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>        
        </>
    )
}

export default Contact;