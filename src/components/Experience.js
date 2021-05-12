import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>June - July 2020</h3>
            <h5>
              <strong>
                Python Developer @ CodeSpeedy Technology Private Limited
              </strong>
            </h5>
            <p>
              Built projects/modules for www.coderspacket.com which is an online
              project and package or source code providing solution website of
              CodeSpeedy Technology Private Limited.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>July - October 2020</h3>
            <h5>
              <strong>
                Software Developer Intern @ Alorb Technologies Private Limited
              </strong>
            </h5>
            <p>
              Designed a front end framework for a product landing page, using
              responsive web design tools like HTML5, CSS, and JavaScript.
              Outlined the basic backend structure on PHP.
            </p>
          </div>
        </div>
        {/* - */}
      </div>
    </div>
  );
};

export default Experience;
