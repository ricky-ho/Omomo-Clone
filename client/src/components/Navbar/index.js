import React, { useState } from "react";
import { Link } from "react-router-dom";
import BarsMenu from "./BarsMenu";

import { FaShoppingCart } from "react-icons/fa";
import OmomoLogo from "../../images/omomo-logo-blk.svg";

import "./style.css";

const Navbar = ({ smallDisplay }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return smallDisplay ? (
    <BarsMenu sidebar={showSidebar} setShowSidebar={setShowSidebar} />
  ) : (
    <header className="flex center-items">
      <nav className="navbar flex">
        <div className="nav-logo">
          <Link to="/">
            <img src={OmomoLogo} alt="Omomo Tea Shoppe Logo" />
          </Link>
        </div>
        <ul className="nav-links comm-text flex">
          <Link to="/about" className="link center-items link-black flex">
            <li>About</li>
          </Link>
          <Link to="/menu" className="link center-items link-brown flex">
            <li>Menu</li>
          </Link>
          <div id="cart-link" className="flex center-items">
            <Link to="/cart">
              <li>
                <FaShoppingCart id="fa-cart" size="25px" />
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
