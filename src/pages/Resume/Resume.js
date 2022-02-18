import React from "react";
import "./Resume.css";
import myResume from "../../assets/Tech Resume.docx";

function Resume() {
  return (
    <section>
      <h1>Proficient in: </h1>
      <div className="tech-wrapper">
        <ul>
          <h4>Frontend</h4>
          <li>React</li>
          <li>Angular</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>JQuery</li>
        </ul>
        <ul>
          <h4>Backend</h4>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Sequlize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
      <button>
        <a href={myResume} download>
          Download Resume
        </a>
      </button>
    </section>
  );
}

export default Resume;
