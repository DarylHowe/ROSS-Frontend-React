import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemButton from "./ItemButton";

function ItemContainer(props) {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/menus/getallmenuitems/" + props.activeMenu)
      .then((res) => {
        setItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.activeMenu]);

  return (
    <div className="itemContainer">
      {itemList.map((item) => (
        <ItemButton
          key={item.itemId}
          item={item}
          addItemToOrder={props.addItemToOrder}
        ></ItemButton>
      ))}
    </div>
  );
}

export default ItemContainer;
