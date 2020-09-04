import React from "react";
import ProcessedOrderItem from "./ProcessedOrderItem";

// For each order display all of the items in the order. This will give a single combined list of items on the UI (instead of seperate multiple orders).
function ProcessedOrder(props) {
  return (
    <div>
      {props.order.itemList.map((item) => (
        <ProcessedOrderItem item={item}></ProcessedOrderItem>
      ))}
    </div>
  );
}

export default ProcessedOrder;
