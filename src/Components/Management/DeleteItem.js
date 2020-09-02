import React, { useState } from "react";
import axios from "axios";

function DeleteItem() {
  const [item, setItem] = useState({ itemName: "", itemType: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    deleteFromDatabase();
    setItem({ itemName: "", itemType: "" });
  };

  const deleteFromDatabase = () => {
    const URL =
      "http://localhost:8080/menus/deletemenuitembyname/" +
      item.itemType +
      "/" +
      item.itemName;

    axios.delete(URL).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="deleteItem">
      <b>Delete Item By Name </b>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name.."
          onChange={(e) =>
            setItem({ itemName: e.target.value, itemType: item.itemType })
          }
        />

        <br></br>
        <input
          type="text"
          name="itemType"
          placeholder="Item Type.."
          onChange={(e) =>
            setItem({ itemName: item.itemName, itemType: e.target.value })
          }
        />
        <br></br>
        <input type="submit" value="Delete Item" className="btn" />
      </form>
    </div>
  );
}

export default DeleteItem;
