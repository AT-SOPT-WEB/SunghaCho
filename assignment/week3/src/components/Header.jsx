import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
`;

const btnBox = css`
  display: flex;
  width: 100px;
  height: 50px;
  border-radius: 40px;
  overflow: hidden;
  background-color: #c2c2c2;
  margin: 20px 10px;
`;

const buttonStyle = (active) => css`
  width: 50px;
  height: 100%;
  border: none;
  border-radius: 50px;
  border: 5px solid #c2c2c2;
  background-color: ${active ? "#f8f8f8" : "#c2c2c2"};
  color: ${active ? "#161614" : "#f1f1f1"};
  font-weight: ${active ? "bold" : "normal"};
  transition: all 0.5s ease;
  cursor: pointer;
`;

const imgStyle = css`
  width: 40px;
  height: 40px;
`;

const Header = ({ onTabChange, tab }) => {
  return (
    <div css={container}>
      <img css={imgStyle} src="/github.png" alt="github icon" />
      <div css={btnBox}>
        <button
          css={buttonStyle(tab === "github")}
          onClick={() => onTabChange("github")}
        ></button>
        <button
          css={buttonStyle(tab === "game")}
          onClick={() => onTabChange("game")}
        ></button>
      </div>
      <img css={imgStyle} src="/game.png" alt="baseball icon" />
    </div>
  );
};

export default Header;
