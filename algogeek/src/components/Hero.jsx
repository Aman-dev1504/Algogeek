import './Hero.css';
import React from 'react';
import{AiFillPlayCircle}from 'react-icons/ai';
import heroImg from '../assets/Main-img.png';
const Hero = () => {
    return <>
    <section>
        <div className="container">
            <div className="hero-container">
                <div className="hero-content">
                    <h2>Unlock Your Future with Code, Learn to Create, Innovate, 
                    and Succeed with <span className='h2-diff'>Algogeek</span></h2>
                    <div className="hero-btns">
                        <button className="view-btn">View Course</button>
                        <button className="play-btn"><AiFillPlayCircle/>Watch</button>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="heroImg-wrapper">
                     <img src={heroImg} alt="" />   
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    
    
}
export default Hero;   