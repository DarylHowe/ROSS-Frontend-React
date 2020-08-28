import React from "react";

function OrderItem(props) {
  return (
    <div className="orderItem">
      <div className="orderItemName"> {props.item.itemName} </div>
      <div className="orderItemPrice"> ${props.item.itemPrice} </div>

      <button className="orderDeleteButton"> X </button>
    </div>
  );
}

export default OrderItem;
