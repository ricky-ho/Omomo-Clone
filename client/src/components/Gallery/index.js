import "./style.css";

const Gallery = () => {
  return (
    <section id="gallery">
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
    </section>
  );
};

export default Gallery;
