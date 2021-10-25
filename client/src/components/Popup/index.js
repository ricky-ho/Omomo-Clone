import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Popup = ({ showPopup, setShowPopup }) => {
  useEffect(() => {
    const toggleSelf = () => {
      setShowPopup(false);
    };

    if (showPopup) {
      setTimeout(toggleSelf, 4000);
    }
  }, [showPopup]);

  return (
    <div className={`popup ${showPopup ? "show-popup" : ""}`}>
      <div className="popup__inner">
        <span>An item has been added to your cart</span>
        <div>
          <button type="button" onClick={() => setShowPopup(false)}>
            Close
          </button>
          <Link to="/cart" onClick={() => setShowPopup(false)}>
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Popup;
