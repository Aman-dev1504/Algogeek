import React from "react";
import "./Cards.css";
import {card1,card2,card3} from "../assets";
const cardItems = [
    {
        image:'/',
        title: "Convenient Study Schedule",
    },
    {
        image:'/',
        title: "Live and Quick Support",
    },
    {
        image:'/',
        title: "Lectures By Industry Experts",
    },
];    
const Cards = () => {
return (
<div className="cards-container">
<div className="text-wrap">
<h1>Why you should choose us?</h1>
<p>Our education startup stands out because we offer, Expertise in coding education from experienced instructors,.A focus on practical, hands-on learning to build real-world skills</p>
</div>
<div className="card-wrap">
<div className=" cards card1" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="300">
    <img src={card1} alt="" />
    <h3>Convenient Study Schedule</h3> 
</div>
<div className="cards card2" data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="300">
<img src={card2} alt="" />
    <h3>Convenient Study Schedule</h3> 
</div>
<div className="cards card3" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="300">
<img src={card3} alt="" />
    <h3>Convenient Study Schedule</h3> 
</div>
</div>
</div>
)
}
export default Cards;