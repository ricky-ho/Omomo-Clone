import React, { useState } from "react";
import Modal from "../../Modal/";
import MenuItem from "./MenuItem/";
import { MenuData } from "../../Data";
import "./style.css";

const Menu = ({ smallDisplay, addToCart }) => {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
  };

  const [clickedItem, setclickedItem] = useState(null);

  const clickedMenuItem = (item) => {
    setclickedItem(item);
  };

  return (
    <main id="menu">
      <div className={smallDisplay ? "flex-col center-items" : "flex"}>
        {MenuData.map((item) => {
          return (
            <MenuItem
              smallDisplay={smallDisplay}
              item={item}
              toggleModal={toggleModal}
              handleClick={clickedMenuItem}
              key={item.id}
            />
          );
        })}
      </div>
      {showModal && (
        <Modal
          toggleModal={toggleModal}
          item={clickedItem}
          addToCart={addToCart}
        />
      )}
    </main>
  );
};

export default Menu;
