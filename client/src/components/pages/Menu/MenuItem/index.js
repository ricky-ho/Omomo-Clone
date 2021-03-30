import React from "react";
import "./style.css";

const MenuItem = ({ smallDisplay, item, toggleModal, handleClick }) => {
  return (
    <div
      className={`menu-item flex-col ${
        smallDisplay ? "margin-bot-50" : "margin-bot-25"
      }`}
    >
      <img
        src={item.imgMenu}
        alt={item.name}
        onClick={() => {
          toggleModal();
          handleClick(item);
        }}
      />
      <div className="menu-item-description comm-text">
        <p className="menu-item-name">{item.name}</p>
        <p className="menu-item-price font-brown">{item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;
