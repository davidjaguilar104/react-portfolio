import React from "react";
import "./Portfolio.css";
import Project from "../../components/Project";
import animalShowdown from "../../assets/background.jpg";
import recipeNutrition from "../../assets/stew-brew.png";
import budgetTracker from "../../assets/budget-tracker.png";
import weatherDash from "../../assets/weather-dashboard.png";
import noteTaker from "../../assets/note-taker.png";
import passGen from "../../assets/pass-gen.png";

function Portfolio() {
  const projects = [
    {
      name: "Animal Showdown",
      url: "https://animalshowdown.herokuapp.com/login",
      image: animalShowdown,
      repo: "https://github.com/gstockha/animal-showdown",
    },
    {
      name: "Recipe Nutrition",
      url: "https://davidjaguilar104.github.io/recipe-nutrition-app/",
      image: recipeNutrition,
      repo: "https://github.com/davidjaguilar104/recipe-nutrition-app",
    },
    {
      name: "Budget Tracker",
      url: "https://fast-taiga-23020.herokuapp.com/",
      image: budgetTracker,
      repo: "https://github.com/davidjaguilar104/pwa-budget-tracker",
    },
    {
      name: "Weather Dashboard",
      url: "https://davidjaguilar104.github.io/weather-dashboard/",
      image: weatherDash,
      repo: "https://github.com/davidjaguilar104/weather-dashboard",
    },
    {
      name: "Note Taker",
      url: "https://glacial-coast-25788.herokuapp.com/",
      image: noteTaker,
      repo: "https://github.com/davidjaguilar104/note-taker",
    },
    {
      name: "Password Generator",
      url: "https://davidjaguilar104.github.io/password-generator/",
      image: passGen,
      repo: "https://github.com/davidjaguilar104/password-generator",
    },
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <div className="app-row">
        <Project project={projects[0]}></Project>
        <Project project={projects[1]}></Project>
        <Project project={projects[2]}></Project>
      </div>
      <div className="app-row">
        <Project project={projects[3]}></Project>
        <Project project={projects[4]}></Project>
        <Project project={projects[5]}></Project>
      </div>
    </section>
  );
}

export default Portfolio;
