import React, { useState, useEffect } from "react";

import Modal from "../../components/Modal";
import MenuItem from "./MenuItem/";
import Loader from "../../components/Loader";
import "./style.css";

const Menu = ({ smallDisplay, cartLimit, cartQuantity, handleAddToCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Menu, setMenu] = useState([]);

  const fetchAndSetMenuData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/drinks");
      const data = await response.json();
      sessionStorage.setItem("menu", JSON.stringify(data));
      setMenu(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const menuData = sessionStorage.getItem("menu");
    if (!menuData) fetchAndSetMenuData();
    else setMenu(JSON.parse(menuData));
  }, []);

  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => setshowModal(!showModal);

  const [clickedItem, setclickedItem] = useState(null);
  const clickedMenuItem = (item) => setclickedItem(item);

  return (
    <main id="menu">
      {!isLoading ? (
        <div
          className={`${smallDisplay ? "menu-wrapper--sm" : "menu-wrapper"}`}
        >
          {Menu.map((item) => {
            return (
              <MenuItem
                key={item._id}
                smallDisplay={smallDisplay}
                item={item}
                toggleModal={toggleModal}
                handleClick={clickedMenuItem}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
      {showModal && (
        <Modal
          smallDisplay={smallDisplay}
          toggleModal={toggleModal}
          item={clickedItem}
          cartLimit={cartLimit}
          cartQuantity={cartQuantity}
          handleAddToCart={handleAddToCart}
        />
      )}
    </main>
  );
};

export default Menu;
