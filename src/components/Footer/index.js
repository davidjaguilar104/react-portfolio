import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="links-wrapper">
        <h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/davidjaguilar104"
            alt="Link to GitHub profile"
          >
            GitHub
          </a>
        </h3>
        <h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/david-aguilar-165bbb21b/"
            alt="Link to LinkedIn profile"
          >
            LinkedIn
          </a>
        </h3>
        <h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/davidaguilardev"
            alt="Link to Twitter profile"
          >
            Twitter
          </a>
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
