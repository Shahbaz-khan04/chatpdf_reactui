import React from "react";

function HeaderButton({ button }) {
  return (
    <a
      href={button.link}
      className="flex items-center text-sm mr-3 rounded-md px-2 py-1 font-normal border border-gray-500"
    >
      {button.icon} {button.text}
    </a>
  );
}

export default HeaderButton;
