import { FaInstagram, FaFacebook } from "react-icons/fa";

import { metadata } from "../../config";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__content-wrapper">
        <div className="footer__logo">
          <img
            src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-footer-logo_diiygs.svg"
            alt="Omomo footer logo"
          />
        </div>
        <div className="footer__content">
          <section>
            <h2>CONTACT</h2>
            <p>{metadata.company_email}</p>
          </section>

          <section>
            <h2>VISIT</h2>
            {metadata.locations.map((location, index) => (
              <div key={index} className="footer__location">
                <p>{location.title}</p>
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
            <h2>FOLLOW</h2>
            {metadata.socials.map((social, index) => {
              return (
                <div key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Link to Omomo's ${social.name} page`}
                  >
                    {social.name === "Instagram" ? (
                      <FaInstagram className="social-icon" size={40} />
                    ) : (
                      <FaFacebook className="social-icon" size={40} />
                    )}
                  </a>
                </div>
              );
            })}
          </section>
        </div>

        <p id="copyright">
          All Copyrights go to © OMOMO Tea Shoppe 2021. This project is merely
          for personal educational purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
