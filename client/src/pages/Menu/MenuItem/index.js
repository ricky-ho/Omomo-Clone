import React from "react";
import "./style.css";

const MenuItem = ({ smallDisplay, item, toggleModal, handleClick }) => {
  return (
    <div className={`${smallDisplay ? "menu-item--sm" : "menu-item"}`}>
      <img
        src={item.imgMenu}
        alt={item.name}
        onClick={() => {
          toggleModal();
          handleClick(item);
        }}
      />
      <div className="menu-item-description">
        <p className="menu-item-name">{item.name}</p>
        <p className="menu-item-price">{item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
