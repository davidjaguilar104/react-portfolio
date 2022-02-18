import React from "react";
import animalShowdown from "../../assets/background.jpg";
import recipeNutrition from "../../assets/stew-brew.png";
import budgetTracker from "../../assets/budget-tracker.png";
import weatherDash from "../../assets/weather-dashboard.png";
import noteTaker from "../../assets/note-taker.png";
import passGen from "../../assets/pass-gen.png";

function Project() {
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
            <img
              className="app-img"
              src={animalShowdown}
              alt="Animal Showdown app"
            ></img>
          </a>
        </div>
        <div className="link-img">
          <a href="https://github.com/davidjaguilar104/recipe-nutrition-app">
            Recipe Nutrition Repository
          </a>
          <a
            href="https://davidjaguilar104.github.io/recipe-nutrition-app/"
            alt="Link for Recipe Nutrition application"
          >
            <img
              className="app-img"
              src={recipeNutrition}
              alt="Recipe Nutrition app"
            ></img>
          </a>
        </div>
      </div>
      <div className="app-row">
        <div className="link-img">
          <a href="https://github.com/davidjaguilar104/pwa-budget-tracker">
            Budget Tracker Repository
          </a>
          <a
            href="https://github.com/davidjaguilar104/pwa-budget-tracker"
            alt="Link for Budget Tracker application"
          >
            <img
              className="app-img"
              src={budgetTracker}
              alt="Budget Tracker app"
            ></img>
          </a>
        </div>
        <div className="link-img">
          <a href="https://github.com/davidjaguilar104/weather-dashboard">
            Weather Dashboard Repository
          </a>
          <a
            href="https://davidjaguilar104.github.io/weather-dashboard/"
            alt="Link for Weather Dashboard application"
          >
            <img
              className="app-img"
              src={weatherDash}
              alt="Weather Dashboard app"
            ></img>
          </a>
        </div>
      </div>
      <div className="app-row">
        <div className="link-img">
          <a href="https://github.com/davidjaguilar104/note-taker">
            Note Taker Repository
          </a>
          <a
            href="https://glacial-coast-25788.herokuapp.com/"
            alt="Link for Note Taker application"
          >
            <img className="app-img" src={noteTaker} alt="Note Taker app"></img>
          </a>
        </div>
        <div className="link-img">
          <a href="https://github.com/davidjaguilar104/password-generator">
            Password Generator Repository
          </a>
          <a
            href="https://davidjaguilar104.github.io/password-generator/"
            alt="Link for Password Generator application"
          >
            <img
              className="app-img"
              src={passGen}
              alt="Password Generator app"
            ></img>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
