import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const flexBox = css`
  display: flex;
  justify-content: left;
  gap: 10px;
  border-radius: 20px;
  padding: 0px 5px;
  height: 40px;
  cursor: pointer;
  margin-top: 20px;
`;

const tagBox = css`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 0px 10px 0px 15px;
  height: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const btnStyle = css`
  border: none;
  background-color: #ffffff;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const iconStyle = css`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  cursor: pointer;
`;

const Recent = ({ recent, setRecentList, onSearch }) => {
  const handleDelete = (removeItem) => {
    const newRecent = recent.filter((item) => item !== removeItem);
    localStorage.setItem("recentSearches", JSON.stringify(newRecent));
    setRecentList(newRecent);
  };

  return (
    <div css={flexBox}>
      {[...recent].reverse().map((item, index) => (
        <div css={tagBox}>
          <div key={index} onClick={() => onSearch(item)}>
            {item}
          </div>
          <button css={btnStyle} onClick={() => handleDelete(item)}>
            <img src="/close.png" css={iconStyle} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recent;
