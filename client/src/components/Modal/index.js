import ReactDom from "react-dom";
import { GrFormClose } from "react-icons/gr";

import Form from "../Form";
import ModalLayout from "./ModalLayout";

import "./style.scss";

const Modal = ({ showModal, toggleModal, cartIndex, item, isEdit }) => {
  if (!showModal) {
    return null;
  }

  return ReactDom.createPortal(
    <ModalLayout {...{ toggleModal }}>
      <img src={item.product.imageURL} alt={item.product.name} />
      <section>
        <button type="button" onClick={toggleModal}>
          <GrFormClose size={25} />
        </button>
        <div className="modal__product-details">
          <h2>{item.product.name}</h2>
          <h3>{item.product.price}</h3>
          <p>{item.product.description}</p>
        </div>
        <Form {...{ toggleModal, cartIndex, item, isEdit }} />
      </section>
    </ModalLayout>,
    document.getElementById("modal")
  );
};

export default Modal;
