import React, { useState } from "react";

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
        />
      </form>
    </>
  );
};

export default Input;
