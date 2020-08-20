import React, { useState } from "react";
import "./App.css";
import MenuSelectionContainer from "./Components/Menu/MenuSelectionContainer";
import ItemContainer from "./Components/ItemsContainer/ItemContainer";
import ManagementContainer from "./Components/Management/ManagementContainer";

function App() {
  const [activeMenu, setCurrentMenu] = useState("Main");
  const [order, setOrder] = useState([]);

  const addItemToOrder = (item) => {
    console.log(item.itemName);
    setOrder([...order, item]);
    console.log(order);
  };

  return (
    <div className="App">
      <MenuSelectionContainer
        setActiveMenu={(value) => setCurrentMenu(value)}
      ></MenuSelectionContainer>
      <ItemContainer
        activeMenu={activeMenu}
        addItemToOrder={addItemToOrder}
      ></ItemContainer>
      <ManagementContainer></ManagementContainer>
    </div>
  );
}

export default App;
