import React from "react";

// Each menu is assinged a button.
// The 'activeMenu' can be selected via pressing the corresponding menu button.
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
