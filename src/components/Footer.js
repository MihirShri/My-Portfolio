import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Lucknow, Uttar Pradesh</p>
            </div>
            <div className="d-flex">
              <a href="tel:9140372959">9140372959</a>
            </div>
            <div className="d-flex">
              <a href="mailto:mihir.shri10@gmail.com">mihir.shri10@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/mihir.srivastava.94/"><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a>
                <a href="https://www.instagram.com/mihir_srivastava/"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/mihirshri/"><FontAwesomeIcon className="icon" icon={faLinkedinIn} /></a>
                <a href="https://github.com/MihirShri"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Mihir Shri | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
