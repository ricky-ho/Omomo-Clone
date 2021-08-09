import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import MenuItem from "./MenuItem/";
import Modal from "../../components/Modal";
import menu from "../../models/menu";
import "./style.css";

const Menu = ({ smallDisplay, cartLimit, cartQuantity, handleAddToCart }) => {
  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => setshowModal(!showModal);

  const [clickedItem, setclickedItem] = useState(null);
  const clickedMenuItem = (item) => setclickedItem(item);

  return (
    <main id="menu">
      <div className="menu-container">
        {menu.map((row, index) => (
          <div
            key={index}
            className={`${smallDisplay ? "menu-list" : "menu-row"}`}
          >
            {row.map((item) => (
              <MenuItem
                key={item._id}
                smallDisplay={smallDisplay}
                item={item}
                toggleModal={toggleModal}
                handleClick={clickedMenuItem}
              />
            ))}
          </div>
        ))}
      </div>

      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="visible"
        unmountOnExit
      >
        <Modal
          toggleModal={toggleModal}
          item={clickedItem}
          cartLimit={cartLimit}
          cartQuantity={cartQuantity}
          handleAddToCart={handleAddToCart}
        />
      </CSSTransition>
    </main>
  );
};

export default Menu;
