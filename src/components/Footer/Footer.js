import React from "react";
import Foot1 from "./FooterComponets/Foot1";
import Foot2 from "./FooterComponets/Foot2";

function Footer() {
  return (
    <div className="flex justify-center custom-divider mt-3 mb-2 text-sm text-slate-500">
      <Foot1 />
      <Foot2 />
    </div>
  );
}

export default Footer;
