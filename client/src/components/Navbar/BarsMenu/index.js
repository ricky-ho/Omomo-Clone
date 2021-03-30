import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import OmomoLogo from "../../../images/omomo-logo-blk.svg";
import { MenuLinkData } from "../../Links.js";

const BarsMenu = ({ sidebar, setShowSidebar }) => {
  return (
    <header className="flex">
      <div className="navbar flex">
        <div className="nav-logo">
          <Link to="/">
            <img src={OmomoLogo} alt="Omomo Tea Shoppe Logo" />
          </Link>
        </div>
        <div className="menu-icon flex center-items">
          <FaBars
            className="fa"
            onClick={() => setShowSidebar(!sidebar)}
            size="45px"
          />
        </div>
      </div>
      <nav className={`nav-menu flex ${sidebar && "active"}`}>
        <ul className="comm-text">
          <li id="nav-menu-toggle">
            <FaTimes
              className="fa"
              onClick={() => setShowSidebar(!sidebar)}
              size="45px"
            />
          </li>
          {MenuLinkData.map((item, index) => {
            return (
              <li className="nav-menu-link" key={index}>
                <Link
                  to={item.path}
                  onClick={() => setShowSidebar(!sidebar)}
                  style={item.style}
                >
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default BarsMenu;
