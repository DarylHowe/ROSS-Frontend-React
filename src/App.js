import React, { useState } from "react";
import "./App.css";
import MenuSelectionContainer from "./Components/Menu/MenuSelectionContainer";
import ItemContainer from "./Components/ItemsContainer/ItemContainer";
import ManagementContainer from "./Components/Management/ManagementContainer";
import ServerContainer from "./Components/Server/ServerContainer";
import CurrentOrderContainer from "./Components/CurrentOrder/CurrentOrderContainer";

function App() {
  const [activeMenu, setCurrentMenu] = useState("Main");
  const [activeTable, setActiveTable] = useState(-1);
  const [activeServerId, setActiveServerId] = useState(0);

  const [order, setOrder] = useState([]);

  const [currentOrder, setCurrentOrder] = useState({
    tableNumber: 32,
    itemList: [
      {
        itemName: "Steak",
        itemPrice: 9.0,
        itemType: "Main",
      },
    ],
  });

  const addItemToOrder = (item) => {
    console.log(item.itemName);
    setOrder([...order, item]);
    console.log(order);
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
        currentOrder={order}
        activeTable={activeTable}
        activeServerId={activeServerId}
      ></CurrentOrderContainer>

      <ManagementContainer></ManagementContainer>
    </div>
  );
}

export default App;
