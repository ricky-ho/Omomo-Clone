import { useState, useEffect } from "react";

import Menu from "./Menu";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Modal from "../../components/Modal";
import { getMenu } from "../../utils/menuUtils";

import "./style.scss";

const MenuPage = ({ setShowPopup }) => {
  const [menuData, setMenuData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();

  const toggleModal = () => setShowModal(!showModal);
  const handleClick = (product) => setCurrentProduct({ product, quantity: 1 });

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const menu = await getMenu();
        setMenuData(menu);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchMenuData();
  }, []);

  const content = isError ? (
    <Error />
  ) : isLoading ? (
    <Loader />
  ) : (
    <Menu clickedMenuItem={handleClick} {...{ menuData, toggleModal }} />
  );

  return (
    <main id="menu">
      {content}
      <Modal
        {...{ showModal, toggleModal, setShowPopup }}
        item={currentProduct}
      />
    </main>
  );
};

export default MenuPage;
