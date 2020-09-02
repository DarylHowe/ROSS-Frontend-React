import React from "react";
import ProcessedOrderItem from "./ProcessedOrderItem";

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
