import React, { useState } from "react";
import axios from "axios";

function CreateNewMenu() {
  const [menuName, setMenuName] = useState("");

  const onMenuNameChange = (e) => {
    setMenuName(e.target.value);
    console.log(menuName);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postToDatabase();
    setMenuName("");
  };

  const postToDatabase = () => {
    const URL = "http://localhost:8080/menus/createemptymenu/" + menuName;
    axios.post(URL).then(
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
      <b>Create New Menu </b>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="menuName"
          placeholder="Menu Name.."
          onChange={onMenuNameChange}
        />

        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
}

export default CreateNewMenu;
