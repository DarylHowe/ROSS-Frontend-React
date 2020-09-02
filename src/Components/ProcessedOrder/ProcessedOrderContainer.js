import React, { useState, useEffect } from "react";
import axios from "axios";
import ProcessedOrderItem from "./ProcessedOrderItem";
import ProcessedOrder from "./ProcessedOrder";

function ProcessedOrderContainer(props) {
  const [processedOrder, setProcessedOrder] = useState([]);

  useEffect(() => {
    console.log("Load Order");
    console.log(props.activeServerId + ":" + props.activeTable);
    var URL =
      "http://localhost:8080/server/getorderbytablenumber/" +
      props.activeServerId +
      "/" +
      props.activeTable;

    axios
      .get(URL)
      .then((res) => {
        console.log("PROCESSED ORDER");
        console.log(res.data);
        setProcessedOrder(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.activeTable, props.activeServerId]);

  return (
    <div className="processedOrderContainer">
      <div className="processedOrder">
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
        <br></br>
        {processedOrder.map((order) => (
          <ProcessedOrder order={order}></ProcessedOrder>
        ))}
        <div className="orderTotalPrice">
          {" "}
          <br></br>
          <b>Total:</b> $10.99{" "}
        </div>
      </div>
      <button className="closeOrderButton">Close Order</button>
    </div>
  );
}

export default ProcessedOrderContainer;
