import React from "react";
import "./Header.css";
import Navigation from "../Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav>
      <h1 id="david-a">
        <a
          className={currentPage === "#about" && "nav-link"}
          onClick={() => handlePageChange("#about")}
          href="#about"
        >
          David Aguilar
        </a>
      </h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Navigation>
    </nav>
  );
}

export default Header;
