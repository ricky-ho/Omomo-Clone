import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = ({ smallDisplay }) => {
  return (
    <main id="home" className="center-items flex-col">
      <div id="video-container" className="flex">
        <video autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/ricky-ho/video/upload/v1617152704/Omomo/omomo_txxfqq.mp4"
            type="video/mp4"
          ></source>
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
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617147142/Omomo/Oreo_Brulee_GMT-500.jpg"
              alt="OREO BRULEE GREEN MILK TEA"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617147141/Omomo/Jasmine_C-500.jpg"
              alt="Jasmine Creamomo"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617147142/Omomo/Uji_GMT-500.jpg"
              alt="Uji Green Milk Tea"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617147114/Omomo/Cafe_Latte-500.jpg"
              alt="Cafe Latte"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617147147/Omomo/Strawberry_Green_Tea-500.jpg"
              alt="Strawberry Green Tea"
            />
          </div>
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
