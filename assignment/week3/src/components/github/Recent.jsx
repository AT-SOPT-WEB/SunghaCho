import React from "react";

const Recent = ({ recent }) => {
  return (
    <>
      {recent.map((item, index) => (
        <>
          <div key={index}>{item}</div>
          <button>x</button>
        </>
      ))}
    </>
  );
};

export default Recent;
