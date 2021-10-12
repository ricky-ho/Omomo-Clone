import { useState, useEffect } from "react";

import Menu from "./Menu";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Modal from "../../components/Modal";
import { getMenu, getOptions } from "../../utils/menuUtils";

import "./style.scss";

const MenuPage = () => {
  const [menuData, setMenuData] = useState();
  const [options, setOptions] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleClick = (product) => setCurrentProduct(product);
  const toggleModal = () => setShowModal(!showModal);

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

  useEffect(() => {
    const getDefaultOptions = async () => {
      try {
        const defaultOptions = await getOptions();
        setOptions(defaultOptions);
      } catch (error) {
        setIsError(true);
      }
    };

    getDefaultOptions();
  }, []);

  const content = isError ? (
    <Error />
  ) : isLoading ? (
    <Loader />
  ) : (
    <Menu
      menuData={menuData}
      toggleModal={toggleModal}
      clickedMenuItem={handleClick}
    />
  );

  return (
    <main id="menu">
      {content}
      <Modal
        {...{ showModal, toggleModal, options }}
        product={currentProduct}
      />
    </main>
  );
};

export default MenuPage;
