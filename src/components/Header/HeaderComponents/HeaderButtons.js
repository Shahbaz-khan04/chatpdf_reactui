import React from "react";
import HeaderButton from "./HeaderButton";
import { headerButton } from "../../../data/headerButton";

function HeaderButtons() {
  return (
    <div className="flex justify-center ml-3">
      {headerButton.map((button, index) => (
        <HeaderButton button={button} key={index} />
      ))}
    </div>
  );
}

export default HeaderButtons;
