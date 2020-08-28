import React from "react";

function Table(props) {
  return (
    <div>
      <button
        className="tableNumberButton"
        onClick={() => props.setActiveTable(props.tableNumber)}
      >
        Table: {props.tableNumber}{" "}
      </button>
    </div>
  );
}

export default Table;
