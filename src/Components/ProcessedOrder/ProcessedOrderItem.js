import React from "react";

// An item which is part of an order that has already been processed. An order has been 'processed' if it
// has been sent to the kitchen.
function ProcessedOrderItem(props) {
  return (
    <div>
      <div className="orderItemNameProcessed"> {props.item.itemName} </div>
      <div className="orderItemPriceProcessed"> ${props.item.itemPrice} </div>
      <br></br>
    </div>
  );
}

export default ProcessedOrderItem;
