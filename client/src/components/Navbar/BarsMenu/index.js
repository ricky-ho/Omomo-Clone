import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { navlinks } from "../../../config";

import "./style.scss";

const BarsMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const menuWrapper = useRef();

  const handleClickOutside = (e) => {
    if (menuWrapper.current === e.target) setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button
        type="button"
        className="burger-menu"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaBars className="fa-bars" />
      </button>

      <div
        ref={menuWrapper}
        className={`nav-menu__wrapper ${showSidebar ? "side__active" : ""}`}
        onClick={(e) => handleClickOutside(e)}
      >
        <nav id="nav__menu">
          <button type="button" onClick={() => setShowSidebar(!showSidebar)}>
            <FaTimes size="45px" aria-label="Close navigation menu" />
          </button>
          <ul>
            {navlinks.map((item, index) => {
              return (
                <li key={index} className="menu__link">
                  <Link
                    to={item.path}
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BarsMenu;
