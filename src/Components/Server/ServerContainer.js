import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import Server from "./Server";

// Contains a list of servers.
// The active server ID can be selected via the 'Server' button(s).
// Depending on which server is active their list of active tables will be displayed.
// A server can create/add a new table to their active tables list.
// The active table can be selected via the 'Table' button(s).
function ServerContainer(props) {
  const [serverList, setServerList] = useState([]);
  const [activeServerTableList, setActiveServerTableList] = useState([]);
  const [newTableNumber, setNewTableNumber] = useState();

  // Loads all the servers on application load.
  useEffect(() => {
    axios
      .get("http://localhost:8080/server/getallservers")
      .then((res) => {
        setServerList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Gets a servers active table numbers list.
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/server/getservertables/" + props.activeServerId
      )
      .then((res) => {
        setActiveServerTableList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.activeServerId]);

  // Submit button for createNewTable
  const onSubmit = (e) => {
    e.preventDefault();
    addTableToServerList();
    setNewTableNumber();
  };

  // Updates 'newTableNumber' every time user enters/removes a digit from create table input.
  const onCreateNewTableChange = (e) => {
    setNewTableNumber(e.target.value);
  };

  // Adds a new table (as specified using the text input) to the active servers table list.
  const addTableToServerList = () => {
    const URL =
      "http://localhost:8080/server/addtabletotablelist/" +
      props.activeServerId +
      "/" +
      newTableNumber;

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
    <div className="serverContainer">
      <div className="serverInfo">
        <b>Active Server ID: {props.activeServerId}</b>
        <br></br>
        <b>Active Table: {props.activeTable}</b>
      </div>

      <div className="serverSelection">
        <b>Servers:</b>
        <br />
        <br />
        {serverList.map((server) => (
          <Server
            key={server.serverId}
            server={server}
            setActiveServerId={props.setActiveServerId}
          ></Server>
        ))}
      </div>

      <div className="tableListDisplay">
        <b>Tables:</b>
        <br />
        <br />
        {activeServerTableList.map((tableList) => (
          <Table
            key={tableList}
            tableNumber={tableList}
            setActiveTable={props.setActiveTable}
          ></Table>
        ))}
      </div>

      <div className="createNewTable">
        <b>Create Table:</b>
        <br />
        <br />
        <form onSubmit={onSubmit} className="submitTableNumber">
          <input
            type="text"
            name="createTable"
            placeholder="Enter New Table.."
            onChange={onCreateNewTableChange}
          />
          <br />
          <input
            type="submit"
            value="Create Table"
            className="submitTableNumberButton"
          />
        </form>
      </div>
    </div>
  );
}

export default ServerContainer;
