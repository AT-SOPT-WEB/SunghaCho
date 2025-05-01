import React, { useState, useEffect } from "react";

const List = ({ inputValue, result }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (inputValue && result) {
      setHistory((prev) => [...prev, { inputValue, ...result }]);
    }
  }, [inputValue, result]);

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
