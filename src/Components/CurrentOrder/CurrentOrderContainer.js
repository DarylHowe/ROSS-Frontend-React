import React from "react";
import OrderItem from "./OrderItem";

function CurrentOrderContainer(props) {
  return (
    <div className="currentOrderContainer">
      <div className="currentOrder">
        <div>
          <b> Server ID: {props.activeServerId} </b>
        </div>
        <div>
          <b> Active Table: {props.activeTable} </b>
        </div>

        <div className="orderTitleBar">
          <div className="orderTitleItem">
            <b>Item</b>
          </div>

          <div className="orderTitlePrice">
            <b>Price</b>
          </div>
        </div>

        {props.currentOrder.itemList.map((item) => (
          <OrderItem item={item}></OrderItem>
        ))}
        <br></br>
        <div className="orderTotalPrice">
          {" "}
          <b>Total:</b> $10.99{" "}
        </div>
        <br></br>
        <br></br>
      </div>
      <button
        className="sendToKitchenButton"
        onClick={props.sendOrderToKitchen}
      >
        Send to Kitchen
      </button>
    </div>
  );
}

export default CurrentOrderContainer;
