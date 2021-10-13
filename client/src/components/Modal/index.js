import ReactDom from "react-dom";

import Form from "../Form";
import ModalLayout from "./ModalLayout";

import "./style.scss";

const Modal = ({ showModal, toggleModal, product }) => {
  if (!showModal) {
    return null;
  }

  return ReactDom.createPortal(
    <ModalLayout {...{ toggleModal }}>
      <img src={product.imageURL} alt={product.name} />
      <section>
        <button type="button" onClick={toggleModal}>
          X
        </button>{" "}
        <div className="modal__product-details">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
        <Form {...{ toggleModal, product }} />
      </section>
    </ModalLayout>,
    document.getElementById("modal")
  );
};

export default Modal;
