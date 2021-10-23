import { FaInstagram, FaFacebook } from "react-icons/fa";

import { metadata, locations } from "../../config";
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
          <FooterContact />
          <FooterLocations />
          <FooterSocials />
        </div>
        <p id="copyright">
          All Copyrights go to ©{" "}
          <a
            href="https://www.omomoteashoppe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            OMOMO Tea Shoppe
          </a>{" "}
          2021. This project is merely for educational purposes.
        </p>
      </div>
    </footer>
  );
};

const FooterContact = () => {
  return (
    <section>
      <h2>CONTACT</h2>
      <p>{metadata.company_email}</p>
    </section>
  );
};

const FooterLocations = () => {
  return (
    <section>
      <h2>VISIT</h2>
      {locations.map((location, index) => (
        <div key={index} className="footer__location">
          <p>{location.title}</p>
          <a href={location.gmaps} target="_blank" rel="noopener noreferrer">
            <span>{location.address}</span>
          </a>
        </div>
      ))}
    </section>
  );
};

const FooterSocials = () => {
  return (
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
  );
};

export default Footer;
