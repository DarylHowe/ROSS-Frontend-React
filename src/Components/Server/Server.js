import React from "react";

// A button to select which server is currently active.
// Each server will have their own server button containing their name and serverID.
// When pressed the active serverID will be set to the corresponding server.
function Server(props) {
  return (
    <div>
      <button
        className="serverButton"
        onClick={() => props.setActiveServerId(props.server.serverId)}
      >
        {props.server.serverName} - ID: {props.server.serverId}
      </button>
    </div>
  );
}

export default Server;
