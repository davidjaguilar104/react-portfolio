import React from "react";
import "./About.css";
import portrait from "../../assets/portrait.jpg";

function About() {
  return (
    <section>
      <h1>About Me</h1>
      <img src={portrait} alt="Portrait of David Aguilar"></img>
      <div>
        <p>
          My name is David Aguilar and I am 21 years old. I was born in Kansas
          City, Mo. I am big family man and love sports. I am a junior level,
          full-stack developer.
        </p>
      </div>
    </section>
  );
}

export default About;
