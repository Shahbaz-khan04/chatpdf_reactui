import React from "react";

function PricingHeader({ closeModal }) {
  return (
    <div>
      <div className="flex mb-2">
        <h1 className="text-lg font-medium">My Account</h1>
        <button className="ml-auto" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="flex items-center">
        <span>kingshahbaz0313@gmail.com</span>
        <button className="ml-auto border border-gray-300 px-4 py-1 rounded-lg">
          Signout
        </button>
      </div>
    </div>
  );
}

export default PricingHeader;
