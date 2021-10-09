import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import BarsMenu from "./BarsMenu";
import { navlinks } from "../../config";
import CartContext from "../../contexts/cart-context";

import "./style.scss";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav id="navbar">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-logo-blk_no0dln.svg"
            alt="Omomo Logo"
            className="nav-logo"
          />
        </Link>
        <div id="nav-content__wrapper">
          <NavMenu />
          <BarsMenu />
          <Link to="/cart" className="navlink__cart">
            <FiShoppingCart size={30} aria-label="Shopping Cart Page" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </Link>
        </div>
      </nav>
    </header>
  );
};

const NavMenu = () => {
  return (
    <ul>
      {navlinks.map((item, index) => {
        return (
          <li key={index}>
            <Link key={index} to={item.path} className="navlink">
              <p>{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
