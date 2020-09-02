import React, { useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import Server from "./Server";

function ServerContainer(props) {
  const [serverList, setServerList] = useState([]);
  const [activeServerId, setActiveServerId] = useState(-1);
  const [activeServerTableList, setActiveServerTableList] = useState([]);
  const [activeTable, setActiveTable] = useState(-1);
  const [newTableNumber, setNewTableNumber] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/server/getallservers")
      .then((res) => {
        console.log(res);
        setServerList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/server/getservertables/" + activeServerId)
      .then((res) => {
        console.log(res);
        setActiveServerTableList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeServerId]);

  const onSubmit = (e) => {
    e.preventDefault();
    postToDatabase();
    setNewTableNumber();
  };

  const onCreateNewTableChange = (e) => {
    setNewTableNumber(e.target.value);
  };

  const postToDatabase = () => {
    const URL =
      "http://localhost:8080/server/addtabletotablelist/" +
      activeServerId +
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
        <b>Active Server ID: {activeServerId}</b>
        <br></br>
        <b>Active Table: {activeTable}</b>
      </div>
      <div className="serverSelection">
        <b>Servers:</b>
        <br></br>
        <br></br>
        {serverList.map((server) => (
          <Server
            key={server.serverId}
            server={server}
            setActiveServer={(value) => setActiveServerId(value)}
            setActiveTable={() => setActiveTable("NO ACTIVE TABLE")}
            setActiveTable={props.setActiveTable(activeTable)}
            setActiveServerId={props.setActiveServerId(activeServerId)}
          ></Server>
        ))}
      </div>

      <div className="tableListDisplay">
        <b>Tables:</b>
        <br></br>
        <br></br>
        {activeServerTableList.map((tableList) => (
          <Table
            key={tableList}
            tableNumber={tableList}
            setActiveTable={(value) => setActiveTable(value)}
          ></Table>
        ))}
      </div>
      <div className="createNewTable">
        <b>Create Table:</b>
        <br></br>
        <br></br>
        <form onSubmit={onSubmit} className="submitTableNumber">
          <input
            type="text"
            name="createTable"
            placeholder="Enter New Table.."
            onChange={onCreateNewTableChange}
          />
          <br></br>
          <input
            className="submitButton"
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
