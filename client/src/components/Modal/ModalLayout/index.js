import { useRef } from "react";

const ModalLayout = ({ toggleModal, children }) => {
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current === e.target) {
      toggleModal();
    }
  };

  return (
    <div
      className="modal__container"
      ref={modalRef}
      onClick={handleClickOutside}
    >
      <div className="modal__content">{children}</div>
    </div>
  );
};

export default ModalLayout;
