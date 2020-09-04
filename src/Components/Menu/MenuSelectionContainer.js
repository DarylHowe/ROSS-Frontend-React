import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuButton from "./MenuButton";

// The selection of menus to choose from.
function MenuSelectionContainer(props) {
  const [menuList, setMenuList] = useState([]);

  // Load all the menus from database on application load.
  useEffect(() => {
    axios
      .get("http://localhost:8080/menus/getallmenunames")
      .then((res) => {
        setMenuList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="menuSelectionContainer">
      {menuList.map((menu) => (
        <MenuButton
          key={menu.menuId}
          name={menu.menuName}
          setActiveMenu={props.setActiveMenu}
        ></MenuButton>
      ))}
    </div>
  );
}

export default MenuSelectionContainer;
