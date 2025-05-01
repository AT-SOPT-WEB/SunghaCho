import React from "react";

const List = ({ history }) => {
  if (!history) return;
  return (
    <>
      {history.map((item, idx) => (
        <div key={idx}>
          {item.inputValue} - {item.strike}S {item.ball}B
        </div>
      ))}
    </>
  );
};

export default List;
