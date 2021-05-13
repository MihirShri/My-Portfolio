import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="home">
      <div className="header-wraper">
        <div className="main-info">
          <canvas></canvas>
          <h1>Hello, I'm Mihir! Nice to meet you</h1>
          <Typed
            className="typed-text"
            strings={["50% Talented", "50% Creative", "100% Dedicated"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a
            href="https://drive.google.com/file/d/10zMJZfG79UVzPuCqlgNFpKYPk1B0i6ya/view?usp=sharing"
            className="btn-main-offer"
          >
            view resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
