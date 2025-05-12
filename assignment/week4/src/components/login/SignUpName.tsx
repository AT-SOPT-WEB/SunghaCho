import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";
import Subtitle from "../styled/Subtitle";
import type { SignUpNameProps } from "@/types/props/auth";

const SignUpName = ({
  nickname,
  setNickname,
  handleSignupStep,
}: SignUpNameProps) => {
  const [isBtnDisable, setIsBtnDisable] = useState<boolean>(true);

  useEffect(() => {
    setIsBtnDisable(!nickname);
  }, [nickname]);

  return (
    <>
      <Subtitle>닉네임</Subtitle>
      <Input
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNickname(e.target.value)
        }
      />
      <Button disabled={isBtnDisable} onClick={handleSignupStep}>
        회원가입 하기
      </Button>
    </>
  );
};

export default SignUpName;
