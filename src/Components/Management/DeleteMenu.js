import React, { useState } from "react";
import axios from "axios";

function DeleteMenu() {
  const [menuName, setMenuName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    deleteMenuFromDatabase();
    setMenuName("");
  };

  const deleteMenuFromDatabase = () => {
    const URL = "http://localhost:8080/menus/deletemenubyname/" + menuName;

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
    <div>
      <b>Delete Menu By Name </b>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="menuName"
          placeholder="Menu Name.."
          onChange={(e) => setMenuName(e.target.value)}
        />

        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
}

export default DeleteMenu;
