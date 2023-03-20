import './Hero.css';
import React from 'react';
import{AiFillPlayCircle}from 'react-icons/ai';
import heroImg from '../assets/Main-img.png';
const Hero = () => {
    return <>
    <section className='hero-section'>
        <div className="hero-container">
            <div className="hero-container-main">
                <div className="hero-content">
                    <h2 data-aos="zoom-out" data-aos-duration="1000">Unlock Your Future with Code, Learn to Create, Innovate, 
                    and Succeed with <span className='h2-diff'>Algogeek</span></h2>
                    <div className="hero-btns">
                        <button className="view-btn">View Course</button>
                        <button className="play-btn"><AiFillPlayCircle/> Watch</button>
                    </div>
                    <div className='testmonial-container' data-aos="fade-right" data-aos-duration="1000">
                        <div className='user-img user-img1'></div>
                        <div className='user-img user-img2'></div>
                        <div className='user-img user-img3'></div>
                        <div className='user-img user-img4'></div>
                        <p>500+ Happy Learners</p>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="heroImg-wrapper">
                     <img src={heroImg} alt="" data-aos="flip-left" data-aos-duration="1000"/>   
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    
    
}
export default Hero;   