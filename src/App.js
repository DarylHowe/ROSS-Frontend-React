import React, { useState } from "react";
import "./App.css";
import MenuSelectionContainer from "./Components/Menu/MenuSelectionContainer";
import ItemContainer from "./Components/ItemsContainer/ItemContainer";
import ManagementContainer from "./Components/Management/ManagementContainer";
import ServerContainer from "./Components/Server/ServerContainer";
import CurrentOrderContainer from "./Components/CurrentOrder/CurrentOrderContainer";
import ProcessedOrderContainer from "./Components/ProcessedOrder/ProcessedOrderContainer";
import axios from "axios";
import KitchenContainer from "./Components/Kitchen/KitchenContainer";

function App() {
  const [activeMenu, setCurrentMenu] = useState("Main");
  const [activeTable, setActiveTable] = useState(-1);
  const [activeServerId, setActiveServerId] = useState(-1);
  const [currentOrder, setCurrentOrder] = useState({ itemList: [] });

  const addItemToOrder = (item) => {
    console.log(item.itemName);

    setCurrentOrder({
      tableNumber: activeTable,
      itemList: [...currentOrder.itemList, item],
    });
  };

  const sendOrderToKitchen = () => {
    console.log("sendOrderToKitchen");

    console.log("currentOrder");
    console.log(currentOrder);

    axios.post("http://localhost:8080/kitchen/addorder", currentOrder).then(
      (response) => {},
      (error) => {
        console.log(error);
      }
    );

    axios
      .post(
        "http://localhost:8080/server/createorder/" + activeServerId,
        currentOrder
      )
      .then(
        (response) => {},
        (error) => {
          console.log(error);
        }
      );

    setCurrentOrder({
      tableNumber: activeTable,
      itemList: [],
    });
  };

  const serverCreateOrder = () => {
    console.log("serverCreateOrder");

    console.log("currentOrder");
    console.log(currentOrder);

    axios
      .post(
        "http://localhost:8080/server/createorder/" + activeServerId,
        currentOrder
      )
      .then(
        (response) => {},
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="App">
      <ServerContainer
        setActiveTable={(value) => setActiveTable(value)}
        setActiveServerId={(value) => setActiveServerId(value)}
      ></ServerContainer>

      <MenuSelectionContainer
        setActiveMenu={(value) => setCurrentMenu(value)}
      ></MenuSelectionContainer>

      <ItemContainer
        activeMenu={activeMenu}
        addItemToOrder={addItemToOrder}
      ></ItemContainer>

      <CurrentOrderContainer
        currentOrder={currentOrder}
        activeTable={activeTable}
        activeServerId={activeServerId}
        sendOrderToKitchen={(serverCreateOrder, sendOrderToKitchen)}
      ></CurrentOrderContainer>

      <ProcessedOrderContainer
        activeTable={activeTable}
        activeServerId={activeServerId}
      ></ProcessedOrderContainer>

      <KitchenContainer></KitchenContainer>
      <ManagementContainer></ManagementContainer>
    </div>
  );
}

export default App;
