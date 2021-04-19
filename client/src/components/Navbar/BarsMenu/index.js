import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { barmenuLinks } from "../../../utils/menuLinks";
import "./style.css";

const BarsMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const menuWrapper = useRef();
  const closeSidebar = (e) => {
    if (menuWrapper.current === e.target) setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="menu-icon" onClick={() => setShowSidebar(!showSidebar)}>
        <FaBars className="fa-bars" />
      </div>

      <div
        ref={menuWrapper}
        className={`nav-menu-wrapper ${showSidebar ? "active" : ""}`}
        onClick={(e) => closeSidebar(e)}
      >
        <nav id="nav-menu">
          <div
            id="nav-menu-toggle"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <FaTimes size="45px" />
          </div>
          <ul>
            {barmenuLinks.map((item, index) => {
              return (
                <li className="nav-menu-link">
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    <p>{item.title}</p>
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
