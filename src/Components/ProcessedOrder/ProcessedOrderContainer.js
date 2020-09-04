import React, { useState, useEffect } from "react";
import axios from "axios";
import ProcessedOrder from "./ProcessedOrder";

// A processed order consists of all the orders combined for a table. A table could have more than one
// single order(the server first puts through starters, then mains and deserts seperately).
// The entire order is displayed here. Once an order has been sent to the kitchen it is considered 'processed'.
function ProcessedOrderContainer(props) {
  const [processedOrder, setProcessedOrder] = useState([]);

  let total = 0;
  {
    processedOrder.map((order) =>
      order.itemList.map((item) => (total = total + item.itemPrice))
    );
  }

  // Attempt to load a processed order every time activeTable or activeServerId is switched.
  useEffect(() => {
    var URL =
      "http://localhost:8080/server/getorderbytablenumber/" +
      props.activeServerId +
      "/" +
      props.activeTable;

    axios
      .get(URL)
      .then((res) => {
        setProcessedOrder(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.activeTable, props.activeServerId]);

  return (
    <div className="processedOrderContainer">
      <div className="processedOrder">
        <div className="orderTitleBarProcessed">
          <div className="orderTitleItemProcessed">
            <b>Item</b>
          </div>

          <div className="orderTitlePriceProcessed">
            <b>Price</b>
          </div>
        </div>
        <br />
        {
          // For each order create a processed order (remember a table can have more than a single order).
        }
        {processedOrder.map((order) => (
          <ProcessedOrder order={order}></ProcessedOrder>
        ))}

        <div className="orderTotalPriceProcessed">
          <br />
          <b>Total:</b> ${total}
        </div>
      </div>

      <button className="closeOrderButton">Close Order</button>
    </div>
  );
}

export default ProcessedOrderContainer;
