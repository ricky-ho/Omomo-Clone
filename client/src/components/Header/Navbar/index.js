import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";
import "./style.css";

const Navbar = () => {
  return (
    <header className="flex center-items">
      <nav className="navbar flex">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-logo-blk_no0dln.jpg"
              alt="Omomo Tea Shoppe Logo"
            />
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
