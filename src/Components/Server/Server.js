import React from "react";

function Server(props) {
  return (
    <div>
      <button onClick={() => props.setActiveServer(props.server.serverId)}>
        {props.server.serverName}
        {props.server.serverId}
      </button>
    </div>
  );
}

export default Server;
