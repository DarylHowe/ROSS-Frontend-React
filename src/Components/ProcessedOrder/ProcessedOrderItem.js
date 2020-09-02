import React from "react";

function ProcessedOrderItem(props) {
  return (
    <div>
      <div className="orderItemName"> {props.item.itemName} </div>
      <div className="orderItemPrice"> ${props.item.itemPrice} </div>
      <br></br>
    </div>
  );
}

export default ProcessedOrderItem;
