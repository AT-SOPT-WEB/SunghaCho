import React from "react";

const Header = ({ onTabChange }) => {
  return (
    <div>
      <h1>숫자야구 / 깃허브 검색</h1>
      <button onClick={() => onTabChange("github")}>Github</button>
      <button onClick={() => onTabChange("game")}>숫자야구</button>
    </div>
  );
};

export default Header;
