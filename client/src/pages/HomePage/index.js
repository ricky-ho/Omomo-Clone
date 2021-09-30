import { Link } from "react-router-dom";

import "./style.scss";

const Home = () => {
  return (
    <main id="home">
      <section id="home__hero">
        <div className="overlay"></div>
        <div className="hero__content">
          <h1>PURE, HONEST, AND SIMPLE!</h1>
          <Link to="/locations">
            <p>FIND LOCATIONS</p>
          </Link>
        </div>
      </section>

      <section id="home__text-banner">
        <p>
          We're a tea shop specializing in bringing you the best quality teas,
          creating memorable experiences with every sip.
        </p>
      </section>

      <section id="home__img-banner">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/v1618871513/Omomo/Home/Omomo-banner2-1440w.jpg"
          alt="Coconut Matcha Tea banner"
          srcSet="https://res.cloudinary.com/ricky-ho/image/upload/q_60/v1618871513/Omomo/Home/Omomo-banner2-1440w.jpg 1440w, https://res.cloudinary.com/ricky-ho/image/upload/v1618871513/Omomo/Home/Omomo-banner2-1080w.jpg 1080w, https://res.cloudinary.com/ricky-ho/image/upload/v1618871513/Omomo/Home/Omomo-banner2-500w.jpg 500w"
          sizes="100vw"
          loading="lazy"
        />
      </section>

      <section id="home__about">
        <h2>ABOUT OMOMO</h2>
        <p>
          Our mission is to create high quality drinks without compromising
          quality. All of our drinks come with a guarantee that the finest
          ingredients are being used. Pure, honest, and simple.
        </p>
      </section>

      <section id="home__gallery">
        <HomeGallery />
      </section>

      <div id="home__menu-link">
        <h2>VIEW OUR FULL MENU</h2>
        <Link to="/menu" className="link link-brown">
          <p>Menu</p>
        </Link>
      </div>
    </main>
  );
};

const HomeGallery = () => {
  return (
    <>
      <div className="gallery-item">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147142/Omomo/Oreo_Brulee_GMT-500.jpg"
          alt="OREO BRULEE GREEN MILK TEA"
          loading="lazy"
        />
      </div>
      <div className="gallery-item">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147141/Omomo/Jasmine_C-500.jpg"
          alt="Jasmine Creamomo"
          loading="lazy"
        />
      </div>
      <div className="gallery-item">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147142/Omomo/Uji_GMT-500.jpg"
          alt="Uji Green Milk Tea"
          loading="lazy"
        />
      </div>
      <div className="gallery-item">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147114/Omomo/Cafe_Latte-500.jpg"
          alt="Cafe Latte"
          loading="lazy"
        />
      </div>
      <div className="gallery-item">
        <img
          src="https://res.cloudinary.com/ricky-ho/image/upload/q_auto:best/v1617147147/Omomo/Strawberry_Green_Tea-500.jpg"
          alt="Strawberry Green Tea"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Home;
