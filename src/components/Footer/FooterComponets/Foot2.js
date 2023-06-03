import React, { useEffect, useState, useRef } from "react";
import Pricing from "./FooterPricing/Pricing";

function Foot2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.body.classList.add("modal-open");
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  return (
    <div>
      <button onClick={openModal}>Pricing Plans</button>
      {isModalOpen && (
        <div className="overlay">
          <div
            ref={modalRef}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white pricingW-H border border-gray-300 rounded-md"
          >
            <div className="modal-content">
              <Pricing closeModal={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Foot2;
