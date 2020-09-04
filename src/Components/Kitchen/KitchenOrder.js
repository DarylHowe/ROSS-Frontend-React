import React from "react";

function Kitchenorder(props) {
  const {
    tableNumber,
    isReadyToBeServed,
    timeStamp,
    totalItems,
    itemList,
  } = props.order;

  return (
    <div className="kitchenOrder">
      <div className="kitchenOrderField">
        Table Number: <b> {tableNumber} </b>
      </div>
      <div className="kitchenOrderField">
        Total Items: <b> {totalItems} </b>
      </div>
      <div className="kitchenOrderField">
        Ready For Service: <b> {isReadyToBeServed.toString()} </b>
      </div>
      <div className="kitchenOrderField"> {timeStamp} </div>
      ______________________
      <br></br>
      <br></br>
      <div>
        {itemList.map((item) => (
          <div>
            <b>{item.itemName}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kitchenorder;
