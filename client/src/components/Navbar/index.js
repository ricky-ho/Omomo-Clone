import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import BarsMenu from "./BarsMenu";
import { menuLinks } from "../../utils/menuLinks";

import "./style.css";

const Navbar = ({ smallDisplay, cartQuantity, setShowCart }) => {
  return (
    <header>
      <nav id="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-logo-blk_no0dln.svg"
              alt="Omomo Tea Shoppe Logo"
            />
          </Link>
        </div>
        {smallDisplay ? (
          <BarsMenu />
        ) : (
          <ul>
            {menuLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link key={index} to={item.path} className="link link-brown">
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}
            <li
              id="cart-toggle"
              onClick={() => {
                setShowCart(true);
              }}
            >
              <FaShoppingCart size="25px" />
              <div className="nav-quantity-icon">
                <p>{cartQuantity}</p>
              </div>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
