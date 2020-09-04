import React from "react";

// A button to set which table number is currently active.
// Only the tables of the currently active server will be displayed.
function Table(props) {
  return (
    <div>
      <button
        className="tableButton"
        onClick={() => props.setActiveTable(props.tableNumber)}
      >
        Table: {props.tableNumber}
      </button>
    </div>
  );
}

export default Table;
