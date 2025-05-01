import React, { useState, useEffect } from "react";

const Message = ({ isValid, result, count }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!result) return;
    const { strike, ball } = result;

    if (strike === 0 && ball === 0) {
      setMessage("OUT");
    } else if (strike === 3) {
      setMessage("정답입니다! 3초 뒤에 게임이 리셋됩니다.");
    } else if (count === 10) {
      setMessage(
        "게임 오버! 10번을 넘겨서 실패하였습니다. 게임이 초기화됩니다."
      );
    } else {
      setMessage(`${strike} 스트라이크 ${ball} 볼`);
    }
  }, [result]);

  return (
    <>
      {!isValid && <div>서로 다른 숫자 3자리를 입력해주세요.</div>}
      {isValid && <div>{message}</div>}
    </>
  );
};

export default Message;
