import React, { useState, useEffect } from "react";
import axios from "axios";
import KitchenOrder from "./KitchenOrder";

let kitchenButtonArray = [0, 1, 2, 3, 4, 5, 6, 7];
let serverButtonArray = [0, 1, 2, 3, 4, 5, 6, 7];

const orderIsReady = (kitchenButtonNumber) => {
  console.log("Order is ready");
  console.log(kitchenButtonNumber);

  axios
    .post(
      "http://localhost:8080/kitchen/orderisreadybyid/".concat(
        kitchenButtonNumber
      )
    )
    .then(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
};

const orderIsServed = (serverButtonNumber) => {
  console.log("Order is served");
  console.log(serverButtonNumber);

  axios
    .post(
      "http://localhost:8080/kitchen/orderisservedbyid/".concat(
        serverButtonNumber
      )
    )
    .then(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );
};

function KitchenContainer() {
  const [kitchenOrderList, setKitchenOrderList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/kitchen/getallorders")
      .then((res) => {
        console.log(res);
        setKitchenOrderList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="kitchenContainer">
      {kitchenOrderList.map((order) => (
        <KitchenOrder key={order.orderId} order={order}></KitchenOrder>
      ))}

      <br></br>
      <div className="kitchenButtons">
        {kitchenButtonArray.map((kitchenButtonNumber) => (
          <button
            className="kitchenChefButton"
            key={kitchenButtonNumber}
            onClick={() =>
              orderIsReady(kitchenOrderList[kitchenButtonNumber].orderId)
            }
          >
            {kitchenButtonNumber} Kitchen
          </button>
        ))}

        <div />

        {serverButtonArray.map((serverButtonNumber) => (
          <button
            className="kitchenServerButton"
            key={serverButtonNumber}
            onClick={() =>
              orderIsServed(kitchenOrderList[serverButtonNumber].orderId)
            }
          >
            {serverButtonNumber} Server
          </button>
        ))}
      </div>
    </div>
  );
}

export default KitchenContainer;
