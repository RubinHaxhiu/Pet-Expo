import React from 'react';
import pets from '../../assets/pets.png'
import '../About/About.css'

const About = () => {
    return (
        <div id='about' className='about'>
            <h1 className='about-title'>About</h1>
            <div className="about-content-container">
            <p className='about-paragraph-style'>
            At Pet Expo, we’re passionate about creating a world where every pet feels loved and every owner is proud.
            Specializing in dogs, cats, and birds, our expo is a haven for pet enthusiasts and a showcase for the latest in 
            pet care and companionship.
            </p>
            <img className='about-img-style' src={pets} alt="pets" />
            </div>
        </div>
    );
}

export default About;
