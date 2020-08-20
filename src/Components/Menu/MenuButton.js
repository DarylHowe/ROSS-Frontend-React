import React from "react";

function MenuButton(props) {
  return (
    <button
      className="menuButton"
      onClick={() => props.setActiveMenu(props.name)}
    >
      {props.name}
    </button>
  );
}

export default MenuButton;
