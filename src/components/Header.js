import React from "react";
import Typed from "react-typed";


const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Hello, I'm Mihir! Nice to meet you</h1>
        <Typed
          className="typed-text"
          strings={["Software Developer", "Web Developer", "Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header;