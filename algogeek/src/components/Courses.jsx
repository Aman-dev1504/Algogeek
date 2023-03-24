import React from "react";
import "./Courses.css";
import { Line, Course1, Course2, Course3 } from "../assets";
const Courses = () => {
  return (
    <div className="cotainer-course">
      <div className="courseWrapper">
        <div className="textWrap">
          <h1>Some of our featured courses</h1>
          <span className="line">
            <img
              src={Line}
              alt=""
              data-aos="zoom-out-up"
              data-aos-duration="800"
            />
          </span>
        </div>
        <div className="courseWrap">
          <div className="course">
            <div className="imgWrap">
              <img src={Course1} alt="" />
            </div>
            <div className="textWrap">
              <h4>
                999/-₹ <span>1999</span>
              </h4>
              <h5>This course includes:</h5>
              <ul>
                <li>150+ hours On-Demand Video</li>
                <li> 300+ Coding Questions (asked by Top Companies)</li>
                <li> Live Interview Preparation & mentorship sessions</li>
                <li> Live Resume Preparation</li>
                <li> HTML&CSS - Beginner to Advanced</li>
              </ul>
            </div>
            <div className="btnWrap">
              <button>Buy now</button>
            </div>
          </div>
          <div className="course">
            <div className="imgWrap">
              <img src={Course2} alt="" />
            </div>
            <div className="textWrap">
              <h4>
                1999/-₹ <span>2999</span>
              </h4>
              <h5>This course includes:</h5>
              <ul>
                <li>150+ hours On-Demand Video</li>
                <li> 300+ Coding Questions (asked by Top Companies)</li>
                <li> Live Interview Preparation & mentorship sessions</li>
                <li> Live Resume Preparation</li>
                <li> MERN - Beginner to Advanced</li>
              </ul>
            </div>
            <div className="btnWrap">
              <button>Buy now</button>
            </div>
          </div>
          <div className="course">
            <div className="imgWrap">
              <img src={Course3} alt="" />
            </div>
            <div className="textWrap">
              <h4>
                2999/-₹ <span>4999</span>
              </h4>
              <h5>This course includes:</h5>
              <ul>
                <li>150+ hours On-Demand Video</li>
                <li> 300+ Coding Questions (asked by Top Companies)</li>
                <li> Live Interview Preparation & mentorship sessions</li>
                <li> Live Resume Preparation</li>
                <li> DSA - Beginner to Advanced</li>
              </ul>
            </div>
            <div className="btnWrap">
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Courses;
