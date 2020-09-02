import React from "react";

function Server(props) {
  return (
    <div>
      <button
        className="serverButton"
        onClick={() => props.setActiveServer(props.server.serverId)}
      >
        {props.server.serverName} - ID: {props.server.serverId}
      </button>
    </div>
  );
}

export default Server;
