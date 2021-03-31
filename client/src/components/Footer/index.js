import React from "react";

import "./style.css";

function Footer({ smallDisplay }) {
  return (
    <footer className="flex-col center-items">
      <div className="footer-container flex-col">
        <div className="footer-logo flex">
          <img
            src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-logo-blk_no0dln.jpg"
            alt="Omomo footer logo"
          ></img>
        </div>
        <div
          className={`comm-text margin-bot-25
            ${smallDisplay ? "flex-col" : "flex"}`}
        >
          <div
            className={`footer-content border-top flex-col ${
              smallDisplay ? "" : "border-right"
            }`}
          >
            <h2 className="footer-content-title">CONTACT</h2>
            <p>info@omomoteashoppe.com</p>
          </div>
          <div
            className={`footer-content border-top flex-col ${
              smallDisplay ? "" : "border-right"
            }`}
          >
            <h2 className="footer-content-title">VISIT</h2>
            <h3 className="footer-content-sub-title">CHINO HILLS</h3>
            <a
              href="https://www.google.com/maps/place/OMOMO+Tea+Shoppe/@34.0101217,-117.7404634,15z/data=!4m5!3m4!1s0x0:0x1e21b35a236d6fe8!8m2!3d34.0101217!4d-117.7404634"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-content-text">
                2983 Chino Ave #A8, Chino Hills, CA 91709
              </p>
            </a>
            <h3 className="footer-content-sub-title">IRVINE-ALTON</h3>
            <a
              href="https://www.google.com/maps/place/OMOMO+Tea+Shoppe/@33.6714426,-117.7888306,15z/data=!4m2!3m1!1s0x0:0x7af1faa168bc037a?sa=X&ved=2ahUKEwjcuL6A7ZnjAhXELH0KHRDyAlEQ_BIwD3oECBAQCA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-content-text">
                5365 Alton Pkwy Unit G, Irvine, CA 92604
              </p>
            </a>
            <h3 className="footer-content-sub-title">IRVINE-WALNUT</h3>
            <a
              href="https://www.google.com/maps/place/14433+Culver+Dr,+Irvine,+CA+92604/@33.7064123,-117.7878397,19z/data=!4m13!1m7!3m6!1s0x80dcdc5fad6a69cb:0xaef90b7ebdaf3870!2s14433+Culver+Dr,+Irvine,+CA+92604!3b1!8m2!3d33.7065491!4d-117.788069!3m4!1s0x80dcdc5fad6a69cb:0xaef90b7ebdaf3870!8m2!3d33.7065491!4d-117.788069"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer-content-text">
                14433 Culver Dr., Irvine, CA 92604
              </p>
            </a>
          </div>
          <div className="footer-content border-top flex-col">
            <h2 className="footer-content-title">FOLLOW</h2>
            <a
              className="social-icon"
              href="https://www.instagram.com/omomoteashoppe/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" style={{ fontSize: "40px" }}></i>
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/omomoteashop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook" style={{ fontSize: "40px" }}></i>
            </a>
          </div>
        </div>
        <div>
          <p className="copyright">
            All Copyrights go to © OMOMO Tea Shoppe 2020. This project is merely
            for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
