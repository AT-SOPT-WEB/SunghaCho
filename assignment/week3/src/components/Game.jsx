import React, { useState, useEffect } from "react";
import Input from "./game/Input";
import Message from "./game/Message";
import List from "./game/List";

const Game = () => {
  const [secretNum, setSecretNum] = useState([]);

  useEffect(() => {
    const numList = [];
    while (numList.length < 3) {
      const rand = Math.floor(Math.random() * 10);
      if (!numList.includes(rand)) {
        numList.push(rand);
      }
    }

    setSecretNum(numList);
  }, []);

  console.log(secretNum);

  function checkAnswer(input, secretNum) {
    const inputNum = input.split("").map(Number);

    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (inputNum[i] === secretNum[i]) {
        strike++;
      } else if (secretNum.includes(inputNum[i])) {
        ball++;
      }
    }

    return { strike, ball };
  }

  const [inputValue, setInputValue] = useState(null);
  const [isValid, setIsValid] = useState(true);

  const handleInputSubmit = (value, valid) => {
    if (valid) {
      setInputValue(value);
      setIsValid(valid);
    } else {
      setIsValid(valid);
    }
  };

  const result =
    inputValue && inputValue.length === 3 && isValid
      ? checkAnswer(inputValue, secretNum)
      : "";

  return (
    <div>
      <Input onSubmit={handleInputSubmit} />
      <Message isValid={isValid} result={result} />
      <List inputValue={inputValue} result={result} />
    </div>
  );
};

export default Game;
