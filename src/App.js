import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MenuSelectionContainer from "./Components/Menu/MenuSelectionContainer";
import ItemContainer from "./Components/ItemsContainer/ItemContainer";
import ManagementContainer from "./Components/Management/ManagementContainer";
import ServerContainer from "./Components/Server/ServerContainer";
import CurrentOrderContainer from "./Components/CurrentOrder/CurrentOrderContainer";
import ProcessedOrderContainer from "./Components/ProcessedOrder/ProcessedOrderContainer";
import KitchenContainer from "./Components/Kitchen/KitchenContainer";

function App() {
  const [activeMenu, setCurrentMenu] = useState("Main");

  // '20' is defualt on load as server 'Daryl Howe' has a table number = 20
  const [activeTable, setActiveTable] = useState(20);

  // '0' is default on load as server 'Daryl Howe' has an ID = 0
  const [activeServerId, setActiveServerId] = useState(0);
  const [currentOrder, setCurrentOrder] = useState({ itemList: [] });

  // Adds an item to the 'itemList' within the current order.
  const addItemToOrder = (item) => {
    setCurrentOrder({
      tableNumber: activeTable,
      itemList: [...currentOrder.itemList, item],
    });
  };

  // Send an order to the kitchen.
  // The 'currentOrder -> itemList[]' is reset/cleared to a default state so another order can be made.
  // Note this method calls 'serverCreateOrder()'
  const sendOrderToKitchen = () => {
    serverCreateOrder();

    axios.post("http://localhost:8080/kitchen/addorder", currentOrder).then(
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

  // Deletes an item by Id if it is contained in the the 'currentOrder -> itemList[]'
  const deleteOrderItem = (itemId) => {
    setCurrentOrder({
      tableNumber: activeTable,
      itemList: [
        ...currentOrder.itemList.filter((item) => item.itemId !== itemId),
      ],
    });
  };

  return (
    <div className="App">
      <ServerContainer
        setActiveTable={(value) => setActiveTable(value)}
        setActiveServerId={(value) => setActiveServerId(value)}
        activeTable={activeTable}
        activeServerId={activeServerId}
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
        sendOrderToKitchen={sendOrderToKitchen}
        deleteOrderItem={deleteOrderItem}
      ></CurrentOrderContainer>

      <ProcessedOrderContainer
        activeTable={activeTable}
        activeServerId={activeServerId}
      ></ProcessedOrderContainer>

      <KitchenContainer />
      <ManagementContainer />
    </div>
  );
}

export default App;
