import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const invalidMessage = css`
  animation: ${slideUp} 0.4s ease;
  width: fit-content;
  padding: 0px 30px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #bfbfbf;
  color: #030303;
  border-radius: 18px;
  margin-top: 20px;
  text-align: center;
`;

const validMessage = css`
  animation: ${slideUp} 0.4s ease;
  width: fit-content;
  padding: 0px 30px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #007aff;
  color: #ffffff;
  border-radius: 18px;
  margin-top: 20px;
  text-align: center;
`;

const Message = ({ isValid, result, count }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!result) return;
    const { strike, ball } = result;

    if (count === 10) {
      setMessage(
        "게임 오버! 10번을 넘겨서 실패하였습니다. 게임이 초기화됩니다."
      );
    } else if (strike === 3) {
      setMessage("정답입니다! 3초 뒤에 게임이 리셋됩니다.");
    } else if (strike === 0 && ball === 0) {
      setMessage("OUT");
    } else {
      setMessage(`${strike} 스트라이크 ${ball} 볼`);
    }
  }, [result]);

  return (
    <>
      {!isValid && (
        <div css={invalidMessage}>서로 다른 숫자 3자리를 입력해주세요.</div>
      )}
      {isValid && <div css={validMessage}>{message}</div>}
    </>
  );
};

export default Message;
