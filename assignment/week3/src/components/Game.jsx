import React, { useState, useEffect } from "react";
import Input from "./game/Input";
import Message from "./game/Message";
import List from "./game/List";

const Game = () => {
  const [secretNum, setSecretNum] = useState([]);

  const createSecretNum = () => {
    const numList = [];
    while (numList.length < 3) {
      const rand = Math.floor(Math.random() * 10);
      if (!numList.includes(rand)) {
        numList.push(rand);
      }
    }
    return numList;
  };

  useEffect(() => {
    setSecretNum(createSecretNum());
  }, []);

  console.log(secretNum);

  const checkAnswer = (input, secretNum) => {
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
  };

  const [inputValue, setInputValue] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [history, setHistory] = useState([]);

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

  useEffect(() => {
    if (result == "") return;
    setHistory((prev) => [...prev, { inputValue, ...result }]);
  }, [inputValue]);

  useEffect(() => {
    if (result?.strike === 3) {
      const timeout = setTimeout(() => {
        setSecretNum(createSecretNum());
        setInputValue(null);
        setIsValid(true);
        setHistory([]);
      }, 3000);
      return () => clearTimeout(timeout);
    } else if (history?.length >= 10) {
      const timeout = setTimeout(() => {
        setSecretNum(createSecretNum());
        setInputValue(null);
        setIsValid(true);
        setHistory([]);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [history, result]);

  console.log(secretNum);

  return (
    <div>
      <Input onSubmit={handleInputSubmit} />
      {(result || !isValid) && (
        <Message isValid={isValid} result={result} count={history.length} />
      )}
      {inputValue && <List history={history} />}
    </div>
  );
};

export default Game;
