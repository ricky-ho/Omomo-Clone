import React from "react";
import Banner from "../../../images/banner.jpeg";

import "./style.css";

const About = ({ smallDisplay }) => {
  return (
    <main
      id="about"
      className="flex-col center-items"
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div id="about-content" className="flex-col center-items">
        <h1
          className={`font-brown comm-text ${
            smallDisplay ? "header-sm" : "header-m"
          }`}
        >
          ABOUT OMOMO
        </h1>
        <p className={`comm-text ${smallDisplay ? "text-sm" : "text-m"}`}>
          Our mission is to create high quality drinks without compromising
          quality. All of our drinks come with a guarantee that the finest
          ingredients are being used. Pure, honest, and simple.
        </p>
      </div>
    </main>
  );
};

export default About;
