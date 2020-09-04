import React, { useState } from "react";
import axios from "axios";

function CreateNewItem() {
  const [newItem, setNewItem] = useState({
    itemName: "",
    itemPrice: 0,
    itemType: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    postToDatabase();
    setNewItem({ itemName: "", itemPrice: 0, itemType: "" });
  };

  const postToDatabase = () => {
    const URL =
      "http://localhost:8080/menus/addnewitemtomenu/" + newItem.itemType;
    axios.post(URL, newItem).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="createNewItem">
      <b>Create New Food Item</b>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="itemName"
          placeholder="Item Name.."
          onChange={(e) =>
            setNewItem({
              itemName: e.target.value,
              itemPrice: newItem.itemPrice,
              itemType: newItem.itemType,
            })
          }
        />
        <br></br>

        <input
          type="text"
          name="itemPrice"
          placeholder="Item Price.."
          onChange={(e) =>
            setNewItem({
              itemName: newItem.itemName,
              itemPrice: parseFloat(e.target.value),
              itemType: newItem.itemType,
            })
          }
        />
        <br></br>

        <input
          type="text"
          name="itemType"
          placeholder="Item Type.."
          onChange={(e) =>
            setNewItem({
              itemName: newItem.itemName,
              itemPrice: newItem.itemPrice,
              itemType: e.target.value,
            })
          }
        />

        <br></br>
        <input type="submit" value="Create New Item" className="btn" />
      </form>
    </div>
  );
}

export default CreateNewItem;
