import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputStyle = css`
  width: 480px;
  height: 54px;
  border: none;
  border-radius: 40px;
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
    const digits = inputValue.split("");
    const uniqueDigits = new Set(digits);
    if (
      isNaN(inputValue) ||
      inputValue.length !== 3 ||
      uniqueDigits.size !== digits.length
    ) {
      onSubmit(inputValue, false);
      setInputValue("");
    } else {
      onSubmit(inputValue, true);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          placeholder="3자리 숫자를 입력해주세요."
          onChange={handleChange}
          css={inputStyle}
        />
      </form>
    </>
  );
};

export default Input;
