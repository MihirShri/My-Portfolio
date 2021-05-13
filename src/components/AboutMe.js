import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author..." />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
              Hello! I am <strong>Mihir</strong>. I'm a Computer Science
              undergrad pursuing my B.Tech from the{" "}
              <strong>
                Indian Institute of Information Technology, Design and
                Manufacturing
              </strong>
              , situated in Kancheepuram, Tamil Nadu. I am currently in the
              final (4th) year of my studies. <br /> <br />I have been
              developing websites for over 2 years now. I'm a self taught
              Full-Stack Developer. The tech stack I'm currently using is{" "}
              <strong>React</strong> and <strong>NEXTjs</strong> for front end
              and <strong>Ruby on Rails</strong> for backend. But I don't limit
              myself to these fameworks. Depending upon the usage, I even prefer
              to use the MERN (Mongodb, Express, React, Nodejs) stack. I feel
              that frameworks are just tools to help us in the development
              process, but no matter what you use, ultimately it all boils down
              to whether you can apply the logic required to build something!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
