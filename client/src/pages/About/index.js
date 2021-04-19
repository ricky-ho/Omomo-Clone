import React from "react";

import "./style.css";

const About = ({ smallDisplay }) => {
  return (
    <main id="about" className={`${smallDisplay ? "no-bg-attachment" : ""}`}>
      <div id="about-content">
        <h1 className={`about-header ${smallDisplay ? "about-header-sm" : ""}`}>
          ABOUT OMOMO
        </h1>
        <p className={`about-text ${smallDisplay ? "about-text-sm" : ""}`}>
          Our mission is to create high quality drinks without compromising
          quality. All of our drinks come with a guarantee that the finest
          ingredients are being used. Pure, honest, and simple.
        </p>
      </div>
    </main>
  );
};

export default About;
