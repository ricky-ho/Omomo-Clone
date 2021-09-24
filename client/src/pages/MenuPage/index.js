import React, { useState, useEffect, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import CartContext from "../../contexts/Cart/cart-context";
import MenuItem from "./MenuItem/";
import Modal from "../../components/Modal";
import "./style.scss";

const MenuPage = () => {
  const { cartLimit, cartQuantity, handleAddToCart } = useContext(CartContext);

  const [menu, setMenu] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [showModal, setshowModal] = useState(false);
  const toggleModal = () => setshowModal(!showModal);

  const [clickedItem, setclickedItem] = useState(null);
  const clickedMenuItem = (item) => setclickedItem(item);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("/products");

      if (!response.ok) {
        console.log("Response not valid");
      }

      const data = await response.json();
      setMenu(data);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  return (
    <main id="menu">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="menu-container">
          {menu &&
            menu.map(
              (product, index) =>
                product.inStock && (
                  <MenuItem
                    key={index}
                    item={product}
                    toggleModal={toggleModal}
                    handleClick={clickedMenuItem}
                  />
                )
            )}
        </div>
      )}

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

export default MenuPage;
