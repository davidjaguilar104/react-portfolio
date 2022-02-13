import React from "react";
import "./Portfolio.css";
import animalShowdown from "../../assets/background.jpg";

function Portfolio() {
  return (
    <section>
      <h3>Portfolio</h3>
      <div>
        <div>
          <a href="https://github.com/gstockha/animal-showdown">
          Animal Showdown repository
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://animalshowdown.herokuapp.com/login"
          alt="Link to Animal Showdown application"
        >
          <img src={animalShowdown} alt="Animal Showdown application"></img>
        </a>
        </div>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://animalshowdown.herokuapp.com/login"
          alt="Link to Animal Showdown application"
        >
          <img src={animalShowdown} alt="Animal Showdown application"></img>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
