import React from "react";
import "./Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav>
      <h1 id="david-a">
        <a href="/">David Aguilar</a>
      </h1>
      <div className="nav-items-wrapper">
        <h3>
          <a 
          onClick={() => handlePageChange('#about')}
          href="#about">About Me</a>
        </h3>
        <h3>
          <a 
          onClick={() => handlePageChange('#portfolio')}
          href="#portfolio">Portfolio</a>
        </h3>
        <h3>
          <a 
          onClick={() => handlePageChange('#contact')}
          href="#contact">Contact</a>
        </h3>
        <h3>
          <a 
          onClick={() => handlePageChange('#resume')}
          href="#resume">Resume</a>
        </h3>
      </div>
    </nav>
  );
}

export default Header;
