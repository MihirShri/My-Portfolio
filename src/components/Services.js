import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">my skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faLaptopCode}
                  size="2x"
                />
              </div>
              <h3>Languages</h3>
              <ul className="list-group">
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-4">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
              </div>

              <h3>Frameworks</h3>
              <ul className="list-group">
                <li>React (with Redux)</li>
                <li>NEXTjs</li>
                <li>Ruby on Rails</li>
                <li>Django (beginner)</li>
                <li>MERN stack</li>
              </ul>
            </div>
          </div>
          {/* - */}
          <div className="col-md-4 col-sm-4">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faPlusSquare}
                  size="2x"
                />
              </div>

              <h3>Other Skills</h3>
              <ul className="list-group">
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Data Science</li>
                <li>Data Structures and Algorithms</li>
                <li>Competitive Programming</li>
              </ul>
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Services;
