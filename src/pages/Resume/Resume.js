import React from "react";
import "./Resume.css";
import myResume from "../../assets/Tech Resume.docx";

function Resume() {
  return (
    <section>
      <button>
        <a href={myResume} download>
          Resume
        </a>
      </button>
    </section>
  );
}

export default Resume;
