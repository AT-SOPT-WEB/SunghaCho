import React, { useState } from "react";
import Input from "./game/Input";
import Message from "./game/Message";
import List from "./game/List";

const Game = () => {
  const [inputValue, setInputValue] = useState(null);
  const [message, setMessage] = useState(null);

  const handleInputSubmit = (value, valid) => {
    if (valid) {
      setInputValue(value);
      setMessage("스트라이크/볼/아웃");
    } else {
      setMessage("서로 다른 숫자 3자리를 입력해주세요.");
    }
  };

  return (
    <div>
      <Input onSubmit={handleInputSubmit} />
      <Message message={message} />
      <List inputValue={inputValue} />
    </div>
  );
};

export default Game;
