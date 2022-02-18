import React from "react";
import "./About.css";
import portrait from "../../assets/portrait.jpg";

function About() {
  return (
    <section className="about-wrapper">
      <div className="title-img-wrapper">
        <h1>About Me</h1>
        <img src={portrait} alt="Portrait of David Aguilar"></img>
      </div>
      <div>
        <p>
          My name is David Aguilar and I am 21 years old. I was born in Kansas
          City, Mo. I am big family man and love sports. I am a junior level,
          full-stack developer. I have a certified junior level Angular
          developer certification. I am well versed in both frontend and
          backend. I am passionate about coding and getting things to work after
          research and hard work!
        </p>
        <hr></hr>
        <p>
          My frontend skill include the following: Angular, React, HTML, CSS,
          SCSS, JavaScript, JQuery, and Bootstrap!
        </p>
        <hr></hr>
        <p>
          My backend skills include the following: Node.js, Express, MySQL,
          PostgreSQL, Sequlize, MongoDB, and Mongoose!
        </p>
      </div>
    </section>
  );
}

export default About;
