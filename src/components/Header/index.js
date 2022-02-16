import React from "react";
import "./Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <nav>
      <h1 id="david-a">
        <a className={currentPage === '#about' && 'nav-link'} onClick={() => handlePageChange("#about")} href="#about">
          David Aguilar
        </a>
      </h1>
      <div className="nav-items-wrapper">
        <h3>
          <a className={currentPage === '#about' && 'nav-link'} onClick={() => handlePageChange("#about")} href="#about">
            About Me
          </a>
        </h3>
        <h3>
          <a className={currentPage === '#portfolio' && 'nav-link'} onClick={() => handlePageChange("#portfolio")} href="#portfolio">
            Portfolio
          </a>
        </h3>
        <h3>
          <a className={currentPage === '#contact' && 'nav-link'} onClick={() => handlePageChange("#contact")} href="#contact">
            Contact
          </a>
        </h3>
        <h3>
          <a className={currentPage === "#resume" && 'nav-link'} onClick={() => handlePageChange("#resume")} href="#resume">
            Resume
          </a>
        </h3>
      </div>
    </nav>
  );
}

export default Header;
