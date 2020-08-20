import React from "react";
import CreateNewMenu from "./CreateNewMenu";
import CreateNewItem from "./CreateNewItem";
import DeleteItem from "./DeleteItem";
import DeleteMenu from "./DeleteMenu";

function ManagementContainer() {
  return (
    <div className="managementContainer">
      <CreateNewMenu></CreateNewMenu>
      <CreateNewItem></CreateNewItem>
      <DeleteItem></DeleteItem>
      <DeleteMenu></DeleteMenu>
    </div>
  );
}

export default ManagementContainer;
