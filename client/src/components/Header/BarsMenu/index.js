import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { BarMenuLinks } from "../../../utils/links";
import "./style.css";

const BarsMenu = ({ sidebar, setShowSidebar }) => {
  return (
    <header className="flex">
      <div id="navbar" className="flex">
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ricky-ho/image/upload/v1617152074/Omomo/omomo-logo-blk_no0dln.svg"
              alt="Omomo Tea Shoppe Logo"
            />
          </Link>
        </div>
        <div
          className="menu-icon flex center-items"
          onClick={() => setShowSidebar(!sidebar)}
        >
          <FaBars size="45px" />
        </div>
      </div>

      <div
        className={`nav-menu-wrapper flex ${sidebar && "active"}`}
        onClick={() => (sidebar ? setShowSidebar(!sidebar) : null)}
      >
        <nav id="nav-menu">
          <div id="nav-menu-toggle">
            <FaTimes onClick={() => setShowSidebar(!sidebar)} size="45px" />
          </div>
          <ul className="comm-text">
            {BarMenuLinks.map((item, index) => {
              return (
                <li className="nav-menu-link" key={index}>
                  <Link
                    to={item.path}
                    onClick={() => setShowSidebar(!sidebar)}
                    style={{ textDecoration: "none" }}
                  >
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default BarsMenu;
