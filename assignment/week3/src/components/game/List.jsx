import React from "react";
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

const container = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const listBox = css`
  animation: ${slideUp} 0.4s ease;
  width: 50%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #34c759;
  color: #ffffff;
  border-radius: 18px;
  margin-top: 20px;
  text-align: center;
`;

const List = ({ history }) => {
  if (!history) return;
  return (
    <div css={container}>
      {history.map((item, idx) => (
        <div key={idx} css={listBox}>
          {item.inputValue} - {item.strike}S {item.ball}B
        </div>
      ))}
    </div>
  );
};

export default List;
