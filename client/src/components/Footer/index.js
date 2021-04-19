import { FaInstagram, FaFacebook } from "react-icons/fa";

import storeLocations from "../../utils/storeLocations";
import "./style.css";

function Footer({ smallDisplay }) {
  return (
    <footer>
      <div className="footer-content-container">
        <div className="footer-logo">
          <img
            src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-footer-logo_diiygs.svg"
            alt="Omomo footer logo"
          />
        </div>
        <div className={`footer-content ${smallDisplay ? "flex-col" : ""}`}>
          <section className={`${smallDisplay ? "" : "border-right"}`}>
            <h2 className="footer-section-title">CONTACT</h2>
            <p>info@omomoteashoppe.com</p>
          </section>

          <section className={`${smallDisplay ? "" : "border-right"}`}>
            <h2 className="footer-section-title">VISIT</h2>
            {storeLocations.map((location, index) => (
              <div key={index} className="footer-location-item">
                <h4>{location.title}</h4>
                <a
                  href={location.gmaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{location.address}</span>
                </a>
              </div>
            ))}
          </section>

          <section>
            <h2 className="footer-section-title">FOLLOW</h2>
            <a
              className="social-icon"
              href="https://www.instagram.com/omomoteashoppe/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="40px" />
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/omomoteashop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="40px" />
            </a>
          </section>
        </div>
        <div>
          <p id="copyright">
            All Copyrights go to © OMOMO Tea Shoppe 2021. This project is merely
            for personal educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
