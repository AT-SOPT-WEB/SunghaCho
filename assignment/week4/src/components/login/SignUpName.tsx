/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../styled/Button";
import Input from "../styled/Input";

const linkstyle = css`
  text-decoration: none;
`;

type SignUpNameProps = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  handleSignupStep: () => void;
};

const SignUpName = ({
  nickname,
  setNickname,
  handleSignupStep,
}: SignUpNameProps) => {
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  useEffect(() => {
    setIsBtnEnable(!nickname);
  }, [nickname]);
  return (
    <>
      <h2>닉네임</h2>
      <Input
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <Link to="/signin" css={linkstyle}>
        <Button disabled={isBtnEnable} onClick={() => handleSignupStep()}>
          회원가입 하기
        </Button>
      </Link>
    </>
  );
};

export default SignUpName;
