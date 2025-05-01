import React from "react";

const Recent = ({ recent, setRecentList }) => {
  const handleDelete = (removeItem) => {
    const newRecent = recent.filter((item) => item !== removeItem);
    localStorage.setItem("recentSearches", JSON.stringify(newRecent));
    setRecentList(newRecent);
  };

  return (
    <>
      {recent.map((item, index) => (
        <>
          <div key={index}>{item}</div>
          <button onClick={() => handleDelete(item)}>x</button>
        </>
      ))}
    </>
  );
};

export default Recent;
