import { useState, useEffect, useContext } from "react";

import CartContext from "../../contexts/Cart/cart-context";
import Loader from "../../components/Loader";
import Menu from "./Menu";
import Modal from "../../components/Modal";
import { getMenu } from "../../utils/menuUtils";
import "./style.scss";

/* 
  TO DO:
  - Filter menu categories and display each drink under their respective categories
  - Create new modal popup with drink options
*/

const MenuPage = () => {
  const { cartLimit, cartQuantity, handleAddToCart } = useContext(CartContext);

  const [menuData, setMenuData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const [showModal, setshowModal] = useState(false);
  // const [clickedItem, setclickedItem] = useState(null);

  // const clickedMenuItem = (item) => setclickedItem(item);
  // const toggleModal = () => setshowModal(!showModal);

  useEffect(() => {
    const fetchMenuData = async () => {
      const menu = await getMenu();
      setMenuData(menu);
      setIsLoading(false);
    };

    fetchMenuData();
  }, []);

  const content = isLoading ? <Loader /> : <Menu menuData={menuData} />;

  return (
    <main id="menu">
      {content}
      {/* <Modal
        toggleModal={toggleModal}
        item={clickedItem}
        cartLimit={cartLimit}
        cartQuantity={cartQuantity}
        handleAddToCart={handleAddToCart}
      /> */}
    </main>
  );
};

export default MenuPage;
