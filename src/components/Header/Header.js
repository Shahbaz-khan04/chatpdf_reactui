import React from "react";
import HeaderText from "./HeaderComponents/HeaderText";
import HeaderButtons from "./HeaderComponents/HeaderButtons";

function Header() {
  return (
    <div className="mt-12 mb-11">
      <HeaderText />
      <HeaderButtons />
    </div>
  );
}

export default Header;
