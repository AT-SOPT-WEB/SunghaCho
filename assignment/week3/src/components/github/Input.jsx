import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputStyle = css`
  width: 480px;
  height: 54px;
  border-radius: 40px;
  border: none;
  padding: 0px 20px;
  font-size: 16px;
`;

const Input = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Github 프로필을 검색해보세요."
          value={inputValue}
          onChange={handleChange}
          css={inputStyle}
        />
      </form>
    </>
  );
};

export default Input;
