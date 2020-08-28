import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderItem from "./OrderItem";

function CurrentOrderContainer(props) {
  return (
    <div className="currentOrderContainer">
      {" "}
      <div>
        {" "}
        Server: <b> SERVER: {props.activeServerId} </b>{" "}
      </div>
      <div>
        {" "}
        Active Table: <b> TABLENUMBER: {props.activeTable} </b>{" "}
      </div>
      CurrentOrder{" "}
      <div className="OrderTitleBar">
        <div className="OrderTitleItem"> Item </div>
        <div className="OrderTitlePrice"> Price </div>
      </div>
      {props.currentOrder.map((item) => (
        <OrderItem item={item}></OrderItem>
      ))}
      <div className="OrderTotalPrice"> Total: $10.99 </div>
      <button class="sendToKitchenButton">Send to Kitchen</button>
    </div>
  );
}

export default CurrentOrderContainer;
