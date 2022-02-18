import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="nav-items-wrapper">
      <h3>
        <a
          className={currentPage === "#about" && "nav-link"}
          onClick={() => handlePageChange("#about")}
          href="#about"
        >
          About Me
        </a>
      </h3>
      <h3>
        <a
          className={currentPage === "#portfolio" && "nav-link"}
          onClick={() => handlePageChange("#portfolio")}
          href="#portfolio"
        >
          Portfolio
        </a>
      </h3>
      <h3>
        <a
          className={currentPage === "#contact" && "nav-link"}
          onClick={() => handlePageChange("#contact")}
          href="#contact"
        >
          Contact
        </a>
      </h3>
      <h3>
        <a
          className={currentPage === "#resume" && "nav-link"}
          onClick={() => handlePageChange("#resume")}
          href="#resume"
        >
          Resume
        </a>
      </h3>
    </div>
  );
}

export default Navigation;