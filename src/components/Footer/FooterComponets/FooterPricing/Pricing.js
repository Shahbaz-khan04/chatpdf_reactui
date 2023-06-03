import React from "react";
import PricingHeader from "./PricingHeader";
import PricingCards from "./PricingCards";

function Pricing({ closeModal }) {
  return (
    <div className="px-6 py-4 text-black ">
      <PricingHeader closeModal={closeModal} />
      <PricingCards />
    </div>
  );
}

export default Pricing;
