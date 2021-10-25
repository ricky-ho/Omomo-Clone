import ReactDom from "react-dom";

import ModalLayout from "./ModalLayout";
import ModalForm from "../ModalForm";

import "./style.scss";

const Modal = ({
  showModal,
  toggleModal,
  setShowPopup,
  cartIndex,
  item,
  isEdit,
}) => {
  if (!showModal) {
    return null;
  }

  return ReactDom.createPortal(
    <ModalLayout {...{ toggleModal, setShowPopup, item, cartIndex, isEdit }}>
      <div className="modal__img">
        <img src={`${item.product.modalImageURL}`} alt={item.product.name} />
      </div>
      <div className="modal__product-details">
        <h2>{item.product.name}</h2>
        <h3>{item.product.price.toFixed(2)}</h3>
        <p>{item.product.description}</p>
      </div>
      <ModalForm {...{ item }} />
    </ModalLayout>,
    document.getElementById("modal")
  );
};

export default Modal;
