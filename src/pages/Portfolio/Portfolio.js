import React from "react";
import "./Portfolio.css";
import animalShowdown from "../../assets/background.jpg";
import recipeNutrition from "../../assets/stew-brew.png";
import budgetTracker from "../../assets/budget-tracker.png";

function Portfolio() {
  return (
    <section>
      <h3>Portfolio</h3>
      <div className="app-row">
        <div className="link-img">
          <a href="https://github.com/gstockha/animal-showdown">
            Animal Showdown Repository
          </a>
          <a
            href="https://animalshowdown.herokuapp.com/login"
            alt="Link for Animal Showdown application"
          >
            <img src={animalShowdown} alt="Animal Showdown app"></img>
          </a>
        </div>
        <div className="link-img">
          <a href="https://github.com/davidjaguilar104/recipe-nutrition-app">
            Recipe Nutrition Repository
          </a>
          <a
            href="https://davidjaguilar104.github.io/recipe-nutrition-app/"
            alt="Link for Animal Showdown application"
          >
            <img src={recipeNutrition} alt="Animal Showdown app"></img>
          </a>
        </div>
      </div>
      <div className="app-row">
        <div className="link-img">
          <a href="">
            Budget Tracker Repository
          </a>
          <a
            href=""
            alt="Link for Animal Showdown application"
          >
            <img src={budgetTracker} alt="Animal Showdown app"></img>
          </a>
        </div>
        <div className="link-img">
          <a href="https://github.com/gstockha/animal-showdown">
            Animal Showdown Repository
          </a>
          <a
            href="https://animalshowdown.herokuapp.com/login"
            alt="Link for Animal Showdown application"
          >
            <img src={animalShowdown} alt="Animal Showdown app"></img>
          </a>
        </div>
      </div>
      <div className="app-row">
        <div className="link-img">
          <a href="https://github.com/gstockha/animal-showdown">
            Animal Showdown Repository
          </a>
          <a
            href="https://animalshowdown.herokuapp.com/login"
            alt="Link for Animal Showdown application"
          >
            <img src={animalShowdown} alt="Animal Showdown app"></img>
          </a>
        </div>
        <div className="link-img">
          <a href="https://github.com/gstockha/animal-showdown">
            Animal Showdown Repository
          </a>
          <a
            href="https://animalshowdown.herokuapp.com/login"
            alt="Link for Animal Showdown application"
          >
            <img src={animalShowdown} alt="Animal Showdown app"></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
