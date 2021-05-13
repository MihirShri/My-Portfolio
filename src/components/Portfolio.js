import React from "react";
import netflix from "../images/netflix1.jpg";
import cityGuide from "../images/city-guide-app.jpg";
import portfolio from "../images/portfolio.jpg";
import taskManager from "../images/task-manager.jpg";
import finance from "../images/finance1.jpg";
import univ from "../images/univ1.jpg";
import chat from "../images/chat1.jpg"
import friends from "../images/friends1.jpg"

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Alpha Blog"
        />
        <p>
          <strong>Alpha Blog using Ruby on Rails - </strong>This is a full stack
          blog application created using the Ruby on Rails framework and styled
          using Bootstrap. Authentication has been handled using the Devise gem.
          Users can perform all the CRUD (Create, Read, Update, Delete)
          operations on their profiles and blog posts.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://alpha-blog-6-mihir.herokuapp.com/", "_blank")
          }
        >
          https://alpha-blog-6-mihir.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/MihirShri/Alpha-Blog-Ruby-on-Rails")
          }
        >
          https://github.com/MihirShri/Alpha-Blog-Ruby-on-Rails
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Alpha Blog using Ruby on Rails",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="Memories"
        />
        <p>
          <strong>Memories app using MERN stack - </strong>This a full stack web
          application created using the MERN (MongoDB, Express, ReactJS and
          redux, NodeJS) stack and styled using MaterialUI. Used Redux for state
          management. Users can create a memory by filling up a form and can add
          appropriate images, title, content and hashtags.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://katmi-memories.netlify.app/", "_blank")
          }
        >
          https://katmi-memories.netlify.app/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "Memories App using MERN stack",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Meme Generator"
        />
        <p>
          <strong>Meme Generator using ReactJS - </strong>Used ReactJS library
          to build a Meme Generator web application. Used
          https://imgflip.com/api API to fetch meme data (using async-await).
          The user can input text at the top and bottom and can then generate
          random meme images.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://meme-generator-mihir.netlify.app/", "_blank")
          }
        >
          https://meme-generator-mihir.netlify.app/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/MihirShri/Meme-Generator-React-App",
              "_blank"
            )
          }
        >
          https://github.com/MihirShri/Meme-Generator-React-App
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: false,
      text: "Meme Generator using ReactJS",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Portfolio"
        />
        <p>
          <strong>Portfolio using ReactJS - </strong>This is my Portfolio
          created using ReactJS. This involves the usage of many amazing
          libraries such as ParticleJS which can be seen on the front page,
          emailjs-com which is used for sending email after the user submits the
          contact me form, react-typed for displaying the text that disappears
          and reappears after every few seconds and many more.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://react-redux-task-manager.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://react-redux-task-manager.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/MihirShri/My-Portfolio", "_blank")
          }
        >
          https://github.com/MihirShri/My-Portfolio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "My Projects",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Finance Tracker
  const openPopupboxFinanceTracker = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={finance}
          alt="Finance Tracker"
        />
        <p>
          <strong>Finance Tracker App using Ruby on Rails - </strong>This is a
          Finance Tracker web app created using the Ruby on Rails framework for
          web development and styled using bootstrap. This is an amazing app in
          which the users can create their profiles and track any stock they
          want, all they have to do is simply type the ticker symbol of the
          stock or simply search the name of the stock from the search bar and
          add to their portfolio. The data is fetched from a stock API which
          displays the current prices of the stocks. Users can also follow other
          users and see their profiles and check which stocks they are tracking
          and add those stocks to their portfolio too!
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/MihirShri/Finance-Tracker-Ruby-on-Rails",
              "_blank"
            )
          }
        >
          https://github.com/MihirShri/Finance-Tracker-Ruby-on-Rails
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFinanceTracker = {
    titleBar: {
      enable: true,
      text: "My Projects",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // University App
  const openPopupboxUniv = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={univ} alt="Univ App" />
        <p>
          <strong>University App using Ruby on Rails - </strong>This is a
          University app created using the Ruby on Rails framework for web
          development and styled using SemanticUI. The users can create their
          profiles, add, edit and delete courses, see other students profiles
          and much more!
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/MihirShri/University-App-Ruby-on-Rails",
              "_blank"
            )
          }
        >
          https://github.com/MihirShri/University-App-Ruby-on-Rails
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigUniv = {
    titleBar: {
      enable: true,
      text: "My Projects",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Chat App
  const openPopupboxChat = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={chat} alt="Chat App" />
        <p>
          <strong>Chat App using Ruby on Rails - </strong>This is a chat
          application created using the Ruby on Rails framework for web
          development and styled using Semantic-ui. The users have already
          created profiles and can chat with their friends. The screen shows the
          recent 20 messages.
        </p>
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/MihirShri/Message-me-Ruby-on-Rails",
              "_blank"
            )
          }
        >
          https://github.com/MihirShri/Message-me-Ruby-on-Rails
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigChat = {
    titleBar: {
      enable: true,
      text: "My Projects",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Finance Tracker
  const openPopupboxFriends = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={friends}
          alt="Friends App"
        />
        <p>
          <strong>Friends App using Ruby on Rails - </strong>This is a simple
          friends web application created using the Ruby on Rails framework and
          styled using bootstrap. The users can create their profiles and fill
          up a form which will then add the names and details of their friends.
          The users can even edit their profile and delete their friends.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://friendsrubyonrails.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://friendsrubyonrails.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/MihirShri/Friends-Ruby-on-Rails-web-app",
              "_blank"
            )
          }
        >
          https://github.com/MihirShri/Friends-Ruby-on-Rails-web-app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigFriends = {
    titleBar: {
      enable: true,
      text: "My Projects",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio">
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">portfolio</h1>
          <div className="image-box-wrapper row justify-content-center">
            <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
              <img className="portfolio-image" src={netflix} alt="Alpha Blog" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div
              className="portfolio-image-box"
              onClick={openPopupboxCityGuide}
            >
              <img className="portfolio-image" src={cityGuide} alt="Memories" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div
              className="portfolio-image-box"
              onClick={openPopupboxPortfolio}
            >
              <img
                className="portfolio-image"
                src={portfolio}
                alt="Meme Generator"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div
              className="portfolio-image-box"
              onClick={openPopupboxTaskManager}
            >
              <img
                className="portfolio-image"
                src={taskManager}
                alt="Portfolio"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div
              className="portfolio-image-box"
              onClick={openPopupboxFinanceTracker}
            >
              <img
                className="portfolio-image"
                src={finance}
                alt="Finance Tracker"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxUniv}>
              <img className="portfolio-image" src={univ} alt="Univ App" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxChat}>
              <img className="portfolio-image" src={chat} alt="Chat App" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
            <div className="portfolio-image-box" onClick={openPopupboxFriends}>
              <img
                className="portfolio-image"
                src={friends}
                alt="Friends App"
              />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* - */}
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigNetflix} />
        <PopupboxContainer {...popupboxConfigCityGuide} />
        <PopupboxContainer {...popupboxConfigPortfolio} />
        <PopupboxContainer {...popupboxConfigTaskManager} />
        <PopupboxContainer {...popupboxConfigFinanceTracker} />
        <PopupboxContainer {...popupboxConfigUniv} />
        <PopupboxContainer {...popupboxConfigChat} />
        <PopupboxContainer {...popupboxConfigFriends} />
      </div>
    </div>
  );
};

export default Portfolio;
