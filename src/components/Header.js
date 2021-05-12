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
          strings={[
            "50% Talented",
            "50% Creative",
            "100% Dedicated",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
