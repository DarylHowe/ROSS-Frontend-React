import React from "react";

function OrderItem(props) {
  return (
    <div className="orderItem">
      <div className="orderItemName"> {props.item.itemName} </div>

      <button
        className="deleteItemFromOrder"
        onClick={() => props.deleteOrderItem(props.item.itemId)}
      >
        {" "}
        X{" "}
      </button>
      <div className="orderItemPrice"> ${props.item.itemPrice} </div>
    </div>
  );
}

export default OrderItem;
