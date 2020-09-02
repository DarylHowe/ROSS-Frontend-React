import React from "react";

function ItemButton(props) {
  const { itemName, itemPrice } = props.item;

  return (
    <button
      className="itemButton"
      onClick={() => props.addItemToOrder(props.item)}
    >
      {itemName}
      <br></br>
      <br></br>${itemPrice}
    </button>
  );
}

export default ItemButton;
