import React from "react";
import { Link } from "react-router-dom";
import { HomeMenuData } from "../../Data";
import OmomoVideo from "../../../videos/omomo.mp4";
import "./style.css";

const Home = ({ smallDisplay }) => {
  return (
    <main id="home" className="center-items flex-col">
      <div id="video-container" className="flex">
        <video autoPlay loop muted>
          <source src={OmomoVideo} type="video/mp4"></source>
        </video>
      </div>
      <div id="home-text-container" className="center-items flex">
        <p
          className={`cpm-text ${
            smallDisplay ? "home-text-sm" : "home-text-m"
          }`}
        >
          We're a tea shop specializing in bringing you the best quality teas,
          creating memorable experiences with every sip.
        </p>
      </div>
      <div className="flex center-items">
        <div id="gallery" className="flex-col">
          {HomeMenuData.map((item, index) => {
            return (
              <div className="gallery-item" key={index}>
                <img src={item.imgPath} alt={item.name} />
              </div>
            );
          })}
        </div>
      </div>
      <div id="link-to-menu" className="flex-col center-items margin-bot-100">
        <p className="margin-bot-25 cpm-text font-brown">VIEW OUR FULL MENU</p>
        <Link className="link link-black" to="/menu">
          <div className="comm-text">Menu</div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
