import { Link } from "react-router-dom";

import Gallery from "../../components/Gallery";
import "./style.css";

const Home = ({ smallDisplay }) => {
  return (
    <main id="home">
      <section className="home-banner">
        <div className="overlay"></div>
        <div className="home-banner-content">
          <h1>PURE, HONEST, AND SIMPLE!</h1>
          <Link to="/locations" className="link link-brown">
            <p>FIND LOCATIONS</p>
          </Link>
        </div>
      </section>

      <section id="home-text-container">
        <p className={`${smallDisplay ? "home-text-sm" : "home-text-m"}`}>
          {`We're a tea shop specializing in bringing you the best quality teas,
          creating memorable experiences with every sip.`}
        </p>
      </section>

      <section id="home-banner2">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/v1618871513/Omomo/Home/Omomo-banner2-1440w.jpg"
          alt="Coconut Matcha Tea banner"
          srcSet="https://res.cloudinary.com/ricky-ho/image/upload/q_60/v1618871513/Omomo/Home/Omomo-banner2-1440w.jpg 1440w, https://res.cloudinary.com/ricky-ho/image/upload/v1618871513/Omomo/Home/Omomo-banner2-1080w.jpg 1080w, https://res.cloudinary.com/ricky-ho/image/upload/v1618871513/Omomo/Home/Omomo-banner2-500w.jpg 500w"
          sizes="100vw"
          loading="lazy"
        />
      </section>

      <section id="home-about">
        <h2 className={`about-header ${smallDisplay ? "about-header-sm" : ""}`}>
          ABOUT OMOMO
        </h2>
        <p className={`about-text ${smallDisplay ? "about-text-sm" : ""}`}>
          Our mission is to create high quality drinks without compromising
          quality. All of our drinks come with a guarantee that the finest
          ingredients are being used. Pure, honest, and simple.
        </p>
      </section>

      <Gallery />

      <div id="menu-link-container">
        <h3>VIEW OUR FULL MENU</h3>
        <Link to="/menu" className="link link-brown">
          <p>Menu</p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
