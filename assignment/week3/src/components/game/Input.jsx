import React, { useState } from "react";

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
    } else {
      onSubmit(inputValue, true);
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
        />
      </form>
    </>
  );
};

export default Input;
