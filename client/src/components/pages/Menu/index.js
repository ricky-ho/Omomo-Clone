import React, { useState, useEffect } from "react";
import Modal from "../../Modal/";
import MenuItem from "./MenuItem/";
import "./style.css";

const Menu = ({ smallDisplay, addToCart }) => {
  const [Menu, setMenu] = useState([]);
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await fetch("/api/drinks");
        const data = await response.json();
        setMenu(data);
      } catch (err) {
        console.log(err);
      }
    }
    getMenu();
  }, []);

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
        {Menu.map((item) => {
          return (
            <MenuItem
              smallDisplay={smallDisplay}
              item={item}
              toggleModal={toggleModal}
              handleClick={clickedMenuItem}
              key={item._id}
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
