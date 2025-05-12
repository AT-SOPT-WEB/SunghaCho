import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";
import type { SignUpNameProps } from "@/types/props/auth";

const SignUpName = ({
  nickname,
  setNickname,
  handleSignupStep,
}: SignUpNameProps) => {
  const [isBtnEnable, setIsBtnEnable] = useState<boolean>(false);

  useEffect(() => {
    setIsBtnEnable(!nickname);
  }, [nickname]);

  return (
    <>
      <h2>닉네임</h2>
      <Input
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNickname(e.target.value)
        }
      />
      <Button disabled={isBtnEnable} onClick={handleSignupStep}>
        회원가입 하기
      </Button>
    </>
  );
};

export default SignUpName;
