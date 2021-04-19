import { Link } from "react-router-dom";
import "./style.css";

const Home = ({ smallDisplay }) => {
  return (
    <main id="home">
      <div className="home-banner">
        {smallDisplay ? <div className="overlay"></div> : null}
        <div className="home-banner-content">
          <h1>PURE, HONEST, AND SIMPLE!</h1>
          <Link to="/locations" className="link link-brown">
            <p>FIND LOCATIONS</p>
          </Link>
        </div>
      </div>

      <div id="home-text-container">
        <p className={`${smallDisplay ? "home-text-sm" : "home-text-m"}`}>
          {`We're a tea shop specializing in bringing you the best quality teas,
          creating memorable experiences with every sip.`}
        </p>
      </div>
      <div id="gallery-container">
        <div id="gallery">
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147142/Omomo/Oreo_Brulee_GMT-500.jpg"
              alt="OREO BRULEE GREEN MILK TEA"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147141/Omomo/Jasmine_C-500.jpg"
              alt="Jasmine Creamomo"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147142/Omomo/Uji_GMT-500.jpg"
              alt="Uji Green Milk Tea"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147114/Omomo/Cafe_Latte-500.jpg"
              alt="Cafe Latte"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147147/Omomo/Strawberry_Green_Tea-500.jpg"
              alt="Strawberry Green Tea"
            />
          </div>
        </div>
      </div>
      <div id="menu-link-container">
        <h2>{`VIEW OUR FULL MENU`}</h2>
        <Link id="menu-link" to="/menu">
          <p>{`Menu`}</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
